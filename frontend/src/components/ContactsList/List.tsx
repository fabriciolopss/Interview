import { Avatar, Stack } from "@mui/material";
import React from "react";
import { Contact } from "./dtos";
import styles from "./index.module.scss";
import ListItem from "./ListItem";

type Props = {
  contacts: Contact[] | undefined;
};

function List({ contacts }: Props) {
  return (
    <Stack spacing={2} className={styles.listWrapper}>
      {contacts &&
        contacts.map((item: Contact) => {
          return <ListItem item={item} />;
        })}
    </Stack>
  );
}

export default List;
