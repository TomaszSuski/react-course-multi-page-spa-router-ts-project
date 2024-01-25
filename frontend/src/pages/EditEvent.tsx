import React, { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";
import Event from "../models/Event";

export interface EditEventPageProps {}

export default function EditEventPage(props: EditEventPageProps) {
  const { event } = useLoaderData() as {
    event: Promise<Event>;
    events: Promise<Event[]>;
  };

  return (
    <Suspense
      fallback={<p style={{ textAlign: "center" }}>Loading event...</p>}
    >
      <Await resolve={event}>
        {(loadedEvent) => <EventForm event={loadedEvent} method="PATCH" />}
      </Await>
    </Suspense>
  );
}
