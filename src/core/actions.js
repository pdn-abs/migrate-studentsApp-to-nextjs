import studentManager from '../services/studentManager';

const setStudentName = ({ data: name }) => ({
	name,
});
const setEnglishMark = ({ data: english }) => ({
	english,
});
const setTamilMark = ({ data: tamil }) => ({
	tamil,
});

const setMathsMark = ({ data: maths }) => ({
	maths,
});
const addStudent = (context) => ({
	studentDetails: studentManager.addStudent(context),
});

const actions = {
	setStudentName,
	setEnglishMark,
	setTamilMark,
	setMathsMark,
	addStudent,

};

export default actions;
