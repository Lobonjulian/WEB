import Button from "../common/Button/Button";
import styles from "./Header.module.css";

const navItem = [
  { id: 1, label: "menu", href: "/menu" },
  { id: 2, label: "Recompensas", href: "/reward" },
  { id: 3, label: "Tarjeta Regalo", href: "/target" },
];

const Header = () => {
  return (
    <nav className={styles.nav}>
      <section className={styles.menu}>
        <div className={styles.menu__logo}>
          <img className={styles.logo} src="/cafeo.svg" alt="Cafeo" />
        </div>
        <ul className={styles.menu__nav}>
          {navItem.map((item) => (
            <li key={item.id}>
              <a href={item.href} className={styles.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.actions}>
        <Button variant={"ghost"}>Buscar una tienda</Button>
        <Button variant={"ghost"}>Iniciar sesión</Button>
        <Button>Unirse ahora</Button>
      </section>
    </nav>
  );
};

export default Header;
