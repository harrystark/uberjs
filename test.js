var uber = require("./uber.js")

var uber_client = new uber({

    client_id: "",

    client_secret: "",
    server_token: ""




})


uber.getproducts(37.7752315, -122.418075, function (res) {
   
    console.log(res)
    

});


uber.getproductdetails("93cf5da3-fa47-4e45-804e-ca7749b2d190", function (res) {
    
    console.log(res)
   

});
//
uber.getme(function (res) {

   
    console.log(res)
  

});

uber.getpromo("FREE_RIDEZ", function (res) {
   

   
    console.log(res)
   

});


uber.gethistory(function (res) {
   
    console.log(res)
    

});

uber.getpaymentmethods(function (res) {
   
    console.log(res)
   
})


uber.getplaces("work", function (res) {
   

   
    console.log(res)
   

});


uber.getestimate_prices (37.7752315,122.418075,37.7752415,-122.518075,  function(res){
    
    console.log(res)
})


uber_client.getestimate_time (18.989401, 73.117516,  function(res){
    
    console.log(res)
})

uber.product_request_estimates (37.7752315,122.418075,37.7752415,-122.518075,  function(res){
    
    console.log(res)
})


uber.post_request ("djfsdfj",37.7752315,122.418075,37.7752415,-122.518075,  function(res){
    
    console.log(res)
})

uber.get_request_current(function (res) {

    console.log(res)
})



uber.patch_request_current(function(res){
    
    console.log(res)
})


uber.delete_request_current(function(res){
    
    console.log(res)
})



uber.get_requests("hdsdasjdhj" ,function(res){
    
    console.log(res)
    
})


uber.get_requests("hdsdasjdhj" ,function(res){
    
    console.log(res)
    
})


uber.patch_requests("sjkasjdkasjd" ,function(res){
    
    console.log(res)
    
})


uber.delete_requests("sjkasjdkasjd" ,function(res){
    
    console.log(res)
    
})

uber.get_ride_details("sjkasjdkasjd" ,function(res){
    
    console.log(res)
    
})


uber.patch_ride_details("sjkasjdkasjd" ,function(res){
    
    console.log(res)
    
})


uber.get_request_map("sjkasjdkasjd" ,function(res){
    
    console.log(res)
    
})



uber.get_request_receipt("sjkasjdkasjd" ,function(res){
    
    console.log(res)
    
})
