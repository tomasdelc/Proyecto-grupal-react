import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Grid } from "@mui/material";

function Friend() {
  return (
    <friend>
      <Paper
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        style={{
          backgroundImage: `url(https://stringfixer.com/files/1243196138.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "250px",
        }}
        color="white"
      >
        <Grid item xs={12} sm={4}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              paddingTop: "20px",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                marginTop: "60px",
                fontSize: "35px",
              }}
            >
              Contact with us
            </h1>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ marginLeft: "30px", marginRight: "3.125rem" }}>
                <Box>
                  <Link href="https://es-la.facebook.com/" color="inherit">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      size={"3x"}
                      color={"white"}
                    />{" "}
                  </Link>
                </Box>
              </div>

              <div style={{ marginLeft: "30px", marginRight: "3.125rem" }}>
                <Box>
                  <Link href="https://www.instagram.com/" color="inherit">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size={"3x"}
                      color={"white"}
                    />{" "}
                  </Link>
                </Box>
              </div>

              <div style={{ marginLeft: "30px", marginRight: "3.125rem" }}>
                <Box>
                  <Link
                    href="https://twitter.com/iniciarsesion?lang=es"
                    color="inherit"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      size={"3x"}
                      color={"white"}
                    />{" "}
                  </Link>
                </Box>
              </div>

              <div style={{ marginLeft: "30px", marginRight: "3.125rem" }}>
                <Box>
                  <Link
                    href="https://www.whatsapp.com/?lang=es"
                    color="inherit"
                  >
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      size={"3x"}
                      color={"white"}
                    />{" "}
                  </Link>
                </Box>
              </div>
            </div>
          </div>
        </Grid>
      </Paper>
    </friend>
  );
}

export default Friend;
