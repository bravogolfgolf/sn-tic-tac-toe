import '../board'

export default (state, {updateState}) => {
	return (
		<div className="game">
			<div className="board">
				<game-board/>
			</div>
			<div className="game-info">
				<div>{/* status */}</div>
				<ol>{/* TODO */}</ol>
			</div>
		</div>
	);
}
