/*

# jQuery.rest API

*/

var twttr = new $.rest("http://api.twitter.com/1");

// GET http://api.twitter.com/1/statuses/show/20.json
twttr.get("/statuses/show/20.json").(function(data){});

// DELETE http://api.twitter.com/1/statuses/destroy/20.json
twttr.del("/statuses/destroy/20.json");

// POST http://api.twitter.com/1/statuses/update.json
// status=%40ev%20Come%20here%2e%20I%20need%20you%2e
twttr.post("/statuses/update.json", { data: {status: "@ev Come here. I need you."}});