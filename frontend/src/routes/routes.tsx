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
import { addNewEvent, deleteEvent } from "./actions";

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
              { path: "edit", element: <EditEventPage /> },
            ],
          },
          { path: "new", element: <NewEventPage />, action: addNewEvent },
        ],
      },
    ],
  },
]);
