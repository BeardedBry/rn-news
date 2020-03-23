import React, {useState, useEffect} from 'react';

const AlertContext = React.createContext({});

function formatTime(time) {
    //https://stackoverflow.com/questions/4898574/converting-24-hour-time-to-12-hour-time-w-am-pm-using-javascript
    var [hh, mm, ss] = time.split(':');
     //it is pm if hours from 12 onwards
    var suffix = (hh >= 12) ? 'pm' : 'am';
    //only -12 from hours if it is greater than 12 (if not back at mid night)
    hh = (hh > 12) ? hh-12 : hh;
    //if 00 then it is 12 am
    hh = (hh == '00') ? 12 : hh; 
    return `${hh}:${mm} ${suffix}`;
}

function formatDateAndTime(date) {
    let dateString = date.toDateString();
    let timeString = formatTime(date.toLocaleTimeString('en-US'));
    return `${dateString} at ${timeString}`;
}


export const AlertProvider = ({ children }) => {
    const [alerts, setAlerts] = useState([]);

    const addAlert = ({id, title, body, date}, cb) => {

        //if id is provided then update instead of add
        if(id){
            let newArr = [...alerts];
            let index = newArr.findIndex((arr) => arr.id == id);
            newArr[index] = {title, body, date, id};
            setAlerts(newArr);
        }else{
            setAlerts([...alerts, {title, body, date, id: Date.now().toString()}])
        }

        if(cb){
            cb();
        }
    }

    const getAlert = (id) => {
        const match = alerts.filter(alert => alert.id == id);
        return match;
    } 

    // useEffect(()=>{
    //     console.log('used effect');
    //     // TODO: Get alerts from storage

    //     setAlerts([
    //         {
    //             title: 'Dentist Appointment',
    //             body: 'body text',
    //             date: new Date(Date.now()),
    //             id: (Date.now().toString())
    //         }
    //     ])
    // },[])

    return (
        <AlertContext.Provider value={{
            alerts,
            addAlert,
            formatDateAndTime,
            getAlert
        }}>
            { children }
        </AlertContext.Provider>
    )
}

export default AlertContext;



