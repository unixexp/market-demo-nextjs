import styles from "./phones.module.scss";

import PhonesItem from "../phones-item/phones-item";

export default function Phones({ phones }) {

    const elements = phones.map((phone) => {
        return <PhonesItem phone={phone} />
    });

    return (
        <div className={styles["phones"]}>
            <div className={styles["phones__img-wrapper"]}>
                <svg className={styles["phones__img"]} viewBox="0 0 32 32">
                    <use href="/img/sprites.svg#phone"></use>
                </svg>
            </div>

            <a href={`tel:${phones[0].value}`}
                className={[styles["phones__phone"], styles["phones__phone--current"]].join(" ")}>
                {phones[0].value}
            </a>

            <ul className={styles["phones__list"]}>
                { elements }
            </ul>

            <svg className={styles["phones__arrow"]} viewBox="0 0 32 32">
                <use href="/img/sprites.svg#arrow-down"></use>
            </svg>
        </div>
    )

}