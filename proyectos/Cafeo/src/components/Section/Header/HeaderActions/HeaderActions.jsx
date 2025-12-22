import Button from "@common/Button/Button";

import styles from "./HeaderActions.module.css";

const HeaderActions = () => {
  return (
    <div className={styles.actions}>
      <Button variant={"ghost"}>Buscar una tienda</Button>
      <Button variant={"ghost"}>Iniciar sesión</Button>
      <Button>Unirse ahora</Button>
    </div>
  );
};

export default HeaderActions;
