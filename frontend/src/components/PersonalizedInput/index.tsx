import React from "react";
import styles from "./index.module.scss";
import { Stack } from "@mui/material";

type Props = {
  variant: "primary" | "secondary";
  text: string;
  storedContent: string;
  setStoredContent: (content: string) => void;
  icon?: React.ReactNode;
};

function PersonalizedInput({
  variant,
  text,
  storedContent,
  setStoredContent,
  icon,
}: Props) {
  return (
    <Stack
      spacing={2}
      direction="row"
      alignItems={"center"}
      className={`${styles.baseInput} ${styles[variant]}`}
    >
      {icon}
      <input
        type="text"
        value={storedContent}
        onChange={(e) => setStoredContent(e.target.value)}
      />
    </Stack>
  );
}

export default PersonalizedInput;
