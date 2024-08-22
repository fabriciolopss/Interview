import { Avatar, Stack } from "@mui/material";
import React from "react";
import { useContactsContext } from "../../contexts/ContactContext";
import styles from "./index.module.scss";
import dayjs from "dayjs";
import { BsTelephoneFill } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BsWechat } from "react-icons/bs";
import PersonalizedButton from "../PersonalizedButton";

function BigCard() {
  const { selectedContact } = useContactsContext();
  return (
    <Stack
      direction="column"
      spacing={2}
      padding="16px"
      className={styles.bigCardWrapper}
    >
      <Stack spacing={2} direction="row">
        <Avatar sx={{ width: "80px", height: "80px" }}></Avatar>
        <Stack direction="column" justifyContent={"space-evenly"}>
          <p className={styles.title}>{selectedContact?.name}</p>
          <p className={styles.subTitle}>{selectedContact?.job}</p>
          <p className={styles.creationDate}>
            {dayjs(new Date(selectedContact?.created_at ?? "")).format(
              "DD/MM/YYYY HH:mm:ss"
            )}
          </p>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={0.5}>
        <BsTelephoneFill className={styles.icon} />
        <FaVideo className={styles.icon} />
        <IoChatbox className={styles.icon} />
        <MdEmail className={styles.icon} />
      </Stack>
      <PersonalizedButton
        text="Request a quote"
        onClick={() => {}}
        variant="Primary"
        icon={<BsWechat fontSize={"24px"} />}
      />
    </Stack>
  );
}

export default BigCard;
