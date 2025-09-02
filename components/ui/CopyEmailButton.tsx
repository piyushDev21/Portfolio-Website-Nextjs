import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { ReactNode } from "react";

type MagicButtonProps = {
  title: string;
  icon?: ReactNode;
  handleClick?: () => void;
  otherClasses?: string;
};

const MagicButton = ({ title, icon, handleClick, otherClasses }: MagicButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${otherClasses || ""}`}
    >
      {icon}
      {title}
    </button>
  );
};

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("your.email@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="mt-5 relative">
      <MagicButton
        title={copied ? "Email Copied!" : "Copy my email address"}
        icon={<IoCopyOutline />}
        handleClick={handleCopy}
        otherClasses="bg-[#161A31] text-white hover:bg-[#1e223e]"
      />
      {copied && (
        <span className="absolute text-sm text-green-500 -bottom-6 right-0 animate-fade">
          Email Copied!
        </span>
      )}
    </div>
  );
};

export default CopyEmailButton;
