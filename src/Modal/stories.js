import React from "react";
import { storiesOf } from "@storybook/react";
import Modal from ".";

storiesOf("Modal", module)
  .add("Default", () => <Modal />)
  .add("With Footer and Header", () => (
    <Modal headerTitle="Title" footerPresent />
  ));
