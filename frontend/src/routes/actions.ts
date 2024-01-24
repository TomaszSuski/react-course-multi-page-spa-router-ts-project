import { json, redirect } from "react-router-dom";
import Event from "../models/Event";

export async function addNewEvent({
  request,
  params,
}: {
  request: any;
  params: any;
}) {
  const data = await request.formData();
  const eventData = {
    title: data.get("title"),
    description: data.get("description"),
    date: data.get("date"),
    image: data.get("image"),
  } as Event;

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw json({ message: "Could not create event" }, { status: 500 });
  } else {
    // akcja MUSI coś zwrócić, inaczej sypie błędem pomimo poprawnego wysłania  requestu
    // może zwracać null, ale musi coś zwracać
    // return response;
    // return null;
    // w tym wypadku zwraca redirecta do strony eventów
    return redirect("/events");
  }
}
