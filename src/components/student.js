import { React } from 'react';

const Student = (studentDetail) => {
	const { rollNo, name, english, tamil, maths } = studentDetail;

	return (
		<div key={ rollNo } className="student">
			<div>Name: { name }</div>
			<div>English: { english }</div>
			<div>Tamil: { tamil }</div>
			<div> Maths: { maths }</div>
		</div>
	);
};

export default Student;
