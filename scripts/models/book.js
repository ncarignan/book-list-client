'use strict';

var app = {};

const ENV = {};

ENV.isProduction = window.location.protocol === 'https:';
ENV.productionAPIUrl = 'https://bh-mb-booklist.herokuapp.com/';
ENV.developmentApiUrl = 'http://localhost:3000';
ENV.apiUrl = ENV.isProduction ? ENV.productionAPIUrl : ENV.developmentApiUrl;


(function (module) {

  function Book(obj) {
    Object.assign(this, obj);
  }

  Book.all = [];

  Book.prototype.toHtml = function () {
    let template = Handlebars.compile($('#book-template').text());
    return template(this);

  };

  Book.prototype.detailToHtml = function () {
    let template = Handlebars.compile($('#book-detail-template').text());
    return template(this);
  };

  Book.loadAll = rows => {
    Book.all = rows.map(book => new Book(book));
    console.log(Book.all);
  };

  // callback is going to be: app.booksView.initIndexPage
  Book.fetchAll = callback => {
    $.get(`${ENV.apiUrl}/api/v1/books`)
      .then(Book.loadAll)
      .then(callback)
      .catch(errorCallback);
  };

  Book.add = book => {
    $.post(`${ENV.apiUrl}/books/add`, book)
      .then(() => page('/'))
      .catch(errorCallback);
  };

  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  module.Book = Book;

})(app);