import React from "react";
import { useParams } from "react-router-dom";
import { DUMMY_EVENTS } from "./Events";
import EventItem from "../components/EventItem";

export interface EventDetailsPageProps {}

export default function EventDetailsPage(props: EventDetailsPageProps) {
  const { id } = useParams();
  const event = DUMMY_EVENTS.find((event) => event.id === id);
  if (!event) {
    return <h1>Event not found!</h1>;
  }
  return (
    <>
      <h1>{`Event ${event.id} Details`}</h1>
      <EventItem event={event} />
    </>
  );
}
