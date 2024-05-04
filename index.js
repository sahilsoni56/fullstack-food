const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const cors = require("cors");
let database;


const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET, POST, OPTIONS',
  allowedHeaders: 'Content-Type',
};

app.use(cors(corsOptions));
app.use(express.json())


const connection = async () => {
  try {
    const client = await mongoose.connect("mongodb://localhost:27017/GoFood", { useNewUrlParser: true, useUnifiedTopology: true });
    database = client.connection;
    const fooditemscollection = database.collection('Food_items');
    const foodCategorycollection = database.collection('Food_category');
    global.fooditems = await fooditemscollection.find({}).toArray();
    global.foodcategory = await foodCategorycollection.find({}).toArray();
  } catch (error) {
    console.error('Error in connection:', error);
    process.exit(1);
  }
};

connection();


app.use("/api" , require("./routes/createuser"))
app.use("/api" , require("./routes/Displaydata"))
app.use("/api" , require("./routes/cartroute"))

app.get('/', async (req, res) => {
  res.send('hello');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
