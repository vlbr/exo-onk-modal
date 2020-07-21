import React from "react";
import ReactDOM from "react-dom";

import { Typography, Button } from "@ornikar/kitt";

import "./Modal.css";

const Portal = (props) => {
  const { children } = props;

  return ReactDOM.createPortal(children, document.body);
};

const Heading = (props) => {
  return (
    <div className="heading">
      <Typography.h2 base="header4">Title</Typography.h2>
      <Button icon="cross" />
    </div>
  );
};

const Separator = () => {
  return <hr className="separator" />;
};

const Body = () => {
  return (
    <div className="body">
      <Typography.p base="header5">
        Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator. Reference site about Lorem Ipsum,
        giving information on its origins, as well as a random Lipsum
        generator.Reference site about Lorem Ipsum, giving information on its
        origins, as well as a random Lipsum generator.Reference site about Lorem
        Ipsum, giving information on its origins, as well as a random Lipsum
        generator.Reference site about Lorem Ipsum, giving information on its
        origins, as well as a random Lipsum generator.Reference site about Lorem
        Ipsum, giving information on its origins, as well as a random Lipsum
        generator.Reference site about Lorem Ipsum, giving information on its
        origins, as well as a random Lipsum generator.Reference site about Lorem
        Ipsum, giving information on its origins, as well as a random Lipsum
        generator.Reference site about Lorem Ipsum, giving information on its
        origins, as well as a random Lipsum generator.Reference site about Lorem
        Ipsum, giving information on its origins, as well as a random Lipsum
        generator.Reference site about Lorem Ipsum, giving information on its
        origins, as well as a random Lipsum generator.
        Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator.Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator.Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator.Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator.Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator.Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator.Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator.Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator.Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator.Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator.Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator.Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator.
      </Typography.p>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <Button type="link">Link</Button>
      <Button type="primary">Link</Button>
    </div>
  );
};

const Modal = () => {
  return (
    <Portal>
      <div className="root">
        <div className="paper">
          <div className="heading-container">
            <Heading />
            <Separator />
          </div>

          <Body />

          <div className="footer-container">
            <Separator />

            <Footer />
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
