import styles from './Td.module.css'
function Td({date,onClick,selected}){    

    

    let className = styles.container;
    if(selected){
        className = `${className} ${styles.selected}`
    }
    if(isToday(date)){
        className = `${className} ${styles.today}`
    }
    return (
        <td 
            className={className} 
            onClick={onClick}
        >
            {
                date&&
                date.getDate()
            }
        </td>
    )
}

function isToday(date){   
    const today = new Date();
   
    if(!date){
        return false
    }
    const diffInMilliseconds = today.getTime()-date.getTime();
    if(diffInMilliseconds<0){
        return false
    }
    console.log(diffInMilliseconds)
    const milisecondsInDay = 86400000;
    

    return diffInMilliseconds<milisecondsInDay
}
export default Td