import Month from "./components/Month";
import { useState } from 'react';
function App() {

	const [date, setDate] = useState(new Date(2022,0,1))

	const nextMonth = (increment) => {
		const newDate = new Date(date.getTime());
		newDate.setMonth(newDate.getMonth()+increment)
		setDate(newDate)
	}
	const onClickDay = day=>{
		console.log(day)
	}
	
	return (
		<div className="App">
			<Month year={date.getFullYear()} month={date.getMonth()} onClickDay={onClickDay}/>
			<div>
				<button onClick={()=>{nextMonth(-1)}}>{'<'}</button>
				<button onClick={()=>{nextMonth(1)}}>{'>'}</button>
			</div>
		</div>
	);
}

export default App;
