mongoose.connect("mongodb://localhost/nyt-react")

db.on("error", function(err) {
	console.log("Mongoose error: " err);
});

db.once("open", function() {
	console.log("Mongoose connection successful.");
});

app.get("/api/saved" function(req, res) {

	Article.find({}, function(err, doc) {
		if (err){
			console.log(err);
		} else {
			res.send(doc)
		}
	});
});

app.post("/api/post" function(req, res) {

	var newArticle = new Article(req.body);

	newArticle.save(function(err, doc) {
		if(err) {
			console.log(err);
		} else {
			res.send(doc);
		}
	});
});

app.delete("/api/delete" function(req, res) {

});

app.get("*", function(req, res) {
	res.sendFile
})

app.listen(PORT, function(){
	console.log("The magic happens on port: " PORT)
}