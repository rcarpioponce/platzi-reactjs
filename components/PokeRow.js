/*
* Module dependencies
 */
import React from 'react'; //importacion de modulos en ECMAScript 6
import PokeAvatar from './PokeAvatar';
class PokeRow extends React.Component{
	render(){
		return <li className="pokerow">
		<PokeAvatar number={this.props.number} />
		{this.props.name}
		</li>
	}
}

export default PokeRow; //exportar modulo en ECMAScript 6