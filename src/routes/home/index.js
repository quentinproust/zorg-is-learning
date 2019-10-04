import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';
import style from './style';

const N = ({ value }) => {
	if (value < 10) {
		return <span class={style.number}>&nbsp;{value}</span>;
	}
	return <span class={style.number}>{value}</span>;
};

const Line = ({ line }) => {
	return (
		<div>
			<strong class={style.lineHeader}>{line.name}</strong>
			{line.values.map((i, index) => {
				if (index < line.values.length - 1) {
					return <Fragment><N value={i} /><span> - </span></Fragment>;
				}
				return <N value={i} />;
			})}
		</div>
	);
};

const Lines = ({ lines }) => {
	return <Fragment>{lines.map(line => <Line line={line} />)}</Fragment>;
};

function getNumbers() {
	return ['A', 'B', 'C', 'D']
		.map(lineName => ({
			name: lineName,
			values: [0,0,0,0,0].map(_ => Math.floor(Math.random() * 100)),
		}));
}

const Home = () => {

	const [numberLines, setNumberLines] = useState(getNumbers());

	const refreshNewNumbers = () => {
		setNumberLines(getNumbers());
	};

	return (
		<div class={style.home}>
			<h1>Plein de nombres ...</h1>
			<div class={style.exercice}>
				<h2>Les règles</h2>
				<ol>
					<li>Je lis les nombres</li>
					<li>Je dis le nombre qui vient avant</li>
					<li>Je dis le nombre qui vient après</li>
					<li>J'écris les nombres en lettre</li>
					<li>Je décompose</li>
				</ol>
				<hr />
				<div>
					<Lines lines={numberLines} />
				</div>
			</div>
			<button type="button" class="btn btn-primary" onClick={refreshNewNumbers}>Nouveaux nombres</button>
		</div>
	);
};

export default Home;
