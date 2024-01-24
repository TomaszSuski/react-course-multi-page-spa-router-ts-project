import { useFetcher, useNavigation } from "react-router-dom";
import classes from "./NewsletterSignup.module.css";

function NewsletterSignup() {
  const navigation = useNavigation();
  // fetcher pozwala na wywołanie akcji lub loadera bez nawigowania do route,
  // do którego akcja lub loader jest przypisany
  const fetcher = useFetcher();

  const isSubmitting = navigation.state === "submitting";
  return (
    // fetcher.Form działa podobnie jak Form ale nie wywołuje przekierowań, tak samo fetcher.loader
    // należy wskazać akcję lub loader, który ma być wywołany
    <fetcher.Form
      action="/newsletter"
      method="post"
      className={classes.newsletter}
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
