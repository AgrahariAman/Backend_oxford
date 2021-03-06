/*Oxford Dictionary API */
const express = require("express");
const axios = require("axios");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded())

const instance = axios.create({
  baseURL: 'https://od-api.oxforddictionaries.com',
  headers: {
    'Accept': 'application/json',
    'app_id': process.env.	4d8226f0,
    'app_key': process.env.8040ecbaba0d0d50d745dc0c319d79b3
  }
});

app.get('/', function (req, res) {
  res.sendFile('views/index.html', { root: __dirname });
});

app.post('/search', (req, res) => {
  const lang = 'en-us';
  const input = req.body.oxford;
  try {
    instance.get(`/api/v2/entries/${lang}/${input}`)
      .then(result => {
        const data = {
          "definition": result.data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0],
          "phrases": result.data.results[0].lexicalEntries[0].phrases[0].text
        }
        res.status(200).send(data)
      })
      .catch(err => res.send(err));
  }
  catch (err) {
    console.error(err);
  }
});

const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
