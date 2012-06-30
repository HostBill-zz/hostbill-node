# HostBill API client in Node.JS

Just for fun, quick project to see how HostBill API will work from node.

## Install

<pre>
  npm install hostbill-node
</pre>
    

## Usage

```javascript
var HostBill = require('hostbill-node');

var hostbill_url = 'http://yourhostbill.com/admin/api.php'; //full url to api endpoint

//from HB:settings->security->api access :
var api_id = 'YOUR API ID'; 
var api_key = 'YOUR API KEY';

var hb = new HostBill(hostbill_url,api_id,api_key);

//http://api.hostbillapp.com/clients/getClients/
hb.api('getClients',{},function(obj) { 
	console.log(obj.clients) 
});


//passing parameters to api call:
//http://api.hostbillapp.com/invoices/getInvoiceDetails/
hb.api('getInvoiceDetails',{id:10}, function(obj) { 
	console.log(obj.invoice);
});


//error handling
hb.api('unknownMethod',{param:"value"},function(obj) { 
	//check if error occurred
	if(obj.error) {
		console.log(error);
	}

});
```


