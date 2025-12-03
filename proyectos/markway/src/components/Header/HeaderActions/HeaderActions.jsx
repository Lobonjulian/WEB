import { headerButtons } from "../navigationData.js";
import Button from "../../common/Button/Button";

import styles from "./HeaderActions.module.css";

const HeaderActions = () => {
  return (
    <div className={styles.headerActions}>
      {headerButtons.map((item) => (
        <Button key={item.id} variant={item.variant}>
          {item.label}
        </Button>
      ))}
    </div>
  );
};

export default HeaderActions;
