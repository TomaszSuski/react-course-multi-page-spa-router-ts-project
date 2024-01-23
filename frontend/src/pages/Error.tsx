import React from "react";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export interface ErrorPageProps {}

type ErrorWithMessage = {
  status: number;
  data: { message: string };
};
type ErrorWithText = {
  status: number;
  data: string;
};

export default function ErrorPage(props: ErrorPageProps) {
  const error = useRouteError() as ErrorWithMessage | ErrorWithText;

  let title = "An error occured";
  let message = "Something went wrong";

  if (error.status === 404) {
    title = "Page not found";
    message = "The page you are looking for does not exist";
  }

  if (error.status === 500) {
    // if (typeof error.data === "string") {
    //   message = JSON.parse(error.data).message;
    // }
    if (typeof error.data === "object" && error.data !== null) {
      message = error.data.message;
    }
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
