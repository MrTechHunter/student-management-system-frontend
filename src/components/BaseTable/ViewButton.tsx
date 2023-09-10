import React from "react";

interface ViewButtonProps {
  onClick: () => void;
}

const ViewButton: React.FC<ViewButtonProps> = ({ onClick }) => {
  return (
    <div className="text-[#3366CC] underline" onClick={onClick}>
      مشاهده
    </div>
  );
};

export default ViewButton;
