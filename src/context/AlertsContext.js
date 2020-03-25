import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

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
    if(typeof date === "string"){
        date = new Date(date);
    }
    let dateString = date.toDateString();
    let timeString = formatTime(date.toLocaleTimeString('en-US'));
    return `${dateString} at ${timeString}`;
}

async function setStorage(arr){
    try {
        var jsonArr = JSON.stringify(arr);
        //var jsonObj = JSON.stringify({"test": "value"});
        await AsyncStorage.setItem('localAlerts', jsonArr);
    }catch(e) {
        console.error(e);
    }
    console.log('done saving to AsyncStorage.');
}


const AlertContext = React.createContext({});

export const AlertProvider = ({ children }) => {

    const [alerts, setAlerts] = useState([]);

    async function getStorage() {
        var parsed = [];
        try {
            const value = await AsyncStorage.getItem('localAlerts');
            parsed = await JSON.parse(value);
        }catch(e){
            console.log(e,'failed to get storage');
            return [];
        }
        console.log('parsed: ', parsed);
        setAlerts(parsed);
    }


    const addAlert = ({id, title, body, date}, cb) => {
        //if id is provided then update instead of add
        if(id){
            let newArr = [...alerts];
            let index = newArr.findIndex((arr) => arr.id == id);
            newArr[index] = {title, body, date, id};
            try{
                setAlerts(newArr);
                //AsyncStorage
                setStorage(newArr);
            }catch(e){
                console.log(e, 'error setting storage');
            }

        }else{
            try{
                setAlerts([...alerts, {title, body, date, id: Date.now().toString()}])
                //AsyncStorage
                setStorage([...alerts, {title, body, date, id: Date.now().toString()}]);
            }catch(e){
                console.log(e, 'error setting storage');
            }
        }

        if(cb){
            cb();
        }
    }

    const removeAlert = (id) => {
        let newArr = [...alerts];
        let index = newArr.findIndex((arr) => arr.id == id);
        newArr.splice(index,1);
        setAlerts(newArr);
        try{
            setStorage(newArr);
        }catch(e){
            console.log(e, 'error setting storage');
        }
    }

    const getAlert = (id) => {
        const match = alerts.filter(alert => alert.id == id);
        return match;
    } 

    useEffect(()=>{
        console.log('AlertContext used effect');
        // TODO: Get alerts from storage
        getStorage();
    },[])

    return (
        <AlertContext.Provider value={{
            alerts,
            addAlert,
            removeAlert,
            getAlert,
            formatDateAndTime,
        }}>
            { children }
        </AlertContext.Provider>
    )
}

export default AlertContext;



