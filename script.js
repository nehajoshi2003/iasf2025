const bannerSection = document.querySelector('#home');
const overlayHeading = bannerSection.querySelector('h2');
const overlayText = bannerSection.querySelector('p');

const slides = [
  {
    image:"",
    heading: 'Welcome to IUCEE Club',
    text: 'Empowering students through innovation, mentorship, and global collaboration.'
  },
  {
    image: 'images/pic2.jpg',
    heading: 'Connecting Students Globally',
    text: 'Fostering a network of learners and leaders across the world.'
  },
  {
    image: 'images/pic3.jpg',
    heading: 'Learn. Lead. Inspire.',
    text: 'Building the engineers of tomorrow, today.'
  }
];

let current = 0;

function updateBanner() {
  const slide = slides[current];
  bannerSection.style.backgroundImage = `url('${slide.image}')`;
  overlayHeading.textContent = slide.heading;
  overlayText.textContent = slide.text;

  current = (current + 1) % slides.length;
}

// Start the slideshow
updateBanner(); // Initial
setInterval(updateBanner, 4000); // Change every 4 seconds
