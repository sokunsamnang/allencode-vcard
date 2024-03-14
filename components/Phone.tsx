"use client";
import React from "react";
import { Phone } from "lucide-react";

const AddContactPage: React.FC = () => {
  const contactInfo = {
    name: "Sam Allen",
    phone: "+855964227037",
    email: "sokunsamnang45@gmail.com",
  };

  const handleDownloadContact = () => {
    // Create the vCard String
    const contactString = `BEGIN:VCARD
      VERSION:3.0
      FN:${contactInfo.name}
      TEL:${contactInfo.phone}
      EMAIL:${contactInfo.email}
      END:VCARD`;

    // Convert vCard string to a Blob
    const blob = new Blob([contactString], {
      type: "text/vcard;charset=utf-8",
    });

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "samallen.vcf");

    // Append the link to the body and trigger the click event
    document.body.appendChild(link);
    link.click();

    // Clean up: remove the temporary link and revoke the URL
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <button
        aria-label="Download Contact"
        type="button"
        className="p-3 mx-1 font-bold capitalize rounded-lg bg-zinc-400 hover:bg-zinc-600"
        onClick={handleDownloadContact}
      >
        <Phone />
      </button>
    </div>
  );
};

export default AddContactPage;
