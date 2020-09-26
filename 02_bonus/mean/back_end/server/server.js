const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const DB_URI = "mongodb://db:27017/legendaryquotes";  

const schema = new mongoose.Schema({
	quote: String,
	character: String
})

const Quote = mongoose.model('Quote', schema);

app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

mongoose.connect(DB_URI, { useNewUrlParser: true }).then(() => {
	app.listen(port, () => console.log(`Weather app listening on port ${port}!`)); 
});

const quote1 = new Quote({ quote: 'It happens so quickly', character: 'Jack Bauer'});
	quote1.save().then(response => {
		console.log('note saved!')
});
const quote2 = new Quote({ quote: 'They said that MongoDB was fun. They lied.', character: 'One who shall not be named'});
	quote2.save().then(response => {
		console.log('note saved!')
});
const quote3 = new Quote({ quote: 'Get to the choppa!!', character: 'Arnold Schwartzernegger'});
	quote3.save().then(response => {
		console.log('note saved!')
});
const quote4 = new Quote({ quote: 'askmdmasmdasdsaasd', character: '?'});
	quote4.save().then(response => {
		console.log('note saved!')
});
const quote5 = new Quote({ quote: 'Hello World!', character: 'All the online guides you have seen' });
	quote5.save().then(response => {
		console.log('note saved!')
});

app.get('/quote', (req, res) => {
	Quote.find()
		.then((quotes) => res.status(200).send(quotes)
		.catch((err) => res.status(400).send(err)));
});
