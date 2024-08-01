"use client";
import CloseIcon from "@mui/icons-material/Close";
import { Box, SxProps } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import * as React from "react";

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  sx?: SxProps;
};

export default function RUModal({
  open,
  setOpen,
  title,
  children,
  sx,
  subtitle,
}: TProps) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        sx={{ width: "900px" }}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{
            fontFamily: "Rubik",
            fontSize: "25px",
            borderBottom: "1px",
            borderColor: "black",
          }}
          id="customized-dialog-title"
        >
          {title}
        </DialogTitle>
        <p className=" text-sm font-normal font-poppins pl-6 mb-3 pr-3">
          {subtitle}
        </p>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 1,
            top: 1,

            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box>{children}</Box>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
