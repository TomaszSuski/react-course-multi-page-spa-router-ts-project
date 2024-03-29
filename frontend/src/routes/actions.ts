import { json, redirect } from "react-router-dom";
import Event from "../models/Event";

export async function submitEvent({
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

  const url = params.id
    ? `http://localhost:8080/events/${params.id}`
    : "http://localhost:8080/events";

  const response = await fetch(url, {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  // ten serwer zwraca błędy walidacji z kodem 422
  // wtedy nie chcemy przekierować na stronę eventów
  // tylko zwrócić response z błędem z serwera
  if (response.status === 422) {
    return response;
  }

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

export async function deleteEvent({
  request,
  params,
}: {
  request: any;
  params: any;
}) {
  const id = params.id;
  const response = await fetch(`http://localhost:8080/events/${id}`, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Could not delete event" }, { status: 500 });
  } else {
    return redirect("/events");
  }
}
