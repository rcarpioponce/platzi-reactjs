/*
* Module dependencies
 */
import React from 'react'; //importacion de modulos en ECMAScript 6

class PokeAvatar extends React.Component{
	render(){
		var url =  `http://veekun.com/dex/media/pokemon/main-sprites/x-y/${this.props.number}.png`;
		return <img src={url} className="avatar" />
	}
}

export default PokeAvatar; //exportar modulo en ECMAScript 6