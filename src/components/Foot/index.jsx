import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

function Foot() {
  return (
    <foot>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#7b1fa2"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>HELP</Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Privacy
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>ACCOUNT</Box>
              <Box>
                <Link href="/" color="inherit">
                  Login
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Register
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>MESSAGES</Box>
              <Box>
                <Link href="/" color="inherit">
                  About Us
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  History
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Discover Local
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Que seria sin un vino &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </foot>
  );
}

export default Foot;
