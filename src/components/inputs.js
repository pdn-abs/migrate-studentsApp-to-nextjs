/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */

import { React } from 'react';

const Inputs = (context) => {
	const { state, config, patchState } = context;
	const { subjects } = config;

	console.log(state);
	return (
		<div>
			<label>Student Name:{}
				<input
					className="text-box"
					id="name"
					type="text"
					value={ state.name }
					onChange={ (evt) => context.actions.setStudentName(evt.target.value) }
				/></label>
			<div>Marks Scored{}</div>
			{
				subjects.map(({ label, name }) =>
					<span key={ name }><label>{label}
						<input
							id={ name }
							className="text-box"
							type="text"
							value={ state[name] }
							onChange={ (evt) => patchState({ [name]: evt.target.value }) }
						/>
					</label><br/></span>)
			}</div>);
};

export default Inputs;
