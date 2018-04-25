'use strict';

var app = app || {};

(function(module) {

  const booksView = {};

  function show(section) {
    $('section').not(`#${section}`).hide();
    $(`#${section}`).show();
  }

  booksView.initIndexPage = function(ctx) {
    console.log("index");
    $('#items ul').empty();
    show('items');
    app.Book.all.forEach(book =>
      $('#items ul').append(book.toHtml())
    );
  }

  booksView.initAddPage = function(ctx) {
    console.log('add');
    show('add');
  }

  booksView.initBookPage = function(ctx) {
    console.log('view book', ctx.params.id);
    $('#book').empty();
    show('book');
    app.Book.all.forEach(book => {
      if ( parseInt(book.book_id) === parseInt(ctx.params.id) ) {
        $('#book').append(book.detailToHtml());
      }
    });

  }

  $('#add form').on('submit', createNewBook);
  function createNewBook(e) {
    e.preventDefault();
    console.log(e.target.title.value);
    let book = { 
      title: e.target.title.value, 
      author: e.target.author.value, 
      isbn: e.target.isbn.value, 
      image_url: e.target.image_url.value, 
      description: e.target.description.value 
    };
    $.post(`${ENV.apiUrl}/api/v1/books`, book)
     .then(app.Book.fetchAll(booksView.initIndexPage))
     .catch(console.error);
  }

  module.booksView = booksView;


})(app);
