import { createBrowserRouter } from "react-router-dom";
import RootPage from "../pages/Root";
import HomePage from "../pages/Home";
import EventsPage from "../pages/Events";
import EventsLayoutPage from "../pages/EventsLayout";
import EventDetailsPage from "../pages/EventDetails";
import NewEventPage from "../pages/NewEvent";
import EditEventPage from "../pages/EditEvent";
import { eventDetailsLoader, eventsLoader } from "./loaders";
import ErrorPage from "../pages/Error";
import { deleteEvent, submitEvent } from "./actions";
import NewsletterPage from "../pages/Newsletter";
import { action as newsletterAction } from "../pages/Newsletter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsLayoutPage />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":id",
            loader: eventDetailsLoader,
            id: "event",
            children: [
              {
                index: true,
                element: <EventDetailsPage />,
                action: deleteEvent,
              },
              { path: "edit", element: <EditEventPage />, action: submitEvent },
            ],
          },
          { path: "new", element: <NewEventPage />, action: submitEvent },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);
