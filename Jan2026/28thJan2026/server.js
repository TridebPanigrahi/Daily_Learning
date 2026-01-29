const express = require("express");

const app = express();

// Parsing Json

app.use(express.json());

//Routes

app.connect(()=>{
    
})

app.get("/", (req, res) => {
  res.end("Heelo");
});

//Connect server
let PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
