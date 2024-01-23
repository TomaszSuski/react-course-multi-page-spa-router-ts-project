export async function eventsLoader() {
    const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {
      return {isError: true, message: "Could not load events"};
    } else {
    //   const resData = await response.json();
    //   return resData.events;
    return response;
    }
  }