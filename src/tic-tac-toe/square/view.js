export default ({properties: {value}}, {updateProperties}) => {
	return (
		<div>
			<button type="button" className="square"
					on-click={() => updateProperties({value: 'X'})}
			>
				{value}
			</button>
		</div>
	);
};
