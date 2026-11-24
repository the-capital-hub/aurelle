AURELLE Service Details UI Update

Files:
- serviceDetails/: all 8 JSX components (updated image-led layout in ServiceIntro, ServiceCards, ServiceProcess, WhyChooseUs; small hero class update)
- styles/ServiceDetails.mockup.css: responsive monochrome visual refinements

Installation:
1. Copy the JSX files into src/components/serviceDetails/ and overwrite the existing files.
2. Copy ServiceDetails.mockup.css into src/styles/.
3. ServiceIntro.jsx imports the mockup CSS automatically.
4. Keep your existing ServiceDetails.css import and all existing servicesData.js content.

Image fields:
- Treatment cards use treatment.image when provided, otherwise service.hero.image.
- Intro uses intro.image when provided, otherwise service.hero.image.
- Why Choose uses service.benefitsImage, then intro.image, then /images/services/benifut.png.
For distinct card photography, add an `image` path to each treatment object in servicesData.js.
No prices are invented; existing priceLabel/price values are displayed as-is.
