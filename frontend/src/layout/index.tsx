import { Stack } from "@mui/material";
import React from "react";
import styles from "./index.module.scss";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <Stack
      direction={"column"}
      spacing={1}
      padding="32px"
      height={"calc(100% - 64px)"}
    >
      {children}
    </Stack>
  );
}

export default Layout;
