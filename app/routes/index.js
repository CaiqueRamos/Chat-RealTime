module.exports = function(app){
    app.get('/chat', function(req, res){
        res.render('chat.ejs');
    })
}