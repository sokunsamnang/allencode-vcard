"use client";
import React from "react";
import { Phone } from "lucide-react";

const AddContactPage: React.FC = () => {
  const contactInfo = {
    name: "Sam Allen",
    phone: "+855964227037",
    email: "sokunsamnang45@gmail.com",
  };

  const handleAddContact = () => {
    // Create the vCard String
    const contactString = `BEGIN:VCARD
      VERSION:3.0
      FN:${contactInfo.name}
      TEL:${contactInfo.phone}
      EMAIL:${contactInfo.email}
      END:VCARD`;

    // 1. Data URI (Download Attempt)
    const dataURI = `data:text/vcard;charset=utf-8,${encodeURIComponent(
      contactString
    )}`;
    const link = document.createElement("a");
    link.href = dataURI;
    link.download = "samallen.vcf";
    link.click();

    // 2. Intent URI (Primarily Android)
    const intentURI = `intent://addcontact/#Intent;scheme=vcard;S.FN=${contactInfo.name};S.TEL=${contactInfo.phone};S.EMAIL=${contactInfo.email};end;`;
    window.location.href = intentURI;

    // 3. Web Share API (If Available)
    if (navigator.share) {
      navigator
        .share({
          title: "Contact Information",
          text: contactString,
          url: dataURI,
        })
        .catch((error) => console.error("Error sharing:", error));
    }
  };

  return (
    <div>
      <button
        aria-label="Add Contact"
        type="button"
        className="p-3 mx-1 font-bold capitalize rounded-lg bg-zinc-400 hover:bg-zinc-600"
        onClick={handleAddContact}
      >
        <Phone />
      </button>
    </div>
  );
};

export default AddContactPage;
