// Adding comment for re-analysis
function foo1(a, b, a) {
    typeof a === undefined
    console.log('value of the second a:', a);
}

var bar = function (a, b, a) {
    console.log('value of the second a:', a);
};

var dbq = function (req, res) {
    const db = {};
    const r0 = db.query('SELECT * FROM products WHERE id = ' + req.query.id);
    const results = db.search(req.query.product);
    if(document){
        document.write("writing on document");
    }
    if (results.length === 0) {
      return res.send('<p>No results found for "' + req.query.product + '"</p>');
    }
}
