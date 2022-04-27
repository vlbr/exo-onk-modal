import React from "react";
import PropTypes from "prop-types";
import { Button, Typography } from "@ornikar/kitt";
import styles from "./Modal.module.css";

export default function Modal({ withHeader, withActions, isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        {withHeader && (
          <div className={styles.modalHeader}>
            <Button icon="chevron-left" />
            <span>Titre</span>
            <Button icon="cross" onClick={onClose} />
          </div>
        )}
        <Typography.p className={styles.modalText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          tristique tellus non ligula mattis faucibus. Curabitur mauris augue,
          suscipit vel enim eget, sagittis semper velit. Aliquam quis venenatis
          est. Morbi dictum congue tellus, ut auctor urna suscipit eget. Donec
          condimentum vel sapien vel facilisis. Cras nec pharetra ex. Sed sit
          amet venenatis mi. Donec quis suscipit augue. Nulla sit amet ultrices
          augue, in maximus odio. Etiam ac odio eros. Fusce tristique ac lacus
          pharetra sodales. Sed interdum tincidunt justo, et dictum nisl
          tincidunt quis. Vestibulum luctus odio in quam aliquam, ac vehicula mi
          semper. Cras nisl orci, commodo nec massa sit amet, commodo hendrerit
          sapien. Phasellus metus dui, varius sit amet commodo ut, aliquet non
          sem. Proin malesuada tempor tincidunt. Duis rutrum risus vel tempor
          varius. Quisque pulvinar enim in justo volutpat tempus. Suspendisse
          fringilla nulla pulvinar eros congue, non pharetra ex pharetra. Aenean
          aliquam sagittis gravida. Aenean egestas erat justo. Sed sapien enim,
          dapibus vel facilisis a, porttitor at mi. Aenean vulputate luctus
          diam, gravida consequat turpis consectetur eget. Ut condimentum arcu
          id dapibus tempor. Curabitur dictum purus vitae ex tempus, ut varius
          tellus fringilla. Vestibulum pretium turpis tellus, non accumsan nisi
          ullamcorper vitae. Nunc varius urna ac varius pharetra. Maecenas
          dignissim mauris eu neque ultricies, eu pulvinar lectus hendrerit.
          Fusce et magna eu ipsum fermentum auctor. Pellentesque ultrices
          convallis bibendum. Praesent dictum lectus in diam varius varius.
          Nullam velit purus, ultricies at orci eget, porta ultrices arcu. Ut
          enim dui, euismod a magna vel, venenatis eleifend sapien. Donec
          cursus, lectus sed aliquet imperdiet, justo ante rhoncus neque, nec
          eleifend justo sem ut libero. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Fusce erat
          lacus, pulvinar in suscipit at, sodales et mi. Nulla lorem diam,
          suscipit ac sagittis vitae, lobortis vitae elit. Pellentesque in augue
          id odio auctor aliquet. Suspendisse sit amet sodales neque. Fusce
          lobortis magna sapien, ac vestibulum mi imperdiet in. Curabitur
          venenatis nisl eget nisl venenatis, vel mattis odio convallis. Donec
          pretium volutpat molestie. Duis fermentum urna egestas elit euismod
          semper. Proin tortor quam, rutrum vitae nulla ut, mollis lacinia dui.
          Morbi metus sem, rutrum eu eros vel, sollicitudin scelerisque dui.
          Nullam ac sapien a elit ultricies ullamcorper id ultricies sapien.
          Phasellus congue lectus nec cursus interdum. Pellentesque faucibus
          libero nec hendrerit faucibus. Pellentesque volutpat pretium metus non
          convallis. Sed imperdiet quam massa, vitae dictum justo iaculis id.
          Donec vel mattis massa. Nullam eu egestas elit. Praesent convallis
          lorem vitae ipsum consequat, quis tincidunt tortor cursus. Aliquam in
          orci convallis, porta mi non, ultricies purus. Nulla at est ornare,
          varius mauris eleifend, mattis lorem. Phasellus sagittis ullamcorper
          velit. Ut a libero eu est mollis pellentesque a ut urna. Praesent
          magna erat, consectetur ut neque ac, commodo placerat leo. Mauris
          aliquet dapibus tellus, ac tempus felis feugiat non. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Vestibulum massa ipsum, faucibus sit amet ipsum et,
          ornare ullamcorper ex. Proin vehicula quam tellus, at molestie ante
          pulvinar eu. Nullam tincidunt tellus risus, vel sagittis erat commodo
          non. Nullam efficitur massa finibus libero viverra egestas. Sed
          bibendum ante ac odio maximus, quis lobortis ante placerat.
        </Typography.p>
        {withActions && (
          <div className={styles.modalActions}>
            <Button type="primary">Label</Button>
            <Button type="subtle">Label</Button>
          </div>
        )}
      </div>
    </div>
  );
}

Modal.propTypes = {
  withHeader: PropTypes.bool.isRequired,
  withActions: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};
