
import express from "express"

const app = express();

app.use(express.json());

const port = 80;

app.get("/", (req, res) =>{
    res.send("Olaaaa")
});


app.listen(port, ()=>{
    console.log("Parabenss");
})

