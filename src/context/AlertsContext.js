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

export const AlertProvider = ({ children }) => {
    const [alerts, setAlerts] = useState([]);

    const addAlert = ({title, body, date}, cb) => {
        var displayDate = `${date.toDateString()} at ${formatTime(date.toLocaleTimeString('en-US'))}`;
        date = displayDate;
        setAlerts([...alerts, {title, body, date}])
        if(cb){
            cb();
        }
    }

    useEffect(()=>{
        console.log('used effect');
        // Get alerts from storage
        setAlerts([
            {
                title: 'Dentist Appointment',
                body: 'body text',
                date: Date.now().toString()
            }
        ])
    },[])

    return (
        <AlertContext.Provider value={{
            alerts: alerts,
            addAlert: addAlert,
            formatTime: formatTime
        }}>
            { children }
        </AlertContext.Provider>
    )
}

export default AlertContext;



