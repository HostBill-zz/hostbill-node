(function () {
var request = require('request');


function HostBill(api_endpoint,api_id,api_key) {

	var self = this;

	self.url = api_endpoint;
	self.api_id = api_id;
	self.api_key = api_key;



	function get(fn,args,callback) {
		args = args?args:{};
		args["call"] = fn;
		args["api_id"] = self.api_id;
		args["api_key"] = self.api_key;
		request({
			'uri': self.url,
			'qs': args
		},function (error, response, body) {
			 if (!error && response.statusCode == 200) {
				var j = JSON.parse(body);				
   				callback(j);
  			} else {
				callback({error:error?error:response.body});
			}
		});
	}

	self.api = function (fn,args,callback) {
		get(fn,args,callback);
	}

	
	
	
}


module.exports = HostBill;

}());
