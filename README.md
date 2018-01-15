# JWPlayer Webpage

#### ASSETS

**Header Font:** Karbon 
*(Unable to get Karbon font since its a paid font and relied on fallbacks)*

**Paragraph Font:** Open-Sans

**Images:** was provided in a pdf file which I then exported

**Data:** `data.json` was provided. 

The file had two of the same key, `sideBySide`. There are 2 approaches that I thought would be best.
 1. To ensure the backend does not produce a json with two of the same keys. 
 2. To modify the the file, where it would run a `flattenChildren` function to combine the values of the same key into an array. 
 
 In this case, I decided to approach the latter so I can still dynamically use the data provided to display the data based on the design. Otherwise, with the initial data the only information that will display would be the `Developer Tools` in this case because it is the last key of `sideBySide` which overrides the other key of `sideBySide`. 

#### COMPILING CODE WHILE DEVELOPING

In your terminal run 
`grunt`

#### CONNECTING TO SERVER 

In your terminal run 
`grunt connect`

Go to `http://localhost:9090/` and you should be able to see the page. 
