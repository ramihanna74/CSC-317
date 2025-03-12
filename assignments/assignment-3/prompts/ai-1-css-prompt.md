/*
Prompt: I need a fully styled CSS file for my personal portfolio website, The CSS should meet the following specifications:

1. **Responsive Design:** The layout should be fully responsive, adapting seamlessly to mobile, tablet, and desktop screens.
2. **Color Scheme & Theming:** Use CSS variables to create a consistent color scheme that is professional yet modern. The primary color should be a dark navy blue (`#1E3A5F`), with an accent color of teal (`#4FD1C5`) and a light background color (`#F8FAFC`).
3. **Typography:** 
   - Use a clean, sans-serif font like `"Poppins"`, `"Inter"`, or `"Roboto"`. 
   - Headings (`h1`, `h2`, `h3`) should be bold and well-spaced.
   - The name at the top (`h1`) should be white for better visibility.
   - The `About Me`, `Education`, `Experience`, `Projects`, and `Skills` sections should use a professional serif font like `"Merriweather"` for a refined look.
   - Paragraphs should have a comfortable line height (`1.6`) and be legible on all devices.
4. **Layout & Spacing:** 
   - Apply appropriate padding and margin for readability.
   - Center the header and navigation while keeping the content structured.
   - Use a flexbox or grid-based layout for the sections.
5. **Navigation Styling:** 
   - The navigation bar should be a sticky top bar with a subtle shadow effect. The navigation links should be **bold** and **larger in size** for better readability.
   - Navigation links should have a hover effect where the text color changes to the accent color (`#4FD1C5`).
6. **Section Styling:** 
   - The `About Me`, `Education`, `Experience`, `Projects`, and `Skills` sections should each have distinct styling.
   - Use subtle background colors or borders to separate sections visually.
   - Add a hover effect to all cards (sections) for an interactive experience.
   - Add a hover effect to all images.
7. **Tables:** 
   - Style tables with alternating row colors and proper padding.
   - Add a hover effect for table rows.
8. **Interactive Elements:**
   - Buttons, links, and interactive elements should have smooth hover and focus states.
   - Apply a simple hover animation on buttons (e.g., slight scale-up effect).
9. **Optional Animations:** 
   - Add a fade-in animation for section headings.
   - Include a slight transition effect on hover for images and links.
   - The hometown photo should be larger, and the school logo should remain clear while keeping its proportions.
10. **Contact Information Styling:**
    - The contact section should have a **white background** with **professional blue text**.
    - Ensure the card layout is visually appealing and structured.
11. **Work Experience List Alignment:**
    - Ensure the ordered list in `Work Experience` is properly aligned and does not stick out of the section box.
12. **Comments & Readability:** 
    - Add comments explaining the approach for each major section.
    - Ensure the code is formatted for readability.

    index.html: 
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Rami Hanna - Portfolio</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Rami Hanna's personal website">
    <meta name="keywords" content="Rami Hanna, SFSU, Computer Science">
    <meta name="author" content="Rami Hanna">
    <link rel="icon" type="images/LOGO" href="images/RImage.png">
    <link rel="stylesheet" href="styles/ai-1.css">

</head>
<body>


    <!-- Profile section with a brief introduction and images -->
<header>
    <h1>Rami Hanna</h1>
        <img src="images/Ramihanna.jpeg" width="150" alt="Rami Hanna's profile picture"> 
<section>
    <h2 id="AboutMe">About Me</h2>
        <p>Hello my name is Rami Hanna, I was born and raised in The U.S here in California
        and I am originally from Palestine. I have visited back home multiple
        times in the past. I am a Computer Science major and it is my first
        semester here at SFSU. I have multiple hobbies, some of my hobbies
        include going to the gym, cars and playing sports.
        I like all types of sports but my favorite sport is soccer.
        I have one sister who is younger than me. 
        She is currently a senior in high school and she is going to be graduating soon.</p>
        <p>School: San Francisco State University</p>
        <p>From: Daly City</p>

        <img src="Images/Schoollogo.jpg" width="150" alt="SFSU logo">  
        <img src="Images/Hometown.jpg" height= "200" alt="Daly City">
</section>

</header>
<!-- Navigation menu for quick access to page sections -->
<nav>
    <ul>
        <li><a href="#AboutMe">About me</a></li>
        <li><a href="#Education">Education</a></li>
        <li><a href="#WorkExperience">Work Experience</a></li>
        <li><a href="#Languages">Languages</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#extracurricular">Extracurriculars</a></li>
        <li><a href="#ContactInformation">Contact Information</a></li>
    </ul>
</nav>

<main>
<section>
        <h2 id="Education">Education</h2>

        <ul>
            <li style="font-size: 18px;">Current University: San Francisco State University</li>
            <li style="font-size: 18px;">Major: Computer Science</li>
            <li style="font-size: 18px;">Expected Graduation: December 2026</li>
        </ul>

<!-- Table displaying education history and achievements -->
         <table>
            <tr>
                <th style="border: 3px solid; padding: 6px">School</th>
                <th style="border: 3px solid; padding: 6px">Achievements</th>
                    
            </tr>
            <tr>
                <td style="border: 2px solid">Westmoor High School</td>
                <td style="border: 2px solid">Dean's List</td>
            </tr>
            <tr>
                <td style="border: 2px solid">Skyline College</td>
                <td style="border: 2px solid">Computer Science AA Degree For Transfer</td>
            </tr>  

        </table>
</section>
   
<section>
        <h2 id="WorkExperience">Work Experience</h2>
            <ol>
                <li style="font-size: 18px;">Skyline College Computer Technician (Sep 2022- Dec 2024)</li>
                <li style="font-size: 18px;">Target General Merchandise department</li>
                <li style="font-size: 18px;">Retailer Manager at F&M Smokes and Wines</li>
            </ol>
    <table>
        <tr>
            <th style="border: 3px solid; padding: 6px">Field</th>
            <th style="border: 3px solid; padding: 6px">Location of Job</th>
    
        </tr>
        <tr>
            <td style="border: 2px solid">IT</td>
            <td style="border: 2px solid">Skyline College</td>
        
        </tr>
        <tr>
            <td style="border: 2px solid">Retail</td>
            <td style="border: 2px solid">Target (Daly City)</td>
    </table>
</section>       
    
<section>
    <h2 id="Languages">Languages</h2>
        <ul>
            <li style="font-size: 18px;">English: Proficiency level: Fluent</li>
            <li style="font-size: 18px;">Arabic: Proficiency level: Fluent</li>
            <li style="font-size: 18px;">Spanish: Proficiency level: Intermediate</li>
        </ul>
</section>
   

<section>
    <h2 id="Projects">Projects</h2>
    <article>
            <h4>Here are some of the projects I have worked on:</h4>
    
                <ul>
                    <li style="font-size: 18px;">Project 1: Recipe Book</li>
        
                    <li>An organized website that features variety of delicious recipes with images, ingredients, and step by step instructions</li> 
                </ul>
            <ul>
    
                    <li style="font-size: 18px;">Project 2: Personal Website</li>
        
                    <li>A personal portfolio website displaying my skills, education, experience and langauges</li>
            </ul>
    
    </article>
</section>

<section>
    <h2 id="extracurricular">Extracurricular Activities</h2>
        <ul>
            <li style="font-size: 18px;">Physical health, Fitness and Exercise routine</li>
            <li style="font-size: 18px;">Working and learning about cars</li>
            <li style="font-size: 18px;">Altar serving at Church</li>
            <li style="font-size: 18px;">Cooking and learning new recipes</li>
        </ul>
</section>
 
</main>
<!-- Footer with contact details and copyright info -->
<footer>
    <h2 id="ContactInformation">Contact Information</h2>
        <p><strong>Name:</strong> Rami Hanna</p>
        <p><strong>Email:</strong> <a href="mailto:hannarami24@gmail.com">hannarami24@gmail.com</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/rami-hanna-b44331253/">LinkedIn</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/dashboard">Github</a></p>
        <p><strong>Copyright &copy; Rami Hanna 2025 </strong></p>
</footer>

</body>
</html>
*/
