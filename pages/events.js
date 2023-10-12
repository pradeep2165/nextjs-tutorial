import { useRouter } from "next/router";
import { useState } from "react";

export default function({eventList}){
    const [events, setEvents] = useState(eventList)
    const router = useRouter()
    const fetchSportEvents=async()=>{
        const response = await fetch('http://localhost:4000/events?category=sports');
        const data = await response.json()
        setEvents(data)
        router.push('/events?category=sports', undefined, {shallow:true})
    }
    return(
        <>
        <button onClick={fetchSportEvents}>Sport Events</button>
        <h1>List of Events</h1>
        {
            events.map(event=>{
                return(
                    <div key={event.id}>
                        <h2>{event.id} {event.date} | {event.category}</h2>
                        <p>{event.description}</p>
                        <hr/>
                    </div>
                )
            })
        }
        </>
    )
}
export async function getServerSideProps(context){
    const {query} = context
    const {category} = query
    const queryString = category? 'category=sport': "";
    const response = await  fetch(`http://localhost:4000/events?${queryString}`)
    const data = await response.json()
    return{
        props:{
            eventList: data
        }
    } 
}