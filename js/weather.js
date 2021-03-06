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
/*
			const proxy = "https://cors-anywhere.herokuapp.com/"
			const api = `${proxy}https://api.weatherapi.com/v1/forecast.xml?key=a1e24f88992a42a882b185946210503&q=${lat}/${long}&days=1&aqi=no&alerts=no`;
		
			fetch(api)
				.then(response =>{
					return response.json();
				})
				.then(data =>{
				console.log(data);
			});
			*/
		});
	}

	class User {
		constructor(name, age){
			this.name = name;
			this.age = age;
		}

		greeting(){
			return `Hi ${this.name} 👋`;
		}
	}

	const user = new User("Bob", 44);
	console.log(user.greeting());


	// SIMPLE CALCULATOR

	const operator = prompt("Please enter operator +, -, * or /");

	const number1 = parseFloat(prompt("Please enter first number"));

	const number2 = parseFloat(prompt("Please enter second number"));

	let result;

	if(operator == "+"){
		result = number1 + number2;
	} else if(operator == "-"){
		result = number1 - number2;
	} else if(operator == "*"){
		result = number1 * number2;
	} else if(operator == "/"){
		result = number1 / number2;
	} else {
		console.log("Wrong operator added");
	}

	console.log(`${number1} ${operator} ${number2} = ${result}`);

	const person = {
		name: "Sara",
		age: 25,
		gender: "female"
	}

	let{name, age, gender} = person;

	export default function contact(name, age){
		console.log(`The name is ${name}. The age is ${age}`);
	}
});