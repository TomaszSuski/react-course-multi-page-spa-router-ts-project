import { createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/Root";
import HomePage from "./pages/Home";
import EventsPage from "./pages/Events";
import EventsLayoutPage from "./pages/EventsLayout";
import EventDetailsPage from "./pages/EventDetails";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, element: <HomePage /> },

      {
        path: "events",
        element: <EventsLayoutPage />,
        children: [
          { index: true, element: <EventsPage /> },
          { path: "events/:id", element: <EventDetailsPage /> },
          { path: "events/new", element: <NewEventPage /> },
          { path: "events/:id/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);
