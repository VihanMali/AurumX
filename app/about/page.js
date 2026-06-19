import React from 'react';
import styles from './about.module.css';
import Link from 'next/link';

const About = () => {
    return (
        <>
            <div className={styles.mainWrapper}>
                <nav className={styles.navbar}>
                    <div className={styles.logo}>
                        Aurum<span style={{ color: '#4f46e5' }}>X</span>
                    </div>
                    <div className={styles.navLinks}>
                        {['Blogs', 'About', 'Contact'].map((item) => (
                            <Link key={item} href={`/${item.toLowerCase()}`} className={styles.navLink}>
                                {item}
                            </Link>
                        ))}
                    </div>
                </nav>

                {/* Text Content Section */}
                <div className={styles.aboutContainer}>
                    <div className={styles.introBox}>
                        <h1>Welcome to AurumX 🚀</h1>
                        <p>
                            Built by students, for students and developers, AurumX is your go-to digital space to
                            decode complex concepts, share project ideas, and navigate the fast-paced world of tech.
                        </p>
                        <p>
                            Whether you’re writing your first "Hello, World!", debugging a late-night project, or prepping
                            for technical interviews, we break down the barriers to learning. We focus on practical,
                            real-world skills you won't always find in a textbook.
                        </p>
                    </div>

                    <div className={styles.gridContainer}>
                        <div className={styles.gridItem}>
                            <h3>💻 What We Cover</h3>
                            <ul>
                                <li><strong>Student Survival Guide:</strong> Acing exams, time management, and landing top-tier internships.</li>
                                <li><strong>Coding Tutorials:</strong> Step-by-step walkthroughs (Python, JavaScript, C++, etc.).</li>
                                <li><strong>Project Showcases:</strong> Deep dives into cool builds and open-source contributions.</li>
                                <li><strong>Industry Insights:</strong> Algorithms, system design, and the latest tech trends.</li>
                            </ul>
                        </div>

                        <div className={styles.gridItem}>
                            <h3>💡 Why AurumX?</h3>
                            <p>
                                The tech landscape evolves daily, and traditional education often lags behind. We bridge the gap
                                between classroom theory and industry reality. Our content is written by a community of peers who
                                understand exactly what you are going through—because we are in the trenches with you.
                            </p>
                        </div>
                    </div>

                    <div className={styles.communityBox}>
                        <h3>Behind the Site </h3>
                        <p>This website is a collaboration between two minds. The concepts, content direction, and creative strategy are driven by Surabhi Mali (Leading Suronix), while the architecture, engineering, and deployment are built from the ground up by Vihan Mali (Leading PhanTech).</p>
                        <h3>Roles & Contributions</h3>
                        <div className="credits-list">
                            <h4><strong>Surabhi Mali</strong> — Founder & Creative Director</h4>
                            <h4><strong>Vihan Mali</strong> — Co-founder & Lead Developer</h4>
                        </div>

                    </div>
                </div>

                {/* Center Logo Section */}
                <div className={styles.heroContainer}>
                    <div className={styles.bigLogoWrapper}>
                        <span className={styles.bigX}>X</span>
                        <h1 className={styles.aurumOverlay}>Aurum</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
