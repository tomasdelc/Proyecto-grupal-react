import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";

function Foot() {
  return (
    <foot>
      <Box
        px={{ xs: 3, sm: 5 }}
        py={{ xs: 3, sm: 5 }}
        bgcolor="#7b1fa2"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} textAlign="center" marginBottom="1.875rem">
                HELP
              </Box>
              <Box>
                <Link href="/" color="inherit" fontSize="0.9375rem">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" fontSize="0.9375rem">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" fontSize="0.9375rem">
                  Privacy
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} textAlign="center" marginBottom="1.875rem">
                ACCOUNT
              </Box>
              <Box>
                <Link href="/" color="inherit" fontSize="0.9375rem">
                  Login
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" fontSize="0.9375rem">
                  Register
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} textAlign="center" marginBottom="1.875rem">
                MESSAGES
              </Box>
              <Box>
                <Link href="/" color="inherit" fontSize="0.9375rem">
                  About Us
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" fontSize="0.9375rem">
                  History
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" fontSize="0.9375rem">
                  Discover Local
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 5 }} pb={{ xs: 5, sm: 0 }}>
            <FaCcMastercard fontSize="2.5rem" color="inherit" />{" "}
            <FaCcVisa fontSize="2.5rem" color="inherit" /> <br />
            Que seria sin un vino &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </foot>
  );
}

export default Foot;
