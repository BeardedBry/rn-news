import React, {useState, useEffect} from 'react';

const AlertContext = React.createContext({});

export const AlertProvider = ({ children }) => {
    const [alerts, setAlerts] = useState([]);

    useEffect(()=>{
        console.log('used effect');
        setAlerts([
            {
                title: 'Dentist Appointment',
            }
        ])
    },[])

    return (
        <AlertContext.Provider value={{
            alerts: alerts,
            setAlerts: setAlerts
        }}>
            { children }
        </AlertContext.Provider>
    )
}

export default AlertContext;



