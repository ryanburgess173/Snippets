import express from 'express';
import { join } from 'node:path';
import cookieParser from 'cookie-parser';
import { createLogger, format, transports } from 'winston';

const app = express();

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'app-express.log' })
    ]
});

const logAll = function(request, response, next) {
    logger.info(`URL being requested: ${request.url}`);
    next();
}

app.use(express.json()); // allows us to access request.body directly
app.use(cookieParser());
app.use(express.static(join(process.cwd(), 'src', 'public')));
app.use(logAll);

const concert_date = {
    "concerts":[
        {
            'concert_id': 1,
            'concert_artist': 'The Lumineers',
            'concert_date': '10/15/2024',
            'concert_venue': 'Walnut Creek Ampitheatre',
            'concert_ticket_price': 50
        },
        {
            'concert_id': 2,
            'concert_artist': 'Ben Rector',
            'concert_date': '11/05/2024',
            'concert_venue': 'PNC Arena',
            'concert_ticket_price': 45
        },
        {
            'concert_id':3,
            'concert_artist': 'John Mayer',
            'concert_date': '12/01/2024',
            'concert_venue': 'Greensboro Coliseum',
            'concert_ticket_price': 65
        }
    ]
}

function findConcertById(concerts, id){
    for(let i=0; i<concerts.length; i++){
        const concert = concerts[i];
        if (concert.concert_id === id){
            return concert;
        }
    }
    return null;
}

app.set('view engine', 'ejs');
app.set('views', './src/public/views');

app.get('/concerts', (request, response)=>{
    try{
        response.status(200).render('concerts', {concerts: concert_date.concerts});
    }catch(error){
        console.log(error.stack);
        response.status(500).send(`Internal Server Error`);
    }
});

app.get('/concerts/:concert_id', (request, response)=>{
    try{
        console.log(request.params.concert_id);
        const concert_id = parseInt(request.params.concert_id);
        const concert_object = findConcertById(concert_date.concerts, concert_id);
        console.log(concert_object);
        response.status(200).render('concert', {concert_info: concert_object });
    }catch(error){
        response.status(500).send('Internal Server Error');
    }
});

const validateBody = function(request, response, next) {
    let concert_id = request.body.concert_id;
    let concert_artist = request.body.concert_artist;
    let concert_price = request.body.concert_price;
    let concert_currency = request.body.concert_currency;

    if(!concert_id || !concert_artist || !concert_price || !concert_currency){
        console.log(`Missing required field(s).`);
        return response.status(400).send(`Missing required field(s)`);
    }

    next(); // continues on with function that called this middleware
}

app.post('/save_to_cart', validateBody, (request, response) => {
    let concert_id = request.body.concert_id;
    let concert_artist = request.body.concert_artist;
    let concert_price = request.body.concert_price;
    let concert_currency = request.body.concert_currency;

    let cart;
    if(request.cookies.cart == undefined){
        cart = [];
    }else{
        cart = JSON.parse(request.cookies.cart);
    }
    cart.push({ concert_id, concert_artist, concert_price, concert_currency });

    response.cookie('cart', JSON.stringify(cart));
    response.status(200).send();
});

app.use((error, request, response, next) => {
    console.error(error.stack);
    response.status(500).send('Something went wrong!');
});

app.listen(3000);