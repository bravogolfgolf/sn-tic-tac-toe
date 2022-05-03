import '../square'

export default state => {
	return (
		<div>
			<div className="board-row">
				<board-square/>
				<board-square/>
				<board-square/>
			</div>
			<div className="board-row">
				<board-square/>
				<board-square/>
				<board-square/>
			</div>
			<div className="board-row">
				<board-square/>
				<board-square/>
				<board-square/>
			</div>
		</div>
	);
};
