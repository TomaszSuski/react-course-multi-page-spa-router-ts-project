import React from "react";
import PageContent from "../components/PageContent";

export interface HomePageProps {}

export default function HomePage(props: HomePageProps) {
  return <PageContent title="Home"><p>check out events</p></PageContent>;
}
