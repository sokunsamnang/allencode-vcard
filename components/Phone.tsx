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

    // Data URI (Download Attempt)
    const dataURI = `data:text/vcard;charset=utf-8,${encodeURIComponent(
      contactString
    )}`;

    // Check if the user agent is iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    // If it's iOS, open a new window with the data URI
    if (isIOS) {
      window.open(dataURI);
    } else {
      // Otherwise, try the Intent URI (Primarily Android)
      const intentURI = `intent://addcontact/#Intent;scheme=vcard;S.FN=${contactInfo.name};S.TEL=${contactInfo.phone};S.EMAIL=${contactInfo.email};end;`;
      window.location.href = intentURI;
    }

    // Web Share API (If Available)
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
