const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.static("public"));

app.get("/simple",(req,res) => {
    const {a,b,c} = req.query;
    const p = parseInt(a);
    const t = parseInt(b);
    const r = parseInt(c);

    const si = (p * t * r)/100;
    res.json({result : si});
});

app.listen(8000, () =>{
    console.log("listening to port 8000")
})