"use client";
import React from "react";
import { Phone } from "lucide-react";

const SaveContact: React.FC = () => {
  const contactInfo = {
    name: "Sam Allen",
    phone: "+855964227037",
    email: "sokunsamnang45@gmail.com",
  };

  const handleAddContact = () => {
    const contactString = `BEGIN:VCARD
      VERSION:3.0
      FN:${contactInfo.name}
      TEL:${contactInfo.phone}
      EMAIL:${contactInfo.email}
      END:VCARD`;

    const dataURI = `data:text/vcard;charset=utf-8,${encodeURIComponent(
      contactString
    )}`;

    // Open the Data URI in a new tab to prompt the user to manually add the contact
    const contactTab = window.open(dataURI, "_blank");
    if (!contactTab) {
      alert("Please allow pop-ups to add the contact.");
    }
  };

  return (
    <button
      aria-label="Add Contact"
      type="button"
      className="p-3 mx-1 font-bold capitalize rounded-lg bg-zinc-400 hover:bg-zinc-600"
      onClick={handleAddContact}
    >
      <Phone />
    </button>
  );
};

export default SaveContact;
