const express = require("express")
const sequelize = require("sequelize")
const cors = require("cors")
const app = express()
const importModels = require('./src/models/initialize');
importModels()

app.use(cors({credentials:true}))
app.use(express.json());

const PORT = process.env.PORT || 5000;

//routes
const user = require("./src/routes/user/user");
const coin = require("./src/routes/coin/coin");
const post = require("./src/routes/post/post");
const comment = require("./src/routes/comment/comment");

app.use("/api/user", user);
app.use("/api/coin", coin);
app.use("/api/post", post);
app.use("/api/comment", comment);


app.listen(PORT, ()=>{
    console.log(`Server started on PORT: ${PORT}` )
})