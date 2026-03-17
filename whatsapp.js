// whatsapp.js - WhatsApp Notification Service

const WHATSAPP_CONFIG = {
    // CHANGE THIS TO YOUR WHATSAPP NUMBER (with country code, no + or spaces)
    OWNER_NUMBER: "918056108207", // Your WhatsApp number
    WHATSAPP_API_URL: "https://wa.me/"
};

// WhatsApp Notification Service
const WhatsAppService = {
    // Send bulk order notification
    sendBulkOrderNotification: function(orderData) {
        const message = this.formatBulkOrderMessage(orderData);
        this.sendToWhatsApp(message);
    },
    
    // Send contact form notification
    sendContactNotification: function(contactData) {
        const message = this.formatContactMessage(contactData);
        this.sendToWhatsApp(message);
    },
    
    // Format bulk order message
    formatBulkOrderMessage: function(orderData) {
        return `🔔 *NEW BULK ORDER* 🔔
        
👤 *Name:* ${orderData.name}
📞 *Phone:* ${orderData.phone}
🎉 *Event:* ${orderData.festivalName}
🍽️ *Items:* ${orderData.foodItems}
📦 *Qty:* ${orderData.quantity} plates
📅 *Delivery:* ${orderData.deliveryDate}
📍 *Address:* ${orderData.address}
📝 *Notes:* ${orderData.notes || 'None'}`;
    },
    
    // Format contact message
    formatContactMessage: function(contactData) {
        return `📬 *NEW CONTACT* 📬
        
👤 *Name:* ${contactData.name}
📞 *Phone:* ${contactData.phone}
💬 *Message:* ${contactData.message}`;
    },
    
    // Send to WhatsApp
    sendToWhatsApp: function(message) {
        // Add timestamp
        const timestamp = new Date().toLocaleString();
        const fullMessage = `${message}\n⏰ ${timestamp}`;
        
        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.OWNER_NUMBER}?text=${encodeURIComponent(fullMessage)}`;
        
        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');
        
        // Also log to console
        console.log('WhatsApp notification sent:', fullMessage);
    },
    
    // Optional: Send without opening new tab (requires backend)
    sendViaBackend: function(message) {
        // You would implement this if you have a backend API
        // This is useful if you don't want to open new tabs
        console.log('Would send via backend:', message);
        
        // Example fetch to your backend
        /*
        fetch('https://your-backend.com/api/send-whatsapp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                to: WHATSAPP_CONFIG.OWNER_NUMBER,
                message: message
            })
        });
        */
    }
};

// Make it globally available
window.WhatsAppService = WhatsAppService;