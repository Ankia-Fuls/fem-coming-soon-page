# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![Screenshot of completed project](./design/Completed_project_Screenshot.png)

### Links

- Solution URL: [GitHub](https://github.com/Ankia-Fuls/fem-coming-soon-page)
- Live Site URL: [GitHub Pages](https://ankia-fuls.github.io/fem-coming-soon-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- SASS Styling

### What I learned

I practiced how to react to a change in screen size with react, using this code:

```js
import { useState, useEffect } from "react";

const DEFAULT_MOBILE_BREAKPOINT = 630;

export const useIsMobile = (breakpoint = DEFAULT_MOBILE_BREAKPOINT) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const onResize = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };
        window.addEventListener("resize", onResize);
        onResize();
        return () => window.removeEventListener("resize", onResize);
    }, []);
    return isMobile;
};
```

I used this function to check when the page changed size to change the image src. 


### Continued development

I still struggle with box-shadows and how to get the correct values from looking at an image. I would also like to look into more animations to make the projects more smooth and reactive. I would also like to continue working towards making my projects more accessible.

### Useful resources

- [React function to find screen width](https://stackoverflow.com/questions/74839384/how-to-modify-html-jsx-based-on-screen-size) - This post helped demonstrate how to check for screen size in react.
- [Screen reader only](https://stackoverflow.com/questions/26032089/in-html-how-can-i-have-text-that-is-only-accessible-for-screen-readers-i-e-fo) - This helped show how to add css for screen reader only sections.


### AI Collaboration

I didn't use any AI tools in this project.

## Author

- Frontend Mentor - [@Ankia-Fuls](https://www.frontendmentor.io/profile/Ankia-Fuls)
- GitHub - [@Ankia-Fuls](https://github.com/Ankia-Fuls)
