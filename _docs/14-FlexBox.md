# Angular FlexBox

## FlexBox containers attributes (directives)
    fxLayout		define the layout of the HTML elements (values: row, column, row-reverse, and column-reverse; default row)

    fxLayoutGap		defines the gap between the children items within a flexbox container (20px)
    fxLayoutAlign	defines the alignment of children elements within the flexbox parent container (<main-axis> <cross-axis>) "center start"

```html:Example of FlexBox container directives usage
<div fxLayout="row" fxLayoutGap="20px" fxLayoutAlign="center start" class="flex-container">
    <div class="sub-section-1" class="flex-children"></div>
    <div class="sub-section-2" class="flex-children"></div>
</div>
```

## FlexBox children attributes
	fxFlex          defines how to resize the elements along the main-axis of the layout ("30")
    fxFlexOrder     Defines the order of a flexbox item
    fxFlexOffset    Offset a flexbox item in its parent container flow layout.
    fxFlexAlign     Applies alignment to this specific child element within the flexbox parent
    fxFlexFill      Maximizes the width and height of an element in a layout container.



## Row (Horizontal) Alignment Values

    none
    start (default)
    end
    center
    space-around
    space-between
    space-evenly

## Column (Vertical) Alignment Values

    none
    start
    center
    end
    stretch (default)

## Responsive API

What the below snippet does:

In this row layout example, all elements in the row layout are aligned horizontally. However on mobile devices, we cannot show these all elements in row layout as the width of the mobile device is small. 

In the example listed below we use a responsive breakpoint fxLayout.xs= “column”. 

This transitions to a column layout on mobile devices. The usage of fxHide.lt-md on the second child will not display below a screen width of 960px.


Display child elements in flexbox container horizontal.
But if screen width is that of 'xs', display child items vertical instead (`fxLayout.xs="column"`)

`fxHide.lt-md` hides the child element if screen width is less than 960px (md).

```html
<div fxLayout="row" fxLayout.xs="column" fxLayoutGap="20px" class="flex-container">
    <div fxFlex="35"> Child - One </div>
    <div fxFlex="30" fxHide.lt-md> Child - Two </div>
    <div fxFlex="35" fxLayoutAlign="space-around center">
        <div  fxFlex="50" fxFlex.lt-lg="80"> Sub-child - One</div>
    </div>
</div>
```


## Breakpoints

breakpoint 	mediaQuery
xs 	        'screen and (max-width: 599px)'
sm 	        'screen and (min-width: 600px) and (max-width: 959px)'
md 	        'screen and (min-width: 960px) and (max-width: 1279px)'
lg 	        'screen and (min-width: 1280px) and (max-width: 1919px)'
xl 	        'screen and (min-width: 1920px) and (max-width: 5000px)'
	
lt-sm 	    'screen and (max-width: 599px)'
lt-md 	    'screen and (max-width: 959px)'
lt-lg 	    'screen and (max-width: 1279px)'
lt-xl 	    'screen and (max-width: 1919px)'
	
gt-xs 	    'screen and (min-width: 600px)'
gt-sm 	    'screen and (min-width: 960px)'
gt-md 	    'screen and (min-width: 1280px)'
gt-lg 	    'screen and (min-width: 1920px)'

# Reference

https://github.com/angular/flex-layout/wiki/Responsive-API

https://www.excellarate.com/blogs/getting-started-with-angular-flex-layout/
