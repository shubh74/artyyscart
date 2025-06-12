let artworks = [];
let filteredArtworks = [];
let currentPage = 1;
const itemsPerPage = 8;

document.addEventListener('DOMContentLoaded', () => {
  const galleryContainer = document.getElementById('galleryContainer');

  // Fetch artworks
  fetch('data/artworks.json')
    .then(res => res.json())
    .then(data => {
      artworks = data;
      filteredArtworks = [...artworks];
      renderFilters();
      renderGallery(); // Will now show all images
      // renderPagination(); // REMOVE or comment out this line
    })
    .catch(err => console.error('Error loading artworks:', err));

  // Render gallery - show all images, no pagination
  function renderGallery() {
    galleryContainer.innerHTML = "";

    filteredArtworks.forEach(art => {
      const item = document.createElement("div");
      item.className = "gallery-item";

      item.innerHTML = `
        <div class="aspect-[4/3] overflow-hidden rounded-xl bg-gray-800 cursor-pointer" onclick="openLightbox && openLightbox('${art.image}', '${art.title}', '${art.description}')">
          <img loading="lazy" src="${art.image}" alt="${art.title}" class="w-full h-full object-contain" />
        </div>
        <h3 class="text-lg font-semibold text-white mt-2">${art.title}</h3>
        <p class="text-sm text-gray-400">${art.description}</p>
      `;
      galleryContainer.appendChild(item);
    });
  }

  // Render pagination
  function renderPagination() {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;

    pagination.innerHTML = "";

    const totalPages = Math.ceil(filteredArtworks.length / itemsPerPage);
    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement('button');
      btn.textContent = i;
      btn.className = `mx-1 px-3 py-1 rounded ${i === currentPage ? 'bg-blue-600 text-white' : 'bg-gray-300'}`;
      btn.addEventListener('click', () => {
        currentPage = i;
        renderGallery();
        renderPagination();
      });
      pagination.appendChild(btn);
    }
  }

  // Render category filters (example if needed)
  function renderFilters() {
    // You can enhance this to render categories or tags if your data supports it
  }

  // Instagram suggestion box
  function suggestInstagram() {
    const suggestion = document.createElement('div');
    suggestion.style.cssText = `
      position: fixed;
      bottom: 10px;
      right: 10px;
      padding: 15px;
      background-color: #fff;
      border: 2px solid #000;
      z-index: 9999;
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
    `;

    suggestion.innerHTML = `
      <p style="margin-bottom: 10px;">Follow us on Instagram for more updates!</p>
      <a href="https://instagram.com/artyyscraft__" target="_blank" style="color: blue; font-weight: bold;">Follow Now</a>
      <span style="display:block; cursor:pointer; margin-top:10px; font-size: 12px; color:red;" onclick="this.parentElement.remove()">Dismiss</span>
    `;
    document.body.appendChild(suggestion);
  }

  // Show suggestion and track visits
  window.onload = () => {
    setTimeout(suggestInstagram, 5000);

    let visits = parseInt(localStorage.getItem('siteVisits') || '0') + 1;
    localStorage.setItem('siteVisits', visits);
    console.log('Site Visits:', visits);
  };

  // Navbar toggle
  const menuBtn = document.querySelector('.nav__menu__btn');
  const navLinks = document.querySelector('.nav__links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Swiper init
  new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Adjust bio image margin
  function adjustImageMargin() {
    const bioImage = document.querySelector('.bio-page img:first-child');
    if (bioImage) {
      bioImage.style.marginTop = window.innerWidth <= 768 ? '20px' : '';
    }
  }

  // Efficient resize handler
  let resizeTimeout;
  window.addEventListener('resize', () => {
    cancelAnimationFrame(resizeTimeout);
    resizeTimeout = requestAnimationFrame(adjustImageMargin);
  });

  adjustImageMargin();
});
