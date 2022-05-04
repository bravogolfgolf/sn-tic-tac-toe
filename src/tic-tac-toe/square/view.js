export default (state, {updateState}) => {
	const {properties} = state;
	return (
		<div>
			<button type="button" className="square">{properties.value}</button>
		</div>
	);
};
