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

    const addAlert = ({title, body, date}, cb) => {
        // var displayDate = `${date.toDateString()} at ${formatTime(date.toLocaleTimeString('en-US'))}`;
        // date = displayDate;
        setAlerts([...alerts, {title, body, date}])
        if(cb){
            cb();
        }
    }

    useEffect(()=>{
        console.log('used effect');
        // TODO: Get alerts from storage

        // var tempDate = new Date(Date.now());
        // var tempDisplayDate = `${tempDate.toDateString()} at ${formatTime(tempDate.toLocaleTimeString('en-US'))}`

        setAlerts([
            {
                title: 'Dentist Appointment',
                body: 'body text',
                date: new Date(Date.now())
            }
        ])
    },[])

    return (
        <AlertContext.Provider value={{
            alerts: alerts,
            addAlert: addAlert,
            formatDateAndTime: formatDateAndTime
        }}>
            { children }
        </AlertContext.Provider>
    )
}

export default AlertContext;



