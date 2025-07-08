// Product data with 20 random products
const products = [
    {
        id: 1,
        title: "Wireless Bluetooth Headphones",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop"
    },
    {
        id: 2,
        title: "Smart Fitness Watch",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop"
    },
    {
        id: 3,
        title: "Portable Coffee Maker",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop"
    },
    {
        id: 4,
        title: "Gaming Laptop",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300&h=300&fit=crop"
    },
    {
        id: 5,
        title: "Wireless Charging Pad",
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop"
    },
    {
        id: 6,
        title: "Smart Home Speaker",
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=300&h=300&fit=crop"
    },
    {
        id: 7,
        title: "4K Action Camera",
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=300&fit=crop"
    },
    {
        id: 8,
        title: "Mechanical Keyboard",
        image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=300&fit=crop"
    },
    {
        id: 9,
        title: "Smart LED Light Bulb",
        image: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=300&h=300&fit=crop"
    },
    {
        id: 10,
        title: "Portable Power Bank",
        image: "https://images.unsplash.com/photo-1609592806598-efade1c0c0a3?w=300&h=300&fit=crop"
    },
    {
        id: 11,
        title: "Wireless Gaming Mouse",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop"
    },
    {
        id: 12,
        title: "Smart Thermostat",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop"
    },
    {
        id: 13,
        title: "Bluetooth Earbuds",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300&h=300&fit=crop"
    },
    {
        id: 14,
        title: "Smart Security Camera",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop"
    },
    {
        id: 15,
        title: "Portable Bluetooth Speaker",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop"
    },
    {
        id: 16,
        title: "Smart Door Lock",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop"
    },
    {
        id: 17,
        title: "Wireless Phone Charger",
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=300&fit=crop"
    },
    {
        id: 18,
        title: "Smart Refrigerator",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop"
    },
    {
        id: 19,
        title: "Gaming Console",
        image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=300&h=300&fit=crop"
    },
    {
        id: 20,
        title: "Smart Washing Machine",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop"
    }
];

// App state
let bundleSize = 6;
let bundle = []; // Array of {product, quantity} objects
let bundleSlots = [];

// DOM elements
const productsGrid = document.getElementById('products-grid');
const bundleSlotsContainer = document.getElementById('bundle-slots');
const addToCartBtn = document.getElementById('add-to-cart');
const clearBundleBtn = document.getElementById('clear-bundle');
const updateBundleBtn = document.getElementById('update-bundle');
const bundleSizeInput = document.getElementById('bundle-size');

// Initialize the app
function init() {
    renderProducts();
    renderBundleSlots();
    setupEventListeners();
}

