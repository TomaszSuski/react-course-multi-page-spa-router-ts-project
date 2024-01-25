import { Params, defer, json } from "react-router-dom";

// by użyć defer trzeba zwrócić promise
async function loadEvents() {
  console.log("in load events");
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

async function loadEventDetails(id: string) {
  console.log("in loader", id);
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw json({ message: "Could not load event" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

// defer pozwala na załadowanie komponentu jeszcze przed załadowaniem danych
// w tym wypadku komponent Events zostanie załadowany, a dopiero potem dane
// defer przyjmuje obiekt, który będzie dostępny w komponencie
// w tym obiekcie do dowolnych kluczy mozna przypisać, przez wywołanie, różne requesty
// przypisane funkcje muszą zwracać promise!
export async function eventDetailsLoader({
  request,
  params,
}: {
  request: Request;
  params: Params;
}) {
  console.log(request);
  console.log(params);
  const id = params.id as string;
  // async/await w loaderze działa tak, że komponent wyrenderuje się po otrzymaniu danych z loadera z await
  // a reszta będzie się ładowała w tle już po wyrenderowaniu
  return defer({ events: loadEvents(), event: await loadEventDetails(id) });
}

export async function eventsLoader() {
  return defer({ events: loadEvents() });
}

// logika dla event details przeniesiona do osobnej funkcji dla użycia loadera z defer
// export async function eventDetailsLoader({
//   request,
//   params,
// }: {
//   request: any;
//   params: any;
// }) {
//   const id = params.id;
//   const response = await fetch(`http://localhost:8080/events/${id}`);

//   if (!response.ok) {
//     throw json({ message: "Could not load event" }, { status: 500 });
//   } else {
//     return response;
//   }
// }
