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
          {
            index: true,
            element: <EventsPage />,
            loader: async () => {
              const response = await fetch("http://localhost:8080/events");

              if (!response.ok) {
                throw new Error("Failed to fetch events.");
              } else {
                const resData = await response.json();
                return resData.events;
              }
            },
          },
          { path: ":id", element: <EventDetailsPage /> },
          { path: "new", element: <NewEventPage /> },
          { path: ":id/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);
