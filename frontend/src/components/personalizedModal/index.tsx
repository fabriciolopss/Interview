import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import stylesDesktop from "./index.module.scss";
import stylesMobile from "./mobile.module.scss";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import { IoClose } from "react-icons/io5";
import PersonalizedButton from "../PersonalizedButton";
import { useAlert } from "../../hooks/useAlert";
import { useAlertContext } from "../../contexts/AlertContext";

type Props = {
  steps: { [title: string]: React.ReactNode };
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
  setSavedNewInfo?: (savedNewInfo: boolean) => void;
  footer?: boolean;
};

export default function PersonalizedModal({
  steps,
  openModal,
  setOpenModal,
  setSavedNewInfo,
  footer = true,
}: Props) {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [modalNumber, setModalNumber] = useState<number>(0);
  const stepsSize = Object.keys(steps).length;
  const modalRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState<number>(0);
  const { triggerAlert } = useAlertContext();

  useLayoutEffect(() => {
    if (modalRef.current) {
      setMaxHeight(modalRef.current.scrollHeight);
    }
  }, [modalNumber, openModal]);

  return (
    <>
      {openModal && (
        <Box
          className={
            isMediumScreen
              ? stylesDesktop.backgroundWrapper
              : stylesMobile.backgroundWrapper
          }
          onClick={() => {
            setOpenModal(false);
          }}
        >
          <Box
            ref={modalRef}
            className={
              isMediumScreen
                ? stylesDesktop.modalWrapper
                : stylesMobile.modalWrapper
            }
            style={{ maxHeight: maxHeight || "500px" }}
            onClick={(e) => e.stopPropagation()}
          >
            {Object.entries(steps).map(
              ([title, node], index) =>
                index === modalNumber && (
                  <React.Fragment key={title}>
                    <Box className={stylesDesktop.modalHeader}>
                      <Stack
                        direction="row"
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <Stack direction="column">
                          <p className={stylesDesktop.stepIndicator}>
                            Passo {modalNumber + 1}/{stepsSize}
                          </p>
                          <p className={stylesDesktop.headerTitle}>{title}</p>
                        </Stack>
                        <IoClose
                          fontSize={"32px"}
                          onClick={() => {
                            setOpenModal(false);
                          }}
                        />
                      </Stack>
                    </Box>
                    <Box className={stylesDesktop.modalBody}>{node}</Box>
                    {footer && (
                      <Stack
                        className={stylesDesktop.modalFooter}
                        direction="row"
                        justifyContent={"flex-end"}
                      >
                        <Stack
                          direction="row"
                          width={"300px"}
                          spacing={2}
                          justifyContent={"flex-end"}
                        >
                          <PersonalizedButton
                            text="Cancel"
                            variant="blue-second"
                            onClick={() => {
                              setOpenModal(false);
                              triggerAlert({
                                message:
                                  "Your freelancer creation was cancelled",
                                duration: 5000,
                                severity: "warning",
                              });
                            }}
                          />
                          <PersonalizedButton
                            text="Create"
                            variant="blue-first"
                            onClick={() => {}}
                          />
                        </Stack>
                      </Stack>
                    )}
                  </React.Fragment>
                )
            )}
          </Box>
        </Box>
      )}
    </>
  );
}
