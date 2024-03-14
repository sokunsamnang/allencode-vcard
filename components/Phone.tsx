"use client";
import React from "react";
import { Phone } from "lucide-react";

const SaveContact: React.FC = () => {
  const contactInfo = {
    name: "Sam Allen",
    phone: "+855964227037",
    email: "sokunsamnang45@gmail.com",
  };

  const handleCopyContact = () => {
    const vCardData = `BEGIN:VCARD
      VERSION:3.0
      FN:${contactInfo.name}
      TEL:${contactInfo.phone}
      EMAIL:${contactInfo.email}
      END:VCARD`;

    navigator.clipboard
      .writeText(vCardData)
      .then(() => {
        alert(
          "Contact information copied. Please paste it into your contacts app."
        );
      })
      .catch((error) => {
        console.error("Error copying contact information:", error);
        alert(
          "Failed to copy contact information. Please manually copy and paste it."
        );
      });
  };

  return (
    <button
      aria-label="Save Contact"
      type="button"
      className="p-3 mx-1 font-bold capitalize rounded-lg bg-zinc-400 hover:bg-zinc-600"
      onClick={handleCopyContact}
    >
      <Phone />
    </button>
  );
};

export default SaveContact;
