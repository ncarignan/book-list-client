

page( '/', () => app.Book.fetchAll(app.booksView.initIndexPage) );
page( '/book/:id',  ctx => app.booksView.initBookPage(ctx) );
page( '/add', ctx => app.booksView.initAddPage(ctx) );

page();
