import { Stack } from "@mui/material";
import React from "react";
import { comment } from "../ContactsList/dtos";
import dayjs from "dayjs";
import styles from "./index.module.scss";

type Props = {
  comment: comment;
};

function Comment({ comment }: Props) {
  return (
    <Stack className={styles.commentWrapper} spacing={2}>
      <p className={styles.title}>{comment.name}</p>
      <p className={styles.content}>{comment.content}</p>
      <Stack direction="row" justifyContent={"flex-end"}>
        <p className={styles.timeDisplay}>
          {dayjs(new Date(comment.date)).format("MMM D : h:mm A")}
        </p>
      </Stack>
    </Stack>
  );
}

export default Comment;
