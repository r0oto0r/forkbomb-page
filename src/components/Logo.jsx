import React from 'react';
import logo from '../assets/img/forkbomb.png';

const Logo = () => (
	<img src={logo} alt="forkbomb" style={logoStyle} />
);

const logoStyle = {
	height: '64px',
	width: '64px',
	margin: '0',
	padding: '5px'
}

export default Logo;
