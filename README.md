# Useful Functions for websites
## To add this to your website:
add this code to your html header
```html
<head>
<script src="https://raw.githubusercontent.com/undefinedusername/functions/master/javascript/openurl.js"></script>
<script src="https://raw.githubusercontent.com/undefinedusername/functions/master/javascript/CreateMenu.js"></script>
<script src="https://raw.githubusercontent.com/undefinedusername/functions/master/javascript/audio.js"></script>
<script src="https://raw.githubusercontent.com/undefinedusername/functions/master/javascript/refresh.js"></script>
<script src="https://raw.githubusercontent.com/undefinedusername/functions/master/javascript/download.js"></script>
</head>
```
## use this to call the functions:
```javascript
/*openurl(url,urltype,name,toolbar,scrollbar,resizable,top,left,width,height)*/
openurl('www.google.com',"external","Google",true,true,true,100,100,100,250); /*use 'external' to use the internet, not local files*/
openurl('asset/index.html',"local","Home page",true,true,true,100,100,100,250); /*use 'local' normal filesystem to use local files*/
/*CreateMenu(id)*/
var MenuA = new CreateMenu("menuA"); /*use the "new" to use the actual functions of this*/
MenuA.hide(); /* hides the menu */
MenuA.show(); /* shows the menu */
MenuA.sethtml("text"); /* sets the text of the innerHTML */
MenuA.setonclick("code"); /* sets the onclick */
MenuA.setstyle("style"); /* sets the style TODO */
MenuA.getid(); /* gets the id of the menu */
MenuA.gettype(); /* TODO */
MenuA.isActive(); /* returns if active */
refresh() /*reloads the page*/
/* sound(src) */
var music = new sound('music/example.mp3');
music.play(); /* plays music */
music.stop(); /* stops music */
/* download(text, name, type) */
download("sample text","readme.txt",'text/plain'); /* downloads a text doc with the contents "sample text" */
```
A place to put my random code.
