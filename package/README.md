# kylies-virtuality @\, @

?\_?

## Installation

It is highly recommended that you run the `npm run start` or `yarn start` command in your native terminal and NOT in visual studio code or any text editor. Also make the terminal fullscreen for the best view possible!

> Make sure you are within a new project/folder and run `npm init` or `npm init -y` as a package.json file is required.

### Install With

-   NPM

```javascript
npm install kylies-virtuality
```

### Or

-   Yarn

```javascript
yarn add kylies-virtuality
```

## Instructions

-   Step 1: Create a folder through terminal with: `mkdir kylie`
-   Step 2: Go into that folder with: `cd kylie`
-   Step 3: Run the following command: `npm init -y` this will create a brand new package.json file
-   Step 4: Install the package with
    -   NPM: `npm install kylies-virtuality`
    -   Or Yarn: `yarn add kylies-virtuality`
-   Step 5: Create a new file at the root of the project called index.js
-   Step 6: Add the following lines of code:

```javascript
import kylie from 'kylies-virtuality';

kylie.start();
```

-   Step 7: Make sure your package.json looks like the following:

```json
...
"main": "index.js",
"type": "module",
"scripts": {
	"start": "node index.js",
	"test": "echo \"Error: no test specified\" && exit 1"
},
...
```

Make sure it has both the type flag set to "module" and the "start" script set to `node index.js` then continue.

-   Step 8: Run the following command: `npm run start` if using NPM, or `yarn start` if using Yarn
-   Step 9: Observe the terminal and answer the prompts as best you can :)
