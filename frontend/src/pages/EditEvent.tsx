import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";
import Event from "../models/Event";

export interface EditEventPageProps {}

export default function EditEventPage(props: EditEventPageProps) {
  const data = useRouteLoaderData("event") as { event: Event };

  return <EventForm event={data.event} method="PATCH" />;
}
