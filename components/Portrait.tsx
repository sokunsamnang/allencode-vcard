import React from "react";
import { Image } from "@nextui-org/react";
import profile from "../public/profile.png";

export default function Portrait() {
  return (
    <div className="m-4 flex justify-center">
      <Image width={200} height={200} src={profile.src} />
    </div>
  );
}
