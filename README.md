# up-button
Customizable plugin, smooth scroll up button, on native JavaScript
## Description ##
Up button initialization, call ***`up()`*** function, in your js file, or in html file, inside script tag
The button has standard styles that are specified in the css file, but it can be customized for a specific design by passing parameters to the function.
## Initialization ##
```
 up();
```
## Initialization with parameters ##
```
up({
   bottom: '20px',
   right: '20px',
   width: '45px',
   height: '45px',
   bg: 'green',
   src: 'img/chevron-up-solid.svg',
   whenShow: 400,
   circle: true
  })
```
## Settings ##
>### `top` ###
>>Top position, written in quotes, example "20px"
---
>### `bottom` ###
>>Bottom position, written in quotes, example "5%"
---
>### `left` ###
>>Position to the left, written in quotes, example "2vw"
---
>### `right` ###
>>Right position, written in quotes, example "25px"
---
>### `width` ###
>>Button width, written in quotes, example "45px"
---
>### `height` ###
>>Button height, written in quotes, example "45px"
---
>### `bg` ###
>>background color of the button, written in quotes, example "# 000"
---
>### `src` ###
>>The address (URL) of the picture in the button, written in quotes, for example "img / picture.svg"
---
>### `whenShow` ###
>>How long does it take to scroll the page for the button to appear, example 400
---
>### `circle` ###
>>If the button should be round, example is true
