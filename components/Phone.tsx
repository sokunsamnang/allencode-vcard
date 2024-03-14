"use client";
import React from "react";
import { Phone } from "lucide-react";

const SaveContact: React.FC = () => {
  const contactInfo = {
    name: "Sam Allen",
    phone: "+855964227037",
    email: "sokunsamnang45@gmail.com",
  };

  const handleSaveContact = () => {
    const vCardData = `
      BEGIN:VCARD
      VERSION:3.0
      FN:${contactInfo.name}
      TEL:${contactInfo.phone}
      EMAIL:${contactInfo.email}
      END:VCARD
    `;

    const dataURI = `data:text/vcard;charset=utf-8,${encodeURIComponent(
      vCardData
    )}`;

    // Open the Data URI in the same window to trigger the "Create New Contact" action
    window.location.href = dataURI;
  };

  return (
    <button
      aria-label="Save Contact"
      type="button"
      className="p-3 mx-1 font-bold capitalize rounded-lg bg-zinc-400 hover:bg-zinc-600"
      onClick={handleSaveContact}
    >
      <Phone />
    </button>
  );
};

export default SaveContact;
