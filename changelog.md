# Changelog

- [x] VITE: proper Translation class
- [x] OGL: Post: recreate render target in resize otherwise goes tits up
- [x] VITE: setup basic assetsinclude as default (webp)
- [x] ASTRO: put canvas outside the basic layout `Canvas.astro`
- [x] VITE: remove 00 from ctrl.js
- [x] EVALUATE — stop using default exports (?)
- [x] ASTRO: swap default canvas for the DIV
- [x] ASTRO: also meta tags and head
- [x] ASTRO: under `[data-gl=”c”]`
- [x] OGL: fix export A and starter loader texture import (to be checked)
- [x] VITE: in Alpha class import gsap
- [x] THREE — re import `gltfLoader` with new imports
- [x] VITE: add agents.js / add it to utils out of boilerplates
- [x] THREE — re-import orbit controls as default properly (new folder structure) [[link]](https://github.com/mrdoob/three.js/blob/master/examples/misc_controls_orbit.html)
- [x] ASTRO: remove taxi.js names on page layouts
- [x] ASTRO: add `content.js` (in components) with custom import function not to use astro.glob
- [x] ASTRO: fix `section` **in boilerplate** from _offficestud.io_
- [x] with scroll bounce: (touch action none for mobile fixes like refresh and such)
- [x] THREE — remove `Math` import from three in `textureLoader` and remove powerof2 check (or do it properly)
- [x] THREE — default post processing class _(get from vcore)_
- [x] THREE — move post files to bp
- [x] VITE: setup props for taxi transition
- [x] THREE Remove site specific things in app.js (all actually) ??

- [x] (29/01/23) VITE → scroll start values percent

## 06/03/23

- [x] VITE → to named imports
- [x] VITE → animation with controls (as in lasso.ai)
- [x] THREE → add in raw-instance the basic point shader lines
- [x] THREE → fix controls going wild — gl.js
- [x] THREE → fix draco workflow
- [x] THREE → fix viewport canvsas initiator (viewport.js)
- [x] THREE + ALL → set a generic GUI from starter (from lasso)
- [x] THREE → rename asset import in /loader to ALLCAPS
- [x] ALL → add basic glsl include from filed
- [x] ALL → add gUI class @ app level

# 17/03/23

- [x] VITE → added minimal tween library

# 04/04/23

- [x] WEBFLOW → added finsweet based esbuild script

# 16/04/23

- [x] ASTRO → updated
- [x] GEN → better MOD in utlis

# 06/05/23

- [x] ASTRO → remove (comment) touch action none from body in main.css
- [x] OGL → fix loader with GL (and keep it in scene/gl)
- [x] WEBGL ALL → Check the import in app.js of .css file and remove
- [x] VITE → update lenis dependency and code
- [x] GENERIC → Transform class to be tweakable
- [x] OGL → check canvas selector and uniform all webgl with that (also astro)
- [x] THREE (ALL) → rename devicepixelratio in viewport
- [x] GENERIC → Add things from gist to appropriate places

- [x] add deps to degit src

# 03/06/23

- [x] ASTRO → fix tailwind fontù
- [x] TWGL → remove double import from fsq
- [x] TWGL → fix canvas selector in `gl`

# --

- [x] MATH → modulo in math functions
- [x] WEBGL ALL → Check the import in `app.js` of `.css` file and remove
- [x] ASTRO → remove (comment) touch action none from body in `main.css`
- [x] OGL → fix loader with GL (and keep it in scene/gl)
- [x] VITE → update lenis dependency and code
- [x] GENERIC → Transform class to be tweakable
- rename to track
- coherent el / element naming for params
- params default
- [x] OGL → check canvas selector and uniform all webgl with that (also astro)
- [x] THREE (ALL) → rename devicepixelratio in viewport
- [x] ALL → add dependencies close to degit
- [x] GENERIC → Add things from gist to appropriate places
- [x] ASTRO → fix tailwind font
- [x] TWGL → remove double import from fsq
- [x] TWGL → fix canvas selector in `gl`

# 22/07/23

- [x] WEBGL ALL → chunks and chunks functions should be named as the file is
- [x] VITE → observe class unsubscribe emitter on destroy
- [x] VITE → clientRect to have bottom enabled by default
- [x] VITE → `track` to extend Observe
- [x] VITE → scroll to be subscribable (and treack to subscribe by default if exist)
- [x] VITE → observe class should optionally take callbacks (!!!)
- [x] SANITY → Add API folder
- [x] SANITY → add integration folder /astro + components (?)
- [x] ASTRO → fix prettier

# 29/07/23

- [x] setup scripts in package json
- [x] VITE → Fix Alpha Basic Class
- [x] SANITY → Fix Image utils to auto convert to webp and optimise

# 22/08/23

- [x] Sanity → Updates (to be checked!)
- [x] VITE → fix splittext class to be revertable (thanks) and better line split
- [x] THREE → texture loader ratio and size trick
