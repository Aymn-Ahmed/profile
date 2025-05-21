import { Box } from "@mui/material";
import AboutMeMain from "../Combonents/aboutMeSection/AboutMeMain";
import ContactSectione from "../Combonents/Contect/ContactSection";
import ContactInfo from "../Combonents/Contect/ContactInfo";

function AboutPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
        padding: 5,
      }}
    >
      <AboutMeMain isHome={false} />
      <ContactSectione />
      {/* <ContactInfo /> */}
    </Box>
  );
}
export default AboutPage;
