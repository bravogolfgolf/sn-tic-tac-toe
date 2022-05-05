export default ({properties: {index, value}}, {dispatch}) => {
	return (
		<div>
			<button type="button" className="square"
					on-click={() => {
						dispatch('SQUARE_CLICKED', {index: index});
					}}
			>
				{value}
			</button>
		</div>
	);
};
