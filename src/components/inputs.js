/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */

import { React } from 'react';

const Inputs = (context) => {
	const { state } = context;

	return	<div>
		<label>Student Name:{}
			<input
				className="text-box"
				id="name"
				type="text"
				value={ state.name }
				onChange={ (evt) => context.actions.setStudentName(evt.target.value) }
			/></label>
		<div>Marks Scored{}
		</div>
		<label>English:{}
			<input
				className="text-box"
				id="english"
				type="text"
				value={ state.english }
				onChange={ (evt) => context.actions.setEnglishMark(evt.target.value) }
			/>
		</label><br/>
		<label>Tamil:{}
			<input
				className="text-box"
				id="tamil"
				type="text"
				value={ state.tamil }
				onChange={ (evt) => context.actions.setTamilMark(evt.target.value) }
			/>
		</label><br/>
		<label>Maths:{}
			<input
				className="text-box"
				id="maths"
				type="text"
				value={ state.maths }
				onChange={ (evt) => context.actions.setMathsMark(evt.target.value) }
			/>
		</label>
	</div>;
};

export default Inputs;
