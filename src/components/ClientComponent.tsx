// @ts-nocheck
"use client";

import {useState} from "react";

const ClientComponent = () => {
  const [counter, setCounter] = useState(0)
  return <>
    <button onClick={() => setCounter(count => count + 1)}>Count {counter}</button>
  </>
}

export default ClientComponent
