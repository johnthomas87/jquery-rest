    # jQuery.rest API in 10 seconds or less:

    # $.rest.get,  $.rest.prototype.get
    # $.rest.post, $.rest.prototype.post
    # $.rest.put,  $.rest.prototype.put
    # $.rest.del,  $.rest.prototype.del


    var twttr = new $.rest("http://api.twitter.com/1");

    // GET http://api.twitter.com/1/statuses/show/20.json
    $.rest.get("http://api.twitter.com/1/statuses/show/20.json", function (data) { });
    twttr.get("/statuses/show/20.json", function (data) { });

    // DELETE http://api.twitter.com/1/statuses/destroy/20.json
    $.rest.del("http://api.twitter.com/1/statuses/destroy/20.json", function (data) { });
    twttr.del("/statuses/destroy/20.json");

    // POST http://api.twitter.com/1/statuses/update.json
    // status=%40ev%20Come%20here%2e%20I%20need%20you%2e
    var status = {status: "@ev Come here. I need you."};
    $.rest.post("http://api.twitter.com/1/statuses/update.json", status);
    twttr.post("/statuses/update.json", status);