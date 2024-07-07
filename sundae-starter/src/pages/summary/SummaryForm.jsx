import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

export default function SummaryForm() {
  const [isChecked, setIsChecked] = useState(false);

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   setOrderPhase("completed");
  // }

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>아이스크림이 실제로 배달되진 않습니다</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}>terms and conditions</span>
      </OverlayTrigger>
    </span>
  );
  return (
    <div>
      <Form>
        <Form.Group controlId="terms-and-conditions">
          <Form.Check
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            label={checkboxLabel}
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!isChecked}>
          Confirm order
        </Button>
      </Form>
    </div>
  );
}
