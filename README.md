# Restify 🐒🛏️✨🌙

## Phase 1: HTML + CSS USING TAILWIND

### Installation Guide
- include the tailwind CDN in the head of every HTML file: `<script src="https://cdn.tailwindcss.com"></script>`
- include this line for tailwind to compile custom css into the project root directory in every HTML file: `<link href="/dist/output.css" rel="stylesheet" type="text/css">` 
- to set up tailwind custom CSS build:
  * **if initializing a project and the config file has not been created yet**, in the terminal, run: `npm install -D tailwindcss`
  * run: `npx tailwindcss init`
  * add all relative paths to every file that uses custom CSS under `contents` in the config file, in `[]` (for example, for this project: `'./P1/src/**/*.html',`);    all paths are in single quotes and separated by commas
  * name the custom CSS file `input.css` and add the following: ``` @tailwind base; @tailwind components; @tailwind utilities; ```
  * **(if project already has config, start here)** run: `npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch` to build CSS (change path for `input.css` according to file structure, **the output file location cannot be altered, it must be in the root directory in order for the build to be successful, it does not matter where the config file is as it will run from the root**)
- run: `npm install -D @tailwindcss/forms` to install necessary packages for the form components
- all [configuration themes](https://tailwindcss.com/docs/theme)

  
### Using SVG Icons
- all icons are sourced from [fontawesome](https://fontawesome.com)
- include this line to import fontawesome in every HTML file that uses icons: `<script src="https://kit.fontawesome.com/6f36eef116.js" crossorigin="anonymous"> </script>`
- search for an icon to use, select only **free** icons, copy the HTML code tag provided and paste into HTML file 
- to change size, place this attribute : <code> fa-[2xs-2xl, or 1x-10x] </code> in the tag generated
- colors are changed in the custom CSS file; name the icon <code> fa-[name of icon] </code>, then set a color attribute
- to change all colors of a specific type of button, use same conventions as above with the type (e.g.: `.fa-solid`
- the fontawesome [documentation](https://fontawesome.com/docs) 

# Have fun developing! 🐵:frog:🎆

  

