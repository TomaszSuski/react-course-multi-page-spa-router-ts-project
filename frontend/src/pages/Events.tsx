import React from "react";
import { useLoaderData } from "react-router-dom";
import Event from "../models/Event";
import EventsList from "../components/EventsList";

export interface EventsPageProps {}

function EventsPage() {
  // const data  = useLoaderData() as Event[];
  const response = useLoaderData() as { events: Event[] };
  const data = response.events;

  return (
    <>
      <EventsList events={data} />
    </>
  );
}

export default EventsPage;
