import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import dotenv from 'dotenv';

dotenv.config();

const myAPI_KEY = process.env.KEY_API
const API_URL = process.env.URL_API

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

let result
app.get("/", (req,res)=>{
    res.render("index.ejs",{place:result})
})

app.post("/search", async (req,res)=>{
    const myPlace = req.body["location"]
    const placeAPI_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${myPlace}&limit=1&appid=${myAPI_KEY}`
    // console.log(placeAPI_URL)
    try{
        const response = await axios.get(placeAPI_URL)
        
        result = response.data
        const lattitunde = result[0].lat
        const longitude = result[0].lon 
        const geoURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lattitunde}&lon=${longitude}&appid=${myAPI_KEY}&units=metric`
        // console.log(geoURL)
        const placeWeather = await axios.get(geoURL)
        result = placeWeather.data
        // console.log(result)
        res.redirect("/")

    }catch(error){
        console.log("An Error Occured..")
        res.render("index.ejs")
    }
})

app.listen(port,(req,res)=>{
    console.log(`Server is running on port ${port}`)
})


