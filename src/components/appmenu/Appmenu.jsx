import React from 'react';
import './_appmenu.scss';

const MultipleDivs = () => {
	const divs = [...Array(50)].map((index) => (
		<div key={index} className="empty-box-small"></div>
	));
	return divs;
};

const Appmenu = () => {
	return (
		<div>
			<section id="appmenu">
				<div className="container appmenu__container">
					<h3>Viewing Menu</h3>
					<article className="multiple-divs__container">
						<MultipleDivs />
					</article>
				</div>
			</section>
		</div>
	);
};

export default Appmenu;