// Render products grid
function renderProducts() {
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        const bundleItem = bundle.find(item => item.product.id === product.id);
        const quantity = bundleItem ? bundleItem.quantity : 0;
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <h3 class="product-title">${product.title}</h3>
            <div class="product-actions">
                <button class="add-to-bundle" data-product-id="${product.id}">
                    Add to Bundle
                </button>
                ${quantity > 0 ? `<span class="quantity-badge">${quantity} in bundle</span>` : ''}
            </div>
        `;
        
        productsGrid.appendChild(productCard);
    });
}

// Render bundle slots
function renderBundleSlots() {
    bundleSlotsContainer.innerHTML = '';
    bundleSlots = [];
    
    // Flatten bundle items into individual slots
    const flattenedBundle = [];
    bundle.forEach(item => {
        for (let i = 0; i < item.quantity; i++) {
            flattenedBundle.push(item.product);
        }
    });
    
    for (let i = 0; i < bundleSize; i++) {
        const slot = document.createElement('div');
        slot.className = 'bundle-slot';
        slot.dataset.index = i;
        
        if (flattenedBundle[i]) {
            slot.classList.add('filled');
            slot.innerHTML = `
                <img src="${flattenedBundle[i].image}" alt="${flattenedBundle[i].title}">
                <button class="remove-item" data-index="${i}">×</button>
            `;
        }
        
        bundleSlots.push(slot);
        bundleSlotsContainer.appendChild(slot);
    }
    
    updateAddToCartButton();
}

// Update add to cart button visibility
function updateAddToCartButton() {
    const totalItems = bundle.reduce((sum, item) => sum + item.quantity, 0);
    if (totalItems === bundleSize) {
        addToCartBtn.classList.remove('hidden');
    } else {
        addToCartBtn.classList.add('hidden');
    }
}

// Add product to bundle
function addToBundle(productId) {
    const totalItems = bundle.reduce((sum, item) => sum + item.quantity, 0);
    if (totalItems >= bundleSize) {
        alert('Bundle is full! Please remove an item or increase bundle size.');
        return;
    }
    
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = bundle.find(item => item.product.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            bundle.push({ product, quantity: 1 });
        }
        renderBundleSlots();
        renderProducts(); // Re-render to update button states
    }
}

// Remove product from bundle
function removeFromBundle(index) {
    // Flatten bundle items into individual slots to find the correct item
    const flattenedBundle = [];
    bundle.forEach(item => {
        for (let i = 0; i < item.quantity; i++) {
            flattenedBundle.push(item.product);
        }
    });
    
    if (flattenedBundle[index]) {
        const productToRemove = flattenedBundle[index];
        const bundleItem = bundle.find(item => item.product.id === productToRemove.id);
        
        if (bundleItem) {
            bundleItem.quantity--;
            if (bundleItem.quantity === 0) {
                const itemIndex = bundle.indexOf(bundleItem);
                bundle.splice(itemIndex, 1);
            }
        }
        
        renderBundleSlots();
        renderProducts(); // Re-render to update button states
    }
}

// Clear entire bundle
function clearBundle() {
    bundle = [];
    renderBundleSlots();
    renderProducts();
}

// Add bundle to cart
function addToCart() {
    const totalItems = bundle.reduce((sum, item) => sum + item.quantity, 0);
    if (totalItems === 0) {
        alert('Bundle is empty!');
        return;
    }
    
    console.log('=== BUNDLE ADDED TO CART ===');
    console.log('Bundle Items:');
    bundle.forEach((item, index) => {
        console.log(`${index + 1}. ${item.product.title} (Quantity: ${item.quantity})`);
    });
    console.log(`Total Items: ${totalItems}`);
    console.log('============================');
    
    const bundleSummary = bundle.map((item, index) => 
        `${index + 1}. ${item.product.title} (Quantity: ${item.quantity})`
    ).join('\n');
    
    alert(`Bundle added to cart!\n\nItems in bundle:\n${bundleSummary}\n\nTotal Items: ${totalItems}`);
}

// Update bundle size
function updateBundleSize() {
    const newSize = parseInt(bundleSizeInput.value);
    if (newSize >= 1 && newSize <= 12) {
        bundleSize = newSize;
        
        // Remove excess items if new size is smaller
        const totalItems = bundle.reduce((sum, item) => sum + item.quantity, 0);
        if (totalItems > bundleSize) {
            // Reduce quantities to fit new bundle size
            let remainingSlots = bundleSize;
            bundle.forEach(item => {
                if (remainingSlots <= 0) {
                    item.quantity = 0;
                } else if (item.quantity > remainingSlots) {
                    item.quantity = remainingSlots;
                    remainingSlots = 0;
                } else {
                    remainingSlots -= item.quantity;
                }
            });
            // Remove items with zero quantity
            bundle = bundle.filter(item => item.quantity > 0);
        }
        
        renderBundleSlots();
        renderProducts();
    } else {
        alert('Bundle size must be between 1 and 12');
        bundleSizeInput.value = bundleSize;
    }
}

// Setup event listeners
function setupEventListeners() {
    // Product add to bundle buttons
    productsGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-bundle')) {
            const productId = parseInt(e.target.dataset.productId);
            addToBundle(productId);
        }
    });
    
    // Remove item from bundle
    bundleSlotsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-item')) {
            const index = parseInt(e.target.dataset.index);
            removeFromBundle(index);
        }
    });
    
    // Clear bundle button
    clearBundleBtn.addEventListener('click', clearBundle);
    
    // Add to cart button
    addToCartBtn.addEventListener('click', addToCart);
    
    // Update bundle size button
    updateBundleBtn.addEventListener('click', updateBundleSize);
    
    // Enter key on bundle size input
    bundleSizeInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            updateBundleSize();
        }
    });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init); 