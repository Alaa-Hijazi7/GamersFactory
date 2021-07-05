import { useState } from "react";

export default function customUseState(initialValues) {
  const [state, setState] = useState(initialValues);

  return [state, data => setState(previousState => typeof data === "object" ? (Array.isArray(data) ? [...previousState, ...data] : { ...previousState, ...data }) : data)];
}
