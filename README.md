# js-age-verification-modal-shopify
Quick and dirty age verification modal that works with Shopify. This was originally created for Heavy Riff Brewing Company. 

To implement:

- modify Shopify theme
- create new asset (type: .js)
- enter this code
- under layouts, find and edit theme.liquid
- add this line: <script src="{{ 'age-verification.js' | asset_url }}" defer="defer"></script>

Using function ready() or adding event listeners to the DOM doesn't appear to work. These are automatically added with "defer".


