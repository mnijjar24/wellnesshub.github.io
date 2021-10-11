# Welcome to the **Wellness Hub**!

Wellness Hub is a web application that provides users with an opportunity to obtain their body mass index (BMI), search for new recipes based on their nutritional preferences and look up new exercises based on their objectives. This web application was created as a project for the Univerity of Toronto Coding Bootcamp. 


## Objective
Conceive and execute a design that solves a real-world problem by integrating data received from multiple server-side API requests.


## Application Requirements: 
* Use a CSS framework other than Bootstrap.
* Be deployed to GitHub Pages.
* Be interactive (i.e., accept and respond to user input).
* Use at least two server-side APIs.
* Does not use alerts, confirms, or prompts (use modals).
* Use client-side storage to store persistent data.
* Be responsive.
* Have a polished UI.
* Have a clean repository that meets quality coding standards (file structure, naming conventions, follows best practices for class/id naming  conventions, indentation, quality comments, etc.).
* Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).
* Each team member must Include this project to their respective professional portfolio’s that were created in Module 2.


## Motivation For Development
Case Study: An individual known to this team of developers suffered from a heart attack at the age of 37. Prior to this cardiac event, this individual was a heavy smoker, diabetic for 7 years and was not bothered with maintaining a healthy lifestyle.  

However, the heart attack was a turning point. Using a combination of healthy eating and physical activity, this individual was able to identify and implement sustainable changes to their lifestyle and improve their health and ultimately quality of life. 

This case study example gave our team a reason to work on an application that not only provides nutritional information, but also produces a comprehensive listing of exercises that a user may incorporate into their daily routine, based on their BMI and/or physical abilities, to achieve their health and wellness goals.

## User Story
As someone interested in improving my health and leading a healthier lifestyle, I want to be able to obtain my Body Mass Index (BMI) based on my age, weight and height; and benchmark it against standard BMI’s of people with similar demographics.

Based on the benchmarking result, I want to receive nutritional information and exercise routine recommendations.

I also want to be able to store my initial BMI as a baseline and track my progress based on predetermined intervals.


## User Workflow
WHEN I enter the application
THEN I am prompted to enter name, age, gender, weight and height.
WHEN I enter this prompted information
THEN I am provided with my Body Mass Index (BMI) and I am immediately benchmarked against people with similar demographics and given the option to receive recommendations on nutrition and various exercises.
WHEN I select the nutrition button
THEN I am provided with a menu recommendation based on the objective I want to achieve or based on my dietary needs/restrictions.
WHEN I select the exercise button
THEN I am provided with an exercise routine based on the objective I want to achieve.


## Technologies Used 
Platforms:
    VSCode
    Github
    RapidAPI

Languages:
    HTML
    CSS Frameworks - CSS, Bulma, Bootstrap
    JavaScript
    JQuery

Third Party API’s:
	BMI Calculator: https://rapidapi.com/principalapis/api/body-mass-index-bmi-calculator/
    Nutrition: https://rapidapi.com/spoonacular/api/recipe-food-nutrition/
    Exercise: https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb/


## Wireframe
![wireframe](/assets/images/Project1-Wireframe.jpg)


## Challenges
As dev’s-in-training, there were many challenges we faced as a team throughout the development of this web application. First and foremost, identifying third-party API's that satisfied our requirements, but were also made up of good working code, was indeed a test. Each of the three third-party API's identified originally, produced many complications which led to the team replacing each API. Connecting good quality third-party API's via Javascript, ensuring appropriate outputs within console.log() and resolving CORS errors were some of the roadblocks we conquered. 

Our team had great ideas surrounding the functionality and user experience upon entry to the Wellness Hub application. However, due to time and/or the complexity of code needed to execute these ideas, we changed course and made modifications to our project wireframe to ensure we were able to produce a solid minimal viable product (MVP) for our very first project. 

Additional challenges faced included the resolution of merge conflicts, as each team member was working within their respective feature branches. As time went on, we became quite efficient at pulling, pushing and merging the code.


## Successes
Having a supportive and accommodating team makes the world of a difference during projects such as these, especially when most (if not all) members are new to the world of coding. This team was incredibly flexible and respectful of each other's time and personal/professional obligations. We were able to leverage individual strengths and maintain a positive environment to promote great collabortation. All while maintaining moral, highlighting the small wins and not forgetting to make space to breathe and laugh (even in our misery). 


## Directions for Future Development
As mentioned above, this is MVP #1 for the Wellness Hub web application.

At the time of this submission, our team has done it's best to meet all the requirements of this project. Despite this, there is room for improvement and listed below are some additional features or functionality that we will be improving with time and as we continue our journey through this coding bootcamp. 

* Obtain additional information from the Nutrition API to include URL's for each respective recipe that appears on index.html, following the selection of the nutrition button, and update the code accordingly.
* Obtain additional parameters from the Exercise API to include the name's of the respective exercise gifs that appear on the index.html, following the selection of the 'Exercise' button, and update the code accordingly.
* Ensure back button functionality is consistent between the 'Nutrition' and 'Exercise' buttons and the user is able to freely move between the nutrition and exercise sections and be able to see the appropriate information on the screen.

Once the above modifications have been made, our team seeks to enhance this web application by:
* Capturing additional health parameters of users (HR, sleep) to provide a more holistic approach
* Compatibility with devices: WatchOS/Android watches, etc. 


## Screenshot of Wellness Hub Homepage
![navbar](/assets/images/Screenshot-nav-and-hero.jpg)

![form](/assets/images/Screenshot-aboutus-form.jpg)

![suggestion](/assets/images/Screenshot-suggestion-box.jpg)


## Links
Deployed Link:
https://nnikhil84.github.io/wellnesshub.github.io

GitHub Repository Link:
https://github.com/nnikhil84/wellnesshub.github.io/tree/main


## Closing Remarks
Thank you for taking the time to learn about our web application, Wellness Hub. We are committed to providing users with a one-stop-shop application where they are able to input their demographics, identify their BMI and easily search for recipes and exercises based on their needs and objectives to achieve their goals and promote a greater qualtiy of life! 