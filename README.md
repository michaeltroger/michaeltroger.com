# michaeltroger.com - Personal Website of Michael Troger
[![pages-build-deployment](https://github.com/michaeltroger/michaeltroger.com/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/michaeltroger/michaeltroger.com/actions/workflows/pages/pages-build-deployment)

This repository contains the **source code of my personal website [https://michaeltroger.com](https://michaeltroger.com)**, hosted with GitHub Pages.  
The website is powered by Jekyll, and I use Markdown to author my posts. It is based on [Jonathan McGlone’s](https://github.com/hankquinlan/hankquinlan.github.io/) project.

<table>
<tr>
<td>
<img src="screenshots/home_desktop.jpeg" width="100%">
</td>
</tr>
</table>

## License
No license is granted for this project.

All source code in this repository is the exclusive copyright of
Michael Troger. You may view the code on GitHub, but you may not use,
modify, distribute, or reproduce it without explicit written permission.

I recommend using [Jonathan McGlone’s](https://github.com/hankquinlan/hankquinlan.github.io/) project as a starter, since it doesn't contain any private information and the author allows copying without restrictions.

## Technologies
* Static site generator: Jekyll
* Markdown processor: Kramdown
* Templating language: Liquid
* Stylesheets: SCSS
* Scripts: JavaScript

## Instructions
GitHub Pages builds automatically on commits. Files can be directly edited within the GitHub UI.

### Local deployment
1. Move to the `docs` folder: `cd docs`
2. Install dependencies: `bundle install`
3. Build and serve the site locally at [http://localhost:4000](http://localhost:4000): `bundle exec jekyll serve`  
   Optionally, run the command [with a GitHub token](https://github.com/jekyll/github-metadata/blob/main/docs/authentication.md) to render repository information:  
   `JEKYLL_GITHUB_TOKEN=123abc bundle exec jekyll serve`
