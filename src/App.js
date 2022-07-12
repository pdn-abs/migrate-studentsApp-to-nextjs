import { React } from 'react';
import './App.scss';
import Inputs from './components/inputs';
import SaveButton from './components/saveButton';
import StudentMarkList from './components/studentMarkList';

const App = (context) => <div className="App" role="App">
	<h1>Students Database - Add Student Details</h1>
	<div>{Inputs(context)}</div>
	<div>{SaveButton(context)}</div>
	<div className="grid-container" id="grid-container">
		{ StudentMarkList(context)}
	</div>
</div>;

export default App;
