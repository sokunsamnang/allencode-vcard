"use client";
import { Phone } from "lucide-react";
import React from "react";

const SaveContact: React.FC = () => {
  const createVCardString = (contactInfo: {
    name: string;
    phone: string;
  }): string => {
    return `BEGIN:VCARD
      VERSION:3.0
      FN:${contactInfo.name}
      TEL:${contactInfo.phone}
      END:VCARD`;
  };

  const handleShareContact = async (contactString: string) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Contact",
          text: `Allen's Contact`,
          files: [
            new File([contactString], "contact.vcf", { type: "text/vcard" }),
          ],
        });
      } else {
        // Fallback for devices that do not support the share API
        downloadContact(contactString);
      }
    } catch (error) {
      console.error("Error sharing contact:", error);
    }
  };

  const downloadContact = (contactString: string) => {
    const blob = new Blob([contactString], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "contact.vcf";
    document.body.appendChild(a);
    a.click();

    window.URL.revokeObjectURL(url);
  };

  const handleSaveContact = () => {
    const contactInfo = {
      name: "Sam Allen",
      phone: "+855964227037",
    };

    const contactString = createVCardString(contactInfo);
    handleShareContact(contactString);
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
