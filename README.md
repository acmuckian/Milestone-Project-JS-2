# Meet the Villagers


![image of the website on the am i responsive website](assets/images/meetthevillagers.png)

[Visit the live website here](https://acmuckian.github.io/Milestone-Project-JS-2/)

Meet the Villagers is a user-friendly website for searching villagers from the Nintendo game Animal Crossing New Horizons. It allows users to search for villagers by their name, species, gender or other parameters and see lots of interesting details about all kinds of villagers. Users can see all villagers at once, or select a random villager to discover more about.

# Features

## Existing Features

### Search Bar

![image of the search bar](assets/images/searchbar.png)

The search bar is implemented for a user-friendly experience of searching for a villager by their name, or species. The placeholder text helpfully tells the user that they can search for a villager by their name, or species. Villagers appear as the user starts to type.

### Show/Hide all Villagers

![image of all the villagers, paginated](assets/images/showallvillagers.png)

This button allows user to toggle on and off looking through all the villagers from the game Animal Crossing: New Horizons. Villagers are presented alphabetically, with 10 at a time on the page so users can look through the list by clicking on the next page.

## About the Website

![image of the modal describing the website](assets/images/abouthesite.png)

A helpful description of the website and its features that users can access in the top-left corner if they are not sure what Animal Crossing is or what the website is about.

### Random Villager

![image of a villager randomly generated](assets/images/randomvillager.png)

This button allows users to randomly generate a villager from the entire list of villagers. It is a fun feature to allow users to engage with a villager they might not have considered before.

### Birthday Checker

![screenshot of the birthdaychecker html](assets/images/birthdaycheckerpage.png)

This allows a user to put in their birthday, or any date, and see if a villager has the same birthday as them.

## Future Features

A future feature would be to have an ability for users to add villagers to their favourites list as part of their local storage, so users can come back and see what villagers they have added and also have the ability to remove villagers if they wish.

## Target Audience

The target audience of Meet the Villagers is primarily fans of the Animal Crossing series, from avid fans to more casual players of the game who would like to see information about their favourite, or just any, villager.

## User Requirements and Expectations

As a first-time visitor:

- I want to be able to understand what the website is about.
- If I do not know what Animal Crossing is, I want to be able to know what the game is.

As a fan of the _Animal Crossing_ series:

- I want to be able to search for a villager by their name, or species.
- I want to be able to access and use the website as intended on any device.
- I want to be able to see a randomly generated villager.
- I want to be able to put in my birthday and see if any villager's matches my birthday.
- I want to be told if no villager happens to match my birthday.

# Design

## Favicon

This favicon is the [Windows 11](https://emojipedia.org/sunflower#designs) emoji for a sunflower, tying in with the fun, natural theme that is reminiscient of Animal Crossing.

## Colour Scheme

![colour scheme for this website](assets/images/Meet%20the%20Villagers.png)

The colour scheme was based on colours that predominantly feature in the game, Animal Crossing, from the colours in the logo to the grass texture.

[WebAIM](https://webaim.org/resources/contrastchecker/) was used for accessibility purposes to look at the contrast of the colours against each other.

## Typography

The header font used for this website is the same as is used for the Animal Crossing logo, Fink Heavy, in order to instantly signal to the user that this is a website related to the popular series, Animal Crossing.

The main body font used is Arvo, due to its similarities to the font, Rodin Bokutoh Pro which is a font developed by FontWorks and is used in the game Animal Crossing: New Horizons.

## Wireframes

- **Front Page**:

_Desktop_
![wireframe of the frontpage on a desktop](assets/images/frontpagedesktop.png)

_Tablet_
![wireframe of the frontpage on a tablet](assets/images/frontpagetablet.png)
![wireframe of the frontpage on mobile](assets/images/frontpagemobile.png)

- **Birthday Checker**:

_Desktop_

![wireframe of the birthdaychecker default on desktop](assets/images/birthdaycheckerdesktop.png)
![wireframe when you search for a villager with a birthday](assets/images/birthdaycheckerbdaydesktop.png)

_Tablet_

![wireframe of the birthdaychecker default on tablet](assets/images/birthdaycheckertablet.png)
![wireframe when you search for a villager with a birthday](assets/images/birthdaycheckersuccess.png)

_Mobile_
![wireframe of the birthdaychecker default on mobile](assets/images/mobilebirthdaydefault.png)
![wirefame when you search for a villager with a birthday on mobile](assets/images/birthdaycheckersuccessmobile.png)

# Technologies Used

**Languages Used**

HTML, CSS, Javascript

**Frameworks, Libraries and Programs Used**

- Git - for version control.
- Github - to save and store files for the website.
- Coolors - to show the colour palette for the website.
- Google Fonts - to import the fonts on the website.
- Online Web Fonts - to import the fonts on the website.
- Google Dev Tools - for troubleshooting the features and the code of the website.
- Firefox Dev Tools - for troubleshooting the features and the code of the website.
- Bootstrap - CSS framework used for some of the CSS and Javascript features of the website.
- Balsamiq - for creating the wireframes in the design stage

* Github Copilot was used for advice and problem-solving.

# Testing

## Code Validation

- [Javascript validator](https://jshint.com/) - passes without warning
- [HTML validator](https://validator.w3.org/) - passed with one warning on both pages
- [CSS validator](https://jigsaw.w3.org/css-validator/) - no errors found


## Performance Testing

[Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) had been used to test the performance of the website based on the four factors.

Critical CSS was added in-line in the html to improve performance. 

### Home Page

_Desktop_

![screenshot of google lighthouse results](assets/images/lighthousemeetthevillagers.png)

_Mobile_
![screenshot of google lighthouse results for the mobile version](assets/images/meetthevillagerslighthousemobile.png)

### BirthdayChecker Page

_Desktop_

![screenshot of google lighthouse results](assets/images/birthdaycheckerlighthouse.png)

_Mobile_
![screenshot of google lighthouse results for the mobile version](assets/images/meetthevillagersmobilelighthouse.png)

## Manual Testing

BDD was used as opposed to TDD in this instance on an approximation of the Given-When-Then situation due to the scale and size of the website.

| **Home   Page**                   |                        |                                                            |
|-----------------------------------|------------------------|------------------------------------------------------------|
| **Feature**                       | **Action**             | **Effect**                                                 |
| About the website button          | click button           | Modal appears explaining what   the page is about          |
| close button on the modal         | click button           | the modal disappears                                       |
| random villager button            | click button           | a random villager is generated                             |
| show/hide all villagers           | first click            | shows all villagers                                        |
| show/hide all villagers           | second click           | hides all villagers                                        |
| meet the villagers banner         | click button           | brings to home page                                        |
| who   shares your birthday button | click button           | brings to birthdaychecker html                             |
| search   bar                      | enter text             | searches for cards to match text   and shows automatically |
| search   bar                      | enter species eg "cat" | shows all cards that have a   species of cat               |
| forward page arrow                | click button           | brings to next page                                        |
| back page arrow                   | click button           | brings to the previous page                                |
| page input                        | insert number          | brings to that page number                                 |
| last page                         | go to page             | forward arrow disappears                                   |
| first page                        | go to page             | back arrow disappears                                      |
| card                              | hover                  | card scales back slowly                                    |
| meet the villagers banner         | hover                  | banner scales upwards                                      |


| **Birthday Checker Page**                                         |              |                                                                                            |
|----------------------------------------------------------------|--------------|--------------------------------------------------------------------------------------------|
| **Feature**                                                        | **Action**       | **Effect**                                                                                     |
| enter   valid DD/MM (that matches a villager's birthday)       | click "go"   | shows a villager whose birthday   that is and a congrats message with that villager's name |
| enter   valid DD/MM (that doesn't match a villager's birthday) | click "go"   | message says "sorry no   villagers share your birthday…"                                   |
| About the website button                                       | click button | Modal appears explaining what   the page is about                                          |
| close button on the modal                                      | click button | the modal disappears                                                                       |
| enter   invalid DD/MM eg NaN                                   | click "go"   | message says "That date is   invalid…"                                                     |
| enter   invalid DD/MM eg 31/09                                 | click "go"   | message says "That date is   invalid…"                                                     |
### Browser Compatibility

Tests were performed by myself on Microsoft Edge, Firefox and Chrome where both pages performed as expected.

Additionally, [Browserling](https://www.browserling.com/) was used to test Vivaldi 6.8, Opera 112, Brave 1.68 on Windows 10 were all performed as expected.

## User Stories Testing

| User   Stories                                                                                                                                    | Feature                                                                                             |
|---------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| As a   first time visitor, I want to be able to understand what the website is   about.                                                           | ![screenshot of modal about   page](assets/images/abouthesite.png)                                 |
| As a   first time visitor,  if I do not know   what Animal Crossing is, I want to be able to know what the game is.                               |        ![image of the modal describing the website](assets/images/abouthesite.png)                  |
| As a   fan of the series/regular user of the site, I want to be able to search for a   villager by their name, or species.                        | ![screenshot of search by   cat](assets/images/searchbycatspecies.png)                              |
| As a   fan of the series/regular user of the site, I want to see a whole list of   species and move through the list by page.                     | ![image of all the villagers,   paginated](assets/images/showallvillagers.png)                      |
|        As a fan of the series/regular user of the site, I want to be able to access   and use the website as intended on any device.              | ![screenshot of am i responsive   dev](assets/images/meetthevillagers.png)                          |
| As a   fan of the series/regular user of the site, I want to be able to see a   randomly generated villager with the show random villager button. | ![screenshot of a random   villager](assets/images/randomvillager.png)                              |
| As a fan of the series/regular user of the site, I want to see which villager does   match my birthday and their details.                       | ![screenshot of a villager   matching someone's birthday](assets/images/birthdaysuccessmessage.png) |
| As a   fan of the series/regular user of the site, I want to be told if no villager   happens to match my birthday.                               | ![screenshot of message when no   villager has birthday](assets/images/novillagerhasbday.png)        |

# Debugging

As this was my first time using Javascript there were a few bugs that had to be fixed, including using incorrect names on ids when using the .getElementById() function and using incorrect function names.

Specific bugs included:

| **Bug**                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | **Fix**                                                                                                                                                                                             |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|        Not having the villager cards load initially due to the fact that   printVillagerPage() which allows the individual pagination to be set up, had   where the villagers would appear on the html page (#VillagerPages)'s display   set to none. | Initially there was an error on this due to using ===   instead of =, so the problem was not apparent until this was fixed. Then this   line of javascript code was removed so the two could load together.                                                                                     |
| The  background-image when the dimensions were 320px x 480px would not fully cover despite background-size set to cover.                                                                                                                                    |  this was resolved by a helpful stackoverflow   comment noting that background-attachment set to fixed can cause this and to   change to background-attachment to scroll instead at this dimension |
| The   full display of villagers was not showing up when the front page loaded as   expected.                                                                                                                                    |     this error was in displayAllVillagers() as the condition was   only where the display was set to none instead of where there was also no   display set at all, so this was amended to provide for this situation as   well.                                                                                                                                                                                                        |
| The   showRandomVillager() page required two clicks before a villager was randomly   generated. This was fixed by changing the style.display of the elements as   initially the output would be hidden and then on the second click, it would   show.                                                                      | I used the breakpoints on dev   tools to help figure out that this was causing the requirement for a second   click of the button.                                                                 |
| Clicking   the Meet All Villagers banner wouldn't show all the villagers on the home   page.                                                                                                                                                                                                                                                                                                                                                                                | showAllVillagers() function was   added so that when the DOM loaded the function was called.                                                                                                       |
| When the list of villagers is shown, clicking the random villager button has no effect.| This was because of in the showRandomVillager(), the function only worked when the villagerPage was set to grid so when it was none (which happened when the villagers were hidden), the function couldn't be called. This was fixed by removing this if statement. |

# Acknowledgments and Credits

-[This YouTube video](https://www.youtube.com/watch?v=wxz5vJ1BWrc) was very helpful on creating a search bar.
- Copilot assisted with some of the debugging and code. 
- [Stackoverflow thread on using hover and active for mobiles](https://stackoverflow.com/questions/22559756/changing-hover-to-touch-click-for-mobile-devices).
- [Stackoverflow thread on customising increment arrows helped greatly in customising my page numbers](https://stackoverflow.com/questions/45396280/customizing-increment-arrows-on-input-of-type-number-using-css).
- A huge thank you to Joseph Mearman, who was very helpful during this project.
- _Javascript in Easy Steps (6th Edition)_ by Mike McGrath - provided a great resource for the randomiser function.

_Image Credits_

- [Yaopey Yong on Unsplash](https://unsplash.com/photos/a-building-with-a-pond-in-front-of-it-t8woJfDB1Ec)
- _Animal Crossing: New Horizons_ assets from Nintendo.
- [Art Institute of Chicago on Unsplash](https://unsplash.com/photos/a-yellow-and-white-wallpaper-with-small-flowers-and-leaves-3KnjeYTo9Gk)

# Deployment

This site is deployed using GitHub Pages. Please see the deployed site here. To deploy using GitHub pages:

1. Login to GitHub.
2. Open the relevant project repository.
3. Click on "Settings" in the navigation bar under the repository title.
4. Click on "Pages" at the left-hand sidebar.
5. Under "Source", choose which branch to deploy. Main is used for this repository.
6. Choose which folder to deploy from, usually "/root".
7. Click "Save" and wait for the deployment.
8. The URL should be displayed above "source" and on the "Code" page, on the right-hand sidebar under the "Deployments" subheading.

_Local Deployment_

The repository was also cloned for local deployment. To clone the repository:

1. Login to Github.
2. Go to the repository for this project:
3. Click on the green "Code" button on the repository main page and copy the link shown.
4. Open the terminal in the code editor
5. Clone the repository.
