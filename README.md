# giftastic https://dinhdothuy.github.io/giftastic/

In this excercise, I used the GIPHY API to make a dynamic web page that populates with gifs of your choice. 
To finish this task, I get the GIPHY API and use JavaScript and jQuery to change the HTML of the site.

First, I created an array of strings, each one related to a topic. I chose animals for my theme.

The app takes the topics in this array and create buttons in HTML.

There is a loop that appends a button for each string in the array.
When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.

When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

Under every gif, display its rating (PG, G, so on). 

This data is provided by the GIPHY API.

Users can add their own kind of animals they like.
