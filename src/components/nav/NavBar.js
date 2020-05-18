import React, { useContext } from 'react';

import './nav.scss';
import Menu from './Menu.js';
import ThemeContext from '../../context/ThemeContext.js';

export default function NavBar() {
	const { theme } = useContext(ThemeContext);
	return (
		<nav className={`${theme}-nav`}>
			<div className='main-header'>
				<div className='logo'>LOGO</div>
				<div className='user-name'>USER_NAME</div>
				<img
					src='https://media-exp1.licdn.com/dms/image/C5103AQHPZg4WFrUCZQ/profile-displayphoto-shrink_100_100/0?e=1595462400&v=beta&t=IemcBrohIPQNvPsdndr3NJqK6M6BD075E552J77uNVI'
					alt='User Avatar'
					className='user-avatar avatar-img'
				/>
				<Menu />
			</div>
		</nav>
	);
}

/* 
<div className='user-avatar'>
					<img
						src='https://media-exp1.licdn.com/dms/image/C5103AQHPZg4WFrUCZQ/profile-displayphoto-shrink_100_100/0?e=1595462400&v=beta&t=IemcBrohIPQNvPsdndr3NJqK6M6BD075E552J77uNVI'
						alt='User Avatar'
						className='user-avatar avatar-img'
					/>
					<div className='avatar-container'></div>
				</div>
*/
