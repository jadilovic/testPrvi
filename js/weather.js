/**
 * http://usejsdoc.org/
 */

window.addEventListener("load", ()=>{
	let long;
	let lat;
	
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
			long = position.coords.longitude;
			lat = position.coords.latitude;

			const proxy = "https://cors-anywhere.herokuapp.com/"
			const api = `${proxy}https://api.weatherapi.com/v1/forecast.xml?key=a1e24f88992a42a882b185946210503&q=${lat}/${long}&days=1&aqi=no&alerts=no`;
		
			fetch(api)
				.then(response =>{
					return response.json();
				})
				.then(data =>{
				console.log(data);
			});
		});
	}
});