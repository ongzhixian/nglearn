# Mobile notes


## Zooming

'index.html' allows zooming.

To stop zooming, change the viewport meta-tag from:

<meta name="viewport" content="width=device-width, initial-scale=1" />

to
  
<meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=0" />

Changing this however would highlight an issue as:

```
Zooming is a common and expected 'allowed' behaviour on mobile web pages, so disabling it detracts from the mobile user experience. 
For this reason, Apple decided to ignore the declarations of user-scalable, minimum-scale, and maximum-scale, as of iOS 10.
```