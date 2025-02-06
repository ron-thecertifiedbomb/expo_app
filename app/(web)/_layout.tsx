
import AppHeader from "@/components/home/AppHeader";
import { Slot } from "expo-router";
import React from "react";

export default function WebLayout() {
  return (
    <>
      <AppHeader />
      <Slot />;
    </>
  );
}
