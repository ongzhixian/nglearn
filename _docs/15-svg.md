# SVG

Viewbox


## `in` attribute valid values

SourceGraphic
    This keyword represents the graphics elements that were the original input into the <filter> element.

SourceAlpha
    This keyword represents the graphics elements that were the original input into the <filter> element. SourceAlpha has all of the same rules as SourceGraphic except that only the alpha channel is used.

BackgroundImage
    This keyword represents an image snapshot of the SVG document under the filter region at the time that the <filter> element was invoked.

BackgroundAlpha
    Same as BackgroundImage except only the alpha channel is used.

FillPaint
    This keyword represents the value of the fill property on the target element for the filter effect. In many cases, the FillPaint is opaque everywhere, but that might not be the case if a shape is painted with a gradient or pattern which itself includes transparent or semi-transparent parts.

StrokePaint
    This keyword represents the value of the stroke property on the target element for the filter effect. In many cases, the StrokePaint is opaque everywhere, but that might not be the case if a shape is painted with a gradient or pattern which itself includes transparent or semi-transparent parts.

Note:
    BackgroundImage is not supported as a filter source in modern browsers 
    (see the feComposite compatibility table). 
    We therefore need to import one of the images to blend inside the filter itself, using an <feImage> element.

Reference:
https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/in