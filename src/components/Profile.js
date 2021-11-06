import React from "react";
import Container from "./elements/Container";

import { useProfileFetch } from "./hooks/useProfileFetch";

export default function Detail(props) {
  const [profile] = useProfileFetch(props.match.params.id);
  console.log(profile);

  return <Container isProfile={true} profile={profile} />;
}
