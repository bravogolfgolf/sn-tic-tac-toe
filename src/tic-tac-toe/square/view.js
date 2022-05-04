export default (state, {updateState}) => {
	const {properties} = state;
	return (
		<div>
			<button type="button" className="square" on-click={function (){console.log('click')}}>
				{properties.value}
			</button>
		</div>
	);
};
