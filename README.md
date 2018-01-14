# jwplayer-page

Unable to get Karbon font since its a paid font and relied on fallbacks

data.json was provided with two of the same keys `sideBySide`. There are 2 approaches, 1 is to ensure the backend does not produce a json with two of the same keys. Another is to modify the the file where we flattenChildren to combine the values of the same key into an array. In this case, I decided to approach the latter so I can still dynamically use the data provided to display the data based on the design provided. Otherwise, with the initial provided json the only data that will display would be the `Developer Tools` in this case. 

`grunt connect`

http://localhost:9090/

`grunt`