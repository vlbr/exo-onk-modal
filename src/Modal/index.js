import React from "react";
import { Button } from "@ornikar/kitt";
import styles from "./Modal.module.css";

const Modal = ({ description, hasHeader, hasFooter }) => {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        {hasHeader ? (
          <header className={styles.header}>
            <p className={styles.headerTitle}>Title</p>
            <Button icon="icon" />
          </header>
        ) : null}
        <div className={styles.body}>
          <p className={styles.bodyContent}>{description}</p>
        </div>
        {hasFooter ? (
          <footer className={styles.footer}>
            <Button />
            <Button />
          </footer>
        ) : null}
      </div>
    </div>
  );
};

export default Modal;
