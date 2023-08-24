const express = require("express");
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const app = express();
const PORT = 4000;
const MONGO_URL = "mongodb://127.0.0.1:27017";
app.use(express.json());
let db;

app.get("/location", function (req, res) {

    let query = {};
    let stateid = Number(req.query.state_id);
    let mealid = Number(req.query.mealid);
    if (stateid) {
        query = { stateid: state_id };
    }
    db.collection("location").find()
        .toArray((err, result) => {
            if (err) throw error;
            res.send(result);
        });

});



//mongodb connection

MongoClient.connect(MONGO_URL, (err, client) => {
    console.log("mongodb is connected");
    if (err) console.log("err while connecting");
    db = client.db("practise");
    app.listen(PORT, () => console.log("mongo is connected on the port", PORT));
});