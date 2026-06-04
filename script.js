document.addEventListener('DOMContentLoaded', function() {
  
  // SECTION NAVIGATION
  const navItems = document.querySelectorAll('.nav-item[data-section]');
  const featureCards = document.querySelectorAll('.feature-card[data-section]');
  
  function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
      section.classList.remove('active');
    });
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.classList.add('active');
      window.scrollTo(0, 0);
    }
  }
  
  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const sectionId = this.getAttribute('data-section');
      showSection(sectionId);
    });
  });
  
  featureCards.forEach(card => {
    card.addEventListener('click', function(e) {
      e.preventDefault();
      const sectionId = this.getAttribute('data-section');
      showSection(sectionId);
    });
  });
  
  // MERCH BUTTON - FIXED VERSION (Works everywhere!)
  const merchButtons = document.querySelectorAll('.nav-item');
  merchButtons.forEach(btn => {
    if (btn.textContent.includes('🛍️')) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Create a custom modal instead of alert
        if (!document.getElementById('merch-modal')) {
          const modal = document.createElement('div');
          modal.id = 'merch-modal';
          modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
          `;
          
          const modalContent = document.createElement('div');
          modalContent.style.cssText = `
            background: linear-gradient(135deg, #9d4edd, #c77dff);
            padding: 2rem;
            border-radius: 15px;
            text-align: center;
            max-width: 400px;
            color: white;
            box-shadow: 0 10px 40px rgba(157, 78, 221, 0.5);
          `;
          
          modalContent.innerHTML = `
            <h2 style="font-size: 2rem; margin-bottom: 1rem;">🛍️ MERCH</h2>
            <p style="font-size: 1.2rem; margin-bottom: 2rem; line-height: 1.6;">Get me 100,000 subscribers so I can hopefully sell my merch!</p>
            <button id="close-merch-modal" style="
              background: white;
              color: #9d4edd;
              border: none;
              padding: 0.8rem 2rem;
              border-radius: 25px;
              font-size: 1rem;
              font-weight: bold;
              cursor: pointer;
              transition: all 0.3s ease;
            ">CLOSE</button>
          `;
          
          modal.appendChild(modalContent);
          document.body.appendChild(modal);
          
          document.getElementById('close-merch-modal').addEventListener('click', function() {
            modal.remove();
          });
          
          modal.addEventListener('click', function(e) {
            if (e.target === modal) {
              modal.remove();
            }
          });
        }
      });
    }
  });
  
});