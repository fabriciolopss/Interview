import { Box, Stack } from "@mui/material";
import React from "react";
import styles from "./index.module.scss";

type Props = {
  text: string;
  onClick: () => void;
  variant: "Primary" | "blue-first" | "blue-second" | "secondary";
  icon?: React.ReactNode;
  disabled?: boolean;
};

function PersonalizedButton({
  text,
  onClick,
  variant,
  icon,
  disabled = false,
}: Props) {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent={"center"}
      className={disabled ? styles.disabled : styles[variant]}
      onClick={onClick}
      alignItems={"center"}
    >
      {icon && icon}
      <p>{text}</p>
    </Stack>
  );
}

export default PersonalizedButton;
