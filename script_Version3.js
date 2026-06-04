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
  
  // MERCH BUTTON
  const merchButtons = document.querySelectorAll('.nav-item');
  merchButtons.forEach(btn => {
    if (btn.textContent.includes('🛍️')) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('🛍️ Get me 100,000 subscribers so I can hopefully sell my merch!');
      });
    }
  });
  
});