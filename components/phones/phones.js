import styles from "./phones.module.scss";

export default function Phones() {

    return (
        <div className={styles["phones"]}>
            <div className={styles["phones__img-wrapper"]}>
                <svg className={styles["phones__img"]} viewBox="0 0 32 32">
                    <use href="/img/sprites.svg#phone"></use>
                </svg>
            </div>

            <a href="tel:+380121231313"
                className={
                    [styles["phones__phone"], styles["phones__phone--current"]].join(" ")
                }>(012) 123-13-13</a>

            <ul className={styles["phones__list"]}>
                <li className={styles["phones__list-item"]}>
                    <a href="tel:+380121231313" className={styles["phones__phone"]}>(012) 123-13-13</a>
                </li>
                <li className={styles["phones__list-item"]}>
                    <a href="tel:+380121231313" className={styles["phones__phone"]}>(012) 123-13-13</a>
                </li>
                <li className={styles["phones__list-item"]}>
                    <a href="tel:+380121231313" className={styles["phones__phone"]}>(012) 123-13-13</a>
                </li>
            </ul>

            <svg className={styles["phones__arrow"]} viewBox="0 0 32 32">
                <use href="/img/sprites.svg#arrow-down"></use>
            </svg>
        </div>
    )

}