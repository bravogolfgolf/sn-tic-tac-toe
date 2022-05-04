export default (state, {updateState}) => {
	const {properties} = state;
	return (
		<div>
			<button type="button" className="square" on-click={() => {
				console.log('click')
			}}>
				{properties.index}
			</button>
		</div>
	);
};
