import React from "react";
import cx from "classnames";
import { Button, Typography } from "@ornikar/kitt";
import classes from "./index.module.css";

export default function Header({ action = null }) {
  return (
    <div
      className={cx(classes.header, {
        [classes.withAction]: !!action
      })}
    >
      {action ? <Button icon="chevron-left" /> : null}
      <Typography.div variant={action ? "light" : "bold"}>Titre</Typography.div>
      <Button icon="cross" />
    </div>
  );
}
