# Movie Maestero Quiz

![Website view on various screen sizes](https://github.com/donovanainsley/movie-maestro/blob/main/assets/testing/am-i-responsive.png)

[Access the live site here.](https://donovanainsley.github.io/movie-maestro/)

Movie Maestro is a quiz game for movie enthusiasts where each question is infused with a touch of nostalgia. There are 10 questions to answer, all about movies. Play and then challenge yourself to beat your top score by playing again.

## User Experience (UX)

- ### User Stories

  - **First Time User Goals**

    1. As a first time user, I want to know what the quiz is about and how to play.
    1. As a first time user, I want the quiz to be fun and engaging.
    1. As a first time user, I want to navigate through the quiz quickly and easily.

  - **Returning User Goals**

    1. As a returning user, I want to view my previous scores so that I may improve them.
    1. As a returning user, I'd like there to be a large pool of questions available to keep the game challenging and replayable.

  - **Frequent User Goals**

    - Frequent user goals would be the same as a returning user, due to the basic nature of the quiz.

- ### Design

  - #### Colour Scheme

  The main colours used are white, caramel, school bus yellow, penn red and space cadet. I chose these colours after finding the background image for the website [here](https://www.freepik.com/free-photo/videotape-with-clapperboard-3d-glasses_4305082.htm?query=video%20tape%20with%20popcorns#from_view=detail_alsolike) and it triggered a thought to the Quinten Tarantino movies Kill Bill and Pulp fiction, which is when I decided to google and then use the Pulp Fiction colour palette throughout the webste.

  ![Color Palette](https://github.com/donovanainsley/movie-maestro/blob/main/assets/testing/movie-maestro-color-palette.png)

  - #### Typography

    - The Merriweather font is the main font used throughout the website excluding the heading which is Rubik Mono One, which I stumbled across when using google fonts and thought it was brilliant for a header. I chose Merriweather after Googling the best Google fonts for websites and come across an article by Newbird which can be found [here](https://newbird.com/best-google-fonts-to-use-on-your-website/) where it was selected 1st of the 8 best Google fonts. As Merriweather is a Serif style font, I chose Sans-Serif as a backup font as it is considered the most web-safe font for readability.

  - #### Imagery

    - The background image was found on Freepik [here](https://www.freepik.com/free-photo/videotape-with-clapperboard-3d-glasses_4305082.htm?query=video%20tape%20with%20popcorns#from_view=detail_alsolike).

    - The favicon was found from a google search for "clapperboard favicon" and can be found [here](https://www.flaticon.com/free-icon/clapperboard_371869?term=film+clapper&page=1&position=34&origin=tag&related_id=371869).

## Features

- Responsive on all devicess.
- Easy to navigate using buttons throughout the site.
- Answer choices display as green for correct choices and red for incorrect choices when selected, adding to the intuitiveness of the site.
- How to play modal, explaining the quizes purpose.
- A leaderboard that saves users score to the local storage allowing them to track high scores.
- A heads up display to display question count and user score.

## Technologies Used

### Languages Used

- HTML5
- CSS3
- Vanilla Javascript

### Frameworks, Libraries & Programs Used

1. [Bootstrap v5.3.2:](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
   - Bootstrap was used to help to create the framwork and responsiveness of the website, it was also used to create the game-container aswell as styling and spacing.
1. [Visual Studio Code:](https://code.visualstudio.com/)
   - Was used as my code editor to write code, version control using git and pushing changes for storage to GitHub.
1. [Font Awesome:](https://fontawesome.com/)
   - For the icons on the website.
1. [Flaticon:](https://www.flaticon.com/free-icon/clapperboard_371869?term=film+clapper&page=1&position=34&origin=tag&related_id=371869)
   - For clapperboard used as favicon.
1. [Github:](https://github.com/)
   - To save and store the files for the website.
1. [Google Fonts:](https://fonts.google.com/)
   - To import the Merriweather and Rubik font used on the website.
1. [Fossheim:](https://fossheim.io/writing/posts/css-text-gradient/)
   - To create the css text gradient for the website heading.
1. [UI.dev:](https://ui.dev/amiresponsive)
   - To show the site on a range of screen sizes.
1. [freepik:](https://www.freepik.com/)
   - For free to use background image displayed for the website.
1. [Cloud Convert:](https://cloudconvert.com/jpeg-to-webp)
   - To convert images from jpeg to webp.
1. [Red Ketchup:](https://redketchup.io/image-resizer)
   - To rezie images.
1. [Color-hex:](https://www.color-hex.com/color-palette/82815)
   - Where I found the color palette for the webiste from a google search.
1. [Coolers:](https://coolors.co/ffffff-db7d2f-f9d500-a10f0f-31345a)
   - Used to input color palette and export as an image.

## Testing

The W3C Markup Validator, W3C CSS Validator and JSHint services were used to validate the projects pages to ensure there were no syntax errors.

#### [W3C Markup Validator](https://validator.w3.org/#validate_by_input)

- [index.html result](https://github.com/donovanainsley/movie-maestro/blob/main/assets/testing/index-validator-result.png)
- [game.html result](https://github.com/donovanainsley/movie-maestro/blob/main/assets/testing/game-validator-result.png)
- [end.html result](https://github.com/donovanainsley/movie-maestro/blob/main/assets/testing/end-validator-result.png)
- [scores.html result](https://github.com/donovanainsley/movie-maestro/blob/main/assets/testing/highscores-validator-result.png)
- [404.html result](https://github.com/donovanainsley/movie-maestro/blob/main/assets/testing/404-validator-result.png)

#### [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)

- [style.css result](https://github.com/donovanainsley/movie-maestro/blob/main/assets/testing/css-validator-result.png)

#### [JSHint Javascript Quality Tool](https://jshint.com/)

- [game.js result](https://github.com/donovanainsley/movie-maestro/blob/main/assets/testing/game-js-validator-result.png)
- [end.js result](https://github.com/donovanainsley/movie-maestro/blob/main/assets/testing/end-js-validator-result.png)
- [scores.js result](https://github.com/donovanainsley/movie-maestro/blob/main/assets/testing/scores-js-validator-result.png)

### Lighthouse

- The Chrome Developer Tools lighthouse feature was employed to assess performance, adherence to best practices, accessibility, and Search Engine Optimisation (SEO). Both desktop and mobile tests were conducted for each page. [View Mobile Index Test](https://github.com/donovanainsley/movie-maestro/blob/main/assets/testing/lighthouse-mobile-index.png) | [View Mobile Game Test](https://github.com/donovanainsley/movie-maestro/blob/main/assets/testing/lighthouse-mobile-game.png) | [View Mobile End Test](https://github.com/donovanainsley/movie-maestro/blob/main/assets/testing/lighthouse-mobile-end.png) [View Mobile Scores Test](https://github.com/donovanainsley/movie-maestro/blob/main/assets/testing/lighthouse-mobile-scores.png) | [View Desktop Index Test](https://github.com/donovanainsley/movie-maestro/blob/main/assets/testing/lighthouse-desktop-index.png) | [View Desktop Game Test](https://github.com/donovanainsley/movie-maestro/blob/main/assets/testing/lighthouse-desktop-game.png) | [View Desktop End Test](https://github.com/donovanainsley/movie-maestro/blob/main/assets/testing/lighthouse-desktop-end.png) | [View Desktop Scores Test](https://github.com/donovanainsley/movie-maestro/blob/main/assets/testing/lighthouse-desktop-scores.png)

### Testing User Stories from User Experience (UX) Section

### First Time Visitor Goals

1. As a first time user, I want to know what the quiz is about and how to play.

   1. When opened on all device types, users are greeted to the quiz with three prominent buttons, "begin quiz", "how to play" and "maestro". Selecting "how to play" opens a modal which introduces users to the game and literally describes how to play the game. [View Index Here](https://github.com/donovanainsley/movie-maestro/blob/main/assets/testing/am-i-responsive.png). [View Modal Here](https://github.com/donovanainsley/movie-maestro/blob/main/assets/testing/am-i-responsive-modal.png)

### Further Testing

- The Website was tested on Google Chrome, Mozilla Firefox, Microsoft Edge and Safari browsers.
- The website was viewed on a variety of devices such as Desktop, Macbook Pro, iPad, and Samsung Galaxy S20+.
- Friends and Code Institue peers were asked to review the site to point out any bugs and/or user experience issues.

### Known Bugs

- When validating code for index.html, an error was shown regarding the aria-labelledby attribute in the how to play modal incorrectly labelled. I provided the correct label and no further errors were shown. [View here](https://github.com/donovanainsley/movie-maestro/blob/main/assets/testing/index-validator-final-result.png)

- When validating style.css, errors were shown for text-shadow in #game-heading and transform in .choice-container:hover. When correcting the text-shadow error, I realised I didn't like this part of the styling and completely removed it and corrected transform: transform 100ms to transition: transform 100ms. [View here](https://github.com/donovanainsley/movie-maestro/blob/main/assets/testing/css-validator-final-result.png)

- When testing game.js, warnings were given for missing semi-colons and to change selectedChoice.dataset['number'] using dot notation to selectedChoice.dataset.number. To see changes [View here](https://github.com/donovanainsley/movie-maestro/blob/main/assets/testing/game-js-validator-final-result.png).

- When testing end.js, warnings were showing for missing semi-colons and the variable "MAX_HIGH_SCORES = 5" was unused. I input the missing semi-colons and initially commented out the unused variable to ensure it wouldn't create any issues with the remaining code. Once I ran through the the quiz I concluded that the removal of "MAX_HIGH_SCORES = 5" didn't create any issues and permanently removed the variable from end.js. [View here](https://github.com/donovanainsley/movie-maestro/blob/main/assets/testing/end-js-validator-final-result.png).

- When testing scores.js, warnings for missing semi-colons were shown. Once the semi-colons were input the warnings were removed. [View here](https://github.com/donovanainsley/movie-maestro/blob/main/assets/testing/scores-js-validator-final-result.png).

## Deployment

### Github Pages

The project was deployed to GitHub Pages using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/donovanainsley/movie-maestro)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
3. On the left-hand side, you will see a sub-heading called "code and automation" with link called "Pages" click this link.
4. Below the title "Build and Deployment" you will see "Source" click the dropdown called "None" and selct "Main".
5. Next click the dropdown called "docs" and select "root" then save.
6. The page will automatically refresh.
7. At the top of the repositry there will be a box with a [Visit Site](https://donovanainsley.github.io/movie-maestro/index.html) button, to view the published website.

### Fork Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/donovanainsley/movie-maestro)
2. At the top of the Repository (not top of page) just below the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Clone Repository

To clone the habits-and-fitness repository:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/donovanainsley/movie-maestro).
2. Click the green "Code" button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
3. Open in the terminal in your code editor.
4. Change the current working directory to the location where you want the cloned directory to be made.
5. Type git clone, and then paste the URL you copied in Step 2.
6. Press enter. Your local clone has now been created.

## Credits

### Code

1. [Bootstrap v5.3.2](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
   - Bootstrap was used to help to create the framwork and responsiveness of the website, it was also used to create the game-container aswell as styling and spacing.
1. [Fossheim](https://fossheim.io/writing/posts/css-text-gradient/)
   - To create the css text gradient for the website heading.
1. [Brian Design](https://www.youtube.com/watch?v=f4fB9Xg2JEY)
   - Followed Brian Design's tutorial for making a quiz using HTML, CSS and Javascript used within the project.

### Content

Content for the website was written by the developer, [donovanainsley](https://github.com/donovanainsley) or adapted from the following sites [trivianerd](https://www.trivianerd.com/topic/film-trivia) and [parade](https://parade.com/977752/samuelmurrian/movie-trivia/).

### Media

- Clapperboard favicon was sourced from [Flaticon](https://www.flaticon.com/).
- Background image was sourced from [Freepik](https://www.freepik.com/).

### Acknowledgements

- [Iris Smok](https://github.com/Iris-Smok) - Cohort Facilitator

- Irene Neville - Cohort Facilitator

- Jack Wachira - Mentor: For feedback and insights when building my project.

- June 2023 Cohort: An amazing group of like minded people, who are always there to support one another and I appreciate you all, thank you!
