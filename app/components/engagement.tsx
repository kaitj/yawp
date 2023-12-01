import engagementStyles from "../styles/engagement.module.css";

import Image from "next/image";
import { Button, Row } from "react-bootstrap";

import confettiImg from "../../public/photos/gold-sparkles.png";

const EngagementComponent = () => {
  return (
    <div className={engagementStyles.main}>
      <div className={engagementStyles.confettiContainer}>
        <Image
          className={engagementStyles.confetti}
          src={confettiImg}
          alt="Confetti"
        />
      </div>

      <div className={engagementStyles.container}>
        <Row
          className={`${engagementStyles.text} ${engagementStyles.welcomeText}`}
        >
          Please join us to celebrate the engagement of
        </Row>
        <Row className={engagementStyles.names}>Lauren & Jason</Row>
        <Row className={engagementStyles.text}>December 29, 2023</Row>
        <br />
        <Row className={engagementStyles.text}>
          Evans Room @ Glenerin Inn & Spa <br />
          1695 The Collegeway, Mississauga, Ontario
        </Row>
        <br />
        <Button className={engagementStyles.btn}>
          <a href="https://forms.gle/oDLw1G1DmDCs6CdY6" target="_blank">
            RSVP
          </a>
        </Button>
      </div>
    </div>
  );
};

export default EngagementComponent;
