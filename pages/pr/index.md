<critical-path-font text="Creating Pull Request To The Website" family="Squada One">
  h1 { font-family: 'Squada One' }
</critical-path-font>

<row><col>

# Creating Pull Request To The Website

I've provided an open letter that people can sign. If you don't agree with any of the points raised there, or want to improve it in any other way, with additional information, you can fork this website, and add your own letter. Here is an instruction how to do that.

## 1. Fork and Clone Project

The project is hosted on [GitHub](https://github.com/art-deco/open-source). You need to fork and clone it.

## 2. Install

The website is made using the [Splendid](https://github.com/artdecocode/splendid) website generator that makes use of Closure Compiler and Closure Stylesheets. After `git clone`, `yarn` or `npm i` commands need to be run. In addition, ``google-closure-compiler-java`` and ``closure-stylesheets-java`` packages (10MB and 4MB) need to be added to the project, since it's assumed that they are installed globally in the home directory.

## 3. Create a page

The `pages/index.js` file contains all pages on the website. Simply create a new directory in `pages` dir, and export a new page that points to it. Write your content in the page file using markdown and using other pages for reference. Start the development server with `yarn dev` and navigate to `http://localhost:3000/open-source/` to preview how the page looks like. It will be automatically added to the menu.

## 4. Compile

You'll need `cwebp` installed globally and be running on a mac, since _Splendid_ doesn't support Windows yet to create a build, however you can submit a PR without building the website. Run `yarn prod` to create a production build.

</col></row>