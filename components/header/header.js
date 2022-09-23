import styles from "./header.module.scss";

import Logo from "../logo/logo";
import Search from "../search/search";
import Phones from "../phones/phones";
import Tools from "../tools/tools";

export default function Header() {

    const phones = [
        {value: "+38(044) 111-11-11"},
        {value: "+38(044) 222-22-22"},
        {value: "+38(044) 333-33-33"}
    ];

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
                            <Phones phones={phones} />
                        </div>

                        <div class={styles["header__tools"]}>
                            <Tools />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );

}