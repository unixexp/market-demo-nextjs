import styles from "./tools.module.scss";

export default function Tools() {

    return (
        <div className={styles["tools"]}>
            <div className={styles["tools__account"]}>
                <a href="/accounts">
                    <div className={styles["tools__icon"]}>
                        <div className={styles["tools__icon-img-wrapper"]}>
                            <svg className={styles["tools__icon-img"]} viewBox="0 0 32 32">
                                <use href="/img/sprites.svg#account"></use>
                            </svg>
                        </div>
                        <span className={styles["tools__icon-text"]}>Login</span>
                    </div>
                </a>
            </div>
            
            <div className={styles["tools__lang"]}>
                <a href="/lang">
                    <div className={styles["tools__icon"]}>
                        <div className={styles["tools__icon-img-wrapper"]}>
                            <svg className={styles["tools__icon-img"]} viewBox="0 0 32 32">
                                <use href="/img/sprites.svg#earth"></use>
                            </svg>
                        </div>
                        <span className={styles["tools__icon-text"]}>UK</span>
                    </div>
                </a>
            </div>
            
            <div className={styles["tools__favorites"]}>
                <a href="/favorites">
                    <div className={styles["tools__icon"]}>
                        <div className={styles["tools__icon-img-wrapper"]}>
                            <svg className={styles["tools__icon-img"]} viewBox="0 0 32 32">
                                <use href="/img/sprites.svg#heart"></use>
                            </svg>
                            <span className={styles["tools__icon-counter"]}>12</span>
                        </div>
                        <span className={styles["tools__icon-text"]}>Favorites</span>
                    </div>
                </a>
            </div>

            <div className={styles["tools__cart"]}>
                <a href="/cart">
                    <div className={styles["tools__icon"]}>
                        <div className={styles["tools__icon-img-wrapper"]}>
                            <svg className={styles["tools__icon-img"]} viewBox="0 0 32 32">
                                <use href="/img/sprites.svg#cart"></use>
                            </svg>
                            <span className={styles["tools__icon-counter"]}>1</span>
                        </div>
                        <span className={styles["tools__icon-text"]}>Cart</span>
                    </div>
                </a>
            </div>
        </div>
    );

}