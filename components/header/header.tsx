import React, { FC, useState } from 'react'
import Link from 'next/link'

// Styles & Icons
import styles from './header.module.scss'
import { MdMenu } from 'react-icons/md'

export const Header: FC = () => {

    const [show, setShow] = useState(false)

    return (
        <nav className={styles.main} >
            <div className={styles.navlogo}>
                <h1> DEV </h1>
            </div>

            <div className={styles.navlinks}>
                <Link href="#about"> About </Link>
                <Link href="#projects"> Projects </Link>
                <Link href="#contact"> Contact </Link>
            </div>

            <div onClick={() => setShow(!show)} className={styles.hamburger}>
                <MdMenu size={50} />
            </div>

            { show ? <div className={styles.sidebar}>
                <div onClick={() => setShow(!show)} className={styles.close}> </div>
                <div className={styles.links}>
                    <Link href="#about"> About </Link>
                    <Link href="#projects"> Projects </Link>
                    <Link href="#contact"> Contact </Link>
                </div>
            </div> : "" }

        </nav>
    )

}