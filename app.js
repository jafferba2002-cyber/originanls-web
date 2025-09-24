// The Originals - Website JavaScript

// Product data
const products = [
    {
        id: 1,
        name: "Casual Shirts",
        category: "shirts",
        price: "₹1,999",
        originalPrice: "₹2,499",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=400&fit=crop",
        description: "Premium cotton casual shirts for everyday comfort"
    },
    {
        id: 2,
        name: "Formal Shirts",
        category: "shirts", 
        price: "₹2,299",
        originalPrice: "₹2,799",
        image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=300&h=400&fit=crop",
        description: "Crisp formal shirts for professional look"
    },
    {
        id: 3,
        name: "Graphic T-Shirts",
        category: "tshirts",
        price: "₹899",
        originalPrice: "₹1,199",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop",
        description: "Trendy graphic t-shirts for casual wear"
    },
    {
        id: 4,
        name: "Plain T-Shirts",
        category: "tshirts",
        price: "₹699",
        originalPrice: "₹999",
        image: "https://images.unsplash.com/photo-1583743814966-8936f37f5050?w=300&h=400&fit=crop",
        description: "Classic plain t-shirts in multiple colors"
    },
    {
        id: 5,
        name: "Slim Fit Jeans",
        category: "jeans",
        price: "₹2,799",
        originalPrice: "₹3,299",
        image: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=300&h=400&fit=crop",
        description: "Premium denim slim fit jeans"
    },
    {
        id: 6,
        name: "Regular Fit Jeans",
        category: "jeans",
        price: "₹2,499",
        originalPrice: "₹2,999",
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=400&fit=crop",
        description: "Comfortable regular fit jeans"
    }
];

// Cart functionality
let cart = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    setupEventListeners();
    setupSmoothScroll();
    addCartButton();
});

// Render products
function renderProducts(filter = 'all') {
    const productsGrid = document.getElementById('productsGrid');
    let filteredProducts = products;
    
    if (filter !== 'all') {
        filteredProducts = products.filter(product => product.category === filter);
    }
    
    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-category="${product.category}">
            <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    <span class="current-price">${product.price}</span>
                    <span class="original-price">${product.originalPrice}</span>
                </div>
                <div class="product-actions">
                    <button class="btn btn--outline btn--sm" onclick="viewProductDetails(${product.id})">View Details</button>
                    <button class="btn btn--primary btn--sm" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Product filtering
function setupProductFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            renderProducts(filter);
        });
    });
}

// Add to cart functionality
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        
        updateCartUI();
        updateCartCount();
        showNotification(`${product.name} added to cart!`);
    }
}

// View product details (placeholder functionality)
function viewProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        showNotification(`Viewing details for ${product.name}`);
        // In a real application, this would open a product detail modal or navigate to a product page
    }
}

// Update cart UI
function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        cartTotal.textContent = '₹0';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price} x ${item.quantity}</div>
            </div>
            <button onclick="removeFromCart(${item.id})" class="btn btn--outline btn--sm">Remove</button>
        </div>
    `).join('');
    
    // Calculate total (simplified - in real app would parse actual price numbers)
    const total = cart.reduce((sum, item) => {
        const price = parseInt(item.price.replace('₹', '').replace(',', ''));
        return sum + (price * item.quantity);
    }, 0);
    
    cartTotal.textContent = `₹${total.toLocaleString()}`;
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    updateCartCount();
    showNotification('Item removed from cart');
}

// Update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// Show cart sidebar
function showCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.remove('hidden');
}

// Hide cart sidebar
function hideCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.add('hidden');
}

// Show notification
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--color-primary);
        color: var(--color-btn-primary-text);
        padding: 12px 20px;
        border-radius: 8px;
        z-index: 3000;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add animation styles
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOutRight {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Setup event listeners
function setupEventListeners() {
    // Product filters
    setupProductFilters();
    
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navigation = document.getElementById('navigation');
    
    if (mobileMenuToggle && navigation) {
        mobileMenuToggle.addEventListener('click', () => {
            navigation.classList.toggle('active');
        });
    }
    
    // Social login modal
    const socialLoginModal = document.getElementById('socialLoginModal');
    const socialLoginBtn = document.getElementById('socialLoginBtn');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.getElementById('modalOverlay');
    
    if (socialLoginBtn) {
        socialLoginBtn.addEventListener('click', () => {
            socialLoginModal.classList.remove('hidden');
        });
    }
    
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            socialLoginModal.classList.add('hidden');
        });
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', () => {
            socialLoginModal.classList.add('hidden');
        });
    }
    
    // Cart sidebar
    const cartClose = document.getElementById('cartClose');
    const cartOverlay = document.getElementById('cartOverlay');
    
    if (cartClose) {
        cartClose.addEventListener('click', hideCart);
    }
    
    if (cartOverlay) {
        cartOverlay.addEventListener('click', hideCart);
    }
    
    // Social login buttons
    document.querySelectorAll('.social-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const platform = e.currentTarget.className.includes('google') ? 'Google' : 
                           e.currentTarget.className.includes('facebook') ? 'Facebook' : 'Instagram';
            showNotification(`${platform} login would be implemented here`);
            socialLoginModal.classList.add('hidden');
        });
    });
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Close mobile menu when clicking on nav links
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            if (navigation && navigation.classList.contains('active')) {
                navigation.classList.remove('active');
            }
        });
    });
}

// Setup smooth scroll for navigation links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Add cart button to header
function addCartButton() {
    const headerActions = document.querySelector('.header-actions');
    if (headerActions && !document.getElementById('cartButton')) {
        const cartButton = document.createElement('button');
        cartButton.id = 'cartButton';
        cartButton.className = 'btn btn--outline btn--sm';
        cartButton.innerHTML = `
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 4V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V4H20C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6H19V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V6H4C3.44772 6 3 5.55228 3 5C3 4.44772 3.44772 4 4 4H7ZM9 4H15V3C15 2.44772 14.5523 2 14 2H10C9.44772 2 9 2.44772 9 3V4ZM7 6V19H17V6H7ZM9 8C9.55228 8 10 8.44772 10 9V17C10 17.5523 9.55228 18 9 18C8.44772 18 8 17.5523 8 17V9C8 8.44772 8.44772 8 9 8ZM15 8C15.5523 8 16 8.44772 16 9V17C16 17.5523 15.5523 18 15 18C14.4477 18 14 17.5523 14 17V9C14 8.44772 14.4477 8 15 8Z"/>
            </svg>
            Cart (<span id="cartCount">0</span>)
        `;
        cartButton.addEventListener('click', showCart);
        headerActions.insertBefore(cartButton, headerActions.lastElementChild);
    }
}

// Handle window resize for responsive behavior
window.addEventListener('resize', () => {
    const navigation = document.getElementById('navigation');
    if (window.innerWidth > 768 && navigation) {
        navigation.classList.remove('active');
    }
});

// Add loading states for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        img.addEventListener('error', () => {
            img.style.opacity = '0.5';
            img.alt = 'Image not available';
        });
    });
});