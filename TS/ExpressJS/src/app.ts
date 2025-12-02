import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response)=>{
    return res.json({
        success: true,
        name: 'TomDoesTech'
    });
});

app.get('/health', (req: Request, res: Response) => {
    return res.sendStatus(200);
});

app.get("/ab*cd", (req: Request, res: Response) => {
    return res.send("/ab*cd");
});

app.get(/abc/, (req: Request, res: Response) => {
    return res.send("abc");
});

app.get('/theRedirect', (req: Request, res: Response) => {
    return res.redirect('http://localhost:3000/');
});

app.route('/chain')
.get((req: Request, res: Response) => {
    return res.send('You make a GET request');
})
.post((req: Request, res: Response) => {
    return res.send("You make a POST request");
})
.put((req: Request, res: Response) => {
    return res.send("You make a PUT request");
})
.all((req: Request, res: Response) => {
    return res.send("You made an X request");
});

app.post('/api/data', (req: Request, res: Response) => {
    console.log(req.body);
    return res.sendStatus(200);
});

app.all('/api/all', (req: Request, res: Response) => {
    return res.sendStatus(200);
});

app.get('/api/books/:bookId', (req: Request, res: Response) => {
    console.log(req.params);
    return res.send(req.params);
});

app.get('/api/books/:bookId/:authorId', (req: Request, res: Response) => {
    console.log(req.params);
    return res.send(req.params);
});

app.listen(3000, () => {
    console.log('Application listening at http://localhost:3000');
});