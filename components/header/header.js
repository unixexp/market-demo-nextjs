import styles from "./header.module.scss";

import Logo from "../logo/logo";
import Search from "../search/search";
import Phones from "../phones/phones";

export default function Header() {

    return (
        <header className={styles["header"]}>
            <div className="container">
                <div className={styles["header__content"]}>
                    <div className={styles["header__left-block"]}>
                        <Logo />
                        <div className={styles["header__search"]}>
                            <Search />
                        </div>
                    </div>
                    <div className={styles["header__right-block"]}>
                        <div class={styles["header__phones"]}>
                            <Phones />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );

}