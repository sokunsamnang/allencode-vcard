"use client";
import { Phone } from "lucide-react";
import React, { useState } from "react";

const SaveContact: React.FC = () => {
  const [contactInfo] = useState({
    name: "Sam Allen",
    phone: "+855964227037",
    email: "sokunsamnang45@gmail.com",
  });

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
    const blob = new Blob([vCardString], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "contact.vcf";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
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
