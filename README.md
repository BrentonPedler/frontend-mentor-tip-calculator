# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./images/screenshot.jpg)

### Links

- Solution URL: [Click Here](https://www.frontendmentor.io/solutions/tip-calculator-app-vanilla-js-solution-8BJt2rUt4F)
- Live Site URL: [Click Here](https://splendid-semolina-4ee4ac.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow

### What I learned

More advanced logic using

```js
function calculatePerPerson(billValue, peopleValue, tipAmount) {
	if (peopleValue > 0) {
		return {
			tipPerPerson: (tipAmount / peopleValue).toFixed(2),
			totalPerPerson: ((billValue + tipAmount) / peopleValue).toFixed(2)
		};
	}
}
```

### Continued development

JavaScript Logic / Code Cleanliness
