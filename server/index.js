const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const detailModel = require('./details')
const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/details");
app.post('/register', (req, res) => {
    console.log("Received data:", req.body); // Debugging log

    detailModel.create(req.body)
    .then(detail => res.json(detail))
    .catch(err => res.json(err));
});

app.post('/login', (req, res) => {
    const { name, password } = req.body;
    
    detailModel.findOne({ name: name })
    .then(user => {
        if (user) {
            if (user.password === password) {
                res.json({ message: "Success", role: user.role }); // Send role back
            } else {
                res.json({ message: "Incorrect Password" });
            }
        } else {
            res.json({ message: "No record existed" });
        }
    })
    .catch(err => res.json({ message: "Error", error: err }));
});


app.listen(3001,()=>{
    console.log("server is running")
});
