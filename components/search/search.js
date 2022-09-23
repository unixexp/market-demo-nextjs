import styles from "./search.module.scss";

export default function Search() {

    return (
        <div className={styles["search"]}>
            <input type="text" name="search" placeholder="Поиск"
                className={styles["search__field"]} livesearch="off" minlength="3" />
            <button className={styles["search__btn"]}>
                <svg className={styles["search__img"]} viewBox="0 0 32 32">
                    <use href="/img/sprites.svg#search" />
                </svg>
            </button>
        </div>
    );

}