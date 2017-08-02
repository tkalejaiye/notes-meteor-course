import React from 'react';
import { Link } from 'react-router';

export default () => {
	return (
		<div className="boxed-view">
			<div className="boxed-view__box">
			<h1>Page Not Found</h1>
				<p>Seems like that page doesn't exist</p>
				<Link className="button button--link" to="/">Go Home</Link>
			</div>
		</div>
	);
};