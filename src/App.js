import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
	const [planets, setPlanets] = useState([]);
	const [next, setNext] = useState('https://swapi.dev/api/planets/');

	useEffect(() => {
		getPlanets(next);
	}, [next]);

	const getPlanets = async (url) => {
		const response = await fetch(url);
		const data = await response.json();

		setPlanets(data.results.concat(planets));
		setNext(data.next);
	}

	const planet = planets.map((planet => {
		return (
		<li key={planet.name}>
			{planet.name}
		</li>
		)
	}));

	return (
		<div className="App">
			{planet}
		</div>
	);
};

export default App;
