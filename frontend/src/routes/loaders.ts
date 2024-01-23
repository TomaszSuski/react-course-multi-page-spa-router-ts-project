import { json } from "react-router-dom";

export async function eventsLoader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //   return {isError: true, message: "Could not load events"};
    // throw new Error("Could not load events");

    // throw new Response(JSON.stringify({ message: "Could not load events" }), {
    //   status: 500,
    // });
    throw json({ message: "Could not load events" }, { status: 500 });
  } else {
    //   const resData = await response.json();
    //   return resData.events;
    return response;
  }
}

export async function eventLoader({
  request,
  params,
}: {
  request: any;
  params: any;
}) {
  const id = params.id;
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw json({ message: "Could not load event" }, { status: 500 });
  } else {

    return response;
  }
}
