import { A } from '@solidjs/router';
import styles from '../../styles/Navigation.module.scss';
import { createEffect, createSignal } from 'solid-js';

export function Navigation() {
    const [active, setActive] = createSignal('/');

    createEffect(() => {
        setActive(window.location.pathname);
    });

    return (
        <nav>
            <ul class={styles.navList}>
                <li>
                    <A href="/" class={styles.navLink} activeClass={styles.activeLink} end>
                        Portfolio
                    </A>
                </li>
                <li>
                    <A href="/posts" class={styles.navLink} activeClass={styles.activeLink} end>
                        Posts
                    </A>
                </li>
            </ul>
        </nav>
    );
}
