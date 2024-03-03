const express = require('express');

const app = express();

const users = [
    { id: 1, name: 'Yahya lwa3er' },
    { id: 2, name: 'Jonas' },
    { id: 3, name: 'Zenitsu' },
    { id: 4, name:'Zakaria'},
    { id: 5,name: 'nisrine'}
];

app.get('/', (req, res) => {
    res.send('All working good motherfucker');
});
// fast test
app.get('/api/users', (req, res) => {
    res.json(users);
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
