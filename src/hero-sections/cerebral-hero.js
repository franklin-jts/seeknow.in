// Cerebral Hero Section - Pure CSS Animation (No Canvas)
import centerLogo from '../assets/centerlogo.png';
import seeknowLogo from '../assets/seeknow-logo.png';

// ── App Logos (SVG inline — exact brand recreation) ──
const seeknowLogoSVG = `
<svg viewBox="0 0 180 50" xmlns="http://www.w3.org/2000/svg" width="140" height="40">
  <image href="${seeknowLogo}" x="0" y="0" width="180" height="50" preserveAspectRatio="xMidYMid meet"/>
</svg>`;

const consoleLogoSVG = `
<svg viewBox="0 0 260 80" xmlns="http://www.w3.org/2000/svg" width="160" height="50">
  <!-- Console wordmark -->
  <text x="10" y="52" font-family="Outfit,sans-serif" font-weight="800" font-size="52" fill="#ffffff" letter-spacing="-2">Console</text>
  <!-- by seeknow line -->
  <line x1="10" y1="62" x2="55" y2="62" stroke="rgba(255,255,255,0.35)" stroke-width="1.2"/>
  <text x="60" y="72" font-family="Outfit,sans-serif" font-weight="400" font-size="11" fill="rgba(255,255,255,0.7)">by </text>
  <!-- seeknow icon circle -->
  <circle cx="87" cy="67" r="7" fill="none" stroke="#fff" stroke-width="1.8"/>
  <circle cx="87" cy="67" r="3" fill="none" stroke="#fff" stroke-width="1.4"/>
  <line x1="87" y1="62" x2="87" y2="66" stroke="#fff" stroke-width="1.4"/>
  <text x="96" y="72" font-family="Outfit,sans-serif" font-weight="700" font-size="11" fill="#fff">now</text>
  <line x1="130" y1="62" x2="175" y2="62" stroke="rgba(255,255,255,0.35)" stroke-width="1.2"/>
</svg>`;

const refernowLogoSVG = `
<svg viewBox="0 0 280 70" xmlns="http://www.w3.org/2000/svg" width="180" height="56">
  <!-- Refer white -->
  <text x="8" y="48" font-family="Outfit,sans-serif" font-weight="800" font-size="48" fill="#ffffff" letter-spacing="-1">Refer</text>
  <!-- Magnifier icon with cyan glow -->
  <circle cx="150" cy="30" r="16" fill="none" stroke="#00e5ff" stroke-width="3" filter="url(#cyanGlow)"/>
  <circle cx="150" cy="30" r="10" fill="rgba(0,229,255,0.08)"/>
  <!-- Person icon inside -->
  <circle cx="150" cy="25" r="4" fill="#00e5ff"/>
  <path d="M143 38 Q143 32 150 32 Q157 32 157 38" fill="#00e5ff"/>
  <!-- Handle -->
  <line x1="161" y1="41" x2="170" y2="50" stroke="#00e5ff" stroke-width="3.5" stroke-linecap="round"/>
  <!-- Now cyan -->
  <text x="178" y="48" font-family="Outfit,sans-serif" font-weight="800" font-size="48" fill="#00e5ff" letter-spacing="-1">Now</text>
  <!-- glow filter -->
  <defs>
    <filter id="cyanGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
</svg>`;

