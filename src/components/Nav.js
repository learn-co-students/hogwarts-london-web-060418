import piggy from '../porco.png'
import React from 'react'
import hogs from '../porkers_data';

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span><br></br>
			<button onClick={() => props.alphabetisePorcos()}>Alphabetise these peeeegs</button>
			<button onClick={() => props.greasedPorcos()}>Pick the greasy-ass piggos</button>
			<button onClick={() => props.clearAllHogs()}>Back to all hogs</button>
		</div>
	)
}

export default Nav
