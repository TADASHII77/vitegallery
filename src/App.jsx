import React, { useState } from 'react';
import Modal from './modal';
import Header from "./header";
import './App.css'; 

// Import images
import cyberpunk from './assets/cyberpunk.jpg';
import panda from './assets/panda.jpg';
import underwater from './assets/underwater.jpg';
import eye from './assets/eye.png';
import library from './assets/library.jpg';
import robotfight from './assets/robotfight.png';
import galaxy from './assets/galaxy.jpg';
import dragon from './assets/dragon.png';
import laughter from './assets/laughter.jpg';
import futuristic from './assets/futuristic.jpg';
import mermaid from './assets/mermaid.jpg';
import image1_0 from './assets/image1_0.jpg';

function App() {
  const [images, setImages] = useState([
    { src: cyberpunk, creator: 'Amelia Thorne', prompt: 'A cyberpunk alleyway illuminated by neon signs reflecting off puddles of shimmering rain. A lone figure in a trench coat walks down the street, a holographic cat following at their heels.' },
    { src: panda, creator: 'Leo Riverwood', prompt: 'A photorealistic portrait of a red panda wearing a tiny astronaut helmet, gazing curiously at the Earth from the window of a spaceship.' },
    { src: underwater, creator: 'Riley Skyler', prompt: 'A bustling underwater market where mermaids barter with octopuses using glowing pearls as currency. (Art style: Art Deco)' },
    { src: eye, creator: 'Jasper Havenwood', prompt: 'A hyper-realistic close-up of an eyeball. The iris is a swirling galaxy with constellations and nebulae. (Style: Scientific illustration)' },
    { src: library, creator: 'Thane Stoneforge', prompt: 'A whimsical library where the bookshelves are made of twisted vines and the leaves are the actual pages. Tiny creatures with butterfly wings flit between the shelves.' },
    { src: robotfight, creator: 'Xylo Briarwood', prompt: 'A classic Renaissance painting depicting a robot rebellion against their human creators' },
    { src: galaxy, creator: 'Elara Whisperwind', prompt: 'A pixel art rendition of a futuristic cityscape populated by robots and androids.A traditional Chinese ink wash painting of a majestic dragon soaring through the' },
    { src: dragon, creator: 'Akar Bloodhamme', prompt: 'A traditional Chinese ink wash painting of a majestic dragon soaring through the clouds, with neon lights outlining its scales.' },
    { src: laughter, creator: 'Seraphina Nightshade', prompt: 'The sound of laughter captured as a vibrant splash of color against a black background.' },
    { src: futuristic, creator: 'Nova Wilder', prompt: 'A pixel art rendition of a futuristic cityscape populated by robots and androids.' },
    { src: mermaid, creator: 'Milo Sparrow', prompt: 'A mermaid with the tail of a koi fish swimming through a coral reef teeming with mythical creatures like a hippocampus and a kelpie.' },
    { src: image1_0, creator: 'Maeve Emberly', prompt: 'A mischievous gnome riding on the back of a giant bumblebee, exploring a vibrant bloom-filled meadow.' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(-1); 

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleMouseOver = (index) => {
    setHoveredIndex(index); // Set the hovered image index
  };

  const handleMouseOut = () => {
    setHoveredIndex(-1); // Reset when mouse leaves
  };

  const closeModal = () => {
    setShowModal(false);
    setHoveredIndex(-1); // Reset hovered image index when modal closes
  };

  
  const filteredImages = images; //  filter based on searchTt

  return (
    <div className="App" >
      <Header />
      <div className="gallery-container" >
      <div className="gallery" id="gallery" style={{ filter: showModal ? 'blur(1.5rem)' : 'none', transition: 'filter 0.3s ease' }}>
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => handleImageClick(image)}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={handleMouseOut}
          >
            <img src={image.src} alt={image.prompt} />
            {hoveredIndex === index && (
              <div className="image-prompt">
                <p className="creator-name">{image.creator}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {showModal && (
        <Modal image={selectedImage} closeModal={closeModal} />
      )}
    
      <div className="footer">
        <p>Thats all we have</p>

      </div>
      </div>
    </div>
   
  );
}

export default App;
