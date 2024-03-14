"use client";
import { Phone } from "lucide-react";
import React from "react";

const SaveContact: React.FC = () => {
  const contactInfo = {
    name: "Sam Allen",
    phone: "+855964227037",
    email: "sokunsamnang45@gmail.com",
  };

  const generateVCard = () => {
    return `BEGIN:VCARD
    VERSION:3.0
    FN:${contactInfo.name}
    TEL:${contactInfo.phone}
    EMAIL:${contactInfo.email}
    END:VCARD`;
  };

  const handleDownloadContact = () => {
    const vCardString = generateVCard();
    const dataUri = `data:text/vcard;charset=utf-8,${encodeURIComponent(
      vCardString
    )}`;
    window.open(dataUri);
  };

  return (
    <button
      aria-label="Save Contact"
      type="button"
      className="p-3 mx-1 font-bold capitalize rounded-lg bg-zinc-400 hover:bg-zinc-600"
      onClick={handleDownloadContact}
    >
      <Phone />
    </button>
  );
};

export default SaveContact;
