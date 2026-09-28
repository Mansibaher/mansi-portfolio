# Mansi Aher — Portfolio

A responsive portfolio with an independent editorial design: blush and lilac colors, handwritten accents, rounded cards, a framed personal portrait and graduation photo, and numbered project rows. Content is based on Mansi's supplied résumé, career context, and verified public GitHub links.

## Preview

Open `index.html` in a browser. For a local web preview, run `python -m http.server 4173` from this folder, then visit `http://localhost:4173`.

## Files

- `index.html`: biography, four featured projects, experience, education, skills, and contact links.
- `editorial.css`: base responsive layout.
- `soft.css`: soft palette, typography, rounded cards, and light/dark themes.
- `script.js`: theme preference and email copying.
- `Mansi-Aher-Resume.pdf`: the original supplied résumé, unchanged.

No build step or account is needed. The complete folder can be hosted as a static site. Google Fonts requires an internet connection; system fonts are used if it is unavailable. Theme preference is stored only in the visitor's browser. No analytics or contact form is included.

## Content notes

Only verified repository URLs are linked. DevPilot and the water leak research have expandable descriptions but no invented live-demo links. The résumé retains its existing Website link to the older Vercel portfolio; update the résumé separately after choosing the new public address. The downloadable résumé includes the contact details in the original supplied document.

## Validation

Reviewed desktop and 390px mobile layouts, checked section navigation, expandable project details, theme switching, local file references, résumé availability, and JavaScript syntax. Email copying was verified in the earlier version; its implementation is unchanged. Decorative animation has been removed.

This version has not been deployed to a public website.

The images folder contains two user-supplied photographs, copied unchanged. CSS controls their framing.

## Interactive features

Project category filters; saved list/grid preference; keyboard-accessible skill tabs; a native dialog with four curated background Q&As (not a live AI chat); sticky navigation and reading progress; motion preference and reduced-motion support. interactions.css and interactions.js contain these additions. Verified filters, layout switching, arrow-key tab navigation, Q&A answer changes, Escape dismissal, motion switch, and a 390px mobile dialog without horizontal overflow.

## Recruiter-focused update

Added devpilot.html with a real 30-second demo and workspace screenshot, source links, architecture choices, and evaluation limitations. Added water-leak-research.html describing the documented research scope; final results and figures still require the thesis presentation.

Corrected the website MRI description against src/utils.py, src/train.py, and src/app.py: binary ResNet18 classification with Streamlit, without a verified validation accuracy. The original downloadable resume has not been edited and still contains conflicting four-class/FastAPI/85% claims; reconcile those with the intended project version before public release.

DevPilot source commit checked: bad3ef04836d25e4a095b4ffa2fb87ac22742070. Its demo and screenshot were copied from the existing project; no new project performance benchmark was run.

Checked all local page/file/anchor references, media loading (30-second video), desktop and mobile DevPilot layout, and navigation between the homepage and research overview. Hosting is pending the choice of replacing the existing Vercel site or using a new address.
