import Testimonials3D from "./Testimonials3D";
import { useEffect } from "react";
import "./App.css";
function App() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/script.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>


            {/* Page Loader removed to eliminate loading delay */}

            {/* Scroll Progress Bar */}
            <div className="scroll-progress" id="scrollProgress"></div>

            {/* Mobile Nav Overlay */}
            <div className="nav-overlay" id="navOverlay"></div>

            {/* Header & Navbar */}
            <header className="header">
                <div className="container navbar-container">
                    <a href="#home" className="logo-area">
                        <img src="logo/WhatsApp%20Image%202026-07-14%20at%2009.24.40%20(5).jpeg" alt="Sastikeyan Interior Logo"
                            className="logo-img" />
                        <div className="logo-text">
                            <span className="logo-main">SASTIKEYAN</span>
                            <span className="logo-sub">INTERIOR</span>
                        </div>
                    </a>

                    <nav className="nav-menu" id="navMenu">
                        <a href="#home" className="nav-link active">Home</a>
                        <a href="#about" className="nav-link">About</a>
                        <a href="#services" className="nav-link">Services</a>
                        <a href="#designs" className="nav-link">Designs</a>
                        <a href="#contact" className="nav-link">Contact</a>
                        <a href="https://wa.me/919629141957?text=Hi%20Karthik,%20I%27m%20interested%20in%20a%20home%20interior%20consultation."
                            target="_blank" className="btn btn-primary nav-cta">Get a Quote</a>
                    </nav>

                    <button className="hamburger-menu" id="hamburgerBtn" aria-label="Toggle navigation">
                        <span className="bar bar-1"></span>
                        <span className="bar bar-2"></span>
                        <span className="bar bar-3"></span>
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <section id="home" className="hero parallax-active">
                {/* Background Slideshow */}
                <div className="hero-slider">
                    <div className="hero-slide active"
                        style={{ backgroundImage: 'url("interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.39.jpeg")' }}>
                    </div>
                    <div className="hero-slide"
                        style={{ backgroundImage: 'url("interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.39%20(1).jpeg")' }}>
                    </div>
                    <div className="hero-slide"
                        style={{ backgroundImage: 'url("interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.41.jpeg")' }}>
                    </div>
                    <div className="hero-slide"
                        style={{ backgroundImage: 'url("interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.40.jpeg")' }}>
                    </div>
                    <div className="hero-slide"
                        style={{ backgroundImage: 'url("interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.42.jpeg")' }}>
                    </div>
                </div>

                <div className="hero-overlay"></div>

                <div className="container hero-content">
                    <div className="badge">LUXURY MEETS FUNCTIONALITY</div>
                    <h1 className="hero-title">Crafting Spaces That Inspire</h1>
                    <p className="hero-description">
                        Sastikeyan Interior delivers exceptional, bespoke interior design solutions. From initial
                        conceptualization to full implementation, we build stunning, premium spaces tailored exactly to your
                        lifestyle.
                    </p>
                    <div className="hero-buttons">
                        <a href="#designs" className="btn btn-primary">EXPLORE DESIGNS</a>
                        <a href="#contact" className="btn btn-secondary">GET A QUOTE</a>
                    </div>
                </div>

                {/* Slider Nav Dots */}
                <div className="slider-dots">
                    <span className="dot active" data-index="0"></span>
                    <span className="dot" data-index="1"></span>
                    <span className="dot" data-index="2"></span>
                    <span className="dot" data-index="3"></span>
                    <span className="dot" data-index="4"></span>
                </div>
            </section>

            {/* About Section */}
            {/* Section Divider: Hero to About */}
            <div className="section-divider" style={{ background: 'transparent', marginTop: '-79px', position: 'relative', zIndex: 10 }}>
                <svg viewBox="0 0 1200 80" preserveAspectRatio="none">
                    <path d="M0,40 C300,80 600,0 1200,40 L1200,80 L0,80 Z" fill="var(--color-light-surface)" />
                </svg>
            </div>

            <section id="about" className="about section-padding" data-aos="fade-up">
                <div className="container">
                    <div className="grid grid-2">
                        <div className="about-text-column" data-aos="fade-right">
                            <div className="section-badge">ABOUT SASTIKEYAN INTERIOR</div>
                            <h2 className="section-title">Where Aesthetics Meet Comfort & Perfection</h2>
                            <p className="text-muted">
                                At Sastikeyan Interior, we believe that your home should be a direct reflection of your
                                personality and a sanctuary for your family. Guided by design excellence and flawless execution,
                                our expert team transforms standard layouts into luxurious landmarks.
                            </p>
                            <p className="text-muted">
                                Whether you want a modern minimalistic kitchen or a regal bedroom design, we handle everything
                                from layout selection, 3D visualization, material procurement, to the final styling, ensuring a
                                hassle-free, premium experience.
                            </p>

                            <div className="owner-highlight">
                                <div className="owner-quote">
                                    <blockquote>"Every space has its own voice. Our design process aims to give it a vocabulary
                                        that expresses luxury, ergonomics, and longevity."</blockquote>
                                </div>
                                <div className="owner-info">
                                    <div className="owner-meta">
                                        <span className="owner-name">GP Karthik</span>
                                        <span className="owner-title">Founder & Proprietor</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="about-image-column" data-aos="fade-left" data-aos-delay="200">
                            <div className="image-wrapper">
                                <img src="interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.40%20(6).jpeg"
                                    alt="Interior Design Spotlight" className="main-about-img" />
                                <div className="experience-badge">
                                    <span className="exp-num">100%</span>
                                    <span className="exp-txt">Bespoke Quality</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Offerings / Unique Value Proposition */}
            {/* Section Divider: About to USP */}
            <div className="section-divider" style={{ background: 'var(--color-dark-bg)' }}>
                <svg viewBox="0 0 1200 80" preserveAspectRatio="none">
                    <path d="M0,0 L1200,0 L1200,40 C600,80 300,0 0,40 Z" fill="var(--color-light-surface)" />
                </svg>
            </div>

            <section className="usp-section section-padding bg-dark" data-aos="fade-up">
                <div className="container">
                    <div className="text-center mb-50">
                        <div className="section-badge gold">OUR STANDARDS</div>
                        <h2 className="section-title text-white">Why Sastikeyan Interior stands out</h2>
                    </div>

                    <div className="grid grid-4 text-center">
                        <div className="usp-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon-holder">
                                <span className="usp-num">01</span>
                            </div>
                            <h3>Custom Designs</h3>
                            <p>Tailored blueprints fits perfectly into your home size and layout requirements.</p>
                        </div>

                        <div className="usp-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon-holder">
                                <span className="usp-num">02</span>
                            </div>
                            <h3>Premium Materials</h3>
                            <p>We source top-grade, factory-finished plywood, acrylic sheets, and high-performance hardware.</p>
                        </div>

                        <div className="usp-card" data-aos="fade-up" data-aos-delay="300">
                            <div className="icon-holder">
                                <span className="usp-num">03</span>
                            </div>
                            <h3>Timely Delivery</h3>
                            <p>We values your time. Project timelines are strictly followed with zero budget overrides.</p>
                        </div>

                        <div className="usp-card" data-aos="fade-up" data-aos-delay="400">
                            <div className="icon-holder">
                                <span className="usp-num">04</span>
                            </div>
                            <h3>Quality Warranty</h3>
                            <p>Peace of mind with durable finishes and solid post-installation repair supports.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            {/* Section Divider: USP to Services */}
            <div className="section-divider section-divider--bottom" style={{ background: 'var(--color-dark-bg)' }}>
                <svg viewBox="0 0 1200 80" preserveAspectRatio="none">
                    <path d="M0,0 L1200,0 L1200,40 C600,80 300,0 0,40 Z" fill="var(--color-light-surface)" />
                </svg>
            </div>

            <section id="services" className="services section-padding" data-aos="fade-up">
                <div className="container">
                    <div className="text-center mb-50">
                        <div className="section-badge">SERVICES WE PROVIDE</div>
                        <h2 className="section-title">Interior Solutions Built For Perfection</h2>
                        <p className="section-subtitle">From conceptualization to absolute reality, explore our standard services
                            for residences.</p>
                    </div>

                    <div className="grid grid-3">
                        {/* Service 1 */}
                        <div className="service-card animate-on-scroll tilt-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="service-img-holder">
                                <div className="shine-overlay"></div>
                                <img src="interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.39%20(3).jpeg"
                                    alt="Luxury Hall" loading="lazy" />
                            </div>
                            <div className="service-details">
                                <span className="service-num">01</span>
                                <h3>Luxury Hall</h3>
                                <p>Bespoke hall designs featuring elegant wood paneling, showcase displays, custom
                                    storage units, ambient LED backlighting, and textured finishes. Each design tailored to your
                                    lifestyle and space.</p>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="service-card animate-on-scroll tilt-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="service-img-holder">
                                <div className="shine-overlay"></div>
                                <img src="interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.40.jpeg"
                                    alt="Luxury Living Room" loading="lazy" />
                            </div>
                            <div className="service-details">
                                <span className="service-num">02</span>
                                <h3>Living Room & Custom TV Units</h3>
                                <p>Bespoke entertainment walls featuring elegant wood paneling, showcase displays, custom
                                    storage units, ambient LED backlighting, and textured finishes. Each design tailored to your
                                    lifestyle and space.</p>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="service-card animate-on-scroll tilt-card" data-aos="fade-up" data-aos-delay="300">
                            <div className="service-img-holder">
                                <div className="shine-overlay"></div>
                                <img src="interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.41%20(3).jpeg"
                                    alt="Bedroom Wardrobe" loading="lazy" />
                            </div>
                            <div className="service-details">
                                <span className="service-num">03</span>
                                <h3>Cozy Bedrooms & Wardrobes</h3>
                                <p>Luxury sliding glass wardrobe doors, integrated dressing systems, versatile loft designs, and
                                    custom upholstered bed headboards. Combine comfort with sophisticated storage solutions.</p>
                            </div>
                        </div>

                        {/* Service 4 */}
                        <div className="service-card animate-on-scroll tilt-card" data-aos="fade-up" data-aos-delay="100">
                            <div className="service-img-holder">
                                <div className="shine-overlay"></div>
                                <img src="interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.42%20(5).jpeg"
                                    alt="False Ceiling" loading="lazy" />
                            </div>
                            <div className="service-details">
                                <span className="service-num">04</span>
                                <h3>False Ceiling & Lighting</h3>
                                <p>Sophisticated gypsum ceiling designs with layered ambient lighting, integrated spotlights,
                                    and innovative hanging frameworks. Creates dramatic visual effects that transform your
                                    space.</p>
                            </div>
                        </div>

                        {/* Service 5 */}
                        <div className="service-card animate-on-scroll tilt-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="service-img-holder">
                                <div className="shine-overlay"></div>
                                <img src="interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.42%20(1).jpeg"
                                    alt="Luxury Dining Area" loading="lazy" />
                            </div>
                            <div className="service-details">
                                <span className="service-num">05</span>
                                <h3>Luxury Dining Area</h3>
                                <p>Exquisitely crafted spaces featuring intricate CNC woodwork, marble accents, brass detailing,
                                    and intelligent storage. Designed to honor tradition while providing contemporary
                                    functionality.</p>
                            </div>
                        </div>

                        {/* Service 6 */}
                        <div className="service-card animate-on-scroll tilt-card" data-aos="fade-up" data-aos-delay="300">
                            <div className="service-img-holder">
                                <div className="shine-overlay"></div>
                                <img src="interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.44.jpeg"
                                    alt="Bespoke Partitions" loading="lazy" />
                            </div>
                            <div className="service-details">
                                <span className="service-num">06</span>
                                <h3>Dining & Partitions</h3>
                                <p>Custom partition walls, sophisticated dining display units, premium crockery cabinets, and
                                    decorative wall treatments. Perfect for separating spaces while maintaining aesthetic
                                    continuity.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Designs / Gallery Section */}
            {/* Section Divider: Services to Gallery */}
            <div className="section-divider" style={{ background: 'var(--color-light-surface)' }}>
                <svg viewBox="0 0 1200 80" preserveAspectRatio="none">
                    <path d="M0,40 C300,0 600,80 1200,40 L1200,80 L0,80 Z" fill="var(--color-light-bg)" />
                </svg>
            </div>

            <section id="designs" className="gallery section-padding bg-light" data-aos="fade-up">
                <div className="container">
                    <div className="gallery-header flex-between mb-40">
                        <div>
                            <div className="section-badge">OUR PORTFOLIO</div>
                            <h2 className="section-title">Explore Our Real Project Creations</h2>
                        </div>
                        <div className="gallery-filters" id="galleryFilters">
                            <button className="filter-btn active" data-filter="all">All Designs</button>
                            <button className="filter-btn" data-filter="kitchen">Kitchen</button>
                            <button className="filter-btn" data-filter="living">Living Rooms</button>
                            <button className="filter-btn" data-filter="bedroom">Bedrooms</button>
                            <button className="filter-btn" data-filter="other">Puja & Dinings</button>
                        </div>
                    </div>

                    <div className="gallery-grid" id="galleryGrid">
                        {/* Image 1 */}
                        <div className="gallery-item bedroom" data-index="0" data-aos="scale-up" data-aos-delay="100"
                            data-src="interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.39.jpeg"
                            data-title="Luxury Bedroom"
                            data-desc="A sophisticated luxury bedroom featuring elegant finishes, a stylish backdrop, and a comfortable layout for a relaxing atmosphere.">
                            <div className="premium-card">
                                <div className="premium-card-img-wrapper">
                                    <img src="interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.39.jpeg"
                                        alt="Luxury Bedroom" className="lazy-load" loading="lazy" />
                                    <div className="gallery-overlay">
                                        <div className="view-btn">+</div>
                                    </div>
                                </div>
                                <div className="gallery-details-card premium-card-content">
                                    <span className="item-cat premium-cat">BEDROOM</span>
                                    <h4 className="premium-title">Luxury Bedroom</h4>
                                    <p className="premium-desc">A sophisticated luxury bedroom featuring elegant finishes, a stylish backdrop, and a comfortable layout for a relaxing atmosphere.</p>
                                    <a href="https://wa.me/919629141957?text=Hi,%20I%20am%20interested%20in%20booking%20the%20Luxury%20Bedroom%20design."
                                        target="_blank" className="btn btn-primary premium-card-btn">BOOK NOW</a>
                                </div>
                            </div>
                        </div>

                        {/* Image 2 */}
                        <div className="gallery-item living" data-index="1" data-aos="scale-up" data-aos-delay="200"
                            data-src="interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.39%20(1).jpeg"
                            data-title="Premium TV Entertainment Unit"
                            data-desc="A bespoke TV backdrop featuring elegant wood paneling, warm LED lighting, and custom storage. The perfect focal point for a contemporary living space.">
                            <div className="premium-card">
                                <div className="premium-card-img-wrapper">
                                    <img src="interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.39%20(1).jpeg"
                                        alt="Premium TV Entertainment Unit" className="lazy-load" loading="lazy" />
                                    <div className="gallery-overlay">
                                        <div className="view-btn">+</div>
                                    </div>
                                </div>
                                <div className="gallery-details-card premium-card-content">
                                    <span className="item-cat premium-cat">TV UNIT</span>
                                    <h4 className="premium-title">Premium TV Entertainment Unit</h4>
                                    <p className="premium-desc">A bespoke TV backdrop featuring elegant wood paneling, warm LED lighting, and custom storage. The perfect focal point for a contemporary living space.</p>
                                    <a href="https://wa.me/919629141957?text=Hi,%20I%20am%20interested%20in%20booking%20the%20Premium%20TV%20Entertainment%20Unit%20design."
                                        target="_blank" className="btn btn-primary premium-card-btn">BOOK NOW</a>
                                </div>
                            </div>
                        </div>

                        {/* Image 3 */}
                        <div className="gallery-item living" data-index="2" data-aos="scale-up" data-aos-delay="300"
                            data-src="interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.39%20(3).jpeg"
                            data-title="Complete Hall Interior Design"
                            data-desc="A beautifully designed living room combining elegant furniture, warm lighting, premium finishes, and a sophisticated layout to create a comfortable and welcoming space.">
                            <div className="premium-card">
                                <div className="premium-card-img-wrapper">
                                    <img src="interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.39%20(3).jpeg"
                                        alt="Complete Hall Interior Design" className="lazy-load" loading="lazy" />
                                    <div className="gallery-overlay">
                                        <div className="view-btn">+</div>
                                    </div>
                                </div>
                                <div className="gallery-details-card premium-card-content">
                                    <span className="item-cat premium-cat">LIVING ROOM</span>
                                    <h4 className="premium-title">Complete Hall Interior Design</h4>
                                    <p className="premium-desc">A beautifully designed living room combining elegant furniture, warm lighting, premium finishes, and a sophisticated layout to create a comfortable and welcoming space.</p>
                                    <a href="https://wa.me/919629141957?text=Hi,%20I%20am%20interested%20in%20booking%20the%20Complete%20Hall%20Interior%20Design%20design."
                                        target="_blank" className="btn btn-primary premium-card-btn">BOOK NOW</a>
                                </div>
                            </div>
                        </div>

                        {/* Image 4 */}
                        <div className="gallery-item kitchen" data-index="3" data-aos="scale-up" data-aos-delay="100"
                            data-src="interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.38.jpeg"
                            data-title="Luxury Kitchen"
                            data-desc="A modern luxury kitchen featuring elegant cabinetry, efficient storage, premium finishes, and a functional layout designed for everyday convenience.">
                            <div className="premium-card">
                                <div className="premium-card-img-wrapper">
                                    <img src="interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.38.jpeg"
                                        alt="Luxury Kitchen" className="lazy-load" loading="lazy" />
                                    <div className="gallery-overlay">
                                        <div className="view-btn">+</div>
                                    </div>
                                </div>
                                <div className="gallery-details-card premium-card-content">
                                    <span className="item-cat premium-cat">KITCHEN</span>
                                    <h4 className="premium-title">Luxury Kitchen</h4>
                                    <p className="premium-desc">A modern luxury kitchen featuring elegant cabinetry, efficient storage, premium finishes, and a functional layout designed for everyday convenience.</p>
                                    <a href="https://wa.me/919629141957?text=Hi,%20I%20am%20interested%20in%20booking%20the%20Luxury%20Kitchen%20design."
                                        target="_blank" className="btn btn-primary premium-card-btn">BOOK NOW</a>
                                </div>
                            </div>
                        </div>

                        {/* Image 5 */}
                        <div className="gallery-item living" data-index="4" data-aos="scale-up" data-aos-delay="200"
                            data-src="interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.40.jpeg"
                            data-title="Contemporary TV Unit Design"
                            data-desc="A finely crafted television unit showcasing seamless storage, premium laminate finishes, and ambient backlighting for an elevated entertainment experience.">
                            <div className="premium-card">
                                <div className="premium-card-img-wrapper">
                                    <img src="interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.40.jpeg"
                                        alt="Contemporary TV Unit Design" className="lazy-load" loading="lazy" />
                                    <div className="gallery-overlay">
                                        <div className="view-btn">+</div>
                                    </div>
                                </div>
                                <div className="gallery-details-card premium-card-content">
                                    <span className="item-cat premium-cat">TV UNIT</span>
                                    <h4 className="premium-title">Contemporary TV Unit Design</h4>
                                    <p className="premium-desc">A finely crafted television unit showcasing seamless storage, premium laminate finishes, and ambient backlighting for an elevated entertainment experience.</p>
                                    <a href="https://wa.me/919629141957?text=Hi,%20I%20am%20interested%20in%20booking%20the%20Contemporary%20TV%20Unit%20Design%20design."
                                        target="_blank" className="btn btn-primary premium-card-btn">BOOK NOW</a>
                                </div>
                            </div>
                        </div>

                        {/* Image 6 */}
                        <div className="gallery-item living" data-index="5" data-aos="scale-up" data-aos-delay="300"
                            data-src="interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.40%20(6).jpeg"
                            data-title="Modular TV Wall Showcase"
                            data-desc="An innovative modular entertainment wall featuring floating display shelves, modern textures, and refined lighting designed for both elegance and practicality.">
                            <div className="premium-card">
                                <div className="premium-card-img-wrapper">
                                    <img src="interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.40%20(6).jpeg"
                                        alt="Modular TV Wall Showcase" className="lazy-load" loading="lazy" />
                                    <div className="gallery-overlay">
                                        <div className="view-btn">+</div>
                                    </div>
                                </div>
                                <div className="gallery-details-card premium-card-content">
                                    <span className="item-cat premium-cat">TV UNIT</span>
                                    <h4 className="premium-title">Modular TV Wall Showcase</h4>
                                    <p className="premium-desc">An innovative modular entertainment wall featuring floating display shelves, modern textures, and refined lighting designed for both elegance and practicality.</p>
                                    <a href="https://wa.me/919629141957?text=Hi,%20I%20am%20interested%20in%20booking%20the%20Modular%20TV%20Wall%20Showcase%20design."
                                        target="_blank" className="btn btn-primary premium-card-btn">BOOK NOW</a>
                                </div>
                            </div>
                        </div>

                        {/* Image 7 */}
                        <div className="gallery-item bedroom" data-index="6" data-aos="scale-up" data-aos-delay="100"
                            data-src="interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.41%20(3).jpeg"
                            data-title="Bespoke Bedroom Sanctuary"
                            data-desc="A cozy yet luxurious bedroom space designed with premium materials, a stylish custom headboard, and tranquil lighting for the ultimate comfort and aesthetic appeal.">
                            <div className="premium-card">
                                <div className="premium-card-img-wrapper">
                                    <img src="interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.41%20(3).jpeg"
                                        alt="Bespoke Bedroom Sanctuary" className="lazy-load" loading="lazy" />
                                    <div className="gallery-overlay">
                                        <div className="view-btn">+</div>
                                    </div>
                                </div>
                                <div className="gallery-details-card premium-card-content">
                                    <span className="item-cat premium-cat">BEDROOM</span>
                                    <h4 className="premium-title">Bespoke Bedroom Sanctuary</h4>
                                    <p className="premium-desc">A cozy yet luxurious bedroom space designed with premium materials, a stylish custom headboard, and tranquil lighting for the ultimate comfort and aesthetic appeal.</p>
                                    <a href="https://wa.me/919629141957?text=Hi,%20I%20am%20interested%20in%20booking%20the%20Bespoke%20Bedroom%20Sanctuary%20design."
                                        target="_blank" className="btn btn-primary premium-card-btn">BOOK NOW</a>
                                </div>
                            </div>
                        </div>

                        {/* Image 8 */}
                        <div className="gallery-item living" data-index="7" data-aos="scale-up" data-aos-delay="200"
                            data-src="interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.41.jpeg"
                            data-title="Luxury TV Display Wall"
                            data-desc="An elegant TV unit installation that seamlessly blends premium materials and smart storage solutions to create a sophisticated living room centerpiece.">
                            <div className="premium-card">
                                <div className="premium-card-img-wrapper">
                                    <img src="interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.41.jpeg"
                                        alt="Luxury TV Display Wall" className="lazy-load" loading="lazy" />
                                    <div className="gallery-overlay">
                                        <div className="view-btn">+</div>
                                    </div>
                                </div>
                                <div className="gallery-details-card premium-card-content">
                                    <span className="item-cat premium-cat">TV UNIT</span>
                                    <h4 className="premium-title">Luxury TV Display Wall</h4>
                                    <p className="premium-desc">An elegant TV unit installation that seamlessly blends premium materials and smart storage solutions to create a sophisticated living room centerpiece.</p>
                                    <a href="https://wa.me/919629141957?text=Hi,%20I%20am%20interested%20in%20booking%20the%20Luxury%20TV%20Display%20Wall%20design."
                                        target="_blank" className="btn btn-primary premium-card-btn">BOOK NOW</a>
                                </div>
                            </div>
                        </div>

                        {/* Image 9 */}
                        <div className="gallery-item other" data-index="8" data-aos="scale-up" data-aos-delay="300"
                            data-src="interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.42%20(1).jpeg"
                            data-title="Elegant Modern Dining Room"
                            data-desc="A sophisticated dining space featuring a stylish dining setup, elegant partitions, warm lighting, and refined interior finishes for memorable dining experiences.">
                            <div className="premium-card">
                                <div className="premium-card-img-wrapper">
                                    <img src="interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.42%20(1).jpeg"
                                        alt="Elegant Modern Dining Room" className="lazy-load" loading="lazy" />
                                    <div className="gallery-overlay">
                                        <div className="view-btn">+</div>
                                    </div>
                                </div>
                                <div className="gallery-details-card premium-card-content">
                                    <span className="item-cat premium-cat">DINING ROOM</span>
                                    <h4 className="premium-title">Elegant Modern Dining Room</h4>
                                    <p className="premium-desc">A sophisticated dining space featuring a stylish dining setup, elegant partitions, warm lighting, and refined interior finishes for memorable dining experiences.</p>
                                    <a href="https://wa.me/919629141957?text=Hi,%20I%20am%20interested%20in%20booking%20the%20Elegant%20Modern%20Dining%20Room%20design."
                                        target="_blank" className="btn btn-primary premium-card-btn">BOOK NOW</a>
                                </div>
                            </div>
                        </div>

                        {/* Image 10 */}
                        <div className="gallery-item bedroom" data-index="9" data-aos="scale-up" data-aos-delay="100"
                            data-src="interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.42%20(5).jpeg"
                            data-title="Contemporary Master Bedroom"
                            data-desc="A premium bedroom design featuring a seamless blend of sophisticated textures, functional furniture, and elegant lighting, resulting in a perfectly balanced private retreat.">
                            <div className="premium-card">
                                <div className="premium-card-img-wrapper">
                                    <img src="interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.42%20(5).jpeg"
                                        alt="Contemporary Master Bedroom" className="lazy-load" loading="lazy" />
                                    <div className="gallery-overlay">
                                        <div className="view-btn">+</div>
                                    </div>
                                </div>
                                <div className="gallery-details-card premium-card-content">
                                    <span className="item-cat premium-cat">BEDROOM</span>
                                    <h4 className="premium-title">Contemporary Master Bedroom</h4>
                                    <p className="premium-desc">A premium bedroom design featuring a seamless blend of sophisticated textures, functional furniture, and elegant lighting, resulting in a perfectly balanced private retreat.</p>
                                    <a href="https://wa.me/919629141957?text=Hi,%20I%20am%20interested%20in%20booking%20the%20Contemporary%20Master%20Bedroom%20design."
                                        target="_blank" className="btn btn-primary premium-card-btn">BOOK NOW</a>
                                </div>
                            </div>
                        </div>

                        {/* Image 11 */}
                        <div className="gallery-item living" data-index="10" data-aos="scale-up" data-aos-delay="200"
                            data-src="interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.42.jpeg"
                            data-title="Minimalist TV Entertainment Setup"
                            data-desc="A clean and modern television display unit featuring sleek custom cabinetry, subtle design details, and integrated ambient lighting.">
                            <div className="premium-card">
                                <div className="premium-card-img-wrapper">
                                    <img src="interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.42.jpeg"
                                        alt="Minimalist TV Entertainment Setup" className="lazy-load" loading="lazy" />
                                    <div className="gallery-overlay">
                                        <div className="view-btn">+</div>
                                    </div>
                                </div>
                                <div className="gallery-details-card premium-card-content">
                                    <span className="item-cat premium-cat">TV UNIT</span>
                                    <h4 className="premium-title">Minimalist TV Entertainment Setup</h4>
                                    <p className="premium-desc">A clean and modern television display unit featuring sleek custom cabinetry, subtle design details, and integrated ambient lighting.</p>
                                    <a href="https://wa.me/919629141957?text=Hi,%20I%20am%20interested%20in%20booking%20the%20Minimalist%20TV%20Entertainment%20Setup%20design."
                                        target="_blank" className="btn btn-primary premium-card-btn">BOOK NOW</a>
                                </div>
                            </div>
                        </div>

                        {/* Image 12 */}
                        <div className="gallery-item kitchen" data-index="11" data-aos="scale-up" data-aos-delay="300"
                            data-src="interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.44.jpeg"
                            data-title="Premium Modular Kitchen Design"
                            data-desc="An exceptional modular kitchen featuring sophisticated aesthetics, intelligently planned storage spaces, and high-quality finishes that enhance your cooking environment.">
                            <div className="premium-card">
                                <div className="premium-card-img-wrapper">
                                    <img src="interior%20image/WhatsApp%20Image%202026-07-14%20at%2009.24.44.jpeg"
                                        alt="Premium Modular Kitchen Design" className="lazy-load" loading="lazy" />
                                    <div className="gallery-overlay">
                                        <div className="view-btn">+</div>
                                    </div>
                                </div>
                                <div className="gallery-details-card premium-card-content">
                                    <span className="item-cat premium-cat">KITCHEN</span>
                                    <h4 className="premium-title">Premium Modular Kitchen Design</h4>
                                    <p className="premium-desc">An exceptional modular kitchen featuring sophisticated aesthetics, intelligently planned storage spaces, and high-quality finishes that enhance your cooking environment.</p>
                                    <a href="https://wa.me/919629141957?text=Hi,%20I%20am%20interested%20in%20booking%20the%20Premium%20Modular%20Kitchen%20Design%20design."
                                        target="_blank" className="btn btn-primary premium-card-btn">BOOK NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Lightbox Modal */}
            <div className="lightbox" id="lightbox">
                <button className="lightbox-close" id="lightboxClose">&times;</button>
                <button className="lightbox-nav prev" id="lightboxPrev">&#10094;</button>
                <button className="lightbox-nav next" id="lightboxNext">&#10095;</button>

                <div className="lightbox-content">
                    <div className="lightbox-img-container">
                        <img src="" alt="" id="lightboxImg" />
                    </div>

                    <div className="lightbox-details">
                        <span className="lightbox-tag" id="lightboxTag">Category</span>
                        <h3 id="lightboxTitle">Project Title</h3>
                        <p id="lightboxDesc">Detailed project description goes here.</p>
                        <a href="https://wa.me/919629141957?text=Hi%20Karthik,%20I'm%20interested%20in%20a%20design%20similar%20to%20"
                            target="_blank" className="btn btn-primary" id="lightboxWhatsApp">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"
                                style={{ marginRight: '8px', verticalAlign: 'middle' }}>
                                <path
                                    d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.37 5.01L2 22l5.132-1.34a9.92 9.92 0 004.873 1.28h.005c5.507 0 9.99-4.479 9.99-9.986 0-2.67-1.04-5.18-2.92-7.06a9.9 9.9 0 00-7.068-2.9zm5.729 13.987c-.247.698-1.442 1.285-1.996 1.348-.564.063-1.127.318-3.619-.714-3.181-1.317-5.201-4.566-5.361-4.778-.16-.212-1.285-1.713-1.285-3.27 0-1.557.818-2.324 1.109-2.624.29-.3.639-.375.852-.375h.607c.213 0 .47-.075.736.575.267.65.918 2.238.998 2.399.08.16.133.35.027.562-.107.213-.16.35-.32.538-.16.187-.336.412-.48.55-.16.15-.327.312-.138.637.19.325.845 1.391 1.81 2.25 1.246 1.112 2.296 1.455 2.627 1.624.331.168.525.138.723-.087.198-.225.852-.988 1.078-1.325.227-.338.453-.281.769-.163.315.118 1.996.944 2.339 1.119.344.175.572.262.654.4.083.137.083.797-.164 1.495z" />
                            </svg>Enquire on WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            <Testimonials3D />

            <section id="contact" className="contact section-padding bg-light">
                <div className="container">
                    <div className="grid grid-2">
                        {/* left Panel */}
                        <div className="contact-info-panel" data-aos="fade-right">
                            <div className="section-badge">INTERESTED?</div>
                            <h2 className="section-title">Let's Craft Your Dream Space Together</h2>
                            <p className="text-muted mb-30">
                                Have a residential layout or business space ready to get styled? Get a free budget analysis and
                                consultation today. Share your ideas with GP Karthik.
                            </p>

                            <div className="contact-details-list">
                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                                            <path
                                                d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.36 11.36 0 004.28 1.01 1 1 0 011 1v3.5a1 1 0 01-1 1A16 16 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 001.01 4.28 1 1 0 01-.27 1.11z" />
                                        </svg>
                                    </div>
                                    <div className="contact-desc">
                                        <span>Call Us Direct</span>
                                        <strong><a href="tel:+919629141957">+91 96291 41957</a></strong>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                                            <path
                                                d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.37 5.01L2 22l5.132-1.34a9.92 9.92 0 004.873 1.28h.005c5.507 0 9.99-4.479 9.99-9.986 0-2.67-1.04-5.18-2.92-7.06a9.9 9.9 0 00-7.068-2.9zm5.729 13.987c-.247.698-1.442 1.285-1.996 1.348-.564.063-1.127.318-3.619-.714-3.181-1.317-5.201-4.566-5.361-4.778-.16-.212-1.285-1.713-1.285-3.27 0-1.557.818-2.324 1.109-2.624.29-.3.639-.375.852-.375h.607c.213 0 .47-.075.736.575.267.65.918 2.238.998 2.399.08.16.133.35.027.562-.107.213-.16.35-.32.538-.16.187-.336.412-.48.55-.16.15-.327.312-.138.637.19.325.845 1.391 1.81 2.25 1.246 1.112 2.296 1.455 2.627 1.624.331.168.525.138.723-.087.198-.225.852-.988 1.078-1.325.227-.338.453-.281.769-.163.315.118 1.996.944 2.339 1.119.344.175.572.262.654.4.083.137.083.797-.164 1.495z" />
                                        </svg>
                                    </div>
                                    <div className="contact-desc">
                                        <span>WhatsApp Owner (GP Karthik)</span>
                                        <strong><a
                                            href="https://wa.me/919629141957?text=Hi%20Karthik,%20I'm%20interested%20in%20discussing%20my%20home%20interiors."
                                            target="_blank">Connect Now</a></strong>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                                            <path
                                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                        </svg>
                                    </div>
                                    <div className="contact-desc">
                                        <span>Email Enquiries</span>
                                        <strong><a
                                            href="mailto:sastikeyaninteriors@gmail.com">sastikeyaninteriors@gmail.com</a></strong>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon">
                                        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                                            <path
                                                d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                                        </svg>
                                    </div>
                                    <div className="contact-desc">
                                        <span>Office Address</span>
                                        <strong>Sastikeyan Interior, Pbel City, Kelambakkam, Chennai, Tamil Nadu</strong>
                                    </div>
                                </div>
                            </div>

                            <div className="map-placeholder mt-30">
                                {/* Interactive 3D Google Map Embed */}
                                <div className="map-3d-container">
                                    <div className="map-3d-frame">
                                        <div className="map-3d-inner">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4373678311945!2d80.2155969!3d12.7755218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5251a5d8c1b1b7%3A0x1e5c8e5f5b5c5a5d!2sPbel%20City%2C%20Kelambakkam!5e0!3m2!1sen!2sin!4v1"
                                                width="100%" height="300" style={{ border: '0' }} allowfullscreen="" loading="lazy"
                                                referrerpolicy="no-referrer-when-downgrade"
                                                title="Sastikeyan Interior Location - Pbel City, Kelambakkam, Chennai">
                                            </iframe>
                                        </div>
                                        <div className="map-3d-shine"></div>
                                    </div>
                                    <div className="map-3d-footer">
                                        <div className="map-3d-info">
                                            <span className="map-3d-pin">&#128205;</span>
                                            <span>Sastikeyan Interior, Pbel City, Kelambakkam, Chennai, Tamil Nadu</span>
                                        </div>
                                        <a href="https://www.google.com/maps/search/pbel+city+kelambakkam/@12.7755218,80.2155969,17z"
                                            target="_blank" className="btn btn-primary btn-sm">Open in Google Maps</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* right Panel */}
                        <div className="contact-right-panel" data-aos="fade-left" data-aos-delay="200" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <div className="contact-form-panel" style={{ alignSelf: 'stretch', margin: '0' }}>
                                <h3>Request Custom Quotation</h3>
                                <p className="form-subtext">Fill in details. We'll contact you back in 24 hours.</p>

                                <form id="quoteForm" action="#" className="quote-form">
                                    <div className="form-group">
                                        <label htmlFor="fullName">Your Full Name *</label>
                                        <input type="text" id="fullName" required placeholder="Ex: Ram Kumar" />
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="phoneNum">Phone Number *</label>
                                            <input type="tel" id="phoneNum" required placeholder="Ex: 9876543210" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="emailAddr">Email Address</label>
                                            <input type="email" id="emailAddr" placeholder="Ex: ram@gmail.com" />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="propertyType">Property Type</label>
                                            <select id="propertyType">
                                                <option value="2bhk">2 BHK Villa/Flat</option>
                                                <option value="3bhk" selected>3 BHK Villa/Flat</option>
                                                <option value="4bhk">4 BHK Villa/Flat</option>
                                                <option value="Modular Kitchen Only">Modular Kitchen Setup Only</option>
                                                <option value="Commercial Shop/Office">Commercial / Office Layout</option>
                                                <option value="Renovation">Single Room Renovation</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="location">Property Location *</label>
                                            <input type="text" id="location" required placeholder="Ex: Cantonment, Trichy" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="userMsg">Tell Us About Your Project & Budget Requirements</label>
                                        <textarea id="userMsg" rows="4"
                                            placeholder="Ex: I want modular kitchen cabinets, 3 bedroom wardrobes, and TV Unit false ceiling..."></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-block">
                                        SUBMIT REQUEST
                                    </button>
                                    <div id="formStatus" className="form-status"></div>
                                </form>
                            </div>
                            <a href="https://construction.sastikeyaninterior.in" target="_blank" rel="noopener noreferrer" className="btn btn-premium-outline btn-block">
                                VISIT SASTIKEYAN CONSTRUCTION
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Divider: Contact to Footer */}
            <div className="section-divider" style={{ background: '#0c0c0e' }}>
                <svg viewBox="0 0 1200 80" preserveAspectRatio="none">
                    <path d="M0,40 C300,0 600,80 1200,40 L1200,80 L0,80 Z" fill="#0c0c0e" />
                </svg>
            </div>

            {/* Footer */}
            <footer className="footer">
                <div className="container footer-top">
                    <div className="grid footer-grid">
                        <div className="footer-about">
                            <div className="logo-area">
                                <img src="logo/WhatsApp%20Image%202026-07-14%20at%2009.24.40%20(5).jpeg"
                                    alt="Sastikeyan Interior Logo" className="logo-img" />
                                <div className="logo-text">
                                    <span className="logo-main text-white">SASTIKEYAN</span>
                                    <span className="logo-sub">INTERIOR</span>
                                </div>
                            </div>
                            <p className="footer-desc">
                                Decades of expertise in rendering, manufacturing, and installing luxury residential and
                                commercial interior spaces. Owned and managed by GP Karthik.
                            </p>
                            <div className="social-links">
                                <a href="https://facebook.com" target="_blank" aria-label="Facebook">FB</a>
                                <a href="https://www.instagram.com/sastik_constructions_interior?stkn=MWIwd200anB4dDY2dA==" target="_blank" aria-label="Instagram">IG</a>
                                <a href="https://wa.me/919629141957" target="_blank" aria-label="WhatsApp">WA</a>
                                <a href="https://youtube.com" target="_blank" aria-label="Youtube">YT</a>
                            </div>
                        </div>

                        <div className="footer-links">
                            <h4>Explore</h4>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#services">Our Services</a></li>
                                <li><a href="#designs">Our Gallery Portfolio</a></li>
                                <li><a href="#contact">Contact Form</a></li>
                            </ul>
                        </div>

                        <div className="footer-services">
                            <h4>Services</h4>
                            <ul>
                                <li><a href="#services">Modular Kitchen cabinet</a></li>
                                <li><a href="#services">Sliding Wardrobes</a></li>
                                <li><a href="#services">Teak Pooja Cupboards</a></li>
                                <li><a href="#services">Gypsum False Ceilings</a></li>
                                <li><a href="#services">Living TV Cabinets</a></li>
                            </ul>
                        </div>

                        <div className="footer-hours">
                            <h4>Business Hours</h4>
                            <p>We are available to serve you:</p>
                            <ul>
                                <li><span>Monday - Saturday:</span> <strong>09:30 AM - 08:30 PM</strong></li>
                                <li><span>Sunday:</span> <strong>On Appointment Only</strong></li>
                                <li><span>Consulting Partner:</span> <strong>GP Karthik (Founder)</strong></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container flex-between">
                        <p>&copy; 2026 Sastikeyan Interior. All Rights Reserved. Owned by GP Karthik.</p>
                        <p>Design & Develop by <a href="#" className="gold">Vishal</a></p>
                    </div>
                </div>
            </footer>

            {/* Floating WhatsApp Floating Button */}
            <a href="https://wa.me/919629141957?text=Hi%20Karthik,%20I%20am%20interested%20in%20doing%20interior%20work%20for%20my%20property.%20Let%27s%20discuss!"
                target="_blank" className="whatsapp-float-btn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                    <path
                        d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.37 5.01L2 22l5.132-1.34a9.92 9.92 0 004.873 1.28h.005c5.507 0 9.99-4.479 9.99-9.986 0-2.67-1.04-5.18-2.92-7.06a9.9 9.9 0 00-7.068-2.9zm5.729 13.987c-.247.698-1.442 1.285-1.996 1.348-.564.063-1.127.318-3.619-.714-3.181-1.317-5.201-4.566-5.361-4.778-.16-.212-1.285-1.713-1.285-3.27 0-1.557.818-2.324 1.109-2.624.29-.3.639-.375.852-.375h.607c.213 0 .47-.075.736.575.267.65.918 2.238.998 2.399.08.16.133.35.027.562-.107.213-.16.35-.32.538-.16.187-.336.412-.48.55-.16.15-.327.312-.138.637.19.325.845 1.391 1.81 2.25 1.246 1.112 2.296 1.455 2.627 1.624.331.168.525.138.723-.087.198-.225.852-.988 1.078-1.325.227-.338.453-.281.769-.163.315.118 1.996.944 2.339 1.119.344.175.572.262.654.4.083.137.083.797-.164 1.495z" />
                </svg>
            </a>

            {/* Back to Top Button */}
            <button className="back-to-top" id="backToTop" aria-label="Back to top">&#8593;</button>

            {/* Custom Javascript */}
        </>
    );
}
export default App;
