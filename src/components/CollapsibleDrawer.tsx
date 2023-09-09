import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

interface CollapsibleDrawerProps {
  isOpen: boolean;
  onToggle: () => void;
  logo: React.ReactNode;
  menuItems?: React.ReactNode[];
  logoutButton: React.ReactNode;
}

const CollapsibleDrawer: React.FC<CollapsibleDrawerProps> = ({
  isOpen,
  onToggle,
  logo,
  menuItems,
  logoutButton,
}) => {
  const handleToggle = () => {
    onToggle();
  };

  return (
    <>
      <IconButton onClick={handleToggle}>
        <MenuIcon />
      </IconButton>
      <Drawer open={isOpen} onClose={handleToggle}>
        {isOpen ? (
          <div>
            {/* Expanded Drawer Content */}
            <div>{logo}</div>
            <div>{menuItems}</div>
            {logoutButton}
          </div>
        ) : (
          <div>
            {/* Collapsed Drawer Content */}
            <div>{logo}</div>
            {logoutButton}
          </div>
        )}
      </Drawer>
    </>
  );
};

export default CollapsibleDrawer;
