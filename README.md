

# uberjs

Uber client API - nodejs

## Getting Started

It is a simple javascript library to integrate UBER services in your web-applications

## Initialization
Before you begin, you need to register your app in the [Uber developer dashboard](https://developer.uber.com/dashboard). Notice that the app gets a client ID, secret, and server token required for authenticating with the API.

After registering your application, you need to install this module in your Node.js project:


### Installing


```
npm install uberapi
```


### Usage

 ```javascript
  var uber = require("uberapi")
  
  var uber_client = new uber({

    client_id: "",

    client_secret: "",
    server_token: "k8X9f_zmZqWsq9dUWvpP3YdeTeMQB054c5Ze04Ky"




})

  uber.getproducts(37.7752315, -122.418075, function (res) {
   
    console.log(res)
    
});
 ```
 
 

## Built With

* [node.js](https://nodejs.org/en/) - language used




## Authors

* **Sejal Chougule** - *Initial work* - [Portfolio](sejalchougule.me)



## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details


