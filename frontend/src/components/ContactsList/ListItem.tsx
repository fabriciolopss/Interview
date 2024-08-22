import { Avatar, Stack } from "@mui/material";
import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import styles from "./index.module.scss";
import { Contact } from "./dtos";
import { useContactsContext } from "../../contexts/ContactContext";

type Props = {
  item: Contact;
};

function ListItem({ item }: Props) {
  const { selectedContact, setSelectedContact } = useContactsContext();

  return (
    <Stack
      direction="row"
      alignItems={"center"}
      spacing={2}
      className={`${styles.listItemWrapper} ${
        selectedContact && selectedContact.id === item.id
          ? styles.selected
          : undefined
      }`}
      justifyContent={"space-between"}
      onClick={() => {
        setSelectedContact(item);
      }}
    >
      <Stack direction="row" alignItems={"center"} spacing={2}>
        <Avatar />
        <Stack direction="column" justifyContent={"center"}>
          <p>{item.name}</p>
          <p style={{ fontSize: "12px" }}>{item.job}</p>
        </Stack>
      </Stack>
      <div className={styles.favoriteIcon}>
        <MdFavoriteBorder fontSize={"32px"} />
      </div>
    </Stack>
  );
}

export default ListItem;
