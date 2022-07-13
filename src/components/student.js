import { React } from 'react';

const Student = (studentDetail) => {
	const { rollNo, name, english, tamil, science } = studentDetail;

	return (
		<div key={ rollNo } className="student">
			<div>Name: { name }</div>
			<div>English: { english }</div>
			<div>Tamil: { tamil }</div>
			<div> Science: { science }</div>
		</div>
	);
};

export default Student;
