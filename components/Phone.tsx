// components/SaveContactButton.js
"use client";
import { Phone } from "lucide-react";
import React from "react";

const SaveContact = () => {
  const handleSaveContact = async () => {
    const contactInfo = {
      name: "Sam Allen",
      phone: "+855964227037",
    };

    const contactString = `BEGIN:VCARD
      VERSION:3.0
      FN:${contactInfo.name}
      TEL:${contactInfo.phone}
      END:VCARD`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: "Contact",
          text: "Sam Allen's Contact",
          files: [
            new File([contactString], "contact.vcf", { type: "text/vcard" }),
          ],
        });
      } else {
        // Fallback for devices that do not support the share API
        const blob = new Blob([contactString], { type: "text/vcard" });
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "contact.vcf";
        document.body.appendChild(a);
        a.click();

        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error("Error sharing contact:", error);
    }
  };

  return (
    <button
      aria-label="Save Contact"
      type="button"
      className="px-4 py-2 mr-1 font-bold capitalize rounded-lg bg-zinc-400 hover:bg-zinc-600 text-zinc-900"
      onClick={handleSaveContact}
    >
      <Phone />
    </button>
  );
};

export default SaveContact;
