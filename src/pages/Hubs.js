import { Card, Grid, Typography } from "@mui/material";
import { getDocs, collection } from 'firebase/firestore'
import { useEffect, useState } from "react";
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

    const [hubsData, setHubsData] = useState([])

    useEffect(() => {
        async function getData() {
            let hubs = await getDocs(collection(firestore,'/hubs'))
            setHubsData(hubs.docs)
        }
        getData()
    }, [])

    return (
        <div>
            <Grid container spacing={2}>
                {hubsData.map(doc => {
                    let data = doc.data()
                    console.log(data)
                    return(
                        <Grid item key={Math.random()}>
                            <Card sx={{padding: '30px', maxWidth: '300px'}}>
                                <Typography variant="h2">{data.name} Hub</Typography>
                                <Typography>{data.start_time} - {data.end_time === null ? 'No end time' : data.end_time}</Typography>

                                {data.contact_name !== null ? (
                                        <Typography>You can contact {data.contact_name} - <a aria-label="Call hub" href={`tel:${data.contact_number}`}>{data.contact_number}</a></Typography>
                                ) : (
                                    <Typography>You can contact <a href={`tel:${data.contact_number}`} aria-label='Call Hub'>{data.contact_number}</a></Typography>
                                )}
                                {data.online === true ? (
                                    <Typography>This hub is online</Typography>
                                ) : (
                                    <Typography>This hub is in-person</Typography>
                                )}
                                {data.location_embed && <iframe title={data.location_name} src={data.location_embed} width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>}
                            </Card>
                        </Grid>
                    )
                    
                })}        
            </Grid>
            
        </div>
    )


    
}

export {Hubs}