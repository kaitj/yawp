import engagementStyles from "../styles/engagement.module.css";

import Row from "react-bootstrap/Row";

const EngagementComponent = () => {
  return (
    <div className={engagementStyles.main}>
      <Row className={engagementStyles.text}>
        Please join us to celebrate the engagement of
      </Row>

      <Row className={engagementStyles.names}>Lauren & Jason</Row>

      <Row className={engagementStyles.text}>TBD</Row>
      <br />
      <Row className={engagementStyles.text}>Somewhere over the rainbow</Row>
    </div>
  );
};

export default EngagementComponent;
