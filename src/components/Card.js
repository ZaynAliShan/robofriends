import React from 'react';

const Card = ({id, name, email}) => {

//de-structring
//const {id, name, email} = props;

	return(
		<div className = 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
			<div> 
				<img alt="robo" src={`https://robohash.org/${id}?size=200x200`}/>
				<div>
					<h1>{name}</h1>
					{/*<p>{username}</p>*/}
					<p>{email}</p>
				</div> 
			</div>
		</div>

	);
}

export default Card;