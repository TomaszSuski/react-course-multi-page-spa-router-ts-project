import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
import Event from "../models/Event";

export interface EventDetailsPageProps {}

export default function EventDetailsPage(props: EventDetailsPageProps) {
  const data = useRouteLoaderData("event") as { event: Event };

  return (
    <>
      <EventItem event={data.event} />
    </>
  );
}
