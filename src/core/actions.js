import studentManager from '../services/studentManager';

const setStudentName = ({ data: name }) => ({
	name,
});
const setMark = ({ data }) => data;
const addStudent = (context) => ({
	studentDetails: studentManager.addStudent(context),
});

const actions = {
	setStudentName,
	setMark,
	addStudent,

};

export default actions;
