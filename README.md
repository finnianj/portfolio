Note to self.

bundle all the files using npm run build

Be aware that inside the ocean.html there is a conditional statement that will only load the ocean.js script is the user is on a laptop (this is so that I am not pointlessly sending a 500kb js file)

The problem with this is that when vite builds everything, it will not recognise that it has to change the pathway for this js file.

So basically after you run build, go into bundle/ocean.html and change the pathway for the js script to 'bundle/assets/the-name'
