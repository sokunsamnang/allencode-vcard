"use client";
import { LucideQrCode } from "lucide-react";
import QRCode from "qrcode.react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import React, { useRef } from "react";

export default function QrCode(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const qrCodeRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    onOpen();
  };

  const handleDownload = () => {
    const canvas = qrCodeRef.current?.getElementsByTagName("canvas")[0];
    if (canvas) {
      const url = canvas.toDataURL("image/png");

      const a = document.createElement("a");
      a.href = url;
      a.download = "allen-qrcode.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <>
      <button
        aria-label="Open QR Code Modal"
        type="button"
        className="p-3 mx-1 font-bold capitalize rounded-lg bg-zinc-400 hover:bg-zinc-600"
        onClick={handleOpen}
      >
        <LucideQrCode />
      </button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalBody>
            <div className="self-center m-4" ref={qrCodeRef}>
              <QRCode value="https://www.allencode.dev/" size={200} />
            </div>
          </ModalBody>
          <ModalFooter className="self-center w-1/2">
            <Button className="w-full" color="primary" onClick={handleDownload}>
              Download QR Code
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
