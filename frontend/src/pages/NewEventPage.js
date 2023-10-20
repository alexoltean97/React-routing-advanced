import EventForm from "../components/EventForm";
import { redirect } from "react-router-dom";
const NewEventPage = () => {
  return <EventForm />;
};

export default NewEventPage;

export async function action({ request, params }) {
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  return redirect('/events');

//   if (!response.ok) {
//     throw json(
//       {
//         message: "Could not save event",
//       },
//       {
//         status: 500,
//       }
//     );
//   }
}
