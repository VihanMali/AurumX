'use client'
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      background: 'radial-gradient(circle at center, #1a1a2e 0%, #0a0a0a 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      color: 'white',
      position: 'relative',
      margin: '0 '
    }}>

      {/* --- Upper Part (Navbar) --- */}
      <nav style={{
        position: 'absolute',
        top: '20px',
        width: '90%',
        maxWidth: '1200px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        borderRadius: '16px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '-1px' }}>
          Aurum<span style={{ color: '#4f46e5' }}>X</span>
        </div>

        <div style={{ display: 'flex', gap: '30px' }}>
          {['Blogs', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              style={{
                textDecoration: 'none',
                color: '#9ca3af',
                fontSize: '0.95rem',
                fontWeight: '500',
                transition: 'color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.color = 'white'}
              onMouseOut={(e) => e.currentTarget.style.color = '#9ca3af'}
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', }}>
        <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', fontWeight: '700', margin: 0, letterSpacing: '-2px' }}>
          Aurum
        </h1>
        <span style={{ fontSize: 'clamp(4rem, 12vw, 8rem)', color: '#4f46e5', fontWeight: '800', textShadow: '0 0 30px rgba(79, 70, 229, 0.4)' }}>
          X
        </span>
      </div>

      <div style={{
        marginBottom: '20px',
        fontSize:'30px',
        color:'##858585'
      }}>Elevate your mind. Embrace the future.</div>

      {/* Primary CTA */}
      <Link href="/blogs" style={{
        textDecoration: 'none',
        color: 'white',
        backgroundColor: '#4f46e5',
        padding: '16px 40px',
        borderRadius: '50px',
        fontSize: '1.1rem',
        fontWeight: '600',
        transition: 'all 0.3s ease',
        boxShadow: '0 10px 20px -10px rgba(79, 70, 229, 0.5)',
        border: '1px solid rgba(255,255,255,0.1)'
      }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#4338ca';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#4f46e5';
          e.currentTarget.style.transform = 'translateY(0)';
        }}>
        Get Started
      </Link>
    </main>
  );
}
