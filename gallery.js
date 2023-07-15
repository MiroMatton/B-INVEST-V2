document.addEventListener('DOMContentLoaded', () => {
const galleryImages = {
    RUWBOUW: [
        'assets/realisaties/Afwerking/Kruisstraat10Zele-04.jpg',
    ],
    DAKWERKEN: [
        'assets/realisaties/Afwerking/Kruisstraat10Zele-14.jpg',
    ],
    AFWERKING: [
      'assets/realisaties/Afwerking/Kruisstraat10Zele-04.jpg',
      'assets/realisaties/Afwerking/Kruisstraat10Zele-05.jpg',
      'assets/realisaties/Afwerking/Kruisstraat10Zele-07.jpg',
      'assets/realisaties/Afwerking/Kruisstraat10Zele-08.jpg',
      'assets/realisaties/Afwerking/Kruisstraat10Zele-09.jpg',
      'assets/realisaties/Afwerking/Kruisstraat10Zele-11.jpg',
      'assets/realisaties/Afwerking/Kruisstraat10Zele-12.jpg',
      'assets/realisaties/Afwerking/Kruisstraat10Zele-13.jpg',
      'assets/realisaties/Afwerking/Kruisstraat10Zele-14.jpg',
      'assets/realisaties/Afwerking/Kruisstraat10Zele-15.jpg',
      'assets/realisaties/Afwerking/Kruisstraat10Zele-16.jpg',
      'assets/realisaties/Afwerking/Kruisstraat10Zele-25.jpg',
      'assets/realisaties/Afwerking/Kruisstraat10Zele-26.jpg',
      'assets/realisaties/Afwerking/Kruisstraat10Zele-31.jpg',
      'assets/realisaties/Afwerking/Kruisstraat10Zele-32.jpg',
      'assets/realisaties/Afwerking/Kruisstraat10Zele-33.jpg',
      'assets/realisaties/Afwerking/Kruisstraat10Zele-34.jpg',
      'assets/realisaties/Afwerking/Kruisstraat10Zele-40.jpg',
    ],
    TOTAALRENOVATIE: [
        'assets/realisaties/Afwerking/Kruisstraat10Zele-12.jpg',
    ],
    NIEUWBOUWPROJECTEN: [
        'assets/realisaties/Afwerking/Kruisstraat10Zele-13.jpg',
    ],
  };
  

  const galleryContainer = document.querySelector('.gallery');
  const tabRuwbouw = document.getElementById('ruwbouwTab');
  const tabDakwerken = document.getElementById('dakwerkenTab');
  const tabAfwerking = document.getElementById('afwerkingTab');
  const tabTotaalrenovatie = document.getElementById('totaalrenovatieTab');
  const tabNieuwbouwprojecten = document.getElementById('nieuwbouwprojectenTab');
  
  // Function to update the gallery images based on the selected category
  function updateGallery(category) {
    // Get the images for the selected category
    const images = galleryImages[category];
  
    // Clear the existing gallery images
    galleryContainer.innerHTML = '';
  
    // Create and append new image elements to the gallery container
    images.forEach(image => {
      const imgElement = document.createElement('img');
      imgElement.src = image;
      imgElement.alt = 'Image';
      galleryContainer.appendChild(imgElement);
    });
  }
  
  
  // Add event listeners to the tab buttons
  tabRuwbouw.addEventListener('click', () => {
    updateGallery('RUWBOUW');
  });
  
  tabDakwerken.addEventListener('click', () => {
    updateGallery('DAKWERKEN');
  });
  
  tabAfwerking.addEventListener('click', () => {
    updateGallery('AFWERKING');
  });
  
  tabTotaalrenovatie.addEventListener('click', () => {
    updateGallery('TOTAALRENOVATIE');
  });
  
  tabNieuwbouwprojecten.addEventListener('click', () => {
    updateGallery('NIEUWBOUWPROJECTEN');
  });
  
  // Show the initial gallery based on the default tab
  const defaultCategory = 'RUWBOUW'; // Change this to the desired default category
  updateGallery(defaultCategory);
});