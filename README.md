# Shopify Product Bundle Theme Extension

A Shopify Theme Extension that allows customers to create customizable product bundles and add them to their cart. This extension provides a modern, responsive interface similar to the sample bundler functionality but built specifically for Shopify using Liquid templates.

## Features

- **Customizable Bundle Size**: Configure bundles from 1-12 items
- **Product Grid Display**: Shows products in a responsive grid layout
- **Interactive Bundle Slots**: Visual representation of bundle progress
- **Quantity Controls**: Add/remove products with quantity controls
- **Dynamic Bundle Updates**: Real-time bundle size adjustments
- **Cart Integration**: Add complete bundles to cart
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Customizable Styling**: Theme colors and styling options
- **Sale Badge Support**: Highlights products on sale
- **Out of Stock Handling**: Graceful handling of unavailable products

## Installation

1. **Deploy the Extension**:
   ```bash
   # Navigate to your app directory
   cd lakeside-bundler-app
   
   # Deploy the theme extension
   shopify app deploy
   ```

2. **Install in Your Theme**:
   - Go to your Shopify admin
   - Navigate to Online Store > Themes
   - Click "Customize" on your active theme
   - Add the "Product Bundle" block to your desired section

## Configuration

### Block Settings

The Product Bundle block includes the following configurable settings:

| Setting | Type | Description | Default |
|---------|------|-------------|---------|
| **Bundle Title** | Text | Custom title for the bundle section | "Create Your Bundle" |
| **Product Collection** | Collection | Collection to display products from | - |
| **Bundle Size** | Range (1-12) | Number of items in the bundle | 6 |
| **Maximum Products** | Range (4-50) | Maximum products to display | 20 |
| **Show Product Prices** | Checkbox | Display product prices | Enabled |
| **Bundle Primary Color** | Color | Primary color for bundle elements | #007acc |
| **Bundle Accent Color** | Color | Accent color for highlights | #ff6b35 |

### Example Configuration

```liquid
{% render 'product_bundle', 
   collection: collections['featured-products'],
   bundle_size: 8,
   max_products: 25,
   show_prices: true,
   bundle_color: '#007acc',
   bundle_accent_color: '#ff6b35' %}
```

## Usage

### Basic Implementation

1. **Add to Theme**: Include the bundle block in your theme's collection or product pages
2. **Configure Collection**: Select which product collection to display
3. **Set Bundle Size**: Choose how many items customers can add to their bundle
4. **Customize Styling**: Adjust colors to match your theme

### Customer Experience

1. **Browse Products**: Customers see products in a responsive grid
2. **Add to Bundle**: Click "Add to Bundle" to add products
3. **Adjust Quantities**: Use +/- buttons to change quantities
4. **Visual Feedback**: Bundle slots show progress and selected items
5. **Complete Bundle**: Fill all slots to enable "Add to Cart"
6. **Cart Integration**: Add the complete bundle to cart

## File Structure

```
lakeside-bundler-app/
├── extensions/
│   └── lakeside-theme-extension-app/
│       ├── blocks/
│       │   └── product_bundle.liquid          # Main bundle block
│       ├── snippets/
│       │   ├── bundle_product_card.liquid     # Individual product cards
│       │   ├── bundle_script.liquid           # JavaScript functionality
│       │   └── bundle_styles.liquid           # CSS styling
│       ├── locales/
│       │   └── en.default.json                # Translations
│       └── shopify.extension.toml             # Extension configuration
```

## Customization

### Styling

The bundle uses CSS custom properties for easy theming:

```css
.product-bundle-container {
  --bundle-color: #007acc;           /* Primary color */
  --bundle-accent-color: #ff6b35;    /* Accent color */
  --bundle-bg: #ffffff;              /* Background */
  --bundle-border: #e1e5e9;          /* Border color */
  --bundle-text: #333333;            /* Text color */
  --bundle-success: #28a745;         /* Success color */
  --bundle-error: #dc3545;           /* Error color */
}
```

### JavaScript Integration

The bundle functionality is self-contained but can be extended:

```javascript
// Access bundle manager globally
window.BundleManager.bundles[bundleId]

// Custom cart integration
BundleManager.addBundleToCart = function(bundleData) {
  // Your custom cart logic here
  console.log('Custom cart integration:', bundleData);
};
```

### Liquid Templates

All templates use standard Liquid syntax and Shopify objects:

- `product`: Full product object with all properties
- `collection`: Collection object with products
- `block.settings`: Configurable block settings
- `t` filter: Translation support

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance

- **Lazy Loading**: Product images use `loading="lazy"`
- **Efficient DOM**: Minimal DOM manipulation
- **CSS Grid**: Modern layout for better performance
- **Event Delegation**: Efficient event handling

## Troubleshooting

### Common Issues

1. **Bundle Not Loading**:
   - Check that the collection has products
   - Verify block settings are configured
   - Check browser console for JavaScript errors

2. **Styling Issues**:
   - Ensure CSS custom properties are supported
   - Check for theme CSS conflicts
   - Verify color values are valid

3. **Cart Integration**:
   - The current implementation shows a success message
   - Integrate with Shopify's cart API for production use
   - Add proper error handling for cart operations

### Debug Mode

Enable debug mode by accessing the console:

```javascript
// View bundle state
console.log(window.BundleManager.bundles);

// Check specific bundle
const bundleId = 'your-bundle-id';
console.log(window.BundleManager.bundles[bundleId]);
```

## Development

### Local Development

1. **Setup**:
   ```bash
   npm install
   shopify app dev
   ```

2. **Testing**:
   - Use Shopify's theme preview
   - Test on different devices
   - Verify cart integration

3. **Deployment**:
   ```bash
   shopify app deploy
   ```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Check the troubleshooting section
- Review Shopify's Theme Extension documentation
- Open an issue on GitHub

---

**Note**: This extension is designed for Shopify Theme Extensions and requires a Shopify app to be installed in your store. The cart integration is currently simulated and should be customized for your specific needs.
