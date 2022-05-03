import { Typography } from "@mui/material";
import { getDocs, collection } from 'firebase/firestore'
import { useState } from "react";
import { firestore } from '../firebase'

function Hubs() {
    return (
        <div>
            <Typography>Our Available Hubs</Typography>
            <HubData></HubData>
        </div>
    )
}


function HubData() {

    const [hubsData, setHubsData] = useState()

    
    let hubs = await getDocs(collection(firestore,'/hubs'))

    hubs.forEach(doc => {
        let data = doc.data()
        console.log(data)
        return(
            <div>
               <Typography>{data.name}</Typography>
               <Typography>{data.start_time} - {data.end_time === null ? 'No end time' : data.end_time}</Typography>
               {data.contact_name === null ? (
                    <Typography>You can contact {data.contact_name} - {data.contact_number}</Typography>
               ) : (
                   <Typography>No contact info</Typography>
               )}
               {data.online === true ? (
                   <Typography>This hub is online</Typography>
               ) : (
                   <Typography>This hub is in-person</Typography>
               )}
            </div>
        )
        
    })
    
}

export {Hubs}