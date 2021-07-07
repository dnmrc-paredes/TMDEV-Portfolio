import {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'

// Data
import { skills } from '../data/skills'

// Styles & Images
import styles from '../styles/index.module.scss'
// import laptopCoding from './../public/laptop-coding.png'
import fb from '../public/fb.svg'
import li from '../public/linkedin.svg'
import github from '../public/github.svg'
import blazingReaders from '../public/blazingReaders.png'
import socialLorem from '../public/sociallorem.png'
import loremNotes from '../public/loremnotes.png'
import loremBank from '../public/lorembank.png'
import oishiFh from '../public/oishifh.png'
import loremStudios from '../public/loremstudios.png'

const IndexPage: NextPage = () => {
    
    const toFb = () => {
        window.open('https://www.facebook.com/marcebrado.paredes/', '_blank')
    }

    const toGb = () => {
        window.open('https://github.com/TmTanky', '_blank')
    }

    const toLi = () => {
        window.open('https://www.linkedin.com/in/dinmarc-paredes-b9637a1b7/', '_blank')
    }

    const project1 = () => {
        window.open('https://blazing-readers.vercel.app/', '_blank')
    }
    const project2 = () => {
        window.open('https://social-lorem-vue.vercel.app/', '_blank')
    }
    const project3 = () => {
        window.open('https://lorem-notes-ts-react.netlify.app/', '_blank')
    }
    const project4 = () => {
        window.open('https://lorem-bank.netlify.app/', '_blank')
    }
    const project5 = () => {
        window.open('https://oishi-foodhub.herokuapp.com/', '_blank')
    }
    const project6 = () => {
        window.open('https://lorem-studios.herokuapp.com/', '_blank')
    }

    return (

        <div>

            <Head>
                <title> DEV </title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
                <meta charSet="utf-8"/>
                <meta name="description" content="An aspiring Javascript Full Stack Developer" />
                <meta name="keywords" content="tmdev, tm dev, tm javascript, tm developer, javascript developer"/>
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://image.freepik.com/free-vector/dollars-illustration-set_74855-4404.jpg" />
                <meta property="og:title" content="TM-DEV" />
                <meta property="og:description" content="An aspiring Javascript Full Stack Developer" />
            </Head>

            <main className={styles.main}>

                <section className={styles.sect1}>
                    <h1 className="animate__animated animate__fadeInLeft" > Hi, I&apos;m Dinmarc, </h1>
                    <p> I&apos;m a Web Developer specializing Javascript as main language. </p>
                    <div className={styles.vector1}> </div>
                </section>

                <section className={styles.sect2}>
                    <h1> Technologies </h1>

                    {/* <div className={styles.imgs}>
                        { skills.map(item => {
                            return <div key={item.title}>
                                eslint-disable-next-line @next/next/no-img-element
                                <img src={item.url} alt="skills" />
                            </div>
                        }) }
                    </div> */}
                    
                    <div className={styles.imgs}>
                        { skills.map(item => {
                            return <div className={styles.imgitem} key={item.id}>
                                <Image src={item.url} height="90" width="90" alt={item.title} />
                            </div>
                        }) }
                    </div>

                </section>

                <hr style={{width: '80%', margin: 'auto'}} />

                <section className={styles.sect3} id="about" >
                    <h1> About Me </h1>
                    <p> I loved and like to create stuffs I always want to discover new things in my specialized language I&apos;m currently advancing my knowledge about Javascript both Frontend & Backend. </p>

                    {/* <Image className={styles.laptop} src={laptopCoding} width="50" height="50" alt="laptop-coding" /> */}
                </section>

                <hr style={{width: '80%', margin: 'auto'}} />

                <section className={styles.sect4} id="projects">
                    <h1> Best Projects </h1>
                    <div className={styles.boxes}>

                        <div onClick={project1} className={styles.box} id="allbox">
                            <Image src={blazingReaders} width="350" height="350" alt="blazing-readers" />
                        </div>
                        <div onClick={project2} className={styles.box2} id="allbox">
                            <Image src={socialLorem} width="350" height="350" alt="blazing-readers" />
                        </div>
                        <div onClick={project3} className={styles.box3} id="allbox">
                            <Image src={loremNotes} width="350" height="350" alt="blazing-readers" />
                        </div>
                        <div onClick={project4} className={styles.box4} id="allbox">
                            <Image src={loremBank} width="350" height="350" alt="blazing-readers" />
                        </div>
                        <div onClick={project5} className={styles.box5} id="allbox">
                            <Image src={oishiFh} width="350" height="350" alt="blazing-readers" />
                        </div>
                        <div onClick={project6} className={styles.box6} id="allbox">
                            <Image src={loremStudios} width="350" height="350" alt="blazing-readers" />
                        </div>
                        
                    </div>
                </section>

                <hr style={{width: '80%', margin: 'auto'}} />

                <footer className={styles.footer} id="contact">
                    <div className={styles.footersect1}>
                        <div className={styles.email}>
                            <h2> Let&apos;s have a talk </h2>
                            <p> tmlolololdev@gmail.com </p>
                        </div>

                        <div className={styles.socials}>
                            <Image onClick={toFb} className={styles.socialimgs} src={fb} width="40" height="40" alt="fb"/>
                            <Image onClick={toGb} className={styles.socialimgs} src={github} width="40" height="40" alt="github"/>
                            <Image onClick={toLi} className={styles.socialimgs} src={li} width="40" height="40" alt="linked-in"/>
                        </div>
                    </div>

                    <div className={styles.footersect2}>
                        <p> Created with Next JS, Deployed in Vercel </p>
                    </div>
                </footer>

            </main>

        </div>
        
    )
}

export default IndexPage