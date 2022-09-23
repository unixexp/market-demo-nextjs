import styles from "./phones-item.module.scss";

export default function PhonesItem({ phone }) {

    return (
        <li className={styles["phones__list-item"]}>
            <a key={phone.value}
                href={`tel:${phone.value}`}
                className={styles["phones__phone"]}>{phone.value}</a>
        </li>
    );

}