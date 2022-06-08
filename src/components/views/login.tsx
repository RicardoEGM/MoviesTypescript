import React, { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { User } from "../../models/interface/User";
import { useSnackbar } from "notistack";
import { ApiLogin } from "../../api/login";
import { ContextUser } from "../../models/interface/ContextUser";

const theme = createTheme();
export default function Login() {
  const userContext = useContext(ContextUser);
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
          let copyStatus = state;
          copyStatus.token = response.data.token;
          setState(copyStatus);
          localStorage.setItem("user", JSON.stringify(copyStatus));
          userContext.updateUser(copyStatus);
          enqueueSnackbar("Login Successful", { variant: "success",  autoHideDuration: 3000 });
        } else {
          enqueueSnackbar("Login failed", { variant: "error",  autoHideDuration: 3000 });
        }
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar("Login failed", { variant: "error",  autoHideDuration: 3000 });
      });
  };

  let titleTooltip =
    "You will be logged in as a guest user, the points or favorite movies you have selected will only be active for 3 days.";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let copyStatus = { ...state };
    const name = event.target.name as keyof User;
    copyStatus[name] = event.target.value;

    setState(copyStatus);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{ boxShadow: 2 }}
        style={{
          borderRadius: "10px",
          paddingBottom: "20px",
          background: "white",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Login
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
            <Tooltip title={titleTooltip}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Tooltip>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
