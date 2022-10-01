const express = require("express")
const sequelize = require("sequelize")
const cors = require("cors")
const app = express()


app.use(cors({credentials:true}))
app.use(express.json());

const PORT = process.env.PORT || 5000;

//routes
const user = require("./src/routes/user/user");
const product = require("./src/routes/product/product");

app.use("/api/user", user);
app.use("/api/product", product);



app.listen(PORT, ()=>{
    console.log(`Server started on PORT: ${PORT}` )
})