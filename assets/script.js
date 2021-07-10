const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=leo&day=today",
	"method": "POST",
	"headers": {
		"x-rapidapi-key": "aec57077b7mshe7c9917e3720dc3p12dae9jsn6c72418df371",
		"x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

