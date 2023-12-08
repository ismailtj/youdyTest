"use client";

import { FormEvent, useState } from "react";
import addData from "@/app/firestore/addData";

export default function DemAdhform() {
  const [Name, setName] = useState<string>("");
  const [Msg, setMsg] = useState<string>("");

  async function onSubmit() {
    const data = {
      email: Name,
      msg: Msg,
    };
    const { result, error } = await addData("demande-adh", data);
    console.log(result);

    if (error) {
      return console.log(error);
    }
  }

  return (
    <>
      <input
        type="text"
        name="name"
        placeholder="email"
        onChange={(e) => {
          setName(e.target.value);
        }}
        className="border-2"
      />
      <textarea
        name="message"
        placeholder="name"
        onChange={(e) => {
          setMsg(e.target.value);
        }}
        className="border-2 block w-full"
      />
      <button
        value={"send"}
        onClick={(e: any) => onSubmit()}
        className="border-2 bg-blue-400 py-2 px-5  "
      >
        send
      </button>
    </>
  );
}
