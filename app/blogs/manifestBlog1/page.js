import Link from 'next/link';

export const metadata = {
  title: 'Manifedt Your Dream Life | AurumX',
  description: 'Mastering tools for frontend speed and flexibility.',
};

export default function BlogPage() {
  const post = {
    title: "Stop Waiting for Your Dream Life — Start Managing It",
    date: "June 19, 2026",
    author: "Surabhi Mali",
    category: "Success",
    readTime: "6 min read",

    sections: [
  {
    type: "paragraph",
    content:
      "Everybody talks about having a dream life. Traveling the world, building a successful career, staying fit, having money, having time, being happy. But here's something nobody tells you: your dream life isn't one giant event waiting for you in the future. It's a collection of ordinary days that you manage well."
  },
  {
    type: "paragraph",
    content:
      "Most people don't fail because their dreams are too big. They fail because they never learn how to manage real life. The people who seem to have it together usually aren't superhuman—they just have systems that keep their lives from falling apart."
  },

  {
    type: "heading",
    content: "Stop Trying to Do Everything"
  },
  {
    type: "paragraph",
    content:
      "One of the fastest ways to destroy your dream life is trying to build all of it at once. You don't need six goals right now. Pick one priority. If you're a student, maybe that's academics. If you're building a business, maybe that's learning sales. Everything else can exist, but it doesn't deserve equal attention."
  },
  {
    type: "paragraph",
    content:
      "Think of life like investing. The more you spread your energy everywhere, the smaller your returns become."
  },

  {
    type: "heading",
    content: "Design Your Days, Not Your Future"
  },
  {
    type: "paragraph",
    content:
      "People spend hours imagining where they'll be in ten years. Almost nobody plans tomorrow. Your future doesn't magically appear. It gets manufactured by ordinary Tuesdays."
  },
  {
    type: "paragraph",
    content:
      "Every night, ask yourself these three questions:"
  },
  {
    type: "list",
    items: [
      "What are the three things that absolutely need to get done tomorrow?",
      "What's likely to distract me?",
      "What time am I starting work?"
    ]
  },
  {
    type: "paragraph",
    content:
      "Winning three important things every day compounds faster than constantly feeling overwhelmed."
  },

  {
    type: "heading",
    content: "Protect Your Energy Like Money"
  },
  {
    type: "paragraph",
    content:
      "People understand saving money. They don't understand saving energy. You can always make money again, but mental energy is limited."
  },
  {
    type: "paragraph",
    content:
      "Stop wasting it arguing online, doom-scrolling, comparing yourself to strangers, or saying yes to things you don't care about. Your attention is expensive. Spend it intentionally."
  },

  {
    type: "heading",
    content: "Build Systems, Not Motivation"
  },
  {
    type: "paragraph",
    content:
      "Motivation is unreliable. Nobody wakes up every day feeling inspired. People who seem disciplined usually have boring systems."
  },
  {
    type: "list",
    items: [
      "Want to read more? Keep the book on your desk.",
      "Want to study consistently? Study at the same time every day.",
      "Want to exercise? Lay out your clothes beforehand."
    ]
  },
  {
    type: "quote",
    content: "You don't rise to your goals. You fall to your systems."
  },

  {
    type: "heading",
    content: "Learn to Be Bored"
  },
  {
    type: "paragraph",
    content:
      "Boredom is becoming a superpower. Most people can't sit with one thing for thirty minutes without checking notifications."
  },
  {
    type: "paragraph",
    content:
      "Deep work requires discomfort. Some days are repetitive and boring, and that's okay. Success isn't built on extraordinary moments. It's built on ordinary moments repeated for years."
  },

  {
    type: "heading",
    content: "Stop Comparing Timelines"
  },
  {
    type: "paragraph",
    content:
      "Social media has convinced everyone they're late. Someone is buying a house at 23. Someone is becoming a millionaire at 19. Someone is traveling the world. Meanwhile, you're wondering if you're behind."
  },
  {
    type: "paragraph",
    content:
      "You're not. People show highlights, not reality. The goal isn't to beat everyone else. The goal is to create a life that makes sense to you."
  },

  {
    type: "heading",
    content: "Take Care of Your Body"
  },
  {
    type: "paragraph",
    content:
      "People chase dream lives while treating their bodies like rental cars. Sleep matters. Walking matters. Drinking water matters. Protein matters. Sunlight matters."
  },
  {
    type: "paragraph",
    content:
      "These aren't boring health tips. They're performance tools. A tired mind creates tired dreams."
  },

  {
    type: "heading",
    content: "Have Fewer Goals, But Bigger Standards"
  },
  {
    type: "paragraph",
    content:
      "You don't need a hundred ambitions. You need a few ambitions and high standards."
  },
  {
    type: "list",
    items: [
      "Show up when you don't feel like it.",
      "Finish what you start.",
      "Keep promises to yourself.",
      "Speak honestly.",
      "Stay curious."
    ]
  },
  {
    type: "paragraph",
    content:
      "These simple things create extraordinary people over time."
  },

  {
    type: "heading",
    content: "My Favorite Question"
  },
  {
    type: "quote",
    content:
      "What would the future version of me thank me for doing today?"
  },
  {
    type: "paragraph",
    content:
      "Maybe it's studying. Maybe it's exercising. Maybe it's saving money. Maybe it's putting the phone away and sleeping early."
  },
  {
    type: "paragraph",
    content:
      "Dream lives aren't built in dramatic moments. They're built quietly. And usually, nobody notices except you. Until one day, you wake up and realize that the life you once dreamed about is simply your normal life. And that's a beautiful thing."
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
              <strong>{post.author}</strong> is a Game Developer, content creator, and writes about productivity, personal growth, and building a meaningful life.
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
