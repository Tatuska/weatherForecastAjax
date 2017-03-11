//var AppID = 1 f838bbfc0f69fbb8acc0d156bbff258;

$(document).ready(function () {
//the enter key will also work
	
	$("#city").keyup(function (event) {
		if (event.keyCode == 13) {
			$("#get").click();
		}
	});
	
	
	$('#get').on('click', function () {
		var city = $('#city').val();

		console.log(city);
		// make the request to openweather
		$.getJSON('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=1f838bbfc0f69fbb8acc0d156bbff258',
			function (data) {
				//consoling to see how it is working
				console.log(data.main);
				console.log(data);
				console.log(data.sys.country);
				console.log(data.weather[0].main);
				console.log(data.main.humidity);
				//tempreture in Kelvin
				console.log(data.main.temp);

				var main = (data.weather[0].main);
				//changing background picture depends of the paramenter. I found only 4 but maybe there are more.
				// in the documentation there were not list of exact weather cases
				switch (main) {
				case "Clear":
					$("body").css('background-image', 'url(img/clear.jpg');

					break;
				case "Rain":
					$("body").css('background-image', 'url(img/rain.jpeg');

					break;
				case "Clouds":
					$("body").css('background-image', 'url(img/clouds.jpg');

					break;
				case "Haze":
					$("body").css('background-image', 'url(img/haze.jpg');

					break;
				case "Snow":
					$("body").css('background-image', 'url(img/Snow.jpeg');

					break;
				}

				var list = "";
				//making the kelvin to celcius
				var temp = Math.round(data.main.temp - 273.15);
				//making a list of properties which should be displayed 
				list = '<li>' + data.name + ", " + data.sys.country + '</li>' + '<li>' + "Weather: " + main + '</li>' + '<li>' + "Tempreture: " + temp + " C" + '</li>' + '<li>' + "Humidity: " + data.main.humidity + "%" + '</li>' + '<li>' + "Wind: " + data.wind.speed + " m/s"
				'</li>';
				$("#list").empty();
				$("#list").append(list);



			});
	});
});