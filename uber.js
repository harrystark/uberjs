var request = require('request')



var client_id ;
var client_secret ; 
var server_token  ;
var access_token ;

 function uber (uber_obj){
    
 client_id = uber_obj.client_id ;
 client_secret = uber_obj.client_secret ;
 server_token  =  uber_obj.server_token ;

    
    
}
module.exports = uber

// RIDE PRODUCTS..............................................................

var getproducts = module.exports.getproducts = function (lat, lnt, callback) {



    var json_res = "sdsdsfsf";
    var base_url = 'https://api.uber.com/v1.2/products?'

    var header = {

        "Authorization": "Token " + server_token,
        "Accept-Language": "en_US",
        "Content-Type": "application/json"
    }

    var payload = {

        "latitude": lat,
        "longitude": lnt
    }

    var url = base_url + "latitude=" + payload.latitude + "&longitude=" + payload.longitude;



    request.get(url, {
        form: payload,
        headers: header
    }, function (err, response, body) {
        if (err) {
            throw err;
        }

        json_res = body;

        return (callback(body))
    })



}

var getproductDetails = module.exports.getproductdetails = function (productid, callback) {
    var base_url = 'https://api.uber.com/v1.2/products/'
    var header = {

        "Authorization": "Token " + server_token,
        "Accept-Language": "en_US",
        "Content-Type": "application/json"
    }

    var payload = {}

    var url = base_url + productid;

    request.get(url, {
        form: payload,
        headers: header
    }, function (err, response, body) {
        if (err) {
            throw err;
        }

        json_res = body;

        return (callback(body))
    })


}


// RIDE PRODUCTS..............................................................



// RIDERS.....................................................................

var getme = module.exports.getme = function (callback) {

    var url = "https://api.uber.com/v1.2/me"
    var header = {

        "Authorization": "Bearer " + access_token,
        "Accept-Language": "en_US",
        "Content-Type": "application/json"
    }
    var payload = {}

    request.get(url, {
        form: payload,
        headers: header
    }, function (err, response, body) {
        if (err) {
            throw err;
        }

        json_res = body;

        return (callback(body))
    })

}

var getpromo = module.exports.getpromo = function (promocode, callback) {

    var url = "https://api.uber.com/v1.2/me"

    var payload = {}

    var options = {
        method: 'PATCH',
        url: "https://api.uber.com/v1.2/me",
        headers: {
            "Authorization": "Bearer " + access_token,
            "Accept-Language": "en_US",
            "Content-Type": "application/json"

        },
        payload: {
            "applied_promotion_codes": promocode
        },


        json: true
    }

    request(options, function (err, response, body) {
        if (err) {
            throw err;
        }

        json_res = body;

        return (callback(body))
    })

}


var gethistory = module.exports.gethistory = function (callback) {

    var url = "https://api.uber.com/v1.2/history"

    var header = {

        "Authorization": "Bearer " + access_token,
        "Accept-Language": "en_US",
        "Content-Type": "application/json"
    }
    var payload = {}

    request.get(url, {
        form: payload,
        headers: header
    }, function (err, response, body) {
        if (err) {
            throw err;
        }

        json_res = body;

        return (callback(body))
    })


}

var getpaymentmethods = module.exports.getpaymentmethods = function (callback) {

    var url = 'https://api.uber.com/v1.2/payment-methods'

    var header = {

        "Authorization": "Bearer " + access_token,
        "Accept-Language": "en_US",
        "Content-Type": "application/json"
    }
    var payload = {}

    request.get(url, {
        form: payload,
        headers: header
    }, function (err, response, body) {
        if (err) {
            throw err;
        }

        json_res = body;

        return (callback(body))
    })


}


var getplaces = module.exports.getplaces = function (placeid, callback) {

    var url = 'https://api.uber.com/v1.2/places/' + placeid

    var header = {

        "Authorization": "Bearer " + access_token,
        "Accept-Language": "en_US",
        "Content-Type": "application/json"
    }
    var payload = {}

    request.get(url, {
        form: payload,
        headers: header
    }, function (err, response, body) {
        if (err) {
            throw err;
        }

        json_res = body;

        return (callback(body))
    })


}




// RIDERS.....................................................................









//Estimates....................................................................

