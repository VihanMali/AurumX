import Link from 'next/link';

export const metadata = {
    title: 'How to Start Coding in 2026 | AurumX',
    description: 'Mastering tools for frontend speed and flexibility.',
};

export default function BlogPage() {
    const post = {
        title: "Why Learning Basic Programming is No Longer Enough.",
        date: "June 17, 2026",
        author: "Vihan Mali",
        category: "Programming",
        readTime: "8 min read",

        sections: [
            {
                type: "paragraph",
                content:
                    "In our previous roadmap, we mapped out exactly how to write your first scripts, set up your local environment, and use AI as an entry-level mentor. But once you clear those initial hurdles, you will immediately hit a massive industry shift."
            },
            {
                type: "paragraph",
                content:
                    "In the current tech landscape, simply knowing how to write basic syntax—knowing 'how to code'—is no longer enough to build a sustainable career or get hired. Because modern generative AI models write boilerplate code blocks instantly, the true value of a developer has pivoted fundamentally."
            },
            {
                type: "quote",
                content: "We no longer need human compilers. We need system thinkers."
            },
            {
                type: "paragraph",
                content:
                    "If an AI can generate a functional loop or an API endpoint in under three seconds, your value isn't found in your typing speed. It is found in your architectural choices, logic, and debugging strategy."
            },
            {
                type: "heading",
                content: "1. Master Problem Decomposition"
            },
            {
                type: "paragraph",
                content:
                    "The biggest trap for beginners in the AI era is staring at a blank editor and expecting the AI to build a massive project from a single, vague prompt. True development requires breaking complex ideas down into microscopic, logical steps before writing code."
            },
            {
                type: "list",
                items: [
                    "Isolate the single smallest feature that delivers user value.",
                    "Map out how data moves from user input to the database layer.",
                    "Identify and document potential edge cases before writing logic.",
                    "Write out explicit step-by-step pseudo-code in plain English."
                ]
            },
            {
                type: "heading",
                content: "2. Prioritize Code Comprehension Over Creation"
            },
            {
                type: "paragraph",
                content:
                    "Because you will be working alongside sophisticated AI assistants and deep open-source ecosystems, you will spend roughly 80% of your day reading code and only 20% writing it."
            },
            {
                type: "paragraph",
                content:
                    "Many beginners accept AI suggestions blindly simply because the application runs. This creates fragile, unmaintainable software. If you do not understand the underlying implementation, you cannot fix it when it breaks under stress."
            },
            {
                type: "quote",
                content:
                    "Never commit a line of code to your repository unless you can explain exactly what it does to a teammate."
            },
            {
                type: "heading",
                content: "3. Develop a Systematic Debugging Mental Model"
            },
            {
                type: "paragraph",
                content:
                    "An experienced developer isn't someone who never breaks things; they are someone who can fix broken systems calmly and logically. When your project inevitably crashes, avoid the urge to panic, delete, or prompt-spam. Focus on these debugging habits:"
            },
            {
                type: "list",
                items: [
                    "Read the entire error message to find the exact file and line number.",
                    "Use precise logging statements to verify your data right before the failure.",
                    "Change exactly one variable or configuration parameter at a time.",
                    "Treat every bug as an opportunity to understand runtime execution deeper."
                ]
            },
            {
                type: "heading",
                content: "The Path Forward: From Syntax to Strategy"
            },
            {
                type: "paragraph",
                content:
                    "Do not let the speed of modern tools intimidate you. Instead, use it as a superpower. Let AI handle the tedious boilerplate while you focus your energy on architecture, system workflows, and creating clean user experiences."
            },
            {
                type:"paragraph",
                content:"If someone says:"
            },
            {
                type:"quote",
                content:"If 70% code is written by AI, then why we need developers?"
            },
            {
                type:"paragraph",
                content:"Just ask a counter question:"
            },
            {
                type:"quote",
                content:"If an aeroplane is on autopilot mode 95% of times, then why job of pilot is still in high demand"
            },
            ,
            {
                type:"paragraph",
                content:"The thing is that the delicate actions like takeoffs and landings must be handled by a human, not by a machine. AI has not yet reached the level at what we think it is. neither AI can write 100% perfect code nor a human can. but both of them can even write 200% PERFECT code"
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
