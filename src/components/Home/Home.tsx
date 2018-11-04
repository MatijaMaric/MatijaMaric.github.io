import React from 'react';

import './Home.scss';

class Home extends React.Component {
	public render(): React.ReactNode {
		return (
			<div className="Home">
				<div className="Home__title">HENLO I AM PROGRAM</div>
				<div className="Home__body">beep boop dog</div>
			</div>
		);
	}
}

export default Home;
