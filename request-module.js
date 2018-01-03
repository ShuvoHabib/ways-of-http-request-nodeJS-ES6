const request = require("request");
const url =
  "https://maps.googleapis.com/maps/api/geocode/json?address=Dhaka";

request.get(url, (error,response,body)=>{
	let json = JSON.parse(body);
	console.log(json);
})  