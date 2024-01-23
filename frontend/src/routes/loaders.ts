export async function eventsLoader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //   return {isError: true, message: "Could not load events"};
    // throw new Error("Could not load events");
    throw new Response(JSON.stringify({ message: "Could not load events" }), {
      status: 500,
    });
  } else {
    //   const resData = await response.json();
    //   return resData.events;
    return response;
  }
}
