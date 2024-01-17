import React, { useEffect, useState} from "react";
import Event from "../models/Event";
import EventsList from "../components/EventsList";

export interface EventsPageProps {}

export type ErrorType = string | null;

function EventsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedEvents, setFetchedEvents] = useState<Event[]>([]);
  const [error, setError] = useState<ErrorType>(null);

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      const response = await fetch('http://localhost:8080/events');

      if (!response.ok) {
        setError('Fetching events failed.');
      } else {
        const resData = await response.json();
        setFetchedEvents(resData.events);
      }
      setIsLoading(false);
    }

    fetchEvents();
  }, []);
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
    </>
  );
}

export default EventsPage;
