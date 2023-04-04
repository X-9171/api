//HIGHLIGHT.JS
hljs = require('highlight.js');
html = hljs.highlightAuto('<h1>Hello World!</h1>').value

//SETUP
const app = require('express')();
const PORT = 8080;

//CONSOLE
app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)
//API REQUESTS
app.get('/:id', (req, res) => {
    const { id } = req.params;
    let out = parseInt(`${id}`, 2);
    
    res.status(200).send({
        number: `${out}`,
        unicode: String.fromCharCode(out),

    })
});
app.get('', (req, res) => {
    
    res.status(200).send({
        status: '200 OK',
        version: 'v1.23.4.1'
    })
});

