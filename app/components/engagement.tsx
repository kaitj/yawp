import engagementStyles from "../styles/engagement.module.css";

import { Button, Row } from "react-bootstrap";

const EngagementComponent = () => {
  return (
    <div className={engagementStyles.main}>
      <div className={engagementStyles.container}>
        <Row className={engagementStyles.text}>
          Please join us to celebrate the engagement of
        </Row>
        <Row className={engagementStyles.names}>Lauren & Jason</Row>
        <Row className={engagementStyles.text}>TBD</Row>
        <br />
        <Row className={engagementStyles.text}>Somewhere over the rainbow</Row>
        <br />
        <Button className={engagementStyles.btn}>
          <a href="#" target="_blank">
            RSVP
          </a>
        </Button>
      </div>
    </div>
  );
};

export default EngagementComponent;
