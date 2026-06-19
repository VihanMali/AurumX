'use client'
import React from 'react'
import styles from './blog.module.css'
import Link from 'next/link'
import Image from 'next/image'

const BlogPage = () => {
  return (
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

      <main className={styles.container}>
        <div className={styles.grid}>
          {/* Card Start */}
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src="/download.jpg"
                alt='manifest blog'
                fill
                className={styles.img}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.title}>How to Manifest Your Dream Life</h2>
              <p className={styles.description}>
                Manifestation is the practice of turning your aspirations into reality through deep belief, positive thinking, and focused action. It involves using techniques like visualization and affirmations to align your mindset with your goals, based on the idea that thoughts influence external outcomes.
              </p>
              <Link href='/blogs/manifestBlog1' className={styles.button}>
                Read More
              </Link>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src="/technology-1283624_640-1.jpg"
                alt='manifest blog'
                fill
                className={styles.img}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.title}>How to Start Coding in 2026: A Practical Roadmap for Beginners
              </h2>
              <p className={styles.description}>
                Learning to code is one of the most versatile skills you can acquire. It empowers you to automate mundane tasks, drastically boosts your career marketability, and provides a structured way to solve complex problems logically.
              </p>
              <Link href='/blogs/manifestBlog1' className={styles.button}>
                Read More
              </Link>
            </div>
          </div>
          {/* Repeat card div for more posts */}
        </div>
      </main>
    </div>
  )
}

export default BlogPage