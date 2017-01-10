'use strict';
import * as Services from '../services';

exports.init = function (app, router) {
  router.get('/healthcheck', (request, response) => {
    sendResponse(200, 'ok', response);
  });

  router.get('/delay', (request, response) => {
    setTimeout(()=>{
          sendResponse(200, 'response after 1000ms delay', response);
    },1000);

  });
  
  router.get('/factorial/:n', (request, response) => {
    sendResponse(200,Math.round(Services.factorial(parseInt(request.params.n))),response);
    
  });


  var sendResponse = function (status, message, response) {
    response.status(status).send({
      data: message
    });
  };
};