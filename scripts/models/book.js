'use strict';

// var app = {};

// const ENV = {};


// ENV.isProduction = window.location.protocol === 'https:';
// ENV.productionAPIUrl = 'https://git.heroku.com/bh-mb-booklist.git';
// ENV.developmentApiUrl = 'http://localhost:3000';
// ENV.apiUrl = ENV.isProduction ? ENV.productionAPIUrl : ENV.developmentApiUrl;

// bookData = [];

let getData = () => {
  $.get('/api/v1/tasks')
    .then(results => {
      let bookData = results;
      console.log(bookData);

    })
};

getData();