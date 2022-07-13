import { rndString } from '@laufire/utils/random';

const studentManager = {
	addStudent: (context) => {
		const { config, state } = context;

		return [
			...state.studentDetails,
			{
				id: rndString(config.idLength),
				name: state.name,
				english: state.english,
				tamil: state.tamil,
				science: state.science,
			},
		];
	},
};

export default studentManager;
