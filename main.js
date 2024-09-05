document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('galleryContainer');
    
    // Gallery items array
    const galleryItems = [
        { src: 'assets/ART38.jpeg', alt: 'Art 1' },
        { src: 'assets/ART39.jpeg', alt: 'Art 1' },
        { src: 'assets/ART40.jpeg', alt: 'Art 1' },
      { src: 'assets/ART1.jpeg', alt: 'Art 1' },
      { src: 'assets/ART2.jpeg', alt: 'Art 2' },
      { src: 'assets/ART3.jpeg', alt: 'Art 3' },
      { src: 'assets/ART4.jpeg', alt: 'Art 4' },
      { src: 'assets/ART5.jpeg', alt: 'Art 5' },
      { src: 'assets/ART6.jpeg', alt: 'Art 6' },
      { src: 'assets/ART7.jpeg', alt: 'Art 7' },
      { src: 'assets/ART8.jpeg', alt: 'Art 8' },
      { src: 'assets/ART9.jpeg', alt: 'Art 9' },
      { src: 'assets/ART10.jpeg', alt: 'Art 10' },
      { src: 'assets/ART11.jpeg', alt: 'Art 11' },
      { src: 'assets/ART12.jpeg', alt: 'Art 12' },
      { src: 'assets/ART15.jpeg', alt: 'Art 15' },
      { src: 'assets/ART16.jpeg', alt: 'Art 16' },
      { src: 'assets/ART17.jpeg', alt: 'Art 17' },
      { src: 'assets/ART18.jpeg', alt: 'Art 18' },
      { src: 'assets/ART19.jpeg', alt: 'Art 19' },
      { src: 'assets/ART20.jpeg', alt: 'Art 20' },
      { src: 'assets/ART21.jpeg', alt: 'Art 21' },
      { src: 'assets/ART22.jpeg', alt: 'Art 22' },
      { src: 'assets/ART23.jpeg', alt: 'Art 23' },
      { src: 'assets/ART24.jpeg', alt: 'Art 24' },
      { src: 'assets/ART25.jpeg', alt: 'Art 25' },
      { src: 'assets/ART26.jpeg', alt: 'Art 26' },
      { src: 'assets/ART27.jpeg', alt: 'Art 27' },
      { src: 'assets/ART28.jpeg', alt: 'Art 28' },
      { src: 'assets/ART29.jpeg', alt: 'Art 29' },
      { src: 'assets/ART30.jpeg', alt: 'Art 30' },
      { src: 'assets/ART31.jpeg', alt: 'Art 31' },
      { src: 'assets/ART32.jpeg', alt: 'Art 32' },
      { src: 'assets/ART33.jpeg', alt: 'Art 33' },
      { src: 'assets/ART34.jpeg', alt: 'Art 34' },
      { src: 'assets/ART35.jpeg', alt: 'Art 35' },
      { src: 'assets/ART36.jpeg', alt: 'Art 36' },
      { src: 'assets/ART37.jpeg', alt: 'Art 37' },
      // Add more items here
    ];
  
    // Create and append gallery images
    galleryItems.forEach(item => {
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.alt;
      img.classList.add('gallery-item');
      galleryContainer.appendChild(img);
    });
  
    // Toggle navigation menu visibility
    const menuBtn = document.querySelector('.nav__menu__btn');
    const navLinks = document.querySelector('.nav__links');
    
    if (menuBtn && navLinks) {
      menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('open');
      });
    }
  
    // Initialize Swiper slider
    const swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  
    // Function to suggest following Instagram
    function suggestInstagram() {
      const suggestion = document.createElement('div');
      suggestion.style.position = 'fixed';
      suggestion.style.bottom = '10px';
      suggestion.style.right = '10px';
      suggestion.style.padding = '20px';
      suggestion.style.backgroundColor = '#fff';
      suggestion.style.border = '2px solid #000';
      suggestion.innerHTML = `
        <p>Follow us on Instagram for more updates!</p>
        <a href="https://instagram.com/artyyscraft__" target="_blank">Follow Now</a>
      `;
      document.body.appendChild(suggestion);
    }
  
    // Show Instagram suggestion and track site visits
    window.onload = () => {
      setTimeout(suggestInstagram, 5000); // Suggest after 5 seconds
  
      let visits = localStorage.getItem('siteVisits');
      visits = visits ? parseInt(visits) + 1 : 1;
      localStorage.setItem('siteVisits', visits);
      console.log('Site Visits:', visits);
    };
  
    // Ensure the first image on the bio page has appropriate margin on small devices
    function adjustImageMargin() {
      const bioImage = document.querySelector('.bio-page img:first-child');
      if (bioImage) {
        bioImage.style.marginTop = window.innerWidth <= 768 ? '20px' : ''; // Adjust value if needed
      }
    }
  
    // Run adjustImageMargin on page load and resize
    adjustImageMargin();
    window.addEventListener('resize', adjustImageMargin);
  });
  
