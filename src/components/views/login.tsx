import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { User } from "../../models/interface/User";
import { useSnackbar } from "notistack";
import { ApiLogin } from "../../api/login";

const theme = createTheme();
export default function Login() {
  const { enqueueSnackbar } = useSnackbar();
  const defaultUser: User = {
    id: "",
    email: "eve.holt@reqres.in",
    password: "cityslicka",
    token: "",
  };

  const [state, setState] = React.useState<User>(defaultUser);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    ApiLogin.Login.GetUserByID(state.email, state.password)
      .then((response) => {
        if (response.status === 200) {
          setState({ ...state, token: response.data.token });
          localStorage.setItem("user", JSON.stringify(state));
        } else {
          enqueueSnackbar("Login failed", { variant: "error" });
        }
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar("Login failed", { variant: "error" });
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let copyStatus = { ...state };
    const name = event.target.name as keyof User;
    copyStatus[name] = event.target.value;

    setState(copyStatus);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={state.email}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={state.password}
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
