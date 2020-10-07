const express = require("express");
const app = express();
const network = require("./api/network");
const path = require("path");
const helmet=require('helmet')
const PORT= process.env.PORT || 3000

//Middlewares
app.use(helmet())
app.use((req,res,next)=>{
    res.removeHeader('Content-Security-Policy')
    res.set({"Cache-Control":"no-store"})
    next()
})
app.use(express.json());

//Routes
app.use("/", express.static(path.join(__dirname,'app')));
app.use("/link", network);
app.use("/ping", (req, res, next) => {
	res.send("pong");
});

//404 err
app.use((req,res)=>{
	res.redirect('/')
})

//Server init
const server = app.listen(PORT, () => {
	console.log(`Server escuchando en http://localhost:${server.address().port}`);
});
