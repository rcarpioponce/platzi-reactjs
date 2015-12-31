import React from 'react';
import PokeTable from './components/Poketable';
var pokemons = [
	{number: 1, name: 'Bulbasaur'},
	{number: 2, name: 'Ivysaur'},
	{number: 3, name: 'Venasaur'}
];		
React.render(<PokeTable pokemons={pokemons} />,document.getElementById('container'));  