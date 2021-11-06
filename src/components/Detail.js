import React from "react";
import Container from "./elements/Container";

import { usePostFetch } from "./hooks/usePostFetch";

export default function Detail(props) {
  const [post] = usePostFetch(props.match.params.id);

  return <Container isDetail={true} post={post} />;
}
