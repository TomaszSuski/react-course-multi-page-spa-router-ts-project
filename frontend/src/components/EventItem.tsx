import classes from './EventItem.module.css';
import Event from '../models/Event';
import { Link, useSubmit } from 'react-router-dom';

export interface EventItemProps {
  event: Event;
}

function EventItem({ event }: EventItemProps) {
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm("Are you sure you want to delete this event?");

    if (proceed) {
      // submit przyjmuje dwa argumenty
      // pierwszy to dane do przesłania, np. formularz
      // drugi to opcje, np.:
      // metoda HTTP, 
      // action (wskazanie routa dla którego ma być wykonana akcja, jeśli nie jest to ten route na którym jesteśmy)
      submit(null, { method: "DELETE" })
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
