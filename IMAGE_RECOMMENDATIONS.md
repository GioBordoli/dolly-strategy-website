# Image Recommendations for Dolly Strategy Website

## Directory Structure
```
public/
  └── images/
      ├── hero-background.jpg       # Main background image for homepage
      ├── about-background.jpg      # Background for about page
      ├── logo.svg                  # Company logo
      ├── services/                 # Services-related images
      │   ├── automation.jpg
      │   ├── insights.jpg
      │   └── custom-solutions.jpg
      ├── team/                     # Team member photos
      │   ├── ceo.jpg
      │   ├── cto.jpg
      │   └── team-member-3.jpg
      └── icons/                    # Icon images
          ├── automation-icon.svg
          ├── insights-icon.svg
          └── solutions-icon.svg
```

## Image Specifications

### Hero Background (hero-background.jpg)
- **Size**: 1920×1080px (minimum)
- **Type**: High-quality photograph related to AI, technology, or Italian business
- **Style**: Modern, abstract, or city skyline with a blue tone
- **Suggestions**: 
  - Italian city skyline with tech overlay
  - Abstract technology visualization
  - AI/machine learning concept visual
- **Current Status**: Placeholder created

### Company Logo (logo.svg)
- **Size**: Vector format, scalable
- **Type**: Company logo in SVG format
- **Placement**: Header and footer of the site
- **Notes**: Should be available in white version for dark backgrounds

### Service Images (services/*.jpg)
- **Size**: 800×600px
- **Type**: High-quality photographs representing each service
- **Suggestions**:
  - **automation.jpg**: Image showing process automation, robotics, or workflow optimization
  - **insights.jpg**: Data visualization, analytics dashboard, or business insights concept
  - **custom-solutions.jpg**: Custom AI development, coding, or personalized technology

### Team Photos (team/*.jpg)
- **Size**: 400×400px, square ratio
- **Type**: Professional headshots
- **Style**: Consistent background and lighting
- **Notes**: If actual team photos aren't available, consider using high-quality stock photos that look natural and consistent

### Icons (icons/*.svg)
- **Size**: Vector format, scalable
- **Type**: Simple, clean icons representing each service
- **Style**: Outline or solid style, matching the overall design
- **Suggestions**:
  - **automation-icon.svg**: Gear, robot, or automation symbol
  - **insights-icon.svg**: Graph, chart, or data visualization icon
  - **solutions-icon.svg**: Puzzle piece, custom software, or AI brain icon

## Image Resources

If you need high-quality free images, consider these resources:
- [Unsplash](https://unsplash.com) - Beautiful free photos
- [Pexels](https://pexels.com) - Free stock photos
- [Undraw](https://undraw.co) - Free illustrations
- [Icons8](https://icons8.com) - Free icons and photos
- [Flaticon](https://flaticon.com) - Free vector icons

## Implementation Notes

1. Keep image file sizes optimized for web (compress when possible)
2. Consider lazy loading large images for better performance
3. Use Next.js Image component for automatic optimization
4. Ensure all images have proper alt text for accessibility
5. Consider using WebP format where supported for better performance

When you've gathered these images, simply place them in the appropriate folders within the `public/images/` directory, and the website will automatically use them based on the code already implemented. 