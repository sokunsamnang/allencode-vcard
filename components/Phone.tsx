"use client";
import React from "react";
import { ContactIcon } from "lucide-react";

const AddContactPage: React.FC = () => {
  return (
    <div>
      <a href="https://allencode.dev/samallen.vcf">
        <button
          aria-label="Open Contact"
          type="button"
          className="p-3 mx-1 font-bold capitalize rounded-lg bg-zinc-400 hover:bg-zinc-600"
        >
          <ContactIcon />
        </button>
      </a>
    </div>
  );
};

export default AddContactPage;
