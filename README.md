# README

This is a sample application created to test how routing works in Ionic 4. The application has a layout that includes:
* A side menu
* Two main pages (home.html & list.html)
* Two sub-pages (sub-page1.html & sub-page2.html)
* Sub-page choice is done with `ion-segment` instead of `ion-tabs` to allow for "tabs" in the middle of the page.

The sub-pages are loaded under the main pages with `router outlets`, either the Ionic `<ion-router-outlet>` or the Angular `<router-outlet>`.

The goal is to find a way to do routing so that
1. The sub-page shows up fully below the main page and it scrolls with the main page.
2. All forward and back navigation (using the `ion-back-button` or the browser) work properly.
