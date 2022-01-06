import React from 'react'

const Scroll = (props) => {
	return(
		<div style = {{overflowY:'scroll', border:'3.5px solid black', height:'580px'}}>
			{props.children}
		</div>
	);
}

export default Scroll;