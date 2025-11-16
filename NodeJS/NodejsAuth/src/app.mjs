import express from 'express';
import bcrypt from 'bcrypt';
import session, { MemoryStore } from 'express-session';

const app = express();

app.use(express.json());
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    name: 'ps-demo',
    //store: MemoryStore,
    cookie: {
        secure: true,
        httpOnly: true,
        maxAge: 60000
    }
}));

const users = [];

function findUserByUsername(username){
    let user;
    users.forEach((_user) => {
        if(_user.username == username){
            user = _user;
        }
    });
    return user;
}

app.post('/register', async (request, response)=>{
    const username = request.body.username;
    const password = request.body.password;

    if(!username || !password){
        return response.status(400).send('Username and password are required');
    }

    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        users.push({ username: username, password: hashedPassword });
        response.status(201).send(`Registered user ${username}`);
    }catch(error){
        response.status(500).send(`Error registering ${username}`);
    }
});

app.post('/login', async (request, response)=>{
    const username = request.body.username;
    const password = request.body.password;

    if(!username || !password){
        return response.status(400).send(`Username and password are required`);
    }

    const user = findUserByUsername(username);

    if(!user){
        return response.status(401).send(`Couldn't find user`);
    }

    try{
        const password_match = await bcrypt.compare(password, user.password);

        if(password_match){
            request.session.regenerate(error => {
                if(error){
                    return response.status(500).send(`Error regenerating session`);
                }
                request.session.user = {username: user.username};
                response.status(200).send(`Logged in`);
            });
        }else{
            response.status(401).send(`Password incorrect`);
        }
    }catch(error){
        response.status(500).send(`Error logging in`);
    }
});

app.get('/session-store', (request, response)=>{
    request.sessionStore.all((error, sessions)=>{
        response.json(sessions);
    });
});

app.get('/logout', (request, response)=>{
    request.session.destroy(error => { // deletes session on server side
        if(error){
            response.status(500).send(`error destroying session ${error}`);
        }else{
            response.clearCookie('connect.sid', {path:'/'}); // deletes cookie on client side when response arrives
            response.status(200).send(`user logged out, session destroyed`);
        }
    });
});

const authenticateSession = (request, response, next) => {
    if(request.session.user){
        next();
    }else{
        response.status(401).send(`Unauthorized - not logged in`);
    }
}

app.get('/protected', authenticateSession, (request, response)=>{
    response.status(200).send(`Response from the protected route!`);
});

app.listen(3000);