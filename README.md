<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Originals - Premium Men's Wear</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <h1>The Originals</h1>
                    <span>Premium Men's Wear</span>
                </div>
                
                <nav class="nav" id="navigation">
                    <ul class="nav-list">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                
                <div class="header-actions">
                    <button class="btn btn--outline btn--sm" id="socialLoginBtn">Login</button>
                    <a href="https://wa.me/9195462546" target="_blank" class="whatsapp-btn">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.69"/>
                        </svg>
                        WhatsApp
                    </a>
                    <button class="mobile-menu-toggle" id="mobileMenuToggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="container">
            <div class="hero-content">
                <h2>Discover Premium Men's Fashion</h2>
                <p>Elevate your style with our curated collection of premium shirts, t-shirts, and jeans</p>
                <button class="btn btn--primary btn--lg" onclick="document.getElementById('products').scrollIntoView()">Shop Now</button>
            </div>
        </div>
    </section>

    <!-- Products Section -->
    <section id="products" class="products">
        <div class="container">
            <div class="section-header">
                <h2>Our Collections</h2>
                <div class="product-filters">
                    <button class="filter-btn active" data-filter="all">All</button>
                    <button class="filter-btn" data-filter="shirts">Shirts</button>
                    <button class="filter-btn" data-filter="tshirts">T-Shirts</button>
                    <button class="filter-btn" data-filter="jeans">Jeans</button>
                </div>
            </div>
            
            <div class="products-grid" id="productsGrid">
                <!-- Products will be populated by JavaScript -->
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <div class="about-content">
                <h2>About The Originals</h2>
                <p>At The Originals, we believe that great style starts with quality. Since our inception, we've been committed to providing men with premium clothing that combines comfort, durability, and timeless design.</p>
                <p>Our carefully curated collection features the finest materials and craftsmanship, ensuring that every piece you purchase is an investment in your personal style and confidence.</p>
                <div class="features">
                    <div class="feature">
                        <h4>Premium Quality</h4>
                        <p>Only the finest materials and craftsmanship</p>
                    </div>
                    <div class="feature">
                        <h4>Timeless Style</h4>
                        <p>Classic designs that never go out of fashion</p>
                    </div>
                    <div class="feature">
                        <h4>Perfect Fit</h4>
                        <p>Tailored cuts for the modern gentleman</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <div class="contact-content">
                <div class="contact-info">
                    <h2>Visit Our Store</h2>
                    <div class="contact-details">
                        <div class="detail">
                            <h4>Address</h4>
                            <p>456 Race House Road<br>Near Tax Office<br>Coimbatore 641001</p>
                        </div>
                        <div class="detail">
                            <h4>Phone</h4>
                            <p><a href="tel:9195462546">95462546</a></p>
                        </div>
                        <div class="detail">
                            <h4>Store Hours</h4>
                            <div class="store-hours">
                                <p>Mon - Fri: 10:00 AM - 9:00 PM</p>
                                <p>Saturday: 10:00 AM - 10:00 PM</p>
                                <p>Sunday: 11:00 AM - 8:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="contact-form-container">
                    <h3>Get in Touch</h3>
                    <form class="contact-form" id="contactForm">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your Name" required>
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Your Email" required>
                        </div>
                        <div class="form-group">
                            <input type="tel" class="form-control" placeholder="Your Phone">
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" rows="4" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" class="btn btn--primary btn--full-width">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>The Originals</h3>
                    <p>Premium Men's Wear</p>
                </div>
                <div class="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Follow Us</h4>
                    <div class="social-links">
                        <a href="https://instagram.com/theoriginals" target="_blank">Instagram</a>
                        <a href="https://facebook.com/theoriginals" target="_blank">Facebook</a>
                        <a href="https://twitter.com/theoriginals" target="_blank">Twitter</a>
                    </div>
                </div>
                <div class="footer-section">
                    <h4>Contact Info</h4>
                    <p>456 Race House Road<br>Coimbatore 641001</p>
                    <p>Phone: <a href="tel:9195462546">95462546</a></p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 The Originals. All rights reserved.</p>
                <p>&#10084; Designed by Webzio</p>
            </div>
        </div>
    </footer>

    <!-- Social Login Modal -->
    <div class="modal hidden" id="socialLoginModal">
        <div class="modal-overlay" id="modalOverlay"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h3>Login to Your Account</h3>
                <button class="modal-close" id="modalClose">&times;</button>
            </div>
            <div class="modal-body">
                <div class="social-login-buttons">
                    <button class="social-btn google-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24">
                            <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        Continue with Google
                    </button>
                    <button class="social-btn facebook-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24">
                            <path fill="#1877f2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        Continue with Facebook
                    </button>
                    <button class="social-btn instagram-btn">
                        <svg width="18" height="18" viewBox="0 0 24 24">
                            <path fill="url(#instagram-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            <defs>
                                <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#833ab4"/>
                                    <stop offset="50%" stop-color="#fd1d1d"/>
                                    <stop offset="100%" stop-color="#fcb045"/>
                                </linearGradient>
                            </defs>
                        </svg>
                        Continue with Instagram
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Cart Sidebar -->
    <div class="cart-sidebar hidden" id="cartSidebar">
        <div class="cart-overlay" id="cartOverlay"></div>
        <div class="cart-content">
            <div class="cart-header">
                <h3>Shopping Cart</h3>
                <button class="cart-close" id="cartClose">&times;</button>
            </div>
            <div class="cart-items" id="cartItems">
                <!-- Cart items will be populated by JavaScript -->
            </div>
            <div class="cart-footer">
                <div class="cart-total">
                    <strong>Total: <span id="cartTotal">₹0</span></strong>
                </div>
                <button class="btn btn--primary btn--full-width">Checkout</button>
            </div>
        </div>
    </div>

    <script src="app.js"></script>
</body>
</html>
