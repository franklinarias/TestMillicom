const paths = require('path')
const express = require('express');
const app = express();
const router = express.Router();
const https = require('https');
const { title } = require('process');
app.set('view engine', 'pug');
app.use('/css', express.static(paths.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(paths.join(__dirname, '/node_modules/bootstrap/dist/js')));
var comicsFunction = require('./comics');


///Variables Server
const path = __dirname + '/';
const port = 8080;

router.use(function (req,res,next) {
  console.log('/inicio' + req.method);
  next();
});


app.get('/home', async (req, res) => {
  var promesaLast = comicsFunction.comicLast()
  
    try {
        datosFetched = await promesaLast();
        comics = JSON.parse(datosFetched);
        url_img = comics.img;
        day = comics.day;
        month = comics.month;
        year = comics.year;
        fecha = day + "/" + month + "/" + year
        titles = comics.title;
        transcript = comics.transcript;
        alt = comics.alt;
        num = parseInt(comics.num);
        numLast = num;
        numActual = numLast;
        console.log("num", num);
        console.log("titulo", titles);
        console.log("url", transcript);
    
        res.render('index', { titles: titles, transcript: transcript, fecha: fecha, num: num, numLast: numLast,
                            url_img: url_img, alt: alt, }); 
    
  } catch (err) {
        console.log(err)
  }
    
});


app.get('/siguiente', async (req, res) => {

  
  if( numActual == numLast ){

        numActual = 1;
        noNum = numActual.toString();
        console.log("estoy aqui arriba", numActual)
   } else {
        numActual = parseInt(numActual) + 1;
        noNum = numActual.toString();
        console.log("estoy aqui", noNum);
   }
   var promesaNum = comicsFunction.comicNum(noNum);
  
  try {
      const datosFetchedNext = await promesaNum();
      comicsNext = JSON.parse(datosFetchedNext);
      url_img = comicsNext.img;
      day = comicsNext.day;
      month = comicsNext.month;
      year = comicsNext.year;
      fecha = day + "/" + month + "/" + year
      titles = comicsNext.title;
      transcript = comicsNext.transcript;
      num = parseInt(comicsNext.num);
      console.log("num", num);
      console.log("titulo", titles);
      console.log("url", transcript);
  
      res.render('index', { titles: titles, transcript: transcript, fecha: fecha, num: num, numLast: numLast,
                            url_img: url_img, alt: alt, }); 
    
  } catch (err) {
      console.log(err)
  } 
});

app.get('/anterior', async (req, res) => {

  
  if( numActual == 1 ){

        numActual = numLast;
        noNum = numActual.toString();
        
   } else {
        numActual = parseInt(numActual) - 1;
        noNum = numActual.toString();

   }
   var promesaNum = comicsFunction.comicNum(noNum);
  
  try {
      const datosFetchedNext = await promesaNum();
      comicsNext = JSON.parse(datosFetchedNext);
      url_img = comicsNext.img;
      day = comicsNext.day;
      month = comicsNext.month;
      year = comicsNext.year;
      fecha = day + "/" + month + "/" + year
      titles = comicsNext.title;
      transcript = comicsNext.transcript;
      num = parseInt(comicsNext.num);
      console.log("num", num);
      console.log("titulo", titles);
      console.log("url", transcript);
  
      res.render('index', { titles: titles, transcript: transcript, fecha: fecha, num: num, numLast: numLast,
                            url_img: url_img, alt: alt, }); 
    
  } catch (err) {
      console.log(err)
  } 
});


app.get('/inicio', async (req, res) => {

   var promesaNum = comicsFunction.comicNum("1");
  
  try {
      const datosFetchedNext = await promesaNum();
      comicsNext = JSON.parse(datosFetchedNext);
      url_img = comicsNext.img;
      day = comicsNext.day;
      month = comicsNext.month;
      year = comicsNext.year;
      fecha = day + "/" + month + "/" + year
      titles = comicsNext.title;
      transcript = comicsNext.transcript;
      num = parseInt(comicsNext.num);
      console.log("num", num);
      console.log("titulo", titles);
      console.log("url", transcript);
  
      res.render('index', { titles: titles, transcript: transcript, fecha: fecha, num: num, numLast: numLast,
                            url_img: url_img, alt: alt, }); 
    
  } catch (err) {
      console.log(err)
  } 
});


//inicio(comics.url_img)
app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
  console.log('Desplegado en http://localhost:8080');
})