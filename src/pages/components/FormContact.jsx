import React from "react";
import { contactSchema } from "../../validations/contactSchema";
import { useFormik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";
import {
  Face6Rounded,
  SubjectRounded,
  EmailRounded,
} from "@mui/icons-material";
import {
  Typography,
  CardContent,
  TextField,
  CardActions,
  Button,
  InputAdornment,
} from "@mui/material";

const FormContact = () => {
  const theme = useTheme();
  const contactInputNames = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
    recaptcha: "",
  };

  const formik = useFormik({
    initialValues: contactInputNames,
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: contactSchema,
  });
  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <CardContent>
        <Grid container>
          <Grid xs={12}>
            <Grid container spacing={2}>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  size="small"
                  color="warning"
                  label="اسمتو بده"
                  name="fullname"
                  variant="outlined"
                  helperText={
                    formik.touched.fullname ? formik.errors.fullname : null
                  }
                  error={Boolean(
                    formik.touched.fullname && formik.errors.fullname
                  )}
                  value={formik.values?.fullname}
                  onChange={formik.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Face6Rounded />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  size="small"
                  color="warning"
                  label="ایمیلتم بده دیگه"
                  name="email"
                  variant="outlined"
                  helperText={formik.touched.email ? formik.errors.email : null}
                  error={Boolean(formik.touched.email && formik.errors.email)}
                  value={formik.values?.email}
                  onChange={formik.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <EmailRounded />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  fullWidth
                  size="small"
                  color="warning"
                  label="موضوع چیه ؟"
                  name="subject"
                  variant="outlined"
                  helperText={
                    formik.touched.subject ? formik.errors.subject : null
                  }
                  error={Boolean(
                    formik.touched.subject && formik.errors.subject
                  )}
                  value={formik.values?.subject}
                  onChange={formik.handleChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SubjectRounded />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  size="small"
                  color="warning"
                  helperText={
                    formik.touched.message ? formik.errors.message : null
                  }
                  error={Boolean(
                    formik.touched.message && formik.errors.message
                  )}
                  value={formik.values?.message}
                  onChange={formik.handleChange}
                  label="هرچه دل تنگت میخواهد بگو :)"
                  name="message"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* for the site key we can use environment variable for that we should create .env file in the root of project and for the name of the variable we should start with REACT_APP_**** */}
        <ReCAPTCHA
          sitekey="6LfuOg8kAAAAAF3512J-YSy2PcoJKU7BF6418nRj"
          theme={theme.palette.mode}
          hl="fa"
          onChange={(value) => {
            formik.setFieldValue("recaptcha", value);
          }}
        />
        {formik.errors.recaptcha && formik.touched.recaptcha && (
          <Typography variant="caption" color="error">
            {formik.errors.recaptcha}
          </Typography>
        )}
        <Button
          variant="outlined"
          color="success"
          type="submit"
          sx={{ mr: 4, mb: 1 }}
        >
          بفرستش
        </Button>
      </CardActions>
    </form>
  );
};

export default FormContact;
