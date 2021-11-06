import React from "react";
import Container from "./elements/Container";
import Spinner from "./elements/Spinner";

import { usePostFetch } from "./hooks/usePostFetch";

export default function Detail(props) {
  const [post, { loading, error }] = usePostFetch(props.match.params.id);

  if (error) return <div>Something went wrong... </div>;
  if (loading) return <Spinner />;

  return <Container isDetail={true} post={post} />;
}
