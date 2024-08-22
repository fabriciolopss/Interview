import { Stack } from "@mui/material";
import React from "react";
import styles from "./index.module.scss";

type Props = {
  title: string;
  info: string | undefined;
};

function SmallCard({ title, info }: Props) {
  return (
    <Stack spacing={1.5} className={styles.smallCardWrapper}>
      <p className={styles.smallTitle}>{title}</p>
      <p className={styles.smallInfo}>{info}</p>
    </Stack>
  );
}

export default SmallCard;
