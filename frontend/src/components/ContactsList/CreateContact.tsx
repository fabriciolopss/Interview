import React from "react";
import { createContactType } from "./dtos";
import { Stack } from "@mui/material";
import PersonalizedInput from "../PersonalizedInput";
import styles from "./index.module.scss";
import PersonalizedButton from "../PersonalizedButton";
import { createContact } from "../../hooks/Freelancers";
import { useAlertContext } from "../../contexts/AlertContext";

type Props = {
  setOpen: (open: boolean) => void;
};

function CreateContact({ setOpen }: Props) {
  const [newCreateContact, setNewCreateContact] =
    React.useState<createContactType>({
      name: "",
      average_response_time: "",
      birth_date: "",
      cellphone_number: "",
      description: "",
      email: "",
      job: "",
      profile_photo: "",
    });

  const handleChange = (field: string, content: string) => {
    setNewCreateContact((prev) => ({
      ...prev,
      [field]: content,
    }));
  };

  const { triggerAlert } = useAlertContext();

  return (
    <Stack direction="column" spacing={2}>
      {Object.keys(newCreateContact).map((field) => (
        <Stack
          direction="row"
          spacing={1}
          className={styles.fieldWrapper}
          key={field}
          alignItems={"center"}
        >
          <label htmlFor={field}>{field.replace("_", " ")}:</label>
          <PersonalizedInput
            variant="secondary"
            setStoredContent={(content) => handleChange(field, content)}
            text={field}
            storedContent={(newCreateContact as any)[field]}
          />
        </Stack>
      ))}
      <Stack direction="row" spacing={2}>
        <PersonalizedButton
          variant="secondary"
          onClick={() => {
            setOpen(false);
            triggerAlert({
              message: "Contact creation cancelled",
              severity: "warning",
              duration: 5000,
            });
          }}
          text="Cancel"
        />
        <PersonalizedButton
          variant="Primary"
          onClick={async () => {
            try {
              await createContact(newCreateContact);
              setOpen(false);
              triggerAlert({
                message: "Contact created successfully",
                severity: "success",
                duration: 5000,
              });
            } catch (error) {
              console.error(error);
              triggerAlert({
                message: "Error creating contact",
                severity: "error",
                duration: 5000,
              });
            }
          }}
          text="Submit"
        />
      </Stack>
    </Stack>
  );
}

export default CreateContact;
