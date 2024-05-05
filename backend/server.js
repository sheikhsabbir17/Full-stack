import express from 'express';

const app = express();

app.get('/',(req,res) => {
    res.send('Server is ready');
});

// getba list of 5 jokes

app.get('/jokes',(req,res) =>{
    const jokes = [
        {
            id: 1,
            tittle: 'Ajoke',
            content:'This is a joke '
        },
        {
            id:2,
            tittle: 'Another joke',
            content:'This is another joke'
        },
        {
            id:3,
            tittle: 'A third joke',
            content:'This is a third joke'
        },
        {
            id:4,
            tittle: 'A fourth joke',
            content:'This is a fourth joke'
        },
        {
            id:5,
            tittle: 'A fifth joke',
            content:'This is a fifth joke'
        },
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port,() =>{
    console.log(`Server at http://localhost:${port}`);
});