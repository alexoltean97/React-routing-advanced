import { useLoaderData, useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

const EditEventPage = () => {

    const data = useRouteLoaderData('eventId')
    const event = data.event

    return(
        <EventForm event={event}/>
    )
}

export default EditEventPage;