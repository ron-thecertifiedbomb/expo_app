import React, { useEffect } from "react";
import useDetectDeviceAndNavigate from "@/helper.tsx/utilities"; // Make sure to import your hook

const RoutingComponent: React.FC = () => {
  // Call the hook here to handle device-based routing
  useDetectDeviceAndNavigate();

  return null; // No JSX, just routing logic
};

export default RoutingComponent;
