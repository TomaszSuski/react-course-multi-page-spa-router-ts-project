import { useFetcher } from "react-router-dom";
import classes from "./NewsletterSignup.module.css";
import { useEffect, useRef } from "react";

function NewsletterSignup() {
  // fetcher pozwala na wywołanie akcji lub loadera bez nawigowania do route,
  // do którego akcja lub loader jest przypisany
  const fetcher = useFetcher();

  const { data, state } = fetcher;
  // fetcher ma też m.in. stan, który pozwala na sprawdzenie czy akcja jest wykonywana
  const isSubmitting = state === "submitting";

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
      formRef.current?.reset();
    }
  }, [state, data]);

  return (
    // fetcher.Form działa podobnie jak Form ale nie wywołuje przekierowań, tak samo fetcher.loader
    // należy wskazać akcję lub loader, który ma być wywołany
    <fetcher.Form
      action="/newsletter"
      method="post"
      className={classes.newsletter}
      ref={formRef}
    >
      <input
        type="email"
        name="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Sign up"}
      </button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
