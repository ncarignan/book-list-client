

page( '/book-list-client/', () => app.Book.fetchAll(app.booksView.initIndexPage) );
page( '/book-list-client/book/:id',  ctx => app.booksView.initBookPage(ctx) );
page( '/book-list-client/add', ctx => app.booksView.initAddPage(ctx) );

page();