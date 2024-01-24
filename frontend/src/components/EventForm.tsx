import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import Event from "../models/Event";

import classes from "./EventForm.module.css";

type EventFormMethods = "POST" | "PATCH";

export interface EventFormProps {
  method: EventFormMethods;
  event?: Event;
}

type ErrorResponse = {
  message: string;
  errors: {
    [key: string]: string;
  };
};

function EventForm({ method, event }: EventFormProps) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  // ten hook pozwala na uzyskanie dostepu do danych zwróconych przez akcję
  // w tym wypadku przy błędach walidacji, dane zwrócone przez akcję będą zawierały błędy zwrócone przez serwer
  const data = useActionData() as ErrorResponse;

  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event?.title || ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event?.image || ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event?.date || ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows={5}
          required
          defaultValue={event?.description || ""}
        />
      </p>
      <div className={classes.actions}>
        <button disabled={isSubmitting} type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;
