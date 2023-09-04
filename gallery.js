document.addEventListener('DOMContentLoaded', () => {
  const basePath = 'assets/realisaties';
  
  const galleryImages = {
    RUWBOUW: [
      `${basePath}/Ruwbouw/b-invest-5344.jpg`,
      `${basePath}/Ruwbouw/b-invest-5350.jpg`,
      `${basePath}/Ruwbouw/b-invest-5351.jpg`,
      `${basePath}/Ruwbouw/b-invest-5352.jpg`,
      `${basePath}/Ruwbouw/b-invest-5357.jpg`,
      `${basePath}/Ruwbouw/b-invest-5361.jpg`,
      `${basePath}/Ruwbouw/b-invest-5363.jpg`,
      `${basePath}/Ruwbouw/b-invest-5364.jpg`,
      `${basePath}/Ruwbouw/b-invest-5372.jpg`,
      `${basePath}/Ruwbouw/b-invest-5375.jpg`,
      `${basePath}/Ruwbouw/b-invest-5379.jpg`,
      `${basePath}/Ruwbouw/b-invest-5385.jpg`,
      `${basePath}/Ruwbouw/b-invest-5387.jpg`,
      `${basePath}/Ruwbouw/b-invest-5388.jpg`,
      `${basePath}/Ruwbouw/b-invest-5392.jpg`,
      `${basePath}/Ruwbouw/b-invest-5398.jpg`,
      `${basePath}/Ruwbouw/b-invest-5404.jpg`,
      `${basePath}/Ruwbouw/b-invest-5416.jpg`,
      `${basePath}/Ruwbouw/b-invest-5418.jpg`,
      `${basePath}/Ruwbouw/b-invest-5424.jpg`,
      `${basePath}/Ruwbouw/b-invest-5435.jpg`,
      `${basePath}/Ruwbouw/b-invest-5440.jpg`,
      `${basePath}/Ruwbouw/b-invest-5441.jpg`,
      `${basePath}/Ruwbouw/b-invest-5442.jpg`,
      `${basePath}/Ruwbouw/b-invest-5444.jpg`,
      `${basePath}/Ruwbouw/b-invest-5446.jpg`,
      `${basePath}/Ruwbouw/b-invest-5448.jpg`,
      `${basePath}/Ruwbouw/b-invest-5451.jpg`,
      `${basePath}/Ruwbouw/b-invest-5456.jpg`,
      `${basePath}/Ruwbouw/b-invest-5466.jpg`,
    ],
    DAKWERKEN: [
      `${basePath}/Dakwerken/dak1.jpg`,
      `${basePath}/Dakwerken/dak2.jpg`,
      `${basePath}/Dakwerken/dak3.jpg`,
      `${basePath}/Dakwerken/dak4.jpg`,
      `${basePath}/Dakwerken/dak5.jpg`,
      `${basePath}/Dakwerken/dak6.jpg`,
    ],
    AFWERKING: [
      `${basePath}/Afwerking/Kruisstraat10Zele-04.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-05.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-07.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-08.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-09.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-11.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-12.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-13.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-14.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-15.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-16.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-25.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-26.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-31.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-32.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-33.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-34.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-40.jpg`,
    ],
    TOTAALRENOVATIE: [
      `${basePath}/Renovatie/Project kantoor/20131104_164116.jpg`,
      `${basePath}/Renovatie/Project kantoor/20131104_164240.jpg`,
      `${basePath}/Renovatie/Project kantoor/20131104_164322.jpg`,
      `${basePath}/Renovatie/Project kantoor/CIMG1211.JPG`,
      `${basePath}/Renovatie/Project kantoor/DSC02631.JPG`,
      `${basePath}/Renovatie/Project kantoor/DSC02643.JPG`,
      `${basePath}/Renovatie/Project kantoor/IMG_0397.JPG`,
      `${basePath}/Renovatie/Project kantoor/IMG_0398.JPG`,
      `${basePath}/Renovatie/Project kantoor/IMG_0404.JPG`,
      `${basePath}/Renovatie/Project kantoor/IMG_0422.JPG`,
      `${basePath}/Renovatie/Project kantoor/IMG_0423.JPG`,
      `${basePath}/Renovatie/Project kantoor/IMG_0424.JPG`,
      `${basePath}/Renovatie/Project kantoor/IMG_0426.JPG`,
      `${basePath}/Renovatie/Project kantoor/IMG_0428.JPG`,
      `${basePath}/Renovatie/Project kantoor/IMG_0435.JPG`,
      `${basePath}/Renovatie/Project kantoor/IMG_0438.JPG`,
      `${basePath}/Renovatie/Project kantoor/IMG_0453.JPG`,
      `${basePath}/Renovatie/Project kantoor/IMG_0454.JPG`,
      `${basePath}/Renovatie/Project kantoor/IMG_0455.JPG`,
      `${basePath}/Renovatie/Project kantoor/IMG_0456.JPG`,
      `${basePath}/Renovatie/Project kantoor/IMG_0501.JPG`,
      `${basePath}/Renovatie/Project kantoor/IMG_0502.JPG`,
      `${basePath}/Renovatie/Project kantoor/IMG_0503.JPG`,
      `${basePath}/Renovatie/Project kantoor/IMG_0504.JPG`,
      `${basePath}/Renovatie/Project kantoor/IMG_0505.JPG`,
      `${basePath}/Renovatie/Project kantoor/IMG_0506.JPG`,
      `${basePath}/Renovatie/Project kantoor/IMG_0507.JPG`,
      `${basePath}/Renovatie/Project kantoor/IMG_0508.JPG`,
      `${basePath}/Renovatie/Project kantoor/IMG_0509.JPG`,
      `${basePath}/Renovatie/Project kantoor/IMG_0510.JPG`,
    ],
    NIEUWBOUWPROJECTEN: [
      `${basePath}/Nieuwbouwprojecten/berlare/b-invest-5480.jpg`,
      `${basePath}/Nieuwbouwprojecten/berlare/b-invest-5481.jpg`,
      `${basePath}/Nieuwbouwprojecten/berlare/b-invest-5483.jpg`,
      `${basePath}/Nieuwbouwprojecten/kraan.jpg`,
      `${basePath}/Nieuwbouwprojecten/projectx.jpg`,
      `${basePath}/Nieuwbouwprojecten/Zele - Kruis/IMG_0152.jpg`,
      `${basePath}/Nieuwbouwprojecten/Zele - Kruis/IMG_0662.jpg`,
      `${basePath}/Nieuwbouwprojecten/Zele - Kruis/IMG_1506.jpg`,
      `${basePath}/Nieuwbouwprojecten/Zele - Kruis/IMG_1507.jpg`,
      `${basePath}/Nieuwbouwprojecten/Zele - Kruis/IMG_1509.jpg`,
      `${basePath}/Nieuwbouwprojecten/Zele - Kruis/IMG_1511.jpg`,
      `${basePath}/Nieuwbouwprojecten/Zele - Kruis/IMG_1516.jpg`,
      `${basePath}/Nieuwbouwprojecten/Zele - Kruis/IMG_1522.jpg`,
      `${basePath}/Nieuwbouwprojecten/Zele - Kruis/IMG_3365.jpg`,
      `${basePath}/Nieuwbouwprojecten/Zele - Kruis/IMG_3367.jpg`,
      `${basePath}/Nieuwbouwprojecten/Zele - Kruis/IMG_4383.jpg`,
      `${basePath}/Nieuwbouwprojecten/Zele - Kruis/IMG_4386.jpg`,
      `${basePath}/Nieuwbouwprojecten/Zele - Kruis/IMG_6972.jpg`,
      `${basePath}/Nieuwbouwprojecten/Zele - Kruis/IMG_6981.jpg`,
      `${basePath}/Nieuwbouwprojecten/Zele - Kruis/IMG_6987.jpg`,
      `${basePath}/Nieuwbouwprojecten/Zele - Kruis/IMG_7182.jpg`,
      `${basePath}/Nieuwbouwprojecten/Zele - Kruis/IMG_7321.jpg`,
      `${basePath}/Nieuwbouwprojecten/Zele - Kruis/IMG_9488.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-01.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-04.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-05.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-07.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-08.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-09.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-11.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-12.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-13.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-14.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-15.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-16.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-18.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-25.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-26.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-31.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-32.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-33.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-34.jpg`,
      `${basePath}/Afwerking/Kruisstraat10Zele-40.jpg`,
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