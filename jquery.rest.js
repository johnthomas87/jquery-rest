;(function ($) {

var

	_undefined,

	_slice = Array.prototype.slice,
	_partial = function (fn) {
		var args = _slice.call(arguments, 1);
		return function () {
			return fn.apply(this, args.concat(_slice.call(arguments)));
		};
	},

	verbs = {
		"GET"    : [ "get"  , "read"   ],
		"POST"   : [ "post" , "create" ],
		"PUT"    : [ "put"  , "update" ],
		"DELETE" : [ "del"  , "delete" ]
	},

	$rest = $.rest = function (url, ext, jsonp) {
		if (this instanceof $rest) {
			this.url_   = url;
			this.ext_   = ext || "";
			this.jsonp_ = jsonp ? "jsonp" : false;
		}
	},

	$restProto = $rest.prototype,

	$ajax = function (type, url, data, success, dataType) {
		if (typeof data == "function") {
			dataType = dataType || success;
			success = data;
			data = null;
		}

		return $.ajax({
			url:      url,
			type:     type,
			dataType: dataType,
			success:  success,
			data:     data
		});
	},

	_ajax = function (type, url, data, success, dataType) {
		return $ajax(type, this.url_ + url, data, success, this.jsonp_ || dataType);
	};

	for (var key in verbs) {
		if (verbs.hasOwnProperty(key)) {
			var val = verbs[key], v0 = val[0], v1 = val[1];
			$rest[v0]      = $rest[v1]      = _partial($ajax, key);
			$restProto[v0] = $restProto[v1] = _partial(_ajax, key);
		}
	}

}(jQuery));
