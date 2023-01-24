import { useState } from "react";
import PageContainer from "./PageContainer";
import { Sidebar } from "../components/sidebar";
import MainLayout from "../layouts/MainLayout";
import Page from "../pages/components/Page";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import { DrawerActionButton } from "../components/drawer";
import { Home, About, Resume, Courses, Comments, Contact } from "../pages";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useEffect } from "react";

function AppContainer() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mode, setMode] = useState();
  const handlePageNumber = (event, newValue) => {
    setPageNumber(newValue);
  };

  const theme = useTheme();
  // when the breakpoint is higher than md the variable becomes true
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  // with this line we detect the theme of the os of the user
  // not only the os but the browser is also included
  // it will return boolean
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme : dark)");

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, []);

  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false);
    }
  }, [isMdUp]);

  const handleChangeTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <MainContext.Provider
      value={{
        pageNumber,
        handlePageNumber,
        handleChangeTheme,
        drawerOpen,
        setDrawerOpen,
      }}
    >
      <MainLayout mode={mode}>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <DrawerActionButton />
        <PageContainer>
          <Page value={pageNumber} index={0}>
            <Home />
          </Page>
          <Page value={pageNumber} index={1}>
            <About />
          </Page>
          <Page value={pageNumber} index={2}>
            <Resume />
          </Page>
          <Page value={pageNumber} index={3}>
            <Courses />
          </Page>
          <Page value={pageNumber} index={4}>
            <Comments />
          </Page>
          <Page value={pageNumber} index={5}>
            <Contact />
          </Page>
        </PageContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default AppContainer;
