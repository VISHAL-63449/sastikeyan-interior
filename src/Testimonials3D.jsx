import React, { useState, useEffect, useRef } from 'react';
import './Testimonials3D.css';

const testimonials = [
    {
        initials: 'RK',
        review: "Sastikkeyan Interior transformed our 3BHK into a beautiful and comfortable home. The modular kitchen design was elegant, practical, and exactly what we wanted.",
        name: 'Rajesh Kumar',
        location: 'Chennai, Tamil Nadu',
        project: '3BHK Interior Design'
    },
    {
        initials: 'PA',
        review: "The team understood our requirements perfectly and created a beautiful modular kitchen with excellent storage and finishing. The entire experience was smooth and professional.",
        name: 'Priya & Arun',
        location: 'Coimbatore, Tamil Nadu',
        project: 'Modular Kitchen'
    },
    {
        initials: 'K',
        review: "We loved the attention to detail and the modern design approach. Our home now feels elegant, comfortable, and completely personalized.",
        name: 'Karthik',
        location: 'Madurai, Tamil Nadu',
        project: 'Complete Home Interior'
    }
];

const TestimonialCard = ({ data, isActive }) => {
    const cardRef = useRef(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleMouseMove = (e) => {
        if (!cardRef.current || isMobile) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Rotate slightly: (-5deg to 5deg for Y, -3deg to 3deg for X)
        const rotateY = ((x - centerX) / centerX) * 5;
        const rotateX = ((centerY - y) / centerY) * 3;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseEnter = () => {
        if (!isMobile) setIsHovered(true);
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            setIsHovered(false);
            setRotation({ x: 0, y: 0 });
        }
    };

    // Determine transition inline to override React state lag smoothly
    const inlineStyles = {
        transform: isMobile
            ? 'none'
            : `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease',
    };

    return (
        <div
            className={`t3d-card-wrapper ${isActive ? 'active' : ''}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={inlineStyles}
        >
            <div className="t3d-card" ref={cardRef}>
                <div className="t3d-stars">★★★★★</div>
                <div className="t3d-quote-mark">“</div>
                <p className="t3d-review">{data.review}</p>
                <div className="t3d-client-meta">
                    <div className="t3d-avatar">{data.initials}</div>
                    <div className="t3d-client-info">
                        <h4>{data.name}</h4>
                        <span className="t3d-location">{data.location}</span>
                        <span className="t3d-project">{data.project}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Testimonials3D() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) setCardsToShow(1);
            else if (window.innerWidth <= 1024) setCardsToShow(2);
            else setCardsToShow(3);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, testimonials.length - cardsToShow);

    // Auto-play condition for mobile / smaller screens
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex(prev => {
                const localMaxIndex = Math.max(0, testimonials.length - cardsToShow);
                if (localMaxIndex === 0) return 0;
                return prev >= localMaxIndex ? 0 : prev + 1;
            });
        }, 3500);
        return () => clearInterval(timer);
    }, [cardsToShow]);

    const next = () => setCurrentIndex(i => Math.min(i + 1, maxIndex));
    const prev = () => setCurrentIndex(i => Math.max(i - 1, 0));

    return (
        <section className="testimonials-3d" id="testimonials">
            <div className="t3d-bg">
                <div className="t3d-radial-light"></div>
            </div>
            <div className="container t3d-container">
                <div className="t3d-header">
                    <div className="section-badge t3d-badge">TESTIMONIALS</div>
                    <h2 className="section-title t3d-title">What Our Clients Say About Us</h2>
                    <p className="t3d-desc">Real stories. Beautiful homes. Happy clients.</p>
                </div>

                <div className="t3d-carousel-window">
                    <div
                        className="t3d-carousel-track"
                        style={{ transform: `translateX(-${currentIndex * (100 / (cardsToShow || 1))}%)` }}
                    >
                        {testimonials.map((t, idx) => {
                            const isActive = idx >= currentIndex && idx < currentIndex + cardsToShow;
                            return (
                                <div
                                    className={`t3d-slide ${isActive ? 'active' : ''}`}
                                    key={idx}
                                    style={{ width: `${100 / (cardsToShow || 1)}%` }}
                                >
                                    <TestimonialCard data={t} isActive={isActive} />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {cardsToShow < 3 && maxIndex > 0 && (
                    <div className="t3d-controls">
                        <button onClick={prev} disabled={currentIndex === 0} className="t3d-btn prev-btn">‹</button>
                        <div className="t3d-dots">
                            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                                <span
                                    key={i}
                                    className={`t3d-dot ${i === currentIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentIndex(i)}
                                />
                            ))}
                        </div>
                        <button onClick={next} disabled={currentIndex === maxIndex} className="t3d-btn next-btn">›</button>
                    </div>
                )}
            </div>
        </section>
    );
}
