# CSC 317 Assignment 2 Submission

**Name:** Rami Hanna
**Student ID:** 924448249 
**GitHub Username:** ramihanna74  
**Assignment Number:** 2  


##  HTML Personal Portfolio Website Assignment

### Description:
This was a personal portfolio website that showcases different sections like about me, work experience, langauges, contact information and other sections also. It also has a profile picture of myself, a picture of my hometown, and a logo of my school. the objectives of this assignment was to Master HTML5 fundamentals and semantic structure, understand and implement proper document structure, create accessible and well-organized content and apply HTML best practices for web development.


## Approach / What I Did:
Describe your approach to building the HTML structure. Explain design choices, layout decisions, and how elements are structured:

I built my HTML structure by going over the slideshows from class and taking notes in class, and looking at the example structure on the assignment instructions to get an idea of how the structure should be like, also trial and error and trying different things. For the design I used unordered lists which are bullet points, I used ordered lists which are numbered and I also used tables to display information about my education and my work experience. I also have a unordered list with my contact information at the bottom, I also used navigation links to navigate through my different sections. I also have profile picture of myself, a picture of my hometown and a picture of my school logo, as well as an audio clip.




## Code Explanation:
This is a key part of my code and it is the navigation section and this allows me or anyone viewing the webpage to press a link that will navigate them into any of the sections on the webpage:
<nav>
    <ul>
        <li><a href="#About Me">About me</a></li>
        <li><a href="#Education">Education</a></li>
        <li><a href="#Work Experience">Work Experience</a></li>
        <li><a href="#Languages">Languages</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#extracurricular">Extracurriculars</a></li>
        <li><a href="#Contact Information">Contact Information</a></li>
    </ul>
</nav>

This is another key part of my HTML code and it is my education section, it displays the school I am currently at, my major and expected graduation date and it also displays a table of my schools and achievements:

<main>
    <section>
        <h2 id="Education">Education</h2>
            <ul>
                <li style="font-size: 18px;">Current University: San Francisco State University</li>
                <ul>
                    <li>Major: Computer Science</li>
                    <li>Expected Graduation: December 2026</li>
                </ul>   
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