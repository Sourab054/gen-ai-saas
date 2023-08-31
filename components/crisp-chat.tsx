"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("fa5d30e4-e88a-4ea9-aa2e-ab308f06d6fa");
  }, []);

  return null;
};
