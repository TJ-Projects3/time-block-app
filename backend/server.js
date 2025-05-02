import express from "express"

const app = express();

app.get("/", (req, res) => {
   res.send("Server is ready") 
})

app.listen(5000, (req, res) => {
    console.log("Server is online on port 5000")
});