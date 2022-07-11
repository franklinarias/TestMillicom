const request = require('request');

  function comicNum(numero) {
    const url_req = "https://xkcd.com/" + numero + "/info.0.json"
    const getDatos = () => {
      return new Promise((resolve, reject) => {
        request(url_req, (error, response, body) => {
          if (error) {
            console.error(`Could not send request to API: ${error.message}`);
            return;
          }
          if (response.statusCode != 200) {
            console.error(`Expected status code 200 but received ${response.statusCode}.`);
            return;
          }
          resolve(body);
        });
      });
    }
    console.log(url_req)
    return getDatos
  }


  function comicLast() {
    const url_req = "https://xkcd.com/info.0.json"
    const getDatos = () => {
      return new Promise((resolve, reject) => {
        request(url_req, (error, response, body) => {
          if (error) {
            console.error(`Could not send request to API: ${error.message}`);
            return;
          }
          if (response.statusCode != 200) {
            console.error(`Expected status code 200 but received ${response.statusCode}.`);
            return;
          }
          resolve(body);
        });
      });
    }
    return getDatos
  }


module.exports.comicLast = comicLast;
module.exports.comicNum = comicNum;