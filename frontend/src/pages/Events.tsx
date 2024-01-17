import React from "react";
import Event from "../models/Event";
import EventsList from "../components/EventsList";

const DUMMY_EVENTS: Event[] = [
  {
    id: "e1",
    title: "Programming for everyone",
    description:
      "Learn the basics of programming in HTML, CSS, and JavaScript.",
    date: "2021-05-12",
    image: "images/programming-event.jpg",
  },
  {
    id: "e2",
    title: "Networking for introverts",
    description: "Learn how to network effectively with other introverts.",
    date: "2021-05-30",
    image: "images/introvert-event.jpg",
  },
  {
    id: "e3",
    title: "Networking for extroverts",
    description: "Learn how to network effectively with other extroverts.",
    date: "2021-06-10",
    image: "images/extrovert-event.jpg",
  },
];

export interface EventsPageProps {}

export default function EventsPage(props: EventsPageProps) {
  return (
    <>
      <h1>Events</h1>
      <EventsList events={DUMMY_EVENTS} />
    </>
  );
}
