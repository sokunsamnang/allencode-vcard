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
    const contactName = encodeURIComponent(contactInfo.name);
    const contactPhone = encodeURIComponent(contactInfo.phone);
    const contactEmail = encodeURIComponent(contactInfo.email);

    // iOS Contacts URI
    const iOSContactsURI = `contacts://add?name=${contactName}&phone=${contactPhone}&email=${contactEmail}`;

    // Open the Contacts app (or prompt the user to open it)
    window.location.href = iOSContactsURI;
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
