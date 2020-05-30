import React, { useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import queryString from 'query-string';

import './main.scss';
import NavBar from '../nav/NavBar.js';
import { ThemeContext } from '../../context/ThemeContext.js';
import LogoLoader from '../loaders/LogoLoader.js';
import Home from '../pages/home/Home.js';
import Footer from '../footer/Footer.js';
import useLogoLoaderState from '../../hooks/useLogoLoaderState.js';
import { handleInitData } from '../../actions/rootAction.js';
import useProfileState from '../../hooks/useProfileState';
import SuccessMsg from '../alerts/SuccessMsg.js';
import { AlertProvider } from '../../context/AlertContext';

export default function App() {
	const { theme } = useContext(ThemeContext);
	const isLoading = useLogoLoaderState();
	const userProfile = useProfileState();
	const dispatch = useDispatch();

	useEffect(() => {
		const { cvid, usr, share } = queryString.parse(window.location.search);
		if (usr) console.log(usr);
		if (share) console.log(share);
		dispatch(handleInitData(cvid));
	}, [dispatch]);

	useEffect(() => {
		// console.log('App effect', userProfile);
	}, [userProfile]);

	return (
		<Router>
			<AlertProvider>
				{isLoading ? (
					<LogoLoader />
				) : (
					<div className={`${theme}-App`}>
						<NavBar />
						<Home />
						<Footer />
						<SuccessMsg msg={'Copied To Clipboard!'} />
					</div>
				)}
			</AlertProvider>
		</Router>
	);
}
