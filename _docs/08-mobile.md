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

## Fonts SubResource Integrity (SRI)

Note: This issue limited to mobile.
For `<script>` and `<link>` tags, its now expected that `crossorigin` and `integrity` attributes be specified.
Hash for integrity can be discover using 'https://www.srihash.org/'
However, in the case of Google Fonts, the file serve will differ depending on the browser request (user-agent).
So the hash generated from `srihash.org` will always end up as invalid. 

  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" crossorigin="anonymous" />
