# Client Logos

This directory contains client logos for the Trust Bar on the homepage.

## Adding Your Client Logos

1. Replace the placeholder logo references in `/components/TrustBar.tsx` with actual client logos
2. Place logo image files in this directory (e.g., `client-1.png`, `client-2.png`, etc.)
3. Use `.png` format with transparent backgrounds for best results
4. Recommended size: 140px width x 60px height (or proportional)

## Logo Guidelines

- **Format**: PNG with transparent background preferred
- **Color**: Logos will display in grayscale by default and show color on hover
- **Size**: Keep file sizes under 100KB for fast loading
- **Dimensions**: Maintain aspect ratio, max width 140px, max height 60px

## Current Setup

The Trust Bar currently displays 8 placeholder logos that infinitely scroll. You can:
- Add more logos by extending the `trustedBrands` array in `TrustBar.tsx`
- Reduce the number of logos by removing items from the array
- Adjust animation speed in the `style` attribute (default: 30s)

## Example Logo Path

```javascript
{ name: 'Your Client Name', logo: '/logos/your-client-logo.png' }
```

