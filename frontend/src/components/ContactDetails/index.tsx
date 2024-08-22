import { Stack } from "@mui/material";
import React from "react";
import BigCard from "./BigCard";
import SmallCard from "./SmallCard";
import { useContactsContext } from "../../contexts/ContactContext";
import PersonalizedButton from "../PersonalizedButton";
import { MdFeedback } from "react-icons/md";

function ContactDetails() {
  const { selectedContact } = useContactsContext();
  return (
    <Stack direction="column" spacing={2}>
      <BigCard />
      <SmallCard title={"Birth date"} info={selectedContact?.birth_date} />
      <SmallCard
        title={"CellPhone number"}
        info={selectedContact?.cellphone_number}
      />
      <SmallCard
        title={"Job description"}
        info={selectedContact?.description}
      />
      <SmallCard
        title={"Average response time"}
        info={selectedContact?.average_response_time}
      />
      <SmallCard title={"Email"} info={selectedContact?.email} />
    </Stack>
  );
}

export default ContactDetails;
