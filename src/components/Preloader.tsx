import { useEffect, useState } from "react";
import logoSga from "@/assets/logo-sga.svg";

interface PreloaderProps {
  onFinish: () => void;
}

const Preloader = ({ onFinish }: PreloaderProps) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1800);

    const removeTimer = setTimeout(() => {
      onFinish();
    }, 2300);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <img
        src={logoSga}
        alt="Logo SGA"
        className="w-48 animate-pulse"
      />
      <div className="mt-8 w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-[#de0b18] rounded-full animate-loading" />
      </div>
    </div>
  );
};

export default Preloader;
