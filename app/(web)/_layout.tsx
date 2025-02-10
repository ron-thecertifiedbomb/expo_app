
import React from "react";
import { Redirect, Slot } from "expo-router";
import { atom, useAtom } from "jotai";
import AppHeader from "@/components/home/AppHeader";
import { authAtom } from "../(app)/store";


export default function WebLayout() {
  const [isAuthenticated] = useAtom(authAtom);

  // ✅ If not authenticated, redirect to login (`/`)
  if (!isAuthenticated) {
    return <Redirect href="/" />;
  }

  return (
    <>
      <AppHeader />
      <Slot />
    </>
  );
}