var getestimate_prices = module.exports.getestimate_prices = function (slat, slng, elat, elng, callback) {




    var base_url = 'https://api.uber.com/v1.2/estimates/price?'

    var header = {

        "Authorization": "Token " + server_token,
        "Accept-Language": "en_US",
        "Content-Type": "application/json"
    }

    var payload = {}


    var url = base_url + "start_latitude=" + slat + "&start_longitude=" + slng + "&end_latitude=" +
        elat + "&end_longitude=" + elng;



    request.get(url, {
        form: payload,
        headers: header
    }, function (err, response, body) {
        if (err) {
            throw err;
        }

        json_res = body;

        return (callback(body))
    })



}



var getestimate_time = module.exports.getestimate_time = function (lat, lng, callback) {




    var base_url = 'https://api.uber.com/v1.2/estimates/time?'

    var header = {

        "Authorization": "Token " + server_token,
        "Accept-Language": "en_US",
        "Content-Type": "application/json"
    }

    var payload = {

        "latitude": lat,
        "longitude": lng
    }

    var url = base_url + "start_latitude=" + lat + "&start_longitude=" + lng;



    request.get(url, {
        form: payload,
        headers: header
    }, function (err, response, body) {
        if (err) {
            throw err;
        }

        json_res = body;

        return (callback(body))
    })



}




//Estimates....................................................................
// Ride Requests .............................................................
var post_request_estimates = module.exports.product_request_estimates = function (slat, slng, elat, elng, callback) {

    var options = {
        method: 'POST',

        url: 'https://api.uber.com/v1.2/requests/estimate',

        headers: {

            "Authorization": "Bearer " + access_token,
            "Accept-Language": "en_US",
            "Content-Type": "application/json"

        },

        payload: {

            "start_latitude": slat,
            "start_longitude": slng,
            "end_latitude": elat,
            "end_longitude": elng
        },

        json: true
    }
    
    
    request(options , function(err , response , body){
        if(err){
            throw err ;
        }
        else {
           return(callback(body)) 
        }
        
    })


}

//....needs to be fixed
var post_request= module.exports.post_request = function (fare_id ,slat, slng, elat, elng, callback) {

    var options = {
        method: 'POST',

        url: 'https://api.uber.com/v1.2/requests/',

        headers: {

            "Authorization": "Bearer " + access_token,
            "Accept-Language": "en_US",
            "Content-Type": "application/json"

        },

        payload: {

            "start_latitude": slat,
            "start_longitude": slng,
            "end_latitude": elat,
            "end_longitude": elng ,
            "fare_id" : fare_id ,
           
        },

        json: true
    }
    
    
    request(options , function(err , response , body){
        if(err){
            throw err ;
        }
        else {
           return(callback(body)) 
        }
        
    })


}





var get_request_current = module.exports.get_request_current = function ( callback) {

    var options = {
        method: 'GET',

        url: 'https://api.uber.com/v1.2/requests/current',

        headers: {

            "Authorization": "Bearer " + access_token,
            "Accept-Language": "en_US",
            "Content-Type": "application/json"

        },

        payload: {
        },

        json: true
    }
    
    
    request(options , function(err , response , body){
        if(err){
            throw err ;
        }
        else {
           return(callback(body)) 
        }
        
    })


}



var patch_request_current = module.exports.patch_request_current = function ( callback) {

    var options = {
        method: 'PATCH',

        url: 'https://api.uber.com/v1.2/requests/current',

        headers: {

            "Authorization": "Bearer " + access_token,
            "Accept-Language": "en_US",
            "Content-Type": "application/json"

        },

        payload: {
        },

        json: true
    }
    
    
    request(options , function(err , response , body){
        if(err){
            throw err ;
        }
        else {
           return(callback(body)) 
        }
        
    })


}


var delete_request_current = module.exports.delete_request_current = function ( callback) {

    var options = {
        method: 'DELETE',

        url: 'https://api.uber.com/v1.2/requests/current',

        headers: {

            "Authorization": "Bearer " + access_token,
            "Accept-Language": "en_US",
            "Content-Type": "application/json"

        },

        payload: {
        },

        json: true
    }
    
    
    request(options , function(err , response , body){
        if(err){
            throw err ;
        }
        else {
           return(callback(body)) 
        }
        
    })


}



