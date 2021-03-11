<!DOCTYPE html>
<html>
    <head>
        <title>Ken Pink's Web Dev Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="personalweb.css">
    </head>
    <body>
        <header>
            <img id="bannerImg" src="images/bannerMG4.png" alt="banner" title="banner">
                <nav>
                    <ul id="ulNav">
                        <li id="liNav"><a class="active" href="home.html">Home</a></li>
                        <li id="liNav"><a href="resume.html">Resume</a></li>
                        <li id="liNav"><a href="portfolio_home.html">Portfolios</a></li>
                        <li id="liNav"><a href="contact.html">Contact</a></li> 
                        <li id="liNav"><a href="admin.html">Admin</a></li>    
                    </ul>
                </nav>
        </header>
    <main class="admin">
        <p>User name: admin</p>
        <p>Password: admin</p>
        <script type="text/javascript">
            let userName = prompt("What is your name? Try admin");
            if (userName == "admin") 
                {
                    let userPassword = prompt("What is your password? Try admin");
                    if (userPassword == "admin")
                    {
                        window.location.replace("adminLoggedin.html");
                    }
                        else if (userPassword == '' || userPassword == null)
                    {
                        alert("Are you sure you're in the right place?");
                    }
                        else
                    {
                        alert("Wrong password I'm afraid.");
                    }
                }
            else if (userName == '' || userName == null)
                {
                    alert ("Sorry, cancelled.");
                }
            else
                {
                    alert ("I don't know you.");
                }
        
        
        </script>
    </main>
        <footer class="footer">
            <h3 class="footer">Web sites that helped me build this web site: 
            <a class="footer" href="https://www.w3schools.com/" target="_blank">W3 Schools </a> | 
            <a class="footer" href="https://css-tricks.com/" target="_blank">CSS-Tricks</a></h3>
            </footer>
    </body>
</html>