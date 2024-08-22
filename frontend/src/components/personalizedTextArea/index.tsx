import { Box } from "@mui/material";
import React from "react";
import styles from "./index.module.scss";

type Props = {
  placeholder: string;
  setStoredText?: (text: string) => void;
  lines: number;
  value: string;
};

export default function PersonalizedTextArea({
  placeholder,
  setStoredText,
  lines,
  value,
}: Props) {
  return (
    <Box className={styles.textAreaWrapper}>
      <textarea
        rows={lines}
        className={styles.textArea}
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          if (setStoredText) {
            setStoredText(event.target.value);
          }
        }}
      ></textarea>
    </Box>
  );
}
