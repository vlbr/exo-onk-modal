import React from "react";
import styles from "./styles.module.css";

export default function Modal({ header, footer }) {
  let contentClassnames = styles.Content;
  if (header) {
    contentClassnames += ` ${styles.ContentHeader}`;
  }

  if (footer) {
    contentClassnames += ` ${styles.ContentFooter}`;
  }

  return (
    <>
      <div className={styles.BackgroundFix} />
      <div className={styles.Container}>
        <div className={styles.ModalContainer}>
          {header ? <div className={styles.Header}>{header.title}</div> : null}
          <div className={contentClassnames}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            sollicitudin tempus luctus. In vitae metus blandit augue molestie
            porttitor. Phasellus in fringilla sem. Donec luctus porttitor
            consequat. Integer interdum gravida libero vel volutpat. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Aenean malesuada
            ipsum in ipsum pharetra sagittis. Aenean pharetra massa at elit
            aliquet, a euismod turpis vehicula. Proin at sem ante. Suspendisse
            non nisl a felis congue imperdiet. Praesent laoreet vel mauris
            eleifend egestas. Curabitur euismod erat id mattis tempus. Proin
            ornare tortor ac mi semper, sed fermentum dolor posuere. Mauris nec
            pharetra nisl. Suspendisse nunc lacus, viverra ut sem ut, maximus
            sodales leo. In placerat porttitor nunc, vel ultrices odio.
            Suspendisse molestie nulla ligula, a placerat lacus accumsan eu.
            Nulla facilisi.
          </div>
          {footer ? <div className={styles.Footer}>{footer.text}</div> : null}
        </div>
      </div>
    </>
  );
}
