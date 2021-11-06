import React from "react";
import Container from "./elements/Container";
import Spinner from "./elements/Spinner";

import { useProfileFetch } from "./hooks/useProfileFetch";

export default function Detail(props) {
  const [profile, { loading, error }] = useProfileFetch(props.match.params.id);

  if (error) return <div>Something went wrong... </div>;
  if (loading) return <Spinner />;

  return <Container isProfile={true} profile={profile} />;
}
