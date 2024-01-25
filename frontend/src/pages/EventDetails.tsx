import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
import Event from "../models/Event";
import EventsList from "../components/EventsList";

export interface EventDetailsPageProps {}

export default function EventDetailsPage(props: EventDetailsPageProps) {
  // useRouteLoaderData nie chciało działać z tym loaderem,
  // użycie useLoaderData działa skoro loder jest na tym samym route
  const { event, events } = useLoaderData() as {
    event: Promise<Event>;
    events: Promise<Event[]>;
  };
  console.log(event, events);

  return (
    <>
      <Suspense
        fallback={<p style={{ textAlign: "center" }}>Loading event...</p>}
      >
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense
        fallback={<p style={{ textAlign: "center" }}>Loading events...</p>}
      >
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}
