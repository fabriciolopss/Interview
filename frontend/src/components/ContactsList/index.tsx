import { Skeleton, Stack } from "@mui/material";
import React from "react";
import PersonalizedInput from "../PersonalizedInput";
import List from "./List";
import { Filters, Contact } from "./dtos";
import { FaSearch } from "react-icons/fa";
import { fetchContacts } from "../../hooks/Freelancers";
import {
  ContactsContext,
  useContactsContext,
} from "../../contexts/ContactContext";
import PersonalizedModal from "../personalizedModal";
import CreateContact from "./CreateContact";
import PersonalizedButton from "../PersonalizedButton";

function ContactsList() {
  const [filters, setFilters] = React.useState<Filters>({ name: "" });

  const [openModal, setOpenModal] = React.useState<boolean>(false);

  function handleFiltersChange(content: string) {
    setFilters({ ...filters, name: content });
  }

  const { setContacts, contacts } = useContactsContext();

  const steps: { [title: string]: React.ReactNode } = {
    "Create a freelancer profile": <CreateContact setOpen={setOpenModal} />,
  };

  React.useEffect(() => {
    const loadContacts = async () => {
      const response = await fetchContacts();
      setContacts(response);
    };

    loadContacts();
  }, []);

  return (
    <Stack direction="column" spacing={1} height={"100%"}>
      <PersonalizedModal
        steps={steps}
        openModal={openModal}
        setOpenModal={setOpenModal}
        footer={false}
      />
      <p>Displayed freelancers</p>
      <PersonalizedInput
        text={"Search"}
        variant="primary"
        setStoredContent={handleFiltersChange}
        storedContent={filters.name}
        icon={<FaSearch fontSize={"24px"} />}
      />
      <PersonalizedButton
        variant="Primary"
        onClick={() => {
          setOpenModal(true);
        }}
        text="Create a new freelancer profile"
      />
      {contacts ? (
        <List contacts={contacts} />
      ) : (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="40px"
          animation="wave"
          sx={{ bgcolor: "white" }}
        ></Skeleton>
      )}
    </Stack>
  );
}

export default ContactsList;
