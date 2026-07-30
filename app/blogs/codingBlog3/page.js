import Link from 'next/link';
import ProgressBar from '../../components/ProgressBar';
import ContextLens from '../../components/ContextLens';

export const metadata = {
    title: 'Top 5 Modern JavaScript Features for Clean, Fast Development | AurumX',
    description: 'Declutter your codebase with optional chaining, nullish coalescing, destructuring, logical assignment operators, and modern array methods.',
};

function calculateReadTime(sections) {
    let wordCount = 0;
    sections.forEach(section => {
        if (section.type === 'list' && Array.isArray(section.items)) {
            wordCount += section.items.join(' ').split(/\s+/).length;
        } else if (section.type === 'code' && section.content) {
            wordCount += section.content.split(/\s+/).length;
        } else if (section.content) {
            wordCount += section.content.split(/\s+/).length;
        }
    });
    const minutes = Math.ceil(wordCount / 200);
    return `${minutes} min read`;
}

export default function BlogPage() {
    const post = {
        title: "Top 5 Modern JavaScript Features for Clean, Fast Development",
        date: "July 28, 2026",
        author: "Vihan Mali",
        category: "JavaScript",

        sections: [
            {
                type: "paragraph",
                content:
                    "Writing JavaScript today feels fundamentally different than it did a few years ago. The days of writing verbose, repetitive boilerplate code just to safely access a nested object property or pull data out of an array are long gone."
            },
            {
                type: "paragraph",
                content:
                    "Modern ECMAScript updates have quietly transformed the language. They allow developers to write code that is not only faster to execute but also significantly easier to read, maintain, and debug. If you want to declutter your codebase and accelerate your daily development workflow, here are the top five modern JavaScript features you should start using right now."
            },

            { type: "heading", content: "1. Optional Chaining (?.)" },

            { type: "subheading", content: "The Problem" },
            {
                type: "paragraph",
                content:
                    "Historically, accessing a deeply nested property inside an object was a risky operation. If any intermediate property was null or undefined, the application would crash immediately with a dreaded TypeError: Cannot read properties of undefined. To prevent this, developers had to write long, repetitive conditional walls or use bulky logical AND (&&) checks:"
            },
            {
                type: "code",
                content:
                    `// The old, verbose way
if (user && user.profile && user.profile.settings) {
  const theme = user.profile.settings.theme;
}`
            },

            { type: "subheading", content: "The Modern Solution" },
            {
                type: "paragraph",
                content:
                    "Optional chaining (?.) completely changes this paradigm. It changes how the runtime evaluates nested chains. When you place ?. before a property access, JavaScript checks if the left-side operand is null or undefined. If it is, the evaluation short-circuits instantly and gracefully returns undefined instead of throwing a runtime exception."
            },
            {
                type: "code",
                content:
                    `// Modern, clean execution
const theme = user?.profile?.settings?.theme;`
            },
            {
                type: "paragraph",
                content:
                    "This feature also works flawlessly with dynamic bracket notations and function execution:"
            },
            {
                type: "code",
                content:
                    `// Safely call a method that might not exist
const response = apiData.fetchLatestData?.();

// Safely access a dynamic array index
const primaryEmail = user?.contacts?.[0];`
            },

            { type: "heading", content: "2. Nullish Coalescing Operator (??)" },

            { type: "subheading", content: "The Problem" },
            {
                type: "paragraph",
                content:
                    "Setting default fallback values is a universal requirement in software development. For a long time, developers relied heavily on the logical OR (||) operator to assign these defaults."
            },
            {
                type: "code",
                content:
                    `// The legacy approach
const userTimeout = customTimeout || 3000;`
            },
            {
                type: "paragraph",
                content:
                    "However, the || operator evaluates expressions based on falsiness. In JavaScript, values like 0, empty strings \"\", and false are all evaluated as falsy. If a user genuinely wants to configure a timeout of 0 seconds, the code above mistakenly treats 0 as falsy and overwrites it with the default value of 3000. This leads to subtle, hard-to-track bugs."
            },

            { type: "subheading", content: "The Modern Solution" },
            {
                type: "paragraph",
                content:
                    "The nullish coalescing operator (??) provides a strict, precise alternative. It only returns the right-hand operand when the left-hand operand is explicitly null or undefined."
            },
            {
                type: "code",
                content:
                    `// Strict, deterministic defaults
const userTimeout = customTimeout ?? 3000;

console.log(0 ?? 3000);        // Output: 0 (Valid value preserved)
console.log("" ?? "Default");  // Output: "" (Valid string preserved)
console.log(null ?? "Backup"); // Output: "Backup" (Triggered fallback)`
            },
            {
                type: "paragraph",
                content:
                    "By pairing Optional Chaining with Nullish Coalescing, you can securely extract properties and guarantee safe fallback defaults in a single, readable line of code:"
            },
            {
                type: "code",
                content:
                    `const userTheme = user?.profile?.settings?.theme ?? "dark-mode";`
            },

            { type: "heading", content: "3. Advanced Destructuring and Rest/Spread Architecture" },

            { type: "subheading", content: "The Problem" },
            {
                type: "paragraph",
                content:
                    "Extracting specific values out of data payloads or duplicating existing structures once required multiple lines of imperative variable declarations and manual array loops. This made standard state management workflows cumbersome and difficult to scan visually."
            },

            { type: "subheading", content: "The Modern Solution" },
            {
                type: "paragraph",
                content:
                    "Destructuring assignments, combined with the rest and spread operations (...), turn data manipulation into a declarative blueprint."
            },
            { type: "subheading", content: "Object & Array Destructuring" },
            {
                type: "paragraph",
                content:
                    "Instead of mapping variables one by one, you can extract multiple keys directly out of incoming arguments or objects, assigning default values inline if they do not exist:"
            },
            {
                type: "code",
                content:
                    `const configuration = { endpoint: "api.v1", retryCount: 3 };

// Extract and default simultaneously
const { endpoint, retryCount, timeout = 5000 } = configuration;`
            },
            { type: "subheading", content: "The Rest and Spread Operator (...)" },
            {
                type: "paragraph",
                content:
                    "The execution of the three-dot syntax depends entirely on the context of your operation. The spread pattern unpacks elements or properties out of an array or object into a brand-new target structure, which makes immutable state updates in frameworks like React straightforward. The rest pattern packages the remaining leftover arguments or elements into a neatly organized array container."
            },
            {
                type: "code",
                content:
                    `// Immutably merge and clone objects via Spread
const baseUser = { name: "Alex", role: "Guest" };
const upgradedUser = { ...baseUser, role: "Admin", verified: true };

// Isolate properties while capturing leftovers via Rest
const { role, ...publicProfile } = upgradedUser;
// publicProfile now contains exactly: { name: "Alex", verified: true }`
            },

            { type: "heading", content: "4. Logical Assignment Operators (||=, &&=, ??=)" },

            { type: "subheading", content: "The Problem" },
            {
                type: "paragraph",
                content:
                    "Updating variables conditionally based on their existing state is an incredibly common routine task. However, the traditional syntax frequently requires repeating the exact name of the variable on both sides of the assignment operator, creating visual noise."
            },
            {
                type: "code",
                content:
                    `// Redundant variable duplication
settings.theme = settings.theme ?? "light";
user.isActive = user.isActive && checkStatus();`
            },

            { type: "subheading", content: "The Modern Solution" },
            {
                type: "paragraph",
                content:
                    "Taking inspiration from classic mathematical compound operations (like += or -=), modern JavaScript introduces logical assignment operators. They seamlessly merge logical operations with standard data assignment."
            },
            {
                type: "code",
                content:
                    `// Evaluates and updates if current value is nullish
settings.theme ??= "light";

// Evaluates and updates if current value is truthy
user.isActive &&= checkStatus();

// Evaluates and updates if current value is falsy
totalPoints ||= 10;`
            },
            {
                type: "paragraph",
                content:
                    "These operators prevent redundant value re-assignments. For example, using settings.theme ??= \"light\" ensures that if settings.theme already contains a valid string, no assignment takes place at all, optimizing background computation performance."
            },

            { type: "heading", content: "5. Array Methods: .at(), .findLast(), and .toReversed()" },

            { type: "subheading", content: "The Problem" },
            {
                type: "paragraph",
                content:
                    "For decades, simple operations like retrieving the final element of an array required reading the array's absolute length property (array[array.length - 1]). Furthermore, operations like sorting or reversing an array historically mutated the original source data array in place. This forced developers to manually clone arrays beforehand to avoid unintended side effects across the application."
            },

            { type: "subheading", content: "The Modern Solution" },
            {
                type: "paragraph",
                content:
                    "Recent ECMAScript updates introduce cleaner, non-destructive utility methods natively to the Array.prototype."
            },
            { type: "subheading", content: "Relative Indexing with .at()" },
            {
                type: "paragraph",
                content:
                    "The .at() method allows you to fetch array elements using negative integers, enabling clean indexing relative to the very end of the collection."
            },
            {
                type: "code",
                content:
                    `const systemLogs = ["Error A", "Warning B", "Success C"];

// The old way
const lastLogOld = systemLogs[systemLogs.length - 1];

// The modern way
const latestLog = systemLogs.at(-1); // "Success C"`
            },
            { type: "subheading", content: "Non-Destructive Manipulation (.toReversed(), .toSorted(), .toSpliced())" },
            {
                type: "paragraph",
                content:
                    "These new semantic methods perform standard ordering mutations but automatically return a brand-new, modified array instance under the hood. This leaves the original array untouched."
            },
            {
                type: "code",
                content:
                    `const chronologicalIds = [1, 2, 3, 4];

// Returns a new array; original array remains [1, 2, 3, 4]
const reversedIds = chronologicalIds.toReversed(); // [4, 3, 2, 1]`
            },
            { type: "subheading", content: "Backward Array Traversal (.findLast())" },
            {
                type: "paragraph",
                content:
                    "Instead of reversing a dataset just to find the most recent item matching a specific condition, .findLast() begins its search iteration directly from the end of the array, moving backward."
            },
            {
                type: "code",
                content:
                    `const transactions = [
  { id: 1, type: "deposit" },
  { id: 2, type: "withdrawal" },
  { id: 3, type: "deposit" }
];

// Instantly captures transaction 3 by scanning backward
const lastDeposit = transactions.findLast(t => t.type === "deposit");`
            },

            { type: "heading", content: "Conclusion" },
            {
                type: "paragraph",
                content:
                    "Embracing these modern JavaScript features allows you to write far more declarative code. By swapping out fragile nested condition loops, risky logical operators, and destructive array modifications for these clean alternatives, you protect your code from runtime errors and make it much easier for your team to read."
            },
            {
                type: "paragraph",
                content:
                    "Take a look at your current codebase today. You will likely find plenty of places where a quick refactor using optional chaining, nullish coalescing, or relative array indexing will make your application cleaner and faster to maintain."
            }
        ]
    };

    // Calculate dynamic reading time
    const calculatedReadTime = calculateReadTime(post.sections);

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
            position: 'sticky',
            top: 0,
            zIndex: 10,
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
        codeBlock: {
            backgroundColor: '#1a202c',
            color: '#e2e8f0',
            padding: '1.25rem',
            borderRadius: '6px',
            overflowX: 'auto',
            fontSize: '0.9rem',
            lineHeight: '1.6',
            marginBottom: '1.5rem',
            fontFamily: '"Fira Code", "Consolas", "Monaco", monospace',
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
            {/* Scroll Progress Bar at top of viewport */}
            <ProgressBar />

            {/* Dynamic Context Lens header */}
            <ContextLens />

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
                        {/* Dynamic reading time */}
                        <span>{calculatedReadTime}</span>
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

                            case "code":
                                return (
                                    <pre key={index} style={styles.codeBlock}>
                                        <code>{section.content}</code>
                                    </pre>
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