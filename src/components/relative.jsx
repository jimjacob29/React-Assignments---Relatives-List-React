import React from "react";

export default function Relative(props) {
  return <li key={`relativeListItem${props.index + 1}`}>{props.name}</li>;
}
