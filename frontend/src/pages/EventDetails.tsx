import React from "react";
import { useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
import Event from "../models/Event";

export interface EventDetailsPageProps {}

export default function EventDetailsPage(props: EventDetailsPageProps) {
  const data = useLoaderData() as { event: Event };

  return (
    <>
      <EventItem event={data.event} />
    </>
  );
}