var get_requests_ = module.exports.get_requests = function ( callback) {

    var options = {
        method: 'GET',

        url: 'https://api.uber.com/v1.2/requests/current',

        headers: {

            "Authorization": "Bearer " + access_token,
            "Accept-Language": "en_US",
            "Content-Type": "application/json"

        },

        payload: {
        },

        json: true
    }
    
    
    request(options , function(err , response , body){
        if(err){
            throw err ;
        }
        else {
           return(callback(body)) 
        }
        
    })


}



var patch_requests = module.exports.patch_requests = function ( callback) {

    var options = {
        method: 'PATCH',

        url: 'https://api.uber.com/v1.2/requests/current',

        headers: {

            "Authorization": "Bearer " + access_token,
            "Accept-Language": "en_US",
            "Content-Type": "application/json"

        },

        payload: {
        },

        json: true
    }
    
    
    request(options , function(err , response , body){
        if(err){
            throw err ;
        }
        else {
           return(callback(body)) 
        }
        
    })


}



var delete_requests = module.exports.delete_requests = function ( callback) {

    var options = {
        method: 'DELETE',

        url: 'https://api.uber.com/v1.2/requests/current',

        headers: {

            "Authorization": "Bearer " + access_token,
            "Accept-Language": "en_US",
            "Content-Type": "application/json"

        },

        payload: {
        },

        json: true
    }
    
    
    request(options , function(err , response , body){
        if(err){
            throw err ;
        }
        else {
           return(callback(body)) 
        }
        
    })


}





var get_ride_details = module.exports.get_ride_details = function (request_id , callback) {

    var options = {
        method: 'GET',

        url: 'https://api.uber.com/v1.2/requests/'+request_id,
       
        headers: {

            "Authorization": "Bearer " + access_token,
            "Accept-Language": "en_US",
            "Content-Type": "application/json"

        },

        payload: {
        },

        json: true
    }
    
    
    request(options , function(err , response , body){
        if(err){
            throw err ;
        }
        else {
           return(callback(body)) 
        }
        
    })


}

var patch_ride_details = module.exports.patch_ride_details = function (request_id , callback) {

    var options = {
        method: 'PATCH',

        url: 'https://api.uber.com/v1.2/requests/'+request_id,
       
        headers: {

            "Authorization": "Bearer " + access_token,
            "Accept-Language": "en_US",
            "Content-Type": "application/json"

        },

        payload: {
        },

        json: true
    }
    
    
    request(options , function(err , response , body){
        if(err){
            throw err ;
        }
        else {
           return(callback(body)) 
        }
        
    })


}




var delete_ride = module.exports.delete_ride= function (request_id , callback) {

    var options = {
        method: 'DELETE',

        url: 'https://api.uber.com/v1.2/requests/'+request_id,
       
        headers: {

            "Authorization": "Bearer " + access_token,
            "Accept-Language": "en_US",
            "Content-Type": "application/json"

        },

        payload: {
        },

        json: true
    }
    
    
    request(options , function(err , response , body){
        if(err){
            throw err ;
        }
        else {
           return(callback(body)) 
        }
        
    })


}

var get_request_map = module.exports.get_request_map = function (request_id , callback) {

    var options = {
        method: 'GET',

        url: 'https://api.uber.com/v1.2/requests/'+request_id+'/map',
       
        headers: {

            "Authorization": "Bearer " + access_token,
            "Accept-Language": "en_US",
            "Content-Type": "application/json"

        },

        payload: {
        },

        json: true
    }
    
    
    request(options , function(err , response , body){
        if(err){
            throw err ;
        }
        else {
           return(callback(body)) 
        }
        
    })


}

var get_request_receipt = module.exports.get_request_receipt = function (request_id , callback) {

    var options = {
        method: 'GET',

        url: 'https://api.uber.com/v1.2/requests/'+request_id+'/receipt',
       
        headers: {

            "Authorization": "Bearer " + access_token,
            "Accept-Language": "en_US",
            "Content-Type": "application/json"

        },

        payload: {
        },

        json: true
    }
    
    
    request(options , function(err , response , body){
        if(err){
            throw err ;
        }
        else {
           return(callback(body)) 
        }
        
    })


}


// Ride Requests .............................................................
