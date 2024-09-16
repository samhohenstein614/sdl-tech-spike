import express from 'express';

const app = new express();

app.use((req, res) => {
    res.status(200).send('Hello world!!');
});
// Start the server
app.listen(3000, () => {
    console.log("Listening on port 3000");
});