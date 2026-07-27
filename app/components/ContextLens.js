'use client';

import { useState, useEffect } from 'react';

export default function ContextLens({ customDictionary = {} }) {
    const [hoveredWord, setHoveredWord] = useState('');
    const [definition, setDefinition] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // 1. Hover Listener to capture words on hover
    useEffect(() => {
        let hoverTimer;

        const handleMouseOver = (e) => {
            // Avoid capturing UI elements, buttons, or headers
            if (e.target.closest('.no-lens')) return;

            // Get selected text or word under cursor
            const targetText = e.target.innerText || e.target.textContent;
            if (!targetText || targetText.length > 300) return; // Ignore large blocks

            // Extract the specific word under cursor position using range
            let word = '';
            if (document.caretRangeFromPoint) {
                const range = document.caretRangeFromPoint(e.clientX, e.clientY);
                if (range && range.startContainer.nodeType === Node.TEXT_NODE) {
                    range.expand('word');
                    word = range.toString().trim().replace(/[^a-zA-Z0-9_-]/g, '');
                }
            }

            if (word && word.length > 2 && isNaN(word)) {
                // Debounce slightly to prevent jerky updates as cursor moves fast
                clearTimeout(hoverTimer);
                hoverTimer = setTimeout(() => {
                    fetchWordDefinition(word.toLowerCase());
                }, 200);
            }
        };

        const handleScroll = () => {
            if (window.scrollY > 120) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('mousemove', handleMouseOver);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('mousemove', handleMouseOver);
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(hoverTimer);
        };
    }, [customDictionary]);

    // 2. Fetch definition (Checks custom tech dictionary first, then fallback API)
    const fetchWordDefinition = async (word) => {
        setHoveredWord(word);

        // Check local developer dictionary first (for coding terms like jsx, hydration, api, etc.)
        if (customDictionary[word]) {
            setDefinition(customDictionary[word]);
            setIsLoading(false);
            return;
        }

        setIsLoading(true);

        try {
            const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            if (res.ok) {
                const data = await res.json();
                const firstDef = data[0]?.meanings[0]?.definitions[0]?.definition;
                if (firstDef) {
                    // Limit length to fit nicely inside HUD
                    setDefinition(firstDef.length > 80 ? firstDef.slice(0, 80) + '...' : firstDef);
                } else {
                    setDefinition('Technical term or proper noun');
                }
            } else {
                setDefinition('Technical term or domain concept');
            }
        } catch (err) {
            setDefinition('Context definition unavailable');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            className="no-lens"
            style={{
                position: 'fixed',
                top: '20px',
                right: '25px', // Sits neatly on the top right
                transform: `translateY(${isVisible ? '0' : '-70px'})`,
                opacity: isVisible ? 1 : 0,
                transition: 'transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s ease',
                zIndex: 999,
                pointerEvents: isVisible ? 'auto' : 'none',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '8px 18px',
                    backgroundColor: 'rgba(15, 23, 42, 0.92)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: '30px',
                    border: '1.5px solid rgba(99, 179, 237, 0.3)',
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.4), 0 0 15px rgba(99, 179, 237, 0.2)',
                    color: '#ffffff',
                    maxWidth: '420px',
                }}
            >
                {/* HUD Lens Icon */}
                <span style={{ fontSize: '1.1rem', filter: 'drop-shadow(0 0 5px #63b3ed)' }}>
                    🔍
                </span>

                {/* Content Area */}
                {hoveredWord ? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
                        {/* Word Badge */}
                        <span
                            style={{
                                fontSize: '0.85rem',
                                fontWeight: '700',
                                color: '#63b3ed',
                                backgroundColor: 'rgba(99, 179, 237, 0.15)',
                                padding: '2px 8px',
                                borderRadius: '6px',
                                textTransform: 'capitalize',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {hoveredWord}
                        </span>

                        {/* Definition Text or Loading */}
                        <span
                            style={{
                                fontSize: '0.8rem',
                                color: '#e2e8f0',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            {isLoading ? 'Searching...' : definition}
                        </span>
                    </div>
                ) : (
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontStyle: 'italic' }}>
                        Hover over any word for instant definition...
                    </span>
                )}
            </div>
        </div>
    );
}