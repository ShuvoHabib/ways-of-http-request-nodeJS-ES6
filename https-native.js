const https = require("https");
const url =
  "https://maps.googleapis.com/maps/api/geocode/json?address=Dhaka";

https.get(url, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);
    console.log(body);
  });
});