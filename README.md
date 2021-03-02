# Overview

This project is an example implementation connecting backend including protected routes. It is assumed backend is running locally on port `4000`. `PrivateRoute` is a component to allow for better understanding of a wrapped router.

Dave Notes (steps taken)

1. Started with the Sample Project and created a simple React Router using the instructions here https://www.golangprograms.com/how-to-create-simple-react-router-to-navigate-multiple-pages.html.

2. On About.js and Home.js I replaced:
	<img className="img-fluid rounded mb-4 mb-lg-0" src="http://placehold.it/900x400" alt="" />
with:
	<img src={image1} className="img-fluid rounded mb-4 mb-lg-0" alt="blue bottle" />

3. I added import image1 from './P1000003.JPG' on About.js and Home.js

4. I created a folder called 'images' in src > components and added P1000003.JPG but I couldn't get the image to display (I might have been pointing to it incorrectly) so I also added the image to the folder src > components > pages which worked (though I think this is not the proper way to do it).

5. I changed the footer background-colour on footer.js by replacing <footer className="py-5 bg-dark"> with <footer className="py-5 bg-primary">

6. I updated the nav bar background-colour. The original was:
	<Navbar dark color="dark" expand="md" fixed="top">
I replaced it with
	<Navbar style={{backgroundColor: '#f1f1f1'}} expand="md" fixed="top">
Inline styles are probably improper.

7. I wanted the nav bar colour the same as the footer but couldn't change the nav bar text colour (also blue).
I tried by adding the following to the index.css page. The ugly orange colour was just a test
	.navbar-custom {
	  background-color: #ff5500;
	}

8. I wanted to work with fonts so sdded react-font-face by typing the following in the power shell in VSC:
	npm install react-font-face --save
I wasn't sure what to do after that to alter fonts (even with some reading). I also added import ReactFontFace from 'react-font-face' to App.js. I forget why.
Note: not sure about the difference between App.js and Index.js.

