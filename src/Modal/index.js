import React from "react";
import { Button } from "@ornikar/kitt";
import classnames from "classnames";
import styles from "./styles.module.css";

export default function Modal({ headerTitle, footerPresent, onCloseModal }) {
  const [isLoaded, setIsLoaded] = React.useState(false);
  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      className={classnames(styles.container, { [styles.loaded]: isLoaded })}
    >
      {!!headerTitle && (
        <div className={styles.header}>
          <h4>{headerTitle}</h4>
          <Button onClick={onCloseModal} icon="cross" />
        </div>
      )}

      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit
          amet libero at urna interdum semper ut eget dolor. Aenean ut aliquam
          nisl, in tincidunt nulla. Etiam aliquam diam sed sem luctus, ac
          lacinia enim aliquet. Vestibulum id tempus nunc, non auctor nibh.
          Curabitur eget semper orci. Ut scelerisque libero in ante tempor
          interdum. Praesent elementum nisl in lacinia volutpat. Pellentesque
          sodales dui ut enim consectetur elementum. Maecenas fringilla sapien
          nisi, nec consectetur risus venenatis at. Curabitur pellentesque,
          metus nec egestas consectetur, leo urna accumsan felis, sit amet
          ullamcorper sapien tellus in mi. Praesent condimentum quis turpis sit
          amet tristique.
        </p>
      </div>
      {!!footerPresent && (
        <div className={styles.footer}>
          <Button type="subtle">Je refuse</Button>
          <Button type="primary">J&apos;accepte</Button>
        </div>
      )}
    </div>
  );
}
