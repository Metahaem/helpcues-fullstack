Helpcues is a single-page random acts of kindness generator.

It works on a Ruby on Rails API and a vanilla Javascript front-end. To get the page up and running, navigate to the helpcues-backend folder and execute the following:

`rails db:create && rails db:migrate && rails db:seed && rails s`

This should create the API, seed it with data and start the rails server running.

Next, go to helpcues-frontend and open index.html in your browser of choice. 

The app does not require user authentication. You can login as one of the existing users or sign up a new user as follows: 

<iframe src="https://giphy.com/embed/gFnSujRHaPzfZMKwLf" width="480" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/gFnSujRHaPzfZMKwLf">via GIPHY</a></p>

The app allows users to filter acts according to category, and generates random acts based on the categories selected. Users can click "Done to mark that they have completed an act. This adds to the act's total "Done" count, as well as the users personal one.

<iframe src="https://giphy.com/embed/H3wvjzmk8569NxNkzi" width="480" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/H3wvjzmk8569NxNkzi">via GIPHY</a></p>

Users can also create their own acts of kindness using the app. This will save to the database with its own gif, which is taken from the Giphy API based on the user's description:

<iframe src="https://giphy.com/embed/H3wvjzmk8569NxNkzi" width="480" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/H3wvjzmk8569NxNkzi">via GIPHY</a></p>

Have fun and remember to be kind!
