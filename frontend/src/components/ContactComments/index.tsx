import React from "react";
import { createComments, fetchComments } from "../../hooks/Comments";
import { useContactsContext } from "../../contexts/ContactContext";
import { comment, createComment } from "../ContactsList/dtos";
import Comment from "./Comment";
import { Stack } from "@mui/material";
import PersonalizedTextArea from "../personalizedTextArea";
import PersonalizedButton from "../PersonalizedButton";
import styles from "./index.module.scss";
import { useAlertContext } from "../../contexts/AlertContext";

function ContactComments() {
  const { selectedContact } = useContactsContext();

  const [comments, setComments] = React.useState<comment[]>([]);

  const [newComment, setNewComment] = React.useState<createComment>({
    name: "",
    content: "",
  });

  const getComments = async () => {
    if (selectedContact) {
      const response = await fetchComments(selectedContact.id);
      setComments(response);
    }
  };

  React.useEffect(() => {
    setNewComment({ name: "", content: "" });
    getComments();
  }, [selectedContact]);

  const { triggerAlert } = useAlertContext();

  function handleCreateComment(property: string, value: string) {
    setNewComment((prevState) => ({
      ...prevState,
      [property]: value,
    }));
  }

  const handleSubmitComment = async () => {
    if (selectedContact) {
      const response = await createComments(newComment, selectedContact.id);
      if (response) {
        triggerAlert({
          message: "Comment succesfully created!",
          duration: 5000,
          severity: "success",
        });
      } else {
        triggerAlert({
          message: "Error creating comment",
          duration: 5000,
          severity: "error",
        });
      }

      await getComments();
      setNewComment({ name: "", content: "" });
    }
  };

  return (
    <Stack spacing={3}>
      <p>Comments about the freelancer</p>
      <Stack direction={"column"} spacing={1}>
        <PersonalizedTextArea
          placeholder="Type your name"
          value={newComment.name}
          setStoredText={(text) => handleCreateComment("name", text)}
          lines={1}
        />
        <PersonalizedTextArea
          value={newComment.content}
          placeholder="Type your comment"
          setStoredText={(text) => handleCreateComment("content", text)}
          lines={3}
        />

        <PersonalizedButton
          onClick={handleSubmitComment}
          text="Submit comment"
          variant="Primary"
        />
      </Stack>
      <Stack spacing={2} className={styles.commentsWrapper}>
        {comments &&
          comments.map((item) => {
            return <Comment comment={item} />;
          })}
      </Stack>
    </Stack>
  );
}

export default ContactComments;