export function createCerebralHero() {
    // Generate spark positions
    const sparks = Array.from({ length: 26 }, (_, i) => ({
        l: (i * 37) % 100,
        t: (i * 53) % 100,
        d: (i % 6) * 0.5,
    }));
    
    const heroHTML = `
        <div class="hero-container">
            <!-- Light beams -->
            <div class="beam b1"></div>
            <div class="beam b2"></div>
            
            <!-- Navigation — CRED style: logo + hamburger only -->
            <header class="sn-nav" id="snNav">
                <a href="#" class="sn-nav__logo">
                    <img src="${seeknowLogo}" alt="SeekNow" />
                </a>
                <button class="sn-nav__burger" id="snBurger" aria-label="Open menu" aria-expanded="false" aria-controls="snMobileMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </header>

            <!-- CRED-style full-screen overlay menu -->
            <div class="sn-overlay" id="snMobileMenu" aria-hidden="true" role="dialog" aria-label="Navigation menu">
                <!-- Top bar inside overlay -->
                <div class="sn-overlay__top">
                    <a href="#" class="sn-nav__logo">
                        <img src="${seeknowLogo}" alt="SeekNow" />
                    </a>
                    <button class="sn-overlay__close" id="snClose" aria-label="Close menu">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M2 2l16 16M18 2L2 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>

                <!-- Main nav links — large CRED typography -->
                <nav class="sn-overlay__nav" role="navigation">
                    <div class="sn-ol__item" data-index="0">
                        <a href="#features" class="sn-ol__link sn-ol__link--has-sub">
                            <span>Products</span>
                            <svg class="sn-ol__arrow" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                        <div class="sn-ol__sub">
                            <a href="#features" class="sn-ol__sub-link">SeekNow HRMS</a>
                            <a href="#features" class="sn-ol__sub-link">ReferNow</a>
                            <a href="#features" class="sn-ol__sub-link">Console CRM</a>
                        </div>
                    </div>
                    <div class="sn-ol__item" data-index="1">
                        <a href="#features" class="sn-ol__link sn-ol__link--has-sub">
                            <span>Solutions</span>
                            <svg class="sn-ol__arrow" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                        <div class="sn-ol__sub">
                            <a href="#features" class="sn-ol__sub-link">HR Teams</a>
                            <a href="#features" class="sn-ol__sub-link">Recruitment Teams</a>
                            <a href="#features" class="sn-ol__sub-link">Business Operations</a>
                        </div>
                    </div>
                    <div class="sn-ol__item" data-index="2">
                        <a href="#features" class="sn-ol__link" data-index="2">
                            <span>Features</span>
                        </a>
                    </div>
                    <div class="sn-ol__item" data-index="3">
                        <a href="#testimonials" class="sn-ol__link">
                            <span>Why Us</span>
                        </a>
                    </div>
                    <div class="sn-ol__item" data-index="4">
                        <a href="#" class="sn-ol__link">
                            <span>About</span>
                        </a>
                    </div>
                </nav>

                <!-- Bottom CTA strip -->
                <div class="sn-overlay__foot">
                    <a href="#" class="sn-ol__login">Log in</a>
                    <button class="sn-ol__cta" id="snOlDemo">Book a Demo</button>
                </div>
            </div>

            <!-- Hero Content -->
            <main class="hero-content">
                <div class="content-left">
                    <span class="badge">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#e3d2ff" stroke-width="2">
                            <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/>
                        </svg>
                        India's First Workforce Operating System
                    </span>

                    <h1 class="hero-title">
                        <span class="ht-line ht-white">One Platform.</span>
                        <span class="ht-line ht-dim">Hire. Manage.</span>
                        <span class="ht-line ht-white">Grow. Together.</span>
                    </h1>

                    <p class="hero-description">
                        SeekNow unifies AI-powered talent discovery, employee referral networks, and CRM operations — so your team spends less time on tools and more time on results.
                    </p>

                    <div class="hero-stats">
                        <div class="hero-stat">
                            <span class="stat-value" data-target="40" data-suffix="%">0%</span>
                            <span class="stat-label">Faster Hiring</span>
                        </div>
                        <div class="hero-stat-divider"></div>
                        <div class="hero-stat">
                            <span class="stat-value" data-target="50" data-prefix="₹" data-suffix="K">₹0K</span>
                            <span class="stat-label">Avg Referral Pool</span>
                        </div>
                        <div class="hero-stat-divider"></div>
                        <div class="hero-stat">
                            <span class="stat-value" data-target="98" data-suffix="%">0%</span>
                            <span class="stat-label">Skill Match Rate</span>
                        </div>
                    </div>

                    <div class="hero-buttons">
                        <button class="btn-white" id="exploreHeroBtn">
                            <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 0l9 5-9 5z" fill="#111"/></svg>
                            Explore Platform
                        </button>
                        <button class="btn-ghost">Book a Demo</button>
                    </div>
                </div>
                
            </main>



            <!-- Features Section -->
            <section class="features-section" id="features">
                <div class="features-header">
                    <span class="features-badge">
                        <svg width="10" height="10" viewBox="0 0 10 10"><path d="M5 0l1.2 3.6L10 5 6.2 6.4 5 10 3.8 6.4 0 5l3.8-1.4z" fill="#a78bfa"/></svg>
                        THE ECOSYSTEM AT A GLANCE
                        <svg width="10" height="10" viewBox="0 0 10 10"><path d="M5 0l1.2 3.6L10 5 6.2 6.4 5 10 3.8 6.4 0 5l3.8-1.4z" fill="#a78bfa"/></svg>
                    </span>
                    <h2 class="features-title">One Unified Suite. <span class="features-title-white">Infinite Growth.</span></h2>
                    <p class="features-subtitle">Interactive Clue: Hover or click on any module below to inspect its core capabilities.</p>
                </div>

                <div class="features-grid">

                    <!-- Card 1: AI-Powered Talent Discovery -->
                    <div class="feature-card card-dark" id="card-1">
                        <div class="card-icon-wrap icon-purple">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>
                        </div>
                        <h3 class="card-title">AI-Powered Talent Discovery</h3>
                        <p class="card-description">How do you discover top candidates and manage employee lifecycles instantly? Manage workforce operations end-to-end—from employee records, attendance, and leave requests to AI-powered skill mapping and talent discovery.</p>
                        <div class="card-mockup mockup-search">
                            <div class="search-bar">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>
                                <span class="search-typing">Search: "Senior Full Stack Dev (Bengaluru)"</span>
                            </div>
                            <div class="match-label">Match Results</div>
                            <div class="search-result">
                                <span class="result-check">✓</span>
                                <span class="result-text">Match Found: Rahul K. <span class="result-tag">(98% Skill Match)</span></span>
                            </div>
                            <div class="search-result result-yellow">
                                <span class="result-bolt">⚡</span>
                                <span class="result-text">Attendance &amp; Payroll: <span class="result-processed">Processed</span></span>
                            </div>
                        </div>
                    </div>

                    <!-- Card 2: Employee Referral Network Hub (Highlighted) -->
                    <div class="feature-card card-highlight" id="card-2">
                        <div class="card-icon-wrap icon-teal">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/></svg>
                        </div>
                        <h3 class="card-title">Employee Referral Network Hub</h3>
                        <p class="card-description">How do you turn internal employee networks into your fastest hiring pipeline? Connect job seekers with verified employee referrers, track candidate journeys seamlessly, and automate referral reward payouts.</p>
                        <div class="card-mockup mockup-refer">
                            <div class="refer-stat">
                                <span class="refer-label">Active Bonus Pool:</span>
                                <span class="refer-value">₹50,000 / Hire</span>
                            </div>
                            <div class="refer-tracking">
                                <span class="tracking-dot"></span>
                                24 Candidate Referrals In-Progress
                            </div>
                            <div class="refer-nodes">
                                <div class="ref-node n1">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                                </div>
                                <div class="ref-node n2">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                                </div>
                                <div class="ref-node n3">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                                </div>
                                <div class="ref-node n4">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/></svg>
                                </div>
                                <svg class="ref-lines" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="100" y1="60" x2="30" y2="30" stroke="rgba(167,139,250,0.4)" stroke-width="1" stroke-dasharray="4 3"/>
                                    <line x1="100" y1="60" x2="170" y2="30" stroke="rgba(167,139,250,0.4)" stroke-width="1" stroke-dasharray="4 3"/>
                                    <line x1="100" y1="60" x2="30" y2="90" stroke="rgba(167,139,250,0.4)" stroke-width="1" stroke-dasharray="4 3"/>
                                    <line x1="100" y1="60" x2="170" y2="90" stroke="rgba(167,139,250,0.4)" stroke-width="1" stroke-dasharray="4 3"/>
                                    <circle cx="100" cy="60" r="6" fill="rgba(167,139,250,0.5)"/>
                                </svg>
                            </div>
                            <div class="refer-conversion">
                                <span class="conversion-star">★</span>
                                <span class="conversion-text">28.5% Higher Interview Conversion</span>
                            </div>
                        </div>
                    </div>

                    <!-- Card 3: Unified CRM & Operations Dashboard -->
                    <div class="feature-card card-dark" id="card-3">
                        <div class="card-icon-wrap icon-indigo">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
                        </div>
                        <h3 class="card-title">Unified CRM &amp; Operations Dashboard</h3>
                        <p class="card-description">How do you track customer relationships and predict sales pipeline growth? Centralize customer data, organize sales leads, track follow-up activities, and monitor real-time revenue analytics on a single dashboard.</p>
                        <div class="card-mockup mockup-crm">
                            <div class="crm-header">
                                <span class="crm-header-title">Growth Strategy - V3</span>
                                <div class="crm-avatars">
                                    <span class="crm-avatar">👤</span>
                                    <span class="crm-avatar">👤</span>
                                </div>
                            </div>
                            <div class="crm-stat">
                                <div class="crm-label">Pipeline Value:</div>
                                <div class="crm-value">₹2,48,50,000</div>
                                <div class="crm-win">Win Rate: <span>68%</span></div>
                            </div>
                            <div class="crm-nodes">
                                <div class="crm-node">Lead Sourcing</div>
                                <div class="crm-node">Client Insights</div>
                                <div class="crm-node">Pipeline Management</div>
                                <div class="crm-node crm-node-accent">Revenue Forecast</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="features-cta-wrap">
                    <button class="features-cta" id="exploreBtn">Explore Full Ecosystem</button>
                    <button class="features-cta-ghost">Book a Live Demo</button>
                </div>
            </section>

            <!-- ═══ ECOSYSTEM MODAL ═══ -->
            <div class="eco-overlay" id="ecoOverlay">
                <div class="eco-portal">
                    <!-- Spinning galaxy rings -->
                    <div class="eco-ring r1"></div>
                    <div class="eco-ring r2"></div>
                    <div class="eco-ring r3"></div>
                    <div class="eco-ring r4"></div>
                    <!-- Central orb glow -->
                    <div class="eco-orb"></div>
                    <!-- Light rays -->
                    <div class="eco-rays"></div>
                    <!-- Canvas for energy lines -->
                    <canvas class="eco-canvas" id="ecoCanvas"></canvas>
                    <!-- Particles -->
                    <div class="eco-particles" id="ecoParticles"></div>

                    <!-- Header -->
                    <div class="eco-header">
                        <p class="eco-activating">Modules Activating... Interact with any log once unfurled</p>
                        <button class="eco-close" id="ecoClose">✕</button>
                    </div>

                    <!-- 3 App Cards -->
                    <div class="eco-cards">

                        <div class="eco-card eco-card-left" id="ecoCard1">
                            <div class="eco-card-glow gcol-purple"></div>
                            <div class="eco-card-inner">
                                <div class="eco-logo-wrap logo-wrap-seeknow">
                                    <img src="${seeknowLogo}" alt="SeekNow" class="eco-logo-img" />
                                </div>
                                <div class="eco-card-badge badge-purple">AI-POWERED</div>
                                <h3 class="eco-card-title">TALENT DISCOVERY</h3>
                                <p class="eco-card-desc">Manage workforce operations end-to-end — from employee records and attendance to AI-powered skill mapping and talent discovery.</p>
                                <div class="eco-card-stats">
                                    <div class="eco-stat-row">
                                        <span class="eco-stat-dot green"></span>
                                        <span>Match Found: Rahul K. <b>98% Skill Match</b></span>
                                    </div>
                                    <div class="eco-stat-row">
                                        <span class="eco-stat-dot yellow"></span>
                                        <span>Attendance &amp; Payroll: <b>Processed</b></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="eco-card eco-card-center" id="ecoCard2">
                            <div class="eco-card-glow gcol-pink"></div>
                            <div class="eco-card-inner">
                                <div class="eco-logo-wrap logo-wrap-refernow">
                                    ${refernowLogoSVG}
                                </div>
                                <div class="eco-card-badge badge-teal">EMPLOYEE REFERRAL</div>
                                <h3 class="eco-card-title">NETWORK HUB</h3>
                                <p class="eco-card-desc">Connect job seekers with verified employee referrers, track candidate journeys seamlessly, and automate referral reward payouts.</p>
                                <div class="eco-card-stats">
                                    <div class="eco-stat-row highlight-row">
                                        <span class="eco-stat-dot green"></span>
                                        <span>Active Bonus Pool: <b>₹50,000 / Hire</b></span>
                                    </div>
                                    <div class="eco-stat-row">
                                        <span class="eco-stat-dot blue"></span>
                                        <span><b>28.5%</b> Higher Interview Conversion</span>
                                    </div>
                                    <div class="eco-stat-row">
                                        <span class="eco-stat-dot purple"></span>
                                        <span>24 Candidate Referrals In-Progress</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="eco-card eco-card-right" id="ecoCard3">
                            <div class="eco-card-glow gcol-teal"></div>
                            <div class="eco-card-inner">
                                <div class="eco-logo-wrap logo-wrap-console">
                                    ${consoleLogoSVG}
                                </div>
                                <div class="eco-card-badge badge-indigo">UNIFIED CRM &amp;</div>
                                <h3 class="eco-card-title">OPERATIONS DASHBOARD</h3>
                                <p class="eco-card-desc">Centralize customer data, organize sales leads, track follow-up activities, and monitor real-time revenue analytics on a single dashboard.</p>
                                <div class="eco-card-stats">
                                    <div class="eco-stat-row">
                                        <span class="eco-stat-dot yellow"></span>
                                        <span>Pipeline Value: <b>₹2,48,50,000</b></span>
                                    </div>
                                    <div class="eco-stat-row">
                                        <span class="eco-stat-dot green"></span>
                                        <span>Deal Win Rate: <b>68%</b></span>
                                    </div>
                                    <div class="eco-stat-row">
                                        <span class="eco-stat-dot blue"></span>
                                        <span>Active Leads Tracked: <b>1,420</b></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <!-- Testimonials Section -->
            <section class="testimonials-section" id="testimonials">
                <div class="testi-connector">
                    <div class="connector-line"></div>
                    <div class="connector-arrow">▼</div>
                </div>

                <div class="testi-header">
                    <span class="testi-badge">
                        <svg width="10" height="10" viewBox="0 0 10 10"><path d="M5 0l1.2 3.6L10 5 6.2 6.4 5 10 3.8 6.4 0 5l3.8-1.4z" fill="#a78bfa"/></svg>
                        TRUSTED BY INNOVATORS: REAL RESULTS.
                        <svg width="10" height="10" viewBox="0 0 10 10"><path d="M5 0l1.2 3.6L10 5 6.2 6.4 5 10 3.8 6.4 0 5l3.8-1.4z" fill="#a78bfa"/></svg>
                    </span>
                </div>


                <div class="testi-carousel-wrap">
                    <div class="testi-track-outer">
                        <div class="testi-track" id="testiTrack">
                            ${(() => {
                                const cards = [
                                    { name:'Sarah J.',   role:'CHRO, Apex Tech',                        quote:'"Reduced our time-to-hire by 40%. The unified talent view is a complete game-changer."',                              av:'avatar-purple', card:'testi-card-purple',    glow:'glow-purple' },
                                    { name:'Michael L.', role:'Founder & CEO, Fusion Corp.',            quote:'"Our decision for infinite growth. The CRM and operations are truly interconnected. A complete ecosystem."',          av:'avatar-teal',   card:'testi-card-highlight', glow:'glow-pink'   },
                                    { name:'Aisha B.',   role:'People & Culture Director, InnovateHub', quote:'"Finally, our referral program works. Connecting great people through existing networks is transformative."',         av:'avatar-indigo', card:'testi-card-teal',      glow:'glow-teal'   },
                                    { name:'Ravi K.',    role:'HR Head, GrowthPath Inc.',               quote:'"The AI search cut our screening time in half. We hired 3 senior engineers in one week — unprecedented."',           av:'avatar-purple', card:'testi-card-purple',    glow:'glow-purple' },
                                    { name:'Priya M.',   role:'COO, NexGen Solutions',                  quote:'"Referral bonus automation saved 20+ hours a month. Our team loves the transparency it brings to hiring."',          av:'avatar-teal',   card:'testi-card-teal',      glow:'glow-teal'   },
                                    { name:'Arjun S.',   role:'CTO, TalentBridge',                      quote:'"SeekNow AI matched candidates we would have missed. It understands context, not just keywords."',                   av:'avatar-indigo', card:'testi-card-highlight', glow:'glow-pink'   },
                                ];
                                const renderCard = t => `
                                    <div class="testi-card ${t.card}">
                                        <div class="testi-card-glow ${t.glow}"></div>
                                        <div class="testi-top">
                                            <div class="testi-avatar ${t.av}">
                                                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
                                            </div>
                                            <div>
                                                <div class="testi-name">${t.name}</div>
                                                <div class="testi-role">${t.role}</div>
                                            </div>
                                        </div>
                                        <p class="testi-quote">${t.quote}</p>
                                        <div class="testi-stars">★★★★★</div>
                                    </div>`;
                                // duplicate for seamless infinite loop
                                return [...cards, ...cards].map(renderCard).join('');
                            })()}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `;

    // Insert HTML
    document.body.insertAdjacentHTML('beforeend', heroHTML);

    // ── Premium Navbar JS ──
    // ── CRED-style Navbar JS ──
    (function initSnNav() {
        const nav    = document.getElementById('snNav');
        const burger = document.getElementById('snBurger');
        const menu   = document.getElementById('snMobileMenu');
        const close  = document.getElementById('snClose');

        // 1. Scroll sticky
        window.addEventListener('scroll', () => {
            if (nav) nav.classList.toggle('sn-nav--scrolled', window.scrollY > 40);
        }, { passive: true });

        // 2. Open overlay
        function openMenu() {
            if (!menu || !burger) return;
            menu.classList.add('sn-overlay--open');
            menu.setAttribute('aria-hidden', 'false');
            burger.setAttribute('aria-expanded', 'true');
            burger.classList.add('is-open');
            document.body.style.overflow = 'hidden';
        }

        // 3. Close overlay
        function closeMenu() {
            if (!menu || !burger) return;
            menu.classList.remove('sn-overlay--open');
            menu.setAttribute('aria-hidden', 'true');
            burger.setAttribute('aria-expanded', 'false');
            burger.classList.remove('is-open');
            document.body.style.overflow = '';
        }

        burger?.addEventListener('click', openMenu);
        close?.addEventListener('click', closeMenu);

        // Close on outside click
        menu?.addEventListener('click', (e) => {
            if (e.target === menu) closeMenu();
        });

        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMenu();
        });

        // 4. Sub-nav accordion inside overlay
        document.querySelectorAll('.sn-ol__link--has-sub').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const item = link.closest('.sn-ol__item');
                const sub  = item?.querySelector('.sn-ol__sub');
                const isOpen = item?.classList.contains('is-open');

                // Close all
                document.querySelectorAll('.sn-ol__item.is-open').forEach(el => {
                    el.classList.remove('is-open');
                    el.querySelector('.sn-ol__sub').style.maxHeight = '0';
                    el.querySelector('.sn-ol__arrow').style.transform = '';
                });

                if (!isOpen && sub) {
                    item.classList.add('is-open');
                    sub.style.maxHeight = sub.scrollHeight + 'px';
                    link.querySelector('.sn-ol__arrow').style.transform = 'rotate(90deg)';
                }
            });
        });

        // 5. Close menu when anchor link clicked
        menu?.querySelectorAll('a[href]').forEach(a => {
            a.addEventListener('click', closeMenu);
        });
    })();

    // ── 1. Star-field background element ──
    const starField = document.createElement('div');
    starField.className = 'star-field';
    document.body.insertBefore(starField, document.body.firstChild);

    // ── 2. Orbit rings and atmosphere on orb ──
    const orbWrap = document.querySelector('.orb-wrap');
    if (orbWrap) {
        // atmosphere
        const atmo = document.createElement('div');
        atmo.className = 'orb-atmosphere';
        orbWrap.insertBefore(atmo, orbWrap.firstChild);
        // orbit rings
        [1, 2, 3].forEach(n => {
            const ring = document.createElement('div');
            ring.className = `orbit-ring orbit-ring-${n}`;
            orbWrap.appendChild(ring);
        });
    }

    // ── 3. Section separators between major sections ──
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
        const sep = document.createElement('hr');
        sep.className = 'section-separator';
        featuresSection.parentNode.insertBefore(sep, featuresSection);
    }
    const testiSection = document.getElementById('testimonials');
    if (testiSection) {
        const sep2 = document.createElement('hr');
        sep2.className = 'section-separator';
        testiSection.parentNode.insertBefore(sep2, testiSection);
    }

    // ── 4. Footer ──
    const heroContainer = document.querySelector('.hero-container');
    if (heroContainer) {
        const footer = document.createElement('footer');
        footer.className = 'hero-footer';
        footer.innerHTML = `© ${new Date().getFullYear()} <span>SeekNow Technologies Pvt. Ltd.</span> · All rights reserved.`;
        heroContainer.appendChild(footer);
    }

    // ── 5. IntersectionObserver — stat counter animation ──
    const statValues = document.querySelectorAll('.stat-value');
    const statsRow = document.querySelector('.hero-stats');
    if (statsRow) {
        const targets = [
            { el: statValues[0], target: 40,  suffix: '%', prefix: '' },
            { el: statValues[1], target: 50,  suffix: 'K', prefix: '₹' },
            { el: statValues[2], target: 98,  suffix: '%', prefix: '' },
        ];
        let animated = false;
        const countUp = (item) => {
            const start = Date.now();
            const duration = 1400;
            const tick = () => {
                const elapsed = Date.now() - start;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.round(eased * item.target);
                if (item.el) item.el.textContent = item.prefix + current + item.suffix;
                if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        };
        const statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !animated) {
                animated = true;
                targets.forEach((item, i) => setTimeout(() => countUp(item), i * 180));
            }
        }, { threshold: 0.5 });
        statsObserver.observe(statsRow);
    }

    // ── 6. IntersectionObserver — feature cards staggered entrance ──
    const featureCards = document.querySelectorAll('.feature-card');
    if (featureCards.length) {
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('card-visible');
                }
            });
        }, { threshold: 0.15 });
        featureCards.forEach(card => cardObserver.observe(card));
    }

    // ── 7. IntersectionObserver — features title entrance ──
    const featuresTitle = document.querySelector('.features-title');
    if (featuresTitle) {
        const titleObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                entries[0].target.classList.add('title-visible');
            }
        }, { threshold: 0.3 });
        titleObserver.observe(featuresTitle);
    }

    // Setup button interactions
    document.querySelectorAll('.hero-container button').forEach(button => {
        button.addEventListener('click', () => {
            console.log(`${button.textContent.trim()} clicked`);
        });
    });

    // ── CRED-STYLE DUAL-LAYER TEXT SPOTLIGHT ──
    // Only on hero-title — description/stats stay normal
    (function initSpotlight() {
        const title = document.querySelector('.hero-title');
        if (!title) return;

        const wrapper = document.createElement('div');
        wrapper.className = 'spotlight-wrapper';
        wrapper.setAttribute('aria-hidden', 'true');

        const bright = title.cloneNode(true);
        bright.className = title.className + ' title-bright';
        bright.removeAttribute('id');
        title.classList.add('title-dim');

        wrapper.appendChild(bright);
        title.parentNode.insertBefore(wrapper, title);
        wrapper.appendChild(title);

        let targetX = -9999, targetY = -9999;
        let currentX = -9999, currentY = -9999;
        const LERP = 0.12;
        const lerp = (a, b, t) => a + (b - a) * t;

        function tick() {
            currentX = lerp(currentX, targetX, LERP);
            currentY = lerp(currentY, targetY, LERP);
            const rect = wrapper.getBoundingClientRect();
            wrapper.style.setProperty('--sx', `${currentX - rect.left}px`);
            wrapper.style.setProperty('--sy', `${currentY - rect.top}px`);
            wrapper.style.setProperty('--active', targetX < -999 ? '0' : '1');
            requestAnimationFrame(tick);
        }

        document.addEventListener('mousemove', e => { targetX = e.clientX; targetY = e.clientY; });
        document.addEventListener('mouseleave', () => { targetX = -9999; targetY = -9999; });

        if ('ontouchstart' in window) wrapper.classList.add('touch-device');
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) wrapper.classList.add('reduced-motion');

        tick();
    })();

    // ── Stats counter animation ──
    const statEls = document.querySelectorAll('.stat-value[data-target]');
    const counterObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = parseInt(el.dataset.target);
            const prefix = el.dataset.prefix || '';
            const suffix = el.dataset.suffix || '';
            let start = 0;
            const step = (timestamp) => {
                if (!start) start = timestamp;
                const progress = Math.min((timestamp - start) / 1800, 1);
                const ease = 1 - Math.pow(1 - progress, 3);
                el.textContent = prefix + Math.floor(ease * target) + suffix;
                if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            counterObs.unobserve(el);
        });
    }, { threshold: 0.5 });
    statEls.forEach(el => counterObs.observe(el));

    // Smooth scroll for navigation
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // ── Ecosystem Modal ──
    const overlay    = document.getElementById('ecoOverlay');
    const closeBtn   = document.getElementById('ecoClose');
    const exploreBtn = document.getElementById('exploreBtn');
    const cards      = ['ecoCard1','ecoCard2','ecoCard3'].map(id => document.getElementById(id));
    const particles  = document.getElementById('ecoParticles');
    const ecoCanvas  = document.getElementById('ecoCanvas');
    let   ecoRaf;

    // ── Particles ──
    for (let i = 0; i < 80; i++) {
        const p = document.createElement('span');
        p.className = 'eco-particle';
        const colors = ['#a78bfa','#2dd4bf','#818cf8','#f472b6','#60a5fa'];
        p.style.cssText = `
            left:${Math.random()*100}%;
            top:${Math.random()*100}%;
            width:${1+Math.random()*2.5}px;
            height:${1+Math.random()*2.5}px;
            background:${colors[Math.floor(Math.random()*colors.length)]};
            animation-delay:${Math.random()*6}s;
            animation-duration:${3+Math.random()*6}s;
        `;
        particles.appendChild(p);
    }

    // ── Shooting stars ──
    const overlay2 = document.getElementById('ecoOverlay');
    for (let i = 0; i < 10; i++) {
        const s = document.createElement('div');
        s.className = 'eco-star';
        s.style.cssText = `
            left:${Math.random()*80}%;
            top:${10+Math.random()*60}%;
            width:${60+Math.random()*120}px;
            animation-duration:${2+Math.random()*3}s;
            animation-delay:${Math.random()*5}s;
        `;
        overlay2.appendChild(s);
    }

    // ── Canvas energy lines ──
    function drawEnergyLines() {
        if (!ecoCanvas || !overlay.classList.contains('eco-open')) return;
        const W = ecoCanvas.width  = ecoCanvas.offsetWidth;
        const H = ecoCanvas.height = ecoCanvas.offsetHeight;
        const ctx = ecoCanvas.getContext('2d');
        ctx.clearRect(0,0,W,H);

        const t = Date.now() / 1000;
        const cx = W/2, cy = H/2;

        // Get card centres
        const cardEls = [
            document.getElementById('ecoCard1'),
            document.getElementById('ecoCard2'),
            document.getElementById('ecoCard3'),
        ];

        const points = cardEls.map(el => {
            if (!el) return { x: cx, y: cy };
            const r = el.getBoundingClientRect();
            const or = ecoCanvas.getBoundingClientRect();
            return { x: r.left - or.left + r.width/2, y: r.top - or.top + r.height/2 };
        });

        const colors = ['rgba(139,92,246,', 'rgba(20,184,166,', 'rgba(99,102,241,'];

        points.forEach((p, i) => {
            const pulse = 0.3 + 0.2 * Math.sin(t * 1.5 + i * 1.2);

            // Line from center to card
            const grad = ctx.createLinearGradient(cx, cy, p.x, p.y);
            grad.addColorStop(0, colors[i] + '0)');
            grad.addColorStop(0.4, colors[i] + pulse + ')');
            grad.addColorStop(1, colors[i] + '0)');
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Travelling dot along the line
            const frac = (t * 0.4 + i * 0.33) % 1;
            const dx = cx + (p.x - cx) * frac;
            const dy = cy + (p.y - cy) * frac;
            ctx.beginPath();
            ctx.arc(dx, dy, 3, 0, Math.PI*2);
            ctx.fillStyle = colors[i] + '0.9)';
            ctx.shadowBlur = 12;
            ctx.shadowColor = colors[i] + '1)';
            ctx.fill();
            ctx.shadowBlur = 0;
        });

        ecoRaf = requestAnimationFrame(drawEnergyLines);
    }

    function openEco() {
        overlay.classList.add('eco-open');
        document.body.style.overflow = 'hidden';
        cards.forEach((c, i) => {
            if (!c) return;
            c.style.animationDelay = `${0.15 + i * 0.18}s`;
            c.classList.add('eco-card-in');
        });
        setTimeout(drawEnergyLines, 300);
    }

    function closeEco() {
        cancelAnimationFrame(ecoRaf);
        cards.forEach(c => c?.classList.remove('eco-card-in'));
        overlay.classList.remove('eco-open');
        document.body.style.overflow = '';
    }

    exploreBtn?.addEventListener('click', openEco);
    closeBtn?.addEventListener('click', closeEco);
    overlay?.addEventListener('click', (e) => { if (e.target === overlay) closeEco(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeEco(); });

    return {
        destroy() {
            document.querySelector('.hero-container')?.remove();
        }
    };
}
