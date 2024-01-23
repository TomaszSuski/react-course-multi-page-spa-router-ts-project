import { createBrowserRouter } from "react-router-dom";
import RootPage from "../pages/Root";
import HomePage from "../pages/Home";
import EventsPage from "../pages/Events";
import EventsLayoutPage from "../pages/EventsLayout";
import EventDetailsPage from "../pages/EventDetails";
import NewEventPage from "../pages/NewEvent";
import EditEventPage from "../pages/EditEvent";
import { eventLoader, eventsLoader } from "./loaders";
import ErrorPage from "../pages/Error";

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
            loader: eventLoader,
            children: [
              {
                index: true,
                element: <EventDetailsPage />,
              },
              { path: ":id/edit", element: <EditEventPage /> },
            ],
          },
          { path: "new", element: <NewEventPage /> },
        ],
      },
    ],
  },
]);
