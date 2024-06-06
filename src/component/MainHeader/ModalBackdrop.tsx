"use client";
import { useRouter } from "next/navigation";

const ModalBackdrop = () => {
  const router = useRouter();

  const onClose = () => {
    router.back();
  };
  return <div className="modal-backdrop" onClick={onClose} />;
};

export default ModalBackdrop;
