import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Event from "../models/Event";
import EventsList from "../components/EventsList";

export interface EventsPageProps {}

function EventsPage() {
  // przy użyciu defer w loaderze nadal możemy użyć tego hooka
  const { events } = useLoaderData() as { events: Promise<Event[]> };

  // ale musimy zwrócić dane opakowane w komponent Await
  // Await ma prop resolve, do którego przekazuemy promise
  return (
    // Całość await należy jeszcze opakować w komponent Suspense z Reacta
    // który przyjmuje prop fallback, czyli komponent który ma być wyświetlony
    // podczas ładowania danych
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {/* a wewnątrz Await umieszczamy dynamiczną wartość w nawiasach {}
  która ma postac funkcji, która będzie wykonana po rozwiązaniu promise.
  Argument zostanie przekazany automatycznie po rozwiązaniu promise */}
        {(events) => <EventsList events={events} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;
