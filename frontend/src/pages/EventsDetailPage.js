import { useParams, useLoaderData,json } from "react-router-dom";
import EventItem from '../components/EventItem';
const EventsDetailPage = () => {
  const param = useParams();
  const data = useLoaderData();
  return (
    <>
      <EventItem event={data.event}/>
    </>
  );
};

export default EventsDetailPage;


export async function loader({request, params}) {

  const id = params.id;

  const response = fetch(`http://localhost:8080/events/${id}`)

  // if(!response.ok){
  //   throw json({message: 'Could not fetch details for selected event.'}, {
  //     status: 500
  //   })
  // } else {
  //   return response
  // }
  

  return response

}
