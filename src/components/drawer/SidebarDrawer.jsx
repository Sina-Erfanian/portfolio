import { Drawer } from "@mui/material";
import { useContext } from "react";
import MainContext from "../../context";
import { SidebarContent } from "../sidebar";

const SidebarDrawer = () => {
  const { drawerOpen, setDrawerOpen } = useContext(MainContext);
  return (
    <Drawer
      open={drawerOpen}
      variant="temporary"
      onClose={() => setDrawerOpen(false)}
      sx={{
        "& .MuiDrawer-paper": { width: 300 },
        display: {
          xs: "block",
          sm: "block",
          md: "none",
        },
      }}
    >
      {/* Box is exactly like a div but it can take sx prop */}
      <SidebarContent />
    </Drawer>
  );
};

export default SidebarDrawer;
