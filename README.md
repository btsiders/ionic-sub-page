# README

This is a sample application created to test how routing works in Ionic 4. The application has a layout that includes:
* A side menu
* Two main pages (home.html & list.html)
* Two sub-pages (sub-page1.html & sub-page2.html)

I'm using IonSegment instead of IonTabs, but we'll just call them 'tabs' here.

To see navigation break:
1. On Page 1, select the Balls tab
2. Select Page 2 from the side menu
3. Go back to Page 1 using the `ion-back-button`

At this point, you should have gone back to Page 1 on the Balls tab, but your on the Bug tab. Also, if you try clicking on the Balls tab, nothing happens.

[![Watch the video](./assets/2019-01-02.png)](https://drive.google.com/file/d/10zxuZluRb3BPzzv8SALoxIi0oXQyWlSp/view)