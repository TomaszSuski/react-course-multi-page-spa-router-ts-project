import React from "react";
import PageContent from "../components/PageContent";

export interface ErrorPageProps {}

export default function ErrorPage(props: ErrorPageProps) {
  return (
    <PageContent title="An error occured">
      <p>Something went wrong</p>
    </PageContent>
  );
}
