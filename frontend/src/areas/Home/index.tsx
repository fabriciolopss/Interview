import { Grid, Stack } from "@mui/material";
import React from "react";
import styles from "./index.module.scss";
import ContactsList from "../../components/ContactsList";
import { ContactsContext } from "../../contexts/ContactContext";
import { Contact } from "../../components/ContactsList/dtos";
import ContactDetails from "../../components/ContactDetails";
import ContactComments from "../../components/ContactComments";

function Home() {
  const [contacts, setContacts] = React.useState<Contact[] | null>();
  const [selectedContact, setSelectedContact] =
    React.useState<Contact | null>();

  return (
    <ContactsContext.Provider
      value={{ contacts, setContacts, selectedContact, setSelectedContact }}
    >
      <Stack height={"100%"}>
        <Grid container columnGap={2} height="100%">
          <Grid
            className={styles.cardWrapper}
            item
            xs={3.8}
            maxHeight={"100%"}
            overflow={"auto"}
            height={"fit-content"}
          >
            <ContactsList />
          </Grid>
          {selectedContact && (
            <Grid
              className={styles.cardWrapper}
              item
              xs={3.8}
              height={"fit-content"}
              maxHeight={"100%"}
              overflow={"auto"}
            >
              <ContactDetails></ContactDetails>
            </Grid>
          )}
          <Grid
            className={styles.cardWrapper}
            item
            xs={3.8}
            maxHeight={"100%"}
            height={"fit-content"}
            overflow={"auto"}
          >
            {selectedContact && <ContactComments />}
          </Grid>
        </Grid>
      </Stack>
    </ContactsContext.Provider>
  );
}

export default Home;
