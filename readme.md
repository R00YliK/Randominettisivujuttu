# Randominettisivujuttu
#### This is a quite crude web page that uses the basics of html/css/javascript.

This page has been made using following criteria: https://jukkapne.github.io/WebOhjelmoinninPerusteet/  

##### Html:
1/5  
there is basic html structure in every page.  
2/5  
Headings and paragraps have been used frequently.  
3/5  
forms are used in survey page, links are in every page and in gallery page I have implemented media in form of images.  
4/5  
Survey page results are printed in table.  
5/5  
?  
  
###### css  
1/5  
Different colors and fonts are defined in css file  
2/5  
there is various classes and specific elements defined in css file  
3/5  
The website has been made responsive using css.   
also the images in gallery changes to different grid when the aspect ratio changes.  
4/5  
In gallery-page images are set on grid and is also switches to different grid when aspect ratio changes.  
5/5  
Depend on the viewer i guess.  

###### Javascript  
1/5  
Alert button is found in gallery page and also in survey page if you press "lähetä" without picking any toppings.  
2/5  
Eventlisteners are used 5 times:  
1. In gallery picture pops up after five seconds.
2. In survey-page if ananas is picked, a message appears.
3. Alert in survey-page if no checkboxes are pressed.
4. Printing the toppings into a table in survey-page.
5. Shows alert in gallery if button is clicked.  

3/5  
Functions are used in eventlisteners and object is used in function fetchCountryData()  
4/5  
not used  
5/5  
not used  

##### Asynchronous Operations  
1/5  
Picture is set to appear after 5 seconds.  
2/5  
function fetchCountryData() uses REST Countries API to print basic information of every country to countries page.  
3/5  
data from fetchCountryData() is printed in Countries-page.  
4/5  
Error handling is implemented with following code:  
 .catch(error => {  
            console.error('There has been a problem with your fetch operation:', error);  
        });  
5/5 
Not used.  













