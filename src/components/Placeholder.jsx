import React from 'react';
import Logo from './Logo';
import Contact from './Contact';

const Placeholder = () => (
	<div style={placeholderStyle} >
		<Logo />
		<Contact />
	</div>
)

const placeholderStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '60vh'
}

export default Placeholder;
