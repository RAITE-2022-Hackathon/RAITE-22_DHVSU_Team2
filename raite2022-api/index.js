const express = require("express")
const sequelize = require("sequelize")
const cors = require("cors")
const app = express()


app.use(cors({credentials:true}))
app.use(express.json());

const PORT = process.env.PORT || 5000;

//routes
const user = require("./src/routes/user/user");
const coin = require("./src/routes/coin/coin");
const post = require("./src/routes/post/post");

app.use("/api/user", user);
app.use("/api/coin", coin);
app.use("/api/post", post);



app.listen(PORT, ()=>{
    console.log(`Server started on PORT: ${PORT}` )
})