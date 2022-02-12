import Td from "./Td";
import styles from "./Month.module.css";
import { useState } from "react";

function Month({ month, year,onClickDay }) {
    const firstDay = new Date(year,month,1);   
    const lastDay = new Date(year,month+1,0); 
    
    const [coorsSelectedDay,setCoorsSelectedDay] = useState(null)
  
    const getDatesBeetweenTwoDates = (dateStart,dateEnd)=>{
        const dates = []

        let currentDate = new Date(dateStart.getTime());
        console.log(currentDate)

        while(currentDate.getTime() <= dateEnd.getTime()){                                 
            dates.push(new Date(currentDate.getTime()));           
            currentDate.setDate(currentDate.getDate()+1)                                     
        }

        return dates;
    }

    const dates = getDatesBeetweenTwoDates(firstDay,lastDay)

    const months = [
        'Enero','Febrero','Marzo','Abril',
        'Mayo','Junio','Julio','Agosto',
        'Septiembre','Octubre','Noviembre','Diciembre'
    ];    

    const days = ['Do','Lu','MA','MI','JU','Vi','SA'];
    const indexOfDayBeginMonth = firstDay.getDay();       
    const cells = [...Array(indexOfDayBeginMonth).fill(null),...dates]
    const matrix = [];
    let tempRow = []

    for(let i = 0;i<cells.length;i++){    
        if(i%days.length==0){
            tempRow = [];
            tempRow.push(cells[i])
            matrix.push(tempRow)
        }
        else{
            tempRow.push(cells[i])
        }
    }    

    const handleClickDay = (date,coors)=>{
        setCoorsSelectedDay(coors)
        onClickDay(date)
    }
    
    return (
        <div className={styles.container}>
            <table>
                <caption>{`${months[month]} ${year}`}</caption>
                <thead>
                    <tr>
                        {days.map(day=>(
                            <th key={day}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        matrix.map((week,indexWeek)=>(
                            <tr key={indexWeek}>
                                {
                                    week.map((date,indexDate)=>(
                                        <Td 
                                            key={`${indexWeek}-${indexDate}`} 
                                            date={date}
                                            onClick={()=>handleClickDay(date,{w:indexWeek,d:indexDate})}
                                            selected = {coorsSelectedDay && coorsSelectedDay.w == indexWeek && coorsSelectedDay.d == indexDate}
                                        />
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Month