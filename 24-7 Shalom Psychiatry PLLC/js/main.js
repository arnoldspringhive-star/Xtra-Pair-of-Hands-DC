// Header Component
const headerHTML = `
<div class="top-bar">
    <div class="top-bar-container">
        <div class="top-bar-left" style="display: flex; gap: 15px; align-items: center; font-size: 0.9rem;">
            <span style="display: flex; align-items: center; gap: 5px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                Call (214) 518-2035
            </span>
            <span style="display: flex; align-items: center; gap: 5px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                SMS (469) 317-0581
            </span>
            <span style="display: flex; align-items: center; gap: 5px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                2911 Turtle Creek Blvd, Ste 300, Dallas, TX • Texas Telehealth
            </span>
        </div>
        <div class="top-bar-right" style="display: flex; gap: 15px; align-items: center;">
            <a href="#portal" style="font-weight: 500; text-decoration: none; color: inherit;">Patient Portal</a>
            <div style="width: 1px; height: 14px; background: rgba(255,255,255,0.3);"></div>
            <div style="display: flex; gap: 12px; align-items: center;">
                <a href="#facebook" style="color: inherit; transition: opacity 0.2s;" onmouseover="this.style.opacity=0.7" onmouseout="this.style.opacity=1" aria-label="Facebook">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#instagram" style="color: inherit; transition: opacity 0.2s;" onmouseover="this.style.opacity=0.7" onmouseout="this.style.opacity=1" aria-label="Instagram">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
            </div>
        </div>
    </div>
</div>
<header class="global-header">
    <div class="header-container">
        <a href="index.html" class="logo" style="display: flex; align-items: center;">
            <img src="images/logo.png" alt="24-7 Shalom Psychiatry Logo" style="height: 65px; width: auto; display: block;">
        </a>
        <nav class="nav-links desktop-nav">
            <a href="index.html" class="nav-link">HOME</a>
            
            <div class="dropdown">
                <a href="about/about-us.html" class="nav-link dropdown-toggle">ABOUT US <span class="caret">▼</span></a>
                <div class="dropdown-menu">
                    <a href="about/about-us.html">About 24-7 Shalom Psychiatry</a>
                    <a href="providers/dr-peace.html">Meet Dr. Peace</a>
                    <a href="about/approach.html">Our Approach</a>
                    <a href="about/providers.html">Our Providers</a>
                    <a href="states/texas.html">States We Serve</a>
                    <a href="about/faqs.html">FAQs</a>
                </div>
            </div>

            <div class="dropdown mega-dropdown">
                <a href="services/psychiatric-services.html" class="nav-link dropdown-toggle">SERVICES <span class="caret">▼</span></a>
                <div class="dropdown-menu mega-menu">
                    <div class="mega-column">
                        <h4>Featured Services</h4>
                        <a href="conditions/adhd.html">ADHD Center</a>
                        <a href="conditions/anxiety.html">Anxiety Center</a>
                        <a href="conditions/pain-management.html">Pain & Mental Health</a>
                    </div>
                    <div class="mega-column">
                        <h4>Clinical Care</h4>
                        <a href="services/psychiatric-services.html">Psychiatric Services</a>
                        <a href="services/medication-management.html">Medication Management</a>
                        <a href="services/telepsychiatry.html">Telepsychiatry</a>
                    </div>
                    <div class="mega-column">
                        <h4>Library</h4>
                        <a href="services/conditions.html">Conditions We Treat</a>
                        <a href="video-center.html">Mental Health Video Center</a>
                    </div>
                </div>
            </div>

            <div class="dropdown">
                <a href="careers/opportunities.html" class="nav-link dropdown-toggle">CAREERS <span class="caret">▼</span></a>
                <div class="dropdown-menu">
                    <a href="careers/opportunities.html">Current Opportunities</a>
                    <a href="careers/apply.html">Apply Now</a>
                    <a href="careers/why-us.html">Why Work With Us</a>
                </div>
            </div>

            <a href="testimonials.html" class="nav-link">TESTIMONIALS</a>
            <a href="contact.html" class="nav-link">CONTACT US</a>
            <a href="#book" class="btn btn-accent" style="margin-left: 1rem;">Schedule an Appointment</a>
        </nav>
        <button class="mobile-menu-btn" aria-label="Open Menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
        </button>
    </div>
    <!-- Mobile Menu Overlay -->
    <div class="mobile-nav-overlay">
        <div class="mobile-nav-content">
            <button class="close-menu-btn" aria-label="Close Menu">✕</button>
            <nav class="mobile-links">
                <a href="index.html">HOME</a>
                
                <div class="mobile-accordion">
                    <button class="accordion-btn">ABOUT US <span class="caret">▼</span></button>
                    <div class="accordion-content">
                        <a href="about/about-us.html">About 24-7 Shalom Psychiatry</a>
                        <a href="providers/dr-peace.html">Meet Dr. Peace</a>
                        <a href="about/approach.html">Our Approach</a>
                        <a href="about/providers.html">Our Providers</a>
                        <a href="states/texas.html">States We Serve</a>
                    </div>
                </div>

                <div class="mobile-accordion">
                    <button class="accordion-btn">SERVICES <span class="caret">▼</span></button>
                    <div class="accordion-content">
                        <a href="conditions/adhd.html">ADHD Center</a>
                        <a href="conditions/anxiety.html">Anxiety Center</a>
                        <a href="conditions/pain-management.html">Pain & Mental Health</a>
                        <a href="services/conditions.html">Conditions We Treat</a>
                        <a href="video-center.html">Mental Health Video Center</a>
                        <a href="services/psychiatric-services.html">Psychiatric Services</a>
                        <a href="services/medication-management.html">Medication Management</a>
                        <a href="services/telepsychiatry.html">Telepsychiatry</a>
                    </div>
                </div>

                <div class="mobile-accordion">
                    <button class="accordion-btn">CAREERS <span class="caret">▼</span></button>
                    <div class="accordion-content">
                        <a href="careers/opportunities.html">Current Opportunities</a>
                        <a href="careers/apply.html">Apply Now</a>
                    </div>
                </div>

                <a href="testimonials.html">TESTIMONIALS</a>
                <a href="contact.html">CONTACT US</a>
                <a href="#book" class="btn btn-primary mt-2">BOOK AN APPOINTMENT</a>
            </nav>
        </div>
    </div>
</header>
`;

// Footer Component
const footerHTML = `
<footer class="global-footer">
    <div class="container">
        <div class="emergency-disclaimer">
            <p><strong>IF YOU ARE EXPERIENCING A MEDICAL EMERGENCY OR CRISIS:</strong> This website and standard appointment scheduling are NOT emergency services. Please call 911, go to the nearest emergency room, or call the Suicide and Crisis Lifeline at 988.</p>
        </div>
        <div class="footer-grid">
            <div class="footer-col">
                <a href="index.html" style="display: flex; align-items: center; gap: 20px; margin-bottom: 1.5rem; text-decoration: none;">
                    <div style="width: 130px; height: 115px; background-image: url('images/footer-logo.png'); background-size: 100% auto; background-position: top center; background-repeat: no-repeat;"></div>
                    <div style="display: flex; flex-direction: column; justify-content: center;">
                        <span style="font-family: 'Marcellus', serif; font-size: 2.2rem; color: white; line-height: 1.1;">24-7 SHALOM</span>
                        <span style="font-family: 'Poppins', sans-serif; font-size: 1.1rem; color: #A0AEC0; letter-spacing: 3.5px; margin-top: 4px;">PSYCHIATRY</span>
                    </div>
                </a>
                <p class="text-muted mb-2">Mental Health Care, Education & Understanding<br>— Wherever You Are.</p>
            </div>
            <div class="footer-col">
                <h4>Quick Links</h4>
                <a href="#book">Book an Appointment</a>
                <a href="#pay">Pay Online</a>
                <a href="#portal">Patient Portal</a>
                <a href="#insurance">Insurance</a>
                <a href="careers/opportunities.html">Careers</a>
            </div>
            <div class="footer-col">
                <h4>Clinical Centers</h4>
                <a href="conditions/adhd.html">ADHD Center</a>
                <a href="conditions/anxiety.html">Anxiety Center</a>
                <a href="conditions/pain-management.html">Pain & Mental Health</a>
                <a href="#videos">Video Center</a>
            </div>
            <div class="footer-col">
                <h4>States Served</h4>
                <a href="states/texas.html">Texas</a>
                <a href="states/new-mexico.html">New Mexico</a>
                <a href="states/nevada.html">Nevada</a>
                <a href="states/arizona.html">Arizona</a>
                <a href="#states">View All States &rarr;</a>
            </div>
        </div>
        <div class="footer-bottom">
            <p class="text-muted">&copy; ${new Date().getFullYear()} 24-7 Shalom Psychiatry PLLC. All Rights Reserved.</p>
        </div>
    </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
    // Inject components
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');
    
    const isSubfolder = window.location.pathname.includes('/conditions/') || 
                        window.location.pathname.includes('/providers/') || 
                        window.location.pathname.includes('/states/') || 
                        window.location.pathname.includes('/videos/') ||
                        window.location.pathname.includes('/about/') ||
                        window.location.pathname.includes('/services/') ||
                        window.location.pathname.includes('/careers/');
    
    let finalHeader = headerHTML;
    let finalFooter = footerHTML;
    
    if (isSubfolder) {
        const fix = (html) => {
            return html.replace(/href="css\//g, 'href="../css/')
                       .replace(/href="js\//g, 'href="../js/')
                       .replace(/src="js\//g, 'src="../js/')
                       .replace(/href="index\.html/g, 'href="../index.html')
                       .replace(/href="contact\.html/g, 'href="../contact.html')
                       .replace(/href="testimonials\.html/g, 'href="../testimonials.html')
                       .replace(/href="video-center\.html/g, 'href="../video-center.html')
                       .replace(/href="conditions\//g, 'href="../conditions/')
                       .replace(/href="providers\//g, 'href="../providers/')
                       .replace(/href="states\//g, 'href="../states/')
                       .replace(/href="videos\//g, 'href="../videos/')
                       .replace(/href="about\//g, 'href="../about/')
                       .replace(/href="services\//g, 'href="../services/')
                       .replace(/href="careers\//g, 'href="../careers/')
                       .replace(/src="images\//g, 'src="../images/')
                       .replace(/url\('images\//g, "url('../images/");
        };
        finalHeader = fix(finalHeader);
        finalFooter = fix(finalFooter);
    }
    
    if (headerPlaceholder) headerPlaceholder.innerHTML = finalHeader;
    if (footerPlaceholder) footerPlaceholder.innerHTML = finalFooter;

    // Mobile Menu Logic
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const closeBtn = document.querySelector('.close-menu-btn');
    const overlay = document.querySelector('.mobile-nav-overlay');
    
    if (mobileBtn && closeBtn && overlay) {
        mobileBtn.addEventListener('click', () => {
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        closeBtn.addEventListener('click', () => {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Video Controls Logic — auto-syncs with actual video state
    const video = document.getElementById('welcomeVideo');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const muteBtn = document.getElementById('muteBtn');
    const videoOverlay = document.getElementById('videoPlayOverlay');

    // Only run if it's a <video> element (not an iframe)
    if (video && video.tagName === 'VIDEO' && playPauseBtn && muteBtn) {

        const syncPlayBtn = () => {
            if (video.paused) {
                playPauseBtn.innerHTML = '▶ Play';
                playPauseBtn.setAttribute('aria-label', 'Play video');
            } else {
                playPauseBtn.innerHTML = '⏸ Pause';
                playPauseBtn.setAttribute('aria-label', 'Pause video');
            }
        };

        const syncMuteBtn = () => {
            if (video.muted || video.volume === 0) {
                muteBtn.innerHTML = '🔇 Unmute';
                muteBtn.setAttribute('aria-label', 'Unmute video');
            } else {
                muteBtn.innerHTML = '🔊 Mute';
                muteBtn.setAttribute('aria-label', 'Mute video');
            }
        };

        const hideVideoOverlay = () => {
            if (videoOverlay) videoOverlay.style.display = 'none';
        };

        if (videoOverlay) {
            videoOverlay.addEventListener('click', () => video.play());
        }

        playPauseBtn.addEventListener('click', () => {
            video.paused ? video.play() : video.pause();
        });

        muteBtn.addEventListener('click', () => {
            video.muted = !video.muted;
        });

        video.addEventListener('play',        () => { hideVideoOverlay(); syncPlayBtn(); });
        video.addEventListener('pause',       syncPlayBtn);
        video.addEventListener('ended',       syncPlayBtn);
        video.addEventListener('volumechange', syncMuteBtn);

        syncPlayBtn();
        syncMuteBtn();
        if (!video.paused) hideVideoOverlay();
    }

    // Accordion Logic
    const accordions = document.querySelectorAll('.accordion-btn');
    accordions.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const caret = btn.querySelector('.caret');
            
            // Close all others
            accordions.forEach(otherBtn => {
                if(otherBtn !== btn) {
                    otherBtn.nextElementSibling.style.display = 'none';
                    otherBtn.querySelector('.caret').style.transform = 'rotate(0deg)';
                }
            });

            // Toggle current
            if (content.style.display === 'flex' || content.style.display === 'block') {
                content.style.display = 'none';
                caret.style.transform = 'rotate(0deg)';
            } else {
                content.style.display = 'flex';
                content.style.flexDirection = 'column';
                caret.style.transform = 'rotate(180deg)';
            }
        });
    });

    // --- Hero Slideshow Logic ---
    const slides = document.querySelectorAll('.hero-slideshow .slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000); // Change image every 5 seconds
    }

    // --- Video Modal Logic ---
    const videoBtn = document.getElementById('openVideoBtn');
    const videoModal = document.getElementById('videoModal');
    const closeModal = document.querySelector('.close-modal');
    const modalIframe = document.getElementById('modalIframe');

    if (videoBtn && videoModal && closeModal && modalIframe) {
        // Open Modal
        videoBtn.addEventListener('click', () => {
            const videoSrc = modalIframe.getAttribute('data-src');
            // User interacted, so we can autoplay
            modalIframe.src = videoSrc + "?autoplay=1"; 
            videoModal.classList.add('show');
        });

        // Close Modal via Button
        closeModal.addEventListener('click', () => {
            videoModal.classList.remove('show');
            modalIframe.src = ""; // Stop video playback
        });

        // Close Modal via Backdrop Click
        window.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                videoModal.classList.remove('show');
                modalIframe.src = ""; // Stop video playback
            }
        });

        // Auto-open modal on page load
        setTimeout(() => {
            const videoSrc = modalIframe.getAttribute('data-src');
            modalIframe.src = videoSrc + "?autoplay=1"; 
            videoModal.classList.add('show');
        }, 500); // Small delay for smooth entry
    }
});

