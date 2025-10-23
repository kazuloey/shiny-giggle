// Image lightbox functionality
document.addEventListener('DOMContentLoaded', () => {
  const imageFrames = document.querySelectorAll('.image-frame img');
  const body = document.body;
  
  // Create lightbox elements
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  
  const lightboxImg = document.createElement('img');
  lightbox.appendChild(lightboxImg);
  
  const closeButton = document.createElement('button');
  closeButton.className = 'lightbox-close';
  closeButton.textContent = '✕';
  lightbox.appendChild(closeButton);
  
  body.appendChild(lightbox);
  
  // Open lightbox on image click
  imageFrames.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('active');
      body.style.overflow = 'hidden';
    });
  });
  
  // Close lightbox
  closeButton.addEventListener('click', () => {
    lightbox.classList.remove('active');
    body.style.overflow = '';
  });
  
  // Also close on background click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
      body.style.overflow = '';
    }
  });
});

// Add this to your script section
function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  
  document.querySelector('.footer-time').textContent = 
    `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  
  setTimeout(updateClock, 60000); // Update every minute
}

updateClock();

// Make image frames draggable
document.addEventListener('DOMContentLoaded', () => {
  const frames = document.querySelectorAll('.image-frame');
  
  frames.forEach(frame => {
    let isDragging = false;
    let offsetX, offsetY;
    
    frame.addEventListener('mousedown', (e) => {
      if (e.target === frame || e.target.classList.contains('image-label')) {
        isDragging = true;
        
        const rect = frame.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        
        frame.style.position = 'absolute';
        frame.style.zIndex = 10;
      }
    });
    
    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;
      
      frame.style.left = `${x}px`;
      frame.style.top = `${y}px`;
    });
    
    document.addEventListener('mouseup', () => {
      isDragging = false;
    });
  });
});

// Make close buttons functional
document.addEventListener('DOMContentLoaded', () => {
  const closeButtons = document.querySelectorAll('.close-btn');
  
  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const frame = btn.parentElement;
      
      // Add closing animation
      frame.style.transition = 'all 0.3s ease';
      frame.style.opacity = '0';
      frame.style.transform = 'scale(0.9)';
      
      // Remove element after animation
      setTimeout(() => {
        frame.remove();
      }, 300);
    });
  });
});