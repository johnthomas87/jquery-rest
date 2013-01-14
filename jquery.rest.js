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
		"GET"    : "get",
		"POST"   : "post",
		"PUT"    : "put",
		"DELETE" : "del"
	},

	$rest = $.rest = function (url, options, jsonp) {
		if (this instanceof $rest) {
			this.url_       = url;
			this.options_   = options || {};
		}
	},

	$restProto = $rest.prototype,

	$ajax = function (type, url, options) {
		
    options.type = type;
    options.url = url;

		return $.ajax(options);
	},

	_ajax = function (type, url, options) {
		return $ajax(type, this.url_ + url, options);
	};

	for (var key in verbs) {
		if (verbs.hasOwnProperty(key)) {
			var val = verbs[key];
			$rest[val]      = _partial($ajax, key);
			$restProto[val] = _partial(_ajax, key);
		}
	}

}(jQuery));
