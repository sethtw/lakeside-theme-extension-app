# Shopping Cart Bundle App

A simple JavaScript web application that showcases shopping cart bundle functionality. Users can add products to a customizable bundle and then add the complete bundle to their cart.

## Features

- **20 Random Products**: Display of various tech products with images and titles
- **Customizable Bundle Size**: Adjust the number of slots in the bundle (1-12)
- **Add to Bundle**: Click "Add to Bundle" on any product to add it to your bundle
- **Bundle Visualization**: Empty squares show available slots, filled slots show product thumbnails
- **Remove Items**: Click the "×" button on filled slots to remove items
- **Clear Bundle**: Remove all items from the bundle at once
- **Add to Cart**: When the bundle is full, the "Add to Cart" button appears
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## How to Use

1. **Open the Application**: Open `index.html` in your web browser
2. **Adjust Bundle Size** (Optional): Change the number in the "Bundle Size" field and click "Update Bundle"
3. **Add Products**: Click "Add to Bundle" on any product you want to include
4. **Manage Bundle**: 
   - Remove individual items by clicking the "×" button on filled slots
   - Clear all items using the "Clear Bundle" button
5. **Complete Bundle**: Once all slots are filled, the "Add to Cart" button will appear
6. **Add to Cart**: Click "Add to Cart" to see a summary of all items in your bundle

## File Structure

```
├── index.html      # Main HTML file
├── styles.css      # CSS styles and responsive design
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Technical Details

- **Pure JavaScript**: No external dependencies or frameworks
- **Modern CSS**: Uses CSS Grid, Flexbox, and modern styling techniques
- **Responsive Design**: Adapts to different screen sizes
- **Image Sources**: Uses Unsplash images for product photos
- **Local Storage**: Bundle state is maintained during the session

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Getting Started

1. Download all files to a local directory
2. Open `index.html` in your web browser
3. Start building your bundle!

## Customization

- **Add More Products**: Edit the `products` array in `script.js`
- **Change Bundle Size Range**: Modify the min/max values in the HTML input
- **Update Styling**: Modify `styles.css` to change colors, layout, or appearance
- **Add Features**: Extend `script.js` with additional functionality like pricing, categories, etc. 