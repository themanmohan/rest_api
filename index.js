require(`dotenv`).config()
const express =require(`express`)
const dotenv=require(`dotenv`)
const mongoose=require(`mongoose`)
const app=express()


mongoose.connect('mongodb://localhost:27017/rest_api',{useNewUrlParser:true})
.then((data) => console.log(` DB Connected`))
.catch((err) => {
    console.log(`DB Not Connected`);
    console.log(err);
});

app.listen(process.env.PORT,()=>{
    console.log(`Working at ${process.env.PORT}`)
})