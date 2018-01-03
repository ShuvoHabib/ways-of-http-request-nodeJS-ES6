const fetch = require("node-fetch");

const url = "https://api.github.com/users/shuvohabib";

const getLocation = async url => {
	try {
		const response = await fetch(url);
		const json = await response.json();
		console.log(json);
		console.log(json.results[0]);
	} catch(error) {
		console.log(error);
	}
}

getLocation(url);