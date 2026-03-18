// Menu Data (Can be moved to Firebase or kept as JSON)
const menuData = [
    // Morning Tiffen
    {
        id: 1,
        name: "Idli (3 pcs)",
        price: 30,
        description: "Soft steamed rice cakes served with sambar and chutney",
        category: "morning",
        available: true,
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        name: "Masala Dosa",
        price: 50,
        description: "Crispy dosa filled with spiced potato masala",
        category: "morning",
        available: true,
        image: "https://i.pinimg.com/1200x/5e/52/3c/5e523c096c8f4d6d9ef0cb063a4e952c.jpg"
    },
    {
        id: 3,
        name: "Pongal",
        price: 35,
        description: "Traditional rice and lentil dish with ghee and cashews",
        category: "morning",
        available: true,
        image: "https://i.pinimg.com/1200x/af/59/2f/af592f28d3940c409f669b8c241e9d68.jpg"
    },
    {
        id: 4,
        name: " Medhu Vada (1 pcs)",
        price: 10,
        description: "Crispy lentil donuts served with sambar and chutney",
        category: "evening",
        available: true,
        image: "https://i.pinimg.com/1200x/64/0b/a5/640ba5b138187426cff39d00da75c1ee.jpg"
    },
    {
        id: 5,
        name: "Poori",
        price: 40,
        description: "Deep-fried wheat bread that is soft, fluffy, and crispy",
        category: "morning",
        available: true,
        image: "https://i.pinimg.com/736x/e2/79/15/e27915bc55788d40ac2617400497665c.jpg"
    },
    
    // Afternoon Meals
    
    {
        id: 6,
        name: "Sambar Rice",
        price: 35,
        description: "Rice mixed with flavorful sambar",
        category: "afternoon",
        available: true,
        image: "https://i.pinimg.com/736x/e9/71/6d/e9716d7c3518d64b26a192d9418b1a3f.jpg"
    },
    {
        id: 7,
        name: "Lemon Rice",
        price: 35,
        description: "Tangy rice with peanuts and curry leaves",
        category: "afternoon",
        available: true,
        image: "https://i.pinimg.com/736x/59/72/6f/59726fe85513e1b8f7462d6b9b27b50a.jpg"
    },
    {
        id: 8,
        name: "Curd Rice",
        price: 35,
        description: "Cool yogurt rice with pomegranate",
        category: "afternoon",
        available: true,
        image: "https://i.pinimg.com/736x/b9/f8/fc/b9f8fc30887f028ca72e68e134068e4e.jpg"
    },
    {
        id: 9,
        name: "Veg Biriyani",
        price: 40,
        description: "Aromatic basmati rice cooked with mixed vegetables and spices",
        category: "afternoon",
        available: true,
        image: "https://i.pinimg.com/1200x/d0/97/56/d09756d029b6a0926b8fbacccbe386f7.jpg"
    },
    {
        id: 10,
        name: "Tomato Rice",
        price: 35,
        description: "Flavored rice cooked with tangy tomatoes and aromatic spices",
        category: "afternoon",
        available: true,
        image: "https://i.pinimg.com/1200x/16/3a/fa/163afa939301d61a58efa3eb6f003dff.jpg"
    },
    {
        id: 11,
        name: "Masal Vadai",
        price: 10,
        description: "Crispy deep-fried lentil fritters flavored with spices and herbs",
        category: "evening",
        available: true,
        image: "https://i.pinimg.com/736x/66/f2/0b/66f20bb837a0a48016c0126f257b3507.jpg"
    },
    {
         id: 12,
         name: "Puthina Rice",
         price: 35,
         description: "Flavorful mint rice with spices",
         category: "afternoon",
         available: true,
         image: "https://i.pinimg.com/736x/28/40/fa/2840fad8bfdd8ff7defce43e30d18501.jpg"
    },
    {
        id: 13,
        name: "Puli Sadam",
        price: 35,
        description: "Traditional tamarind rice with peanuts",
        category: "afternoon",
        available: true,
        image: "https://i.pinimg.com/1200x/5f/a8/2e/5fa82ece77fa55074523bcb028225134.jpg"
    },
    
    
    // Evening Snacks
    
    
    {
        id: 14,
        name: "Ragi Simili (1 pcs)",
        price: 10,
        description: "Crispy pastry with spiced potato filling",
        category: "evening",
        available: true,
        image: "https://i.pinimg.com/736x/c9/e8/59/c9e859bcccee41570d462b484637124a.jpg"
    },
    {
        id: 15,
        name: "Juice",
        price: 40,
        description: "Freshly prepared seasonal fruit juice",
        category: "juice",
        available: true,
        image: "https://i.pinimg.com/1200x/ee/df/d5/eedfd5e42c0d362a0f3881252f7dee61.jpg"
    },
    
    // Tea / Coffee
    {
        id: 16,
        name: "Coffee",
        price: 15,
        description: "Traditional South Indian filter coffee",
        category: "tea",
        available: true,
        image: "https://i.pinimg.com/736x/95/d1/9a/95d19a7cad652dd1caceb091c9794ac9.jpg"
    },
    {
        id: 17,
        name: "Tea",
        price: 12,
        description: "Spiced Indian tea",
        category: "tea",
        available: true,
        image: "https://i.pinimg.com/736x/35/8e/6e/358e6e35f65035a7d3f68d923b9626cc.jpg"
    },
    {
        id: 18,
        name: "Green Tea",
        price: 20,
        description: "Healthy green tea with lemon",
        category: "tea",
        available: true,
        image: "https://i.pinimg.com/736x/d3/85/ce/d385ce2cabe96a724807459a4190ea42.jpg"
    },
    {

        id: 19,
        name: "Lemon Tea",
        price: 15,
        description: "Refreshing tea with lemon flavor",
        category: "tea",
        available: true,
        image: "https://i.pinimg.com/736x/bf/03/f0/bf03f056e43789b5f50924d506912135.jpg"
    },
    {
        id: 20,
        name: "Order for Festivals and Events",
        price: 0,
        client: "Bulk Order Client",
        description: "Bulk order includes Pongal, Poori, Veg Biriyani, Tomato Rice, Masal Vadai, Idli, Dosa, Curd Rice, and Gulab Jamun, providing a complete combination of breakfast, lunch, snacks, and dessert items suitable for catering",
        category: "bulk",
        available: true,
        image: "https://i.pinimg.com/webp/736x/a2/60/99/a260995638f3e959468bc331e9f05894.webp"
    }
];

// Global variables
let currentFilter = 'all';
let searchTerm = '';

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    // Initialize menu
    displayMenu();
    
    // Mobile menu toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value.toLowerCase();
            displayMenu();
        });
    }
    
    // Category filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.category;
            displayMenu();
        });
    });
    
    // Section toggle logic (menu, bulk orders, contact)
    const toggleSectionIds = ['menu', 'bulk-orders', 'contact'];
    const sectionEls = toggleSectionIds
        .map(id => document.getElementById(id))
        .filter(Boolean);

    const hideAllSections = () => sectionEls.forEach(section => section.classList.add('hidden'));

    const showSection = (sectionId) => {
        hideAllSections();
        const target = document.getElementById(sectionId);
        if (target) {
            target.classList.remove('hidden');
            target.classList.add('fade-in');
            setTimeout(() => target.classList.remove('fade-in'), 400);
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Hide sections by default on load
    hideAllSections();

    document.querySelectorAll('a[href="#menu"], a[href="#bulk-orders"], a[href="#contact"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            showSection(sectionId);
            navMenu.classList.remove('active'); // close mobile menu after selection
        });
    });
    
    // Set min date for delivery date
    const deliveryDate = document.getElementById('deliveryDate');
    if (deliveryDate) {
        const today = new Date().toISOString().split('T')[0];
        deliveryDate.min = today;
    }
    
    // Bulk order form submission
    const bulkForm = document.getElementById('bulkOrderForm');
    if (bulkForm) {
        bulkForm.addEventListener('submit', handleBulkOrder);
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // FAQ items click handler
    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // Register Service Worker for offline support
    registerServiceWorker();
});

// Display menu items
function displayMenu() {
    const menuGrid = document.getElementById('menuGrid');
    if (!menuGrid) return;
    
    let filteredMenu = menuData;
    
    // Apply category filter
    if (currentFilter !== 'all') {
        filteredMenu = filteredMenu.filter(item => item.category === currentFilter);
    }
    
    // Apply search filter
    if (searchTerm) {
        filteredMenu = filteredMenu.filter(item => 
            item.name.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm)
        );
    }
    
    if (filteredMenu.length === 0) {
        menuGrid.innerHTML = '<div class="no-results">No menu items found</div>';
        return;
    }
    
    menuGrid.innerHTML = filteredMenu.map(item => `
        <div class="menu-card">
            <div class="menu-image" style="background-image: url('${item.image}')">
                <span class="availability-badge ${item.available ? 'available' : 'out-of-stock'}">
                    ${item.available ? 'Available' : 'Out of Stock'}
                </span>
            </div>
            <div class="menu-info">
                <span class="category-tag">${getCategoryName(item.category)}</span>
                <div class="menu-header">
                    <h3>${item.name}</h3>
                    <span class="price">₹${item.price}</span>
                </div>
                <p class="description">${item.description}</p>
            </div>
        </div>
    `).join('');
}

// Get category display name
function getCategoryName(category) {
    const categories = {
        'morning': 'Morning Tiffen',
        'afternoon': 'Afternoon Meals',
        'evening': 'Evening Snacks',
        'tea': 'Tea / Coffee',
        'juice': 'Fresh Juices',
        'bulk': 'Bulk Orders'
    };
    return categories[category] || category;
}

// Handle bulk order submission
async function handleBulkOrder(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('bulkName').value,
        phone: document.getElementById('bulkPhone').value,
        festivalName: document.getElementById('festivalName').value,
        foodItems: document.getElementById('foodItems').value,
        quantity: parseInt(document.getElementById('quantity').value),
        deliveryDate: document.getElementById('deliveryDate').value,
        address: document.getElementById('address').value,
        notes: document.getElementById('notes').value,
        timestamp: firebase.firestore.FieldValue ? firebase.firestore.FieldValue.serverTimestamp() : new Date(),
        status: 'pending'
    };
    
    // Validate phone number
    if (!/^\d{10}$/.test(formData.phone)) {
        showToast('Please enter a valid 10-digit phone number');
        return;
    }
    
    // Validate quantity
    if (formData.quantity < 20) {
        showToast('Minimum order quantity is 20 plates');
        return;
    }
    
    try {
        // Save to Firebase if available
        if (window.db && firebase) {
            await db.collection('bulkOrders').add(formData);
        }
        
        // Send WhatsApp notification using the service
        if (window.WhatsAppService) {
            WhatsAppService.sendBulkOrderNotification(formData);
        }
        
        // Save to localStorage as backup
        saveToLocalStorage('bulkOrders', formData);
        
        showToast('Bulk order submitted successfully! We will contact you shortly.');
        e.target.reset();
    } catch (error) {
        console.error('Error submitting bulk order:', error);
        
        // Fallback: Save locally if Firebase fails
        saveToLocalStorage('bulkOrders', formData);
        
        if (window.WhatsAppService) {
            WhatsAppService.sendBulkOrderNotification(formData);
        }
        
        showToast('Order saved locally. We will contact you soon!');
        e.target.reset();
    }
}

// Handle contact form submission
async function handleContactForm(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('contactName').value,
        phone: document.getElementById('contactPhone').value,
        message: document.getElementById('contactMessage').value,
        timestamp: firebase.firestore.FieldValue ? firebase.firestore.FieldValue.serverTimestamp() : new Date()
    };
    
    try {
        // Save to Firebase if available
        if (window.db && firebase) {
            await db.collection('contacts').add(formData);
        }
        
        // Send WhatsApp notification using the service
        if (window.WhatsAppService) {
            WhatsAppService.sendContactNotification(formData);
        }
        
        // Save to localStorage as backup
        saveToLocalStorage('contacts', formData);
        
        showToast('Message sent successfully! We will get back to you soon.');
        e.target.reset();
    } catch (error) {
        console.error('Error submitting contact form:', error);
        
        // Fallback: Save locally if Firebase fails
        saveToLocalStorage('contacts', formData);
        
        if (window.WhatsAppService) {
            WhatsAppService.sendContactNotification(formData);
        }
        
        showToast('Message saved. We will contact you soon!');
        e.target.reset();
    }
}

// Save form data to localStorage as backup
function saveToLocalStorage(collection, data) {
    try {
        const existing = JSON.parse(localStorage.getItem(collection) || '[]');
        existing.push({
            ...data,
            savedAt: new Date().toISOString()
        });
        localStorage.setItem(collection, JSON.stringify(existing));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
}

// Show toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    if (window.scrollY > 100) {
        navbar.style.background = 'linear-gradient(135deg, #d2691e, #ff8c42)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))';
        navbar.style.boxShadow = 'var(--shadow)';
    }
});

// Register Service Worker for offline support
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js')
                .then((registration) => {
                    console.log('✅ Service Worker registered with scope:', registration.scope);
                    
                    // Check for updates
                    registration.addEventListener('updatefound', () => {
                        const newWorker = registration.installing;
                        console.log('Service Worker update found!');
                        
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                showToast('New version available! Refresh to update.');
                            }
                        });
                    });
                })
                .catch((error) => {
                    console.error('❌ Service Worker registration failed:', error);
                });
        });
    }
}

// Handle online/offline status
window.addEventListener('online', () => {
    showToast('You are back online!');
    syncLocalData();
});

window.addEventListener('offline', () => {
    showToast('You are offline. Form submissions will be saved locally.');
});

// Sync local data when back online
async function syncLocalData() {
    if (!navigator.onLine || !window.db) return;
    
    // Sync bulk orders
    const bulkOrders = JSON.parse(localStorage.getItem('bulkOrders') || '[]');
    if (bulkOrders.length > 0) {
        for (const order of bulkOrders) {
            try {
                await db.collection('bulkOrders').add(order);
            } catch (error) {
                console.error('Error syncing bulk order:', error);
            }
        }
        localStorage.removeItem('bulkOrders');
        showToast('Local orders synced with server!');
    }
    
    // Sync contacts
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    if (contacts.length > 0) {
        for (const contact of contacts) {
            try {
                await db.collection('contacts').add(contact);
            } catch (error) {
                console.error('Error syncing contact:', error);
            }
        }
        localStorage.removeItem('contacts');
    }
}

// Add lazy loading for images
document.addEventListener('DOMContentLoaded', () => {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// Export functions for use in other files if needed
window.displayMenu = displayMenu;
window.showToast = showToast;
window.syncLocalData = syncLocalData;
