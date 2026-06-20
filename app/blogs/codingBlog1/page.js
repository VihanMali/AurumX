import Link from 'next/link';

export const metadata = {
  title: 'How to Start Coding in 2026 | AurumX',
  description: 'Mastering tools for frontend speed and flexibility.',
};

export default function BlogPage() {
  const post = {
    title: "How to Start Coding in 2026: A Practical Roadmap for Beginners",
    date: "June 17, 2026",
    author: "Vihan Mali",
    category: "Programming",
    readTime: "8 min read",

    sections: [
      {
        type: "paragraph",
        content:
          "The world of software development is changing faster than ever. With AI-powered tools, new frameworks, and endless learning resources, getting started can feel overwhelming. Every day, thousands of people ask the same question:"
      },

      {
        type: "quote",
        content: "How do I start coding in 2026?"
      },

      {
        type: "paragraph",
        content:
          "The good news is that learning to code has never been more accessible. The challenge isn't finding resources—it's choosing the right path and staying consistent."
      },

      {
        type: "paragraph",
        content:
          "In this guide, I'll share a practical roadmap to help you start coding in 2026 without getting lost in tutorial hell."
      },

      {
        type: "heading",
        content: "Step 1: Understand Why You Want to Learn Coding"
      },

      {
        type: "paragraph",
        content:
          "Before writing your first line of code, ask yourself:"
      },

      {
        type: "list",
        items: [
          "Do you want a software engineering job?",
          "Do you want to build your own startup?",
          "Are you interested in web development?",
          "Do you want to automate tasks and increase productivity?",
          "Are you curious about AI and machine learning?"
        ]
      },

      {
        type: "paragraph",
        content:
          "Your goal will determine your learning path."
      },

      {
        type: "list",
        items: [
          "Web developers focus on JavaScript, React, and backend technologies.",
          "AI developers spend more time with Python and machine learning.",
          "Mobile developers learn Android or iOS development."
        ]
      },

      {
        type: "paragraph",
        content:
          "You don't need to know everything. You just need a direction."
      },

      {
        type: "heading",
        content: "Step 2: Learn One Programming Language First"
      },

      {
        type: "paragraph",
        content:
          "One of the biggest mistakes beginners make is trying to learn multiple languages simultaneously."
      },

      {
        type: "subheading",
        content: "Python"
      },

      {
        type: "list",
        items: [
          "Easy syntax",
          "Huge community",
          "Great for automation, AI, backend development, and data science",
          "Beginner-friendly"
        ]
      },

      {
        type: "subheading",
        content: "JavaScript"
      },

      {
        type: "list",
        items: [
          "Powers the web",
          "Required for frontend development",
          "Can also be used for backend development with Node.js",
          "Excellent career opportunities"
        ]
      },

      {
        type: "paragraph",
        content:
          "Pick one and commit to it for at least two months."
      },

      {
        type: "quote",
        content:
          "A developer who knows one language well is more valuable than someone who knows five languages poorly."
      },

      {
        type: "heading",
        content: "Step 3: Focus on Fundamentals"
      },

      {
        type: "paragraph",
        content:
          "Frameworks come and go. Fundamentals stay forever."
      },

      {
        type: "list",
        items: [
          "Variables",
          "Data types",
          "Loops",
          "Functions",
          "Arrays",
          "Objects",
          "Conditionals",
          "Problem-solving",
          "Debugging"
        ]
      },

      {
        type: "paragraph",
        content:
          "Many beginners rush to React, Next.js, or AI frameworks without understanding the basics. Strong fundamentals make learning any future technology significantly easier."
      },

      {
        type: "heading",
        content: "Step 4: Build Projects Earlier Than You Think"
      },

      {
        type: "paragraph",
        content:
          "The best way to learn coding is by building things. Don't wait until you know enough. Start immediately."
      },

      {
        type: "paragraph",
        content:
          "If you build projects while learning, you will gradually feel the importance of each concept because you already have hands-on experience."
      },

      {
        type: "subheading",
        content: "Web Development Projects"
      },

      {
        type: "list",
        items: [
          "Portfolio Website",
          "Expense Tracker",
          "Weather App",
          "Todo List",
          "Notes App"
        ]
      },

      {
        type: "subheading",
        content: "Projects for C, C++, Python and Other Console Languages"
      },

      {
        type: "list",
        items: [
          "Number Guessing Game - Beginner",
          "Todo List Manager - Advanced Beginner",
          "Students Record with File I/O - Intermediate",
          "Text-Based RPG / Roguelike Game Engine - Upper Intermediate",
          "Custom Command Line Shell - Advanced"
        ]
      },

      {
        type: "heading",
        content: "Step 5: Learn Git and GitHub"
      },

      {
        type: "list",
        items: [
          "git init",
          "git add",
          "git commit",
          "git push",
          "git pull",
          "branching"
        ]
      },

      {
        type: "paragraph",
        content:
          "Then upload your projects to GitHub. A strong GitHub profile demonstrates your progress and commitment to learning."
      },

      {
        type: "paragraph",
        content:
          "Don't worry if your projects aren't perfect. Every experienced developer has old repositories they're slightly embarrassed by."
      },

      {
        type: "heading",
        content: "Step 6: Use AI as a Mentor, Not a Crutch"
      },

      {
        type: "subheading",
        content: "Use AI to:"
      },

      {
        type: "list",
        items: [
          "Understand concepts",
          "Debug code",
          "Generate explanations",
          "Explore alternatives"
        ]
      },

      {
        type: "subheading",
        content: "Avoid:"
      },

      {
        type: "list",
        items: [
          "Copy-pasting code blindly",
          "Building projects without understanding implementation",
          "Skipping fundamentals"
        ]
      },

      {
        type: "paragraph",
        content:
          "The developers who thrive in 2026 are not the ones competing against AI. They are the ones learning how to work effectively with it."
      },

      {
        type: "heading",
        content: "Step 7: Stop Consuming and Start Creating"
      },

      {
        type: "list",
        items: [
          "Learn a concept",
          "Build something with it",
          "Get stuck",
          "Research solutions",
          "Improve your project"
        ]
      },

      {
        type: "paragraph",
        content:
          "That cycle is where real learning happens."
      },

      {
        type: "heading",
        content: "Step 8: Be Consistent for Six Months"
      },

      {
        type: "paragraph",
        content:
          "The secret isn't talent. The secret isn't intelligence. The secret is consistency."
      },

      {
        type: "paragraph",
        content:
          "One hour per day for six months will outperform occasional 10-hour coding sessions. Progress compounds. Small improvements today become significant skills tomorrow."
      },

      {
        type: "heading",
        content: "Final Thoughts"
      },

      {
        type: "paragraph",
        content:
          "Coding in 2026 is no longer just about writing code. It's about solving problems, building products, and leveraging modern tools effectively."
      },

      {
        type: "paragraph",
        content:
          "You don't need the perfect roadmap. You don't need the perfect course. You don't need to master every technology."
      },

      {
        type: "paragraph",
        content:
          "Start with one language. Build projects. Learn from mistakes. Stay consistent."
      },

      {
        type: "quote",
        content:
          "The best time to start coding was yesterday. The second-best time is today."
      }
    ]
  };


  const styles = {
    container: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      color: '#2d3748',
      backgroundColor: '#f7fafc',
      minHeight: '100vh',
    },
    nav: {
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e2e8f0',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#3182ce',
      textDecoration: 'none',
    },
    navLinks: {
      display: 'flex',
      gap: '1.5rem',
    },
    link: {
      color: '#4a5568',
      textDecoration: 'none',
      fontSize: '0.95rem',
      fontWeight: '500',
    },
    mainLayout: {
      display: 'flex',
      maxWidth: '1100px',
      margin: '0 auto',
      padding: '2rem 1rem',
      gap: '2.5rem',
      flexWrap: 'wrap',
    },
    articleSection: {
      flex: '2 1 600px',
      backgroundColor: '#ffffff',
      padding: '2.5rem',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    },
    meta: {
      fontSize: '0.875rem',
      color: '#718096',
      marginBottom: '1rem',
      display: 'flex',
      gap: '1rem',
    },
    category: {
      color: '#3182ce',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    title: {
      fontSize: '2.25rem',
      color: '#1a202c',
      marginTop: 0,
      marginBottom: '1.5rem',
      lineHeight: '1.2',
    },
    paragraph: {
      fontSize: '1.125rem',
      lineHeight: '1.75',
      color: '#4a5568',
      marginBottom: '1.25rem',
    },
    sidebar: {
      flex: '1 1 280px',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
    },
    sidebarWidget: {
      backgroundColor: '#ffffff',
      padding: '1.5rem',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    },
    widgetTitle: {
      fontSize: '1.1rem',
      color: '#1a202c',
      marginTop: 0,
      paddingBottom: '0.5rem',
      borderBottom: '2px solid #e2e8f0',
      marginBottom: '1rem',
    },
    authorText: {
      fontSize: '0.95rem',
      lineHeight: '1.5',
      color: '#4a5568',
    },
    footer: {
      textAlign: 'center',
      padding: '2rem',
      color: '#a0aec0',
      fontSize: '0.875rem',
      borderTop: '1px solid #e2e8f0',
      marginTop: '4rem',
      backgroundColor: '#ffffff',
    }
  };

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <Link href="/blogs" style={styles.logo}>AurumX</Link>
        <div style={styles.navLinks}>
          <Link href="/contact" style={styles.link}>Contact</Link>
          <Link href="/about" style={styles.link}>About</Link>
        </div>
      </nav>

      <div style={styles.mainLayout}>
        <main style={styles.articleSection}>
          <div style={styles.meta}>
            <span style={styles.category}>{post.category}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 style={styles.title}>{post.title}</h1>

          {post.sections.map((section, index) => {
            switch (section.type) {
              case "heading":
                return (
                  <h2
                    key={index}
                    style={{
                      marginTop: "2.5rem",
                      marginBottom: "1rem",
                      fontSize: "1.8rem",
                      color: "#1a202c"
                    }}
                  >
                    {section.content}
                  </h2>
                );

              case "subheading":
                return (
                  <h3
                    key={index}
                    style={{
                      marginTop: "1.75rem",
                      marginBottom: "0.75rem",
                      color: "#2d3748"
                    }}
                  >
                    {section.content}
                  </h3>
                );

              case "list":
                return (
                  <ul
                    key={index}
                    style={{
                      paddingLeft: "1.5rem",
                      marginBottom: "1.5rem",
                      lineHeight: "1.9"
                    }}
                  >
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );

              case "quote":
                return (
                  <blockquote
                    key={index}
                    style={{
                      borderLeft: "4px solid #3182ce",
                      paddingLeft: "1rem",
                      margin: "1.5rem 0",
                      fontSize: "1.2rem",
                      fontWeight: "600",
                      color: "#2d3748"
                    }}
                  >
                    {section.content}
                  </blockquote>
                );

              default:
                return (
                  <p key={index} style={styles.paragraph}>
                    {section.content}
                  </p>
                );
            }
          })}
        </main>

        <aside style={styles.sidebar}>
          <div style={styles.sidebarWidget}>
            <h3 style={styles.widgetTitle}>Meet the Author</h3>
            <p style={styles.authorText}>
              <strong>{post.author}</strong> is a Full-Stack Web Developer Specialized in Next.js Framework.
            </p>
          </div>
        </aside>
      </div>

      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} AurumX. Built with Next.js.</p>
      </footer>
    </div>
  );
}
