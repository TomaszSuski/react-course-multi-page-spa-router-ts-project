import React from "react";
import EventsNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router-dom";

export interface EventsLayoutPageProps {}

export default function EventsLayoutPage(props: EventsLayoutPageProps) {
  return (
    <>
      <EventsNavigation />
      <section>
        <Outlet />
      </section>
    </>
  );
}
