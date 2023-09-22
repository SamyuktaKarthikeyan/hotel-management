import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { useSelector } from 'react-redux';

import DialogActions from "@mui/material/DialogActions";
const FormContainer = styled("div")({
  maxWidth: "400px",
  margin: "0 auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  backgroundColor: "#f9f9f9",
  position:"relative",
  top: "100px",
});

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    experience: "",
    areas: "",
    star: 0,
  });
  const loggedInUser = useSelector(state => state.loggedInUser);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (event, newValue) => {
    setFormData({ ...formData, email:loggedInUser.email, star: newValue });
  };

  const [openDialog, setOpenDialog] = useState(false); 


  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feedback submitted successfully!");
    axios
      .post("http://localhost:8080/api/food/addFeedback", formData)
      .then((response) => {
        console.log("Feedback submitted successfully!");
        setOpenDialog(true); // Open the dialog on successful submission
        // Reset the form after successful submission
        setFormData({
          name: "",
          email: loggedInUser.email,
          experience: "",
          areas: "",
          star: 0,
        });
      })
      .catch((error) => {
        console.error("Error submitting feedback:", error);
      });
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div style={{backgroundImage:"url(https://lowneyarch.com/wp-content/uploads/2021/06/OX_OAKOX_Corner_Bunkbead_Guestroom_1-1000px.jpg)", height:"150vh"}}>
    <FormContainer>
      <Typography variant="h5" gutterBottom>
        Feedback Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
        label="Email"
        name="email"
        type="email"
        value={loggedInUser.email}
        // onChange={handleChange}
        fullWidth
        margin="normal"
        required
        disabled // Set the disabled prop to make it disabled
      />
        <TextField
          label="Experience"
          placeholder="Share your experience with us!"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Improvement"
          name="areas"
          placeholder="Do you find any areas of improvement?"
          value={formData.areas}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <Box sx={{ "& > legend": { mt: 2 } }}>
          <Typography component="legend">Rating</Typography>
          <Rating
            name="simple-controlled"
            value={formData.star} // Set the value from formData
            onChange={handleRatingChange} // Update the formData on rating change
          />
        </Box>
        <Button variant="contained" type="submit" color="primary">
          Submit Feedback
        </Button>
      </form>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Feedback Sent Successfully!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Thank you for your feedback. We appreciate your time and insights.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
          <Button
            onClick={() => {
              // Navigate back to info.js page (replace '/info' with the correct path)
              window.location.href = "/dashboard";
            }}
            color="primary"
            autoFocus
          >
            Back to Dashboard
          </Button>
        </DialogActions>
      </Dialog>


    </FormContainer>
    </div>
  );
};

export default FeedbackForm;