const bodyParser = require('body-parser');
const express = require('express');
const exphbs = require('express-handlebars')

const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const app = express();
const jsonParser = bodyParser.json();

const hbs = exphbs.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

let db = null;
let links = null;
let projects = null;
async function main() {
  const MONGO_URL = 'mongodb://user1:mlab123@ds231307.mlab.com:31307/heroku_5v04f2cv'
  // The "process.env.MONGODB_URI" is needed to work with Heroku.
  db = await MongoClient.connect(process.env.MONGODB_URI || MONGO_URL);
  links = db.collection('menu');
  projects = db.collection('projects');

  await app.listen(process.env.PORT || 3000);
  console.log('Server listening on port 3000!');
};

main();

////////////////////////////////////////////////////////////////////////////////

async function createProj(req, res) {
  // Promise version of insertOne.
  const doc = {
    title: req.body.title,
    img: req.body.img,
    duration: req.body.duration,
    tools: req.body.tools,
    challenges: req.body.challenges,
    output: req.body.output,
    target: req.body.target
  };
  const result = await projects.insertOne(doc);
  console.log(`Document id: ${result.insertedId}`);
  res.json({ id: result.insertedId });
}
app.post('/newproj', jsonParser, createProj);

////////////////////////////////////////////////////////////////////////////////

async function selectLink(req, res) {
  const result = await links.find({}).toArray();
  console.log(result);
  res.json(result);
}
app.get('/link', selectLink);

async function selectProj(req, res) {
  const result = await projects.find({}).toArray();
  console.log(result);
  res.json(result);
}
app.get('/project', selectProj);





