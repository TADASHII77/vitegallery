# Image Gallery App

## Overview
This project is a simple React-based image gallery application. Users can view a collection of images, hover over them to see the creator's name, and click on an image to view it in a modal with more details.

## Features
- Display a gallery of images.
- Show creator's name on image hover.
- Open an image in a modal with more details on click.
- Close the modal by clicking outside or on the close button.
- Search for images by prompt (search functionality to be implemented).

## Components
### App Component
- **State:**
  - `images`: Array of image objects containing `src`, `creator`, and `prompt`.
  - `showModal`: Boolean to control the visibility of the modal.
  - `selectedImage`: The image object selected to be viewed in the modal.
  - `hoveredIndex`: The index of the image currently hovered over.
- **Handlers:**
  - `handleImageClick(image)`: Sets the selected image and shows the modal.
  - `handleMouseOver(index)`: Sets the hovered image index.
  - `handleMouseOut()`: Resets the hovered image index.
  - `closeModal()`: Closes the modal and resets the hovered image index.

### Header Component
- **State:**
  - `searchTerm`: String for storing the search input.
- **Handlers:**
  - `handleSearch(event)`: Updates the search term state.

### Modal Component
- **Props:**
  - `image`: The selected image object.
  - `closeModal()`: Handler to close the modal.
- **Handlers:**
  - Closes the modal when clicking on the overlay or close button.

## Usage
1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and go to `http://localhost:3000` to view the application.

## Project Structure
```plaintext
.
├── public
│   └── images
│       ├── cyberpunk.jpg
│       ├── panda.jpg
│       ├── underwater.jpg
│       ├── eye.png
│       ├── library.jpg
│       ├── robotfight.png
│       ├── galaxy.jpg
│       ├── dragon.png
│       ├── laughter.jpg
│       ├── futuristic.jpg
│       ├── mermaid.jpg
│       └── image1_0.jpg
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── header.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── modal.css
│   └── modal.jsx
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## CSS Files
- `App.css`: Styles for the gallery and overall layout.
- `index.css`: Global styles.
- `modal.css`: Styles for the modal component.

## Dependencies
- React: JavaScript library for building user interfaces.
- React DOM: Package that provides DOM-specific methods.
- CSS: For styling the components.

