import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Backdrop
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
import { useModalStore } from "./useModalStore";

const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  minWidth: 400,
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const ReserveForm = () => {
//   const navigate = useNavigate();
  const isOpen = useModalStore(state => state.isReserveOpen);
  const closeReserve = useModalStore(state => state.closeReserve);

  const handleClose = () => {
    closeReserve();
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="reserve-modal-title"
      aria-describedby="reserve-modal-description"
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
          sx: {
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(0,0,0,0.3)"
          }
        }
      }}
    >
      <Box sx={modalStyle}>
        <Typography id="reserve-modal-title" variant="h6" component="h2" mb={2}>
          Reservation Form
        </Typography>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            address: "",
            phone: "",
            email: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            console.log("Form submitted", values);
            actions.setSubmitting(false);
            handleClose(); 
          }}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <Field
                as={TextField}
                label="First Name"
                name="firstName"
                fullWidth
                margin="normal"
                error={touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
              />
              <Field
                as={TextField}
                label="Last Name"
                name="lastName"
                fullWidth
                margin="normal"
                error={touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
              />
              <Field
                as={TextField}
                label="Address"
                name="address"
                fullWidth
                margin="normal"
                error={touched.address && !!errors.address}
                helperText={touched.address && errors.address}
              />
              <Field
                as={TextField}
                label="Phone"
                name="phone"
                fullWidth
                margin="normal"
                error={touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
              />
              <Field
                as={TextField}
                label="Email"
                name="email"
                fullWidth
                margin="normal"
                error={touched.email && !!errors.email}
                helperText={touched.email && errors.email}
              />
              <Button
                type="submit"
                variant="contained"
                color="success"
                fullWidth
                sx={{ mt: 2 }}
                disabled={isSubmitting}
              >
                Submit Reservation
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default ReserveForm;
