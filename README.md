# English Excellence website

This website is produced as an educational team assignment. It showcases the skills of implementing a website design taken from Figma into a structured Vite project. The scope of the project does not touch on the back-end part of the website.


### Important links of the project:
- GitHub Live Page: https://ryabyy.github.io/goit_markup_finproj_g4/
- GitHub repository: https://github.com/ryabyy/goit_markup_finproj_g4
- Figma design: https://www.figma.com/file/MrdZUmIfeT1bKd8u5GWLRt/English-Excellence-2.0?type=design&node-id=0%3A1&mode=design&t=ABsxLoZAXhbRJT6P-1
- Vite template: https://github.com/goitacademy/vanilla-app-template

### Features:
- Semantics according to HTML5 standards
- Connected external fonts
- Image optimization for faster load times
- Image optimization for high PPI screens
- All vector graphics packaged in a sprite
- Page favicon added

### Sections realized within the project:
- Header section
- Hero section
- About us section
- Our lessons section
- Proposal to leave an application section
- Our teachers section
- Leave an application section
- Reviews section
- Footer section
- Tablet/mobile overlay menu

### Installation and usage:
- Checking out the website is most convenient while simply viewing the Live Page provided above
- However, it's also possible to install the project locally to be able to make edits and adapt the project to other needs, steps are outlined below:
  1. The project uses Vite, which requires Node.js version 18+, and is (only) tested on LTS versions of Node.js. It can be downloaded here: https://nodejs.org/en/
  2. Clone the repository via git clone `https://github.com/ryabyy/goit_markup_finproj_g4.git`
  3. In the project directory, run `npm install` in a terminal of choice
  4. Now the project is ready to run, there are two modes: dev and build, which use, correspondingly, `npm run dev` and `npm run build`:
    * It is recommended to use `npm run dev` for checking out the website or the changes made - so, during development. This mode would show an address in console, where the website is hosted locally (so it would start with 'localhost'); entering this address in a browser would get the webpage shown. To stop the hosting, make an interrupt `Ctrl+C` in the terminal.
    * If the project is ready, it can be built via `npm run build` (this is exactly what is performed on the live page linked above) - but beware of a need to update the line with "build" in **package.json** in the project's root directory, otherwise some paths would not be resolved properly. This mode produces the final bundled files and folders to be used, with an entry point in **index.html** and relevant resources linked in the **assets** folder.

### Used technologies:
Since the project is produced by a team, some of the used technologies might differ between members. Still, the following are the common tech used by the team:
- HTML - for markup
- CSS - for styles
- JavaScript - for some minor interactions
- Vite bundler - for packaging the project for deployment
- Node.js - Vite uses it for bundling, also some additional packages used
- Modern-normalize - for common ground between browsers (in terms of CSS styles)
- Google Fonts - for a custom font used in the design
- Image optimization and packaging services: https://squoosh.app/, https://icomoon.io/, https://svgomg.net/
- Font conversion/optimization: https://webfont.yabe.land/en/misc/convert-ttf-woff2/
- Slider implementation: https://swiperjs.com/
- Code validators: https://validator.w3.org/ & https://jigsaw.w3.org/css-validator/
- Page speed testing: https://pagespeed.web.dev/

### Authors:
The project is produced by Team #4, which consists of 10 people. For privacy reasons, their full names are not listed directly, but some of their accounts can be found on the **Contributors** page.
