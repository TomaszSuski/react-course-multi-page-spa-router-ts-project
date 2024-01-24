import { Form, useNavigation } from "react-router-dom";
import classes from "./NewsletterSignup.module.css";

function NewsletterSignup() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form method="post" className={classes.newsletter}>
      <input
        type="email"
        name="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Sign up"}
      </button>
    </Form>
  );
}

export default NewsletterSignup;
