import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import app from "../../firebaseConfig.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
const db = getFirestore(app);

const initialValues = {
  fullName: "",
  email: "",
  phoneNumber: "",
  schoolName: "",
};

export default function FormDialog(props) {
  const [clientInfo, setClientInfo] = useState(initialValues);

  const handleInputChange = (e) => {
    setClientInfo((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const addToDB = async () => {
    const colRef = collection(db, "salesQuote");
    props.countOfItems[0] = props.finalCost;
    await addDoc(colRef, {
      fullName: clientInfo.fullName,
      email: clientInfo.email,
      phoneNumber: clientInfo.phoneNumber,
      schoolName: clientInfo.schoolName,
      estimatedCosts: props.countOfItems,
      requestedDate: serverTimestamp(),
    });
    setClientInfo(initialValues);
  };

  return (
    <div>
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>Detailed Quote</DialogTitle>
        <DialogContent>
          <DialogContentText>
            After submitting this form, we will be sure to contact you as soon
            as possible.
          </DialogContentText>
          <TextField
            value={clientInfo.fullName}
            required
            autoFocus
            margin="dense"
            id="fullName"
            label="Full Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleInputChange}
          />
          <TextField
            value={clientInfo.email}
            required
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
            onChange={handleInputChange}
          />
          <TextField
            value={clientInfo.phoneNumber}
            required
            autoFocus
            margin="dense"
            id="phoneNumber"
            label="Phone Number"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleInputChange}
          />
          <TextField
            value={clientInfo.schoolName}
            autoFocus
            margin="dense"
            id="schoolName"
            label="School Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              addToDB();
              props.handleClose();
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
