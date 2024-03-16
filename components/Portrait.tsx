import React from "react";
import { Image } from "@nextui-org/react";
import profile from "../public/profile.png";

export default function Portrait() {
  return (
    <div className="m-4 flex justify-center">
      <Image
        width={200}
        height={200}
        alt="profile"
        src="https://avatars.githubusercontent.com/u/46617484?v=4"
      />
    </div>
  );
}
