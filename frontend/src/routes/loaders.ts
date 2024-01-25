import { defer, json } from "react-router-dom";

// by użyć defer trzeba zwrócić promise
async function loadEvents() {
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

    // przy normalnym ładowaniu danych można zrócić całe response
    // return response;

    // przy użyciu defer trzeba zwrócić obiekt, lub bezpośrednio dane z obiektu
    // po rozwiązanu promise
    const resData = await response.json();
    return resData.events;
  }
}

// defer pozwala na załadowanie komponentu jeszcze przed załadowaniem danych
// w tym wypadku komponent Events zostanie załadowany, a dopiero potem dane
// defer przyjmuje obiekt, który będzie dostępny w komponencie
// w tym obiekcie do dowolnych kluczy mozna przypisać, przez wywołanie, różne requesty
// przypisane funkcje muszą zwracać promise!
export function eventsLoader() {
  return defer({ events: loadEvents() });
}

export async function eventDetailsLoader({
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
