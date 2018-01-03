const axios = require("axios");

const url =
  "https://api.github.com/users/shuvohabib";

const getLocation = async url => {
	const response = await axios.get(url);
	const data = response.data;
	console.log(data);
}  

getLocation(url);