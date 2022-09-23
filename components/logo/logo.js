import { useState } from "react";

import Link from "next/link";

import styles from "./logo.module.scss";

export default function Logo() {

    return (
        <div>
            <a href="/">
                <img className={styles["logo__img"]} src="/img/logo.svg" alt="logo"/>
            </a>
        </div>
    );

}