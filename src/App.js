import React, { useState, useEffect } from 'react';
import './_app.scss';

import Appmenu from './components/appmenu/Appmenu';
const App = () => {
	const [showMenu, setShowMenu] = useState(false);

	const handleMenu = () => {
		setShowMenu(!showMenu);
	};

  // prevent the elements below from scrolling
	useEffect(() => {
		if (showMenu) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	}, [showMenu]);

	return (
		<>
			{showMenu ? <Appmenu /> : null}
			<button onClick={() => handleMenu()} className={'btn' + (showMenu ? ' btn-active' : '')}>
				Show Menu
			</button>
			<div className="empty-box" />
			<div className="empty-box" />
			<div className="empty-box" />
		</>
	);
};

export default App;
