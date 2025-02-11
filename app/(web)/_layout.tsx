import React from "react";
import { Redirect, Slot } from "expo-router";
import { atom, useAtom } from "jotai";
import { authAtom } from "../(app)/store";
import NavBar from "@/components/web/NavBar/NavBar";

export default function WebLayout() {
  const [isAuthenticated] = useAtom(authAtom);

  if (!isAuthenticated) {
    return <Redirect href="/" />;
  }

  return (
    <>
      <NavBar />
      <Slot />
    </>
  );
}
