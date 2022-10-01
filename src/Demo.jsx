import { Anchor, Button, Group, Stepper } from "@mantine/core";
import React, { useState } from "react";
import "./Demo.css";
const Demo = () => {
  const [active, setActive] = useState(1);
  const nextStep = () => {
    setActive((current) => (current < 3 ? current + 1 : current));
  };
  const prevStep = () => {
    setActive((current) => (current > 0 ? current - 1 : current));
  };

  return (
    <div className="box">
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="First Step" description="Create an account">
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step label="Second Step" description="Verify email">
          Step 2 content: Verify Email
        </Stepper.Step>
        <Stepper.Step label="Final Step" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previouse step
        </Stepper.Completed>
      </Stepper>
      <Group position="centre" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next Step</Button>
      </Group>
      <Anchor href="https://www.youtube.com/watch?v=3koxJHZq1r0" target="_blank">
        <Button
          variant="outlined"
          style={{ display: "block", margin: "60px auto" }}
        >
          My Coding Channel
        </Button>
      </Anchor>
    </div>
  );
};

export default Demo;
