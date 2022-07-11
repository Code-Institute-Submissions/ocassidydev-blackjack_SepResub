# NanoNow

[Blackjack](https://ocassidydev.github.io/blackjack/) is a simple web app game that allows the player to gamble virtual chips on blackjack, with a script as the dealer. The site will be targeted towards people who are looking to kill some time and have fun. Blackjack will be useful to anyone who would like to practice the basics of card counting to master this classic casino game. 

![Mockup](assets/readme_images/mockup.png)
&nbsp;
## Features 

### Existing Features
- __Central message box__

    - Featured on each page as a fully responsive element.
    - Fixed in place at the top of the screen while scrolling so that the user can seemlessly navigate the website regardless of where they are on the page.
    - Depending on which page the user is on, the currently active page will be highlighted in the navigation bar.
    - The site logo also serves as a navigation link to get back to the home page.
    - This will be valuable to the user as a means of navigating the site without using the back button and as an indication of where they are in the site.
    \
    &nbsp;
    ![Navigation Bar](assets/readme_images/nav.png)

&nbsp;
- __Card boxes__

    - Under certain screen sizes, the navigation bar on each page disappears and is replaced by a hamburger button
    - This button, coded purely in HTML/CSS, serves as a dropdown menu with all the same navigation links as the naviagtion bar.
    - Hamburger button coded to postion itself under the site logo under certain screen sizes, so that the site logo has space to be read.
    - This will be valuable to users on mobile devices to gain the same functionality as the navigation bar.
    \
    &nbsp;
    ![Hamburger Navigation](assets/readme_images/hamnav.PNG)

&nbsp;
- __Player controls__

  - The top of each page includes an artistically rendered image of a nanomaterial and emphasized text which will stand out and interest the user in learning more about the topic.
  - The text will either serve as a tagline for the landing page or contain the page title.
  - The section also includes an eye-catching animation to bring attention to this image and draw the user into the site.
  - This feature will add value for the user by giving a visually appealing image to interest them in the content, as well as tell the user where they are in the website.
  \
  &nbsp;
![Main Image](assets/readme_images/page-main-image.png)

&nbsp;
- __Chip wallet__ 

  - This class of div elements is designed to contain text and to be colored.
  - They can be uniformly styled from a single class declaration in the css.
  - This will add value to the user as they will experience a uniform yet stylistic presentation of the site's text content.
  \
  &nbsp;
  ![Textbox](assets/readme_images/textbox.png)

&nbsp;
- __Current bet display__

  - This class of image elements is designed to contain images and caption text. 
  - They can also be uniformly styled in the css. 
  - This will add value to the user as they will be presented the site's image content in a uniform and semantically unambigous manner. 
  \
  &nbsp;
  ![Figure](assets/readme_images/figure.png)

&nbsp;
- __Hand value display__ 

  - The footer includes icons which serve as social media links to nanonow's various social media pages.
  - Simple font-awesome icons are used to keep this minimalistic.
  - This will be valuable to the user as a means for them to become connected with nanonow's social pages for nanotechnology news.
  \
  &nbsp;
  ![Footer](assets/readme_images/footer.PNG)

&nbsp;
- __The Footer__

  - The about section introduces the user to the reasons why learning about nanotechnology is useful, along with a simple demonstration to appreciate the size of the nanoscale.
  - Text is displayed in colored and stylistic text boxes, with images displayed in figures beside the textboxes to showcase the different applications of nanotechnology and assist in the scale explanation.
  - This will be valuable to the user as a visually appealing, non-intimidating layman's explanation of the topic to get the user interested in learning more and reading further into the site.
  \
  &nbsp;
  ![About](assets/readme_images/about.png)

&nbsp;
### Features Left to Implement

&nbsp;

***Persistent chip wallet***

One feature that I wanted to implement was a means of the about button in the navigation bar to change to the active color when scrolling down past a certain point of the landing page, so it would look like this: 

![AboutBar](assets/readme_images/aboutbar.PNG)

However as far as I have checked querying how far the user is scrolled down the page is only possible to do with javascript, which is outside of the scope of the module.

&nbsp;

***Slowed card dealing***

I also wanted to add a page containing a widget that could scrub social media for mentions of nanotechnology using some kind of API, and then display them as a scrollable element. However this is much too complicated for the current point I am at in the course.

&nbsp;

***Card dealing animations***

I also wanted to add a page containing a widget that could scrub social media for mentions of nanotechnology using some kind of API, and then display them as a scrollable element. However this is much too complicated for the current point I am at in the course.

&nbsp;

## Testing 
### Central message box
- The following table goes through each button on the navigation bar, with columns detailing what the button should do when clicked, what it does when clicked, and a check to validate whether these buttons can be considered working or not. Each button was checked individually on each page.

|Button on bar      |Expected Behavior                      |What Occurs                            |Working as intended?   |
|:------------------|:--------------------------------------|:--------------------------------------|:---------------------:|
|Home               |Navigates to index.html                |Navigates to index.html                |✔                     |
|Materials          |Navigates to materials.html            |Navigates to materials.html            |✔                     |
|Applications       |Navigates to applications.html         |Navigates to applications.html         |✔                     |
|About              |Navigates to about anchor in index.html|Navigates to about anchor in index.html|✔                     |
|Contact            |Navigates to contact.html              |Navigates to contact.html              |✔                     |

\
&nbsp;

### Bet input form
- The following table goes through each button on the navigation bar, with columns detailing what the button should do when clicked, what it does when clicked, and a check to validate whether these buttons can be considered working or not. Each button was checked individually on each page.

|Button on bar      |Expected Behavior                      |What Occurs                            |Working as intended?   |
|:------------------|:--------------------------------------|:--------------------------------------|:---------------------:|
|Home               |Navigates to index.html                |Navigates to index.html                |✔                     |
|Materials          |Navigates to materials.html            |Navigates to materials.html            |✔                     |
|Applications       |Navigates to applications.html         |Navigates to applications.html         |✔                     |
|About              |Navigates to about anchor in index.html|Navigates to about anchor in index.html|✔                     |
|Contact            |Navigates to contact.html              |Navigates to contact.html              |✔                     |

\
&nbsp;

**Links in Footer**

These were checked across each page of the website.

|Link                                   |Expected Behavior                                      |What Occurs                                        |Working as intended?   |
|:--------------------------------------|:------------------------------------------------------|:--------------------------------------------------|:---------------------:|
|Facebook                               |Opens [Facebook](https://www.facebook.com/) in new tab |Opens [Facebook](https://www.facebook.com/) in new tab |✔                     |
|Instagram                              |Opens [Instagram](https://www.instagram.com/) in new tab|Opens [Instagram](https://www.instagram.com/) in new tab|✔                     |
|Twitter                                |Opens [Twitter](https://www.twitter.com/) in new tab   |Opens [Twitter](https://www.twitter.com/) in new tab   |✔                     |
|LinkedIn                               |Opens [LinkedIn](https://www.linkedin.com/) in new tab |Opens [LinkedIn](https://www.linkedin.com/) in new tab |✔                     |


&nbsp;


### Newsletter signup form 

In the following table, expected results of different permutations of user input on the form were attempted and the results were recorded.

|Permutation                              |Expected Behavior                              |What Occurs                                   |Working as intended?   |
|:----------------------------------------|:----------------------------------------------|:---------------------------------------------|:---------------------:|
|Enter no text in field, hit submit       |"Please fill out this field" browser prompt    |"Please fill out this field" browser prompt   |✔                     |
|Enter non-email text in field, hit submit|"Please enter an email address" browser prompt |"Please enter an email address" browser prompt|✔                     |
|Enter email in field, hit submit         |Directed to form-submit.html                   |Directed to form-submit.html                  |✔                     |

&nbsp;

### Different viewports
Throughout the project, the appearance of the website was checked using firefox dev tools set devices. I also quickly browsed through the finished site on my phone.

&nbsp;
### Bugs 

  - When the hamburger menu is active for small viewports and the page is loaded, the hamburger icon can take a moment to load in and the button is momentarily thinner that it should be. This is likely because the icon is accessed from font-awesome. A solution to avoid this could be to render the hamburger icon with 3 grey spans instead.  
  - Low contrast between background of figures and the hamburger menu on small viewport sizes. Put a border on the bottom of the hamburger button to make distinction clearer.
  - The applications landing page displayed poorly on mobile as the text was too wide.
  - On some small viewports the homepage headline text would not display well.

&nbsp;
### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Focassidydev.github.io%2Fnanonow%2Findex.html), with exception to one warning regarding the use of a label in an anchor tag (which was necessary for it to work as intended)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Focassidydev.github.io%2Fnanonow%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

&nbsp;
### Unfixed Bugs

   - Bug where hamburger icon fails to load in quick enough on page load.
   - Some pages on the site have a lower than desired lighthouse performance score (materials - 88, applications - 78). This is likely due to the quantity of images in the site and a lack of complete optimisation of image formats. This may cause slower loading times.
   
&nbsp;
## Deployment

- This project was deployed through github pages at this [link](https://ocassidydev.github.io/nanonow/contact.html), using the following steps:

  - From the github repository, navigated to settings
  - Clicked on "Pages" 
  - On the drop down menu that read "none", clicked and changed to "main"
  - Clicked save

&nbsp;

- For local deployment, run the following command:

      git clone https://github.com/ocassidydev/nanonow.git

&nbsp;
## Credits 

### Code

- The hamburger menu was created with code from a page on [Code-Boxx](https://code-boxx.com/simple-responsive-pure-css-hamburger-menu/).
- Centering the page titles in the image div was obtained from css code on [hubspot](https://blog.hubspot.com/website/center-div-css)
- A number of individual queries and fixes were sought on [Stack Overflow](https://stackoverflow.com/).
- For refreshing certain concepts and documentations, I used [W3S Schools](https://www.w3schools.com/).

&nbsp;
### Content 

- Inspiration was taken from [nano.gov](https://www.nano.gov/about-nanotechnology/applications-nanotechnology) and [Wikipedia's Applications of Nanotechnology page](https://en.wikipedia.org/wiki/Applications_of_nanotechnology) to populate the site content.
- I used various wikipedia pages on the topic to check my knowledge as I was entering content.
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/).

&nbsp;
### Media

The following lists each image by their name in the /assets/images folder, with a link to the site they were taken from. Where possible, they are listed in order of appearance.

- __Homepage__
  - graphene - [SingularityHub](https://singularityhub.com/2018/08/05/beyond-graphene-the-promise-of-2d-materials/)
  - bodyarmor - [Pinterest](https://www.pinterest.ie/pin/warriors-of-honor--534661786985745203/)
  - solarpanels - [Wiley Online Library](https://onlinelibrary.wiley.com/doi/toc/10.1002/(ISSN)2567-3165.perovskite-materials)
  - nostain - [LinkedIn](https://www.linkedin.com/pulse/our-fluid-repellent-stain-resistant-clothing-uniforms-manavalan/?trk=portfolio_article-card_title)
  - hydrogen - [Fine Art America](https://fineartamerica.com/featured/hydrogen-fuel-cell-concept-car-jim-west.html?product=art-print)
  
  - humanheight - [Engineering Stack Exchange](https://engineering.stackexchange.com/questions/21200/what-is-best-sensor-method-to-measure-human-height)
  - coin - [Etsy](https://www.etsy.com/ie/listing/783952494/coin-1-euro-latvia-2014-latvijas)
  - pinhead - [Fine Art America](https://fineartamerica.com/featured/pin-head-and-point-dennis-kunkel-microscopyscience-photo-library.html)
  - hair - [Micropedia](https://microspedia.blogspot.com/2017/09/microscope-view-of-hair.html)
  - nanoscale - [Dartmouth Undergraduate Journal of Science](https://sites.dartmouth.edu/dujs/2009/02/22/turning-to-nanotechnology-for-pollution-control-applications-of-nanoparticles/)

- __Materials page__
  - buckies - https://www.chemistryworld.com/news/buckyballs-prove-to-be-a-magnetic-proposition-for-copper/8833.article

  - metalnanoparticle - [Anton Paar](https://www.anton-paar.com/se-en/products/applications/size-and-shape-of-gold-nanoparticles-in-toluene-via-saxs/)
  - buckyball - [Buckminister Fuller Institute](https://www.bfi.org/about-fuller/big-ideas/buckminsterfullerene/)
  - liposome - [Skeptical Raptor](https://www.skepticalraptor.com/skepticalraptorblog.php/lipid-nanoparticles-in-covid-19-mrna-vaccines-ican-fails-science/)

  - cntsingle - [The World of Nanoscience](https://worldofnanoscience.weebly.com/nanotube--carbon-fiber-overview.html)
  - nanowire - [Physics World](https://physicsworld.com/a/nanowire-thickness-alters-gaas-band-structure/)
  - dna - [The Healthcare Technology Report](https://thehealthcaretechnologyreport.com/environmental-dna-may-have-applications-for-disease-transmission-among-other-uses/)

  - graphenesheet - [AZO Materials](https://www.azom.com/article.aspx?ArticleID=21100)
  - graphenefootball - [Ossilia](https://www.ossila.com/pages/introduction-2d-materials)
  - boronnitride - [Ossilia](https://www.ossila.com/products/hexagonal-boron-nitride)
  - molybdenumdisulfide - [Ossilia](https://www.ossila.com/en-eu/pages/molybdenum-disulfide-mos2)

- __Applications page__
  - cnt - [Investment Castings](https://www.investment-castings.net/what-are-carbon-nanotubes-and-why-should-you-care/)

  - robot - [Medical Device Network](https://www.medicaldevice-network.com/comment/nanotechnology-medicine-technology/)

  - graphenebattery - [AZO Materials](https://www.azom.com/article.aspx?ArticleID=21103) 
  - flexbattery - [Phandroid](https://phandroid.com/2012/08/06/this-flexible-battery-could-soon-be-powering-our-flexible-android-devices-video/)

  - skindisplay - [Institute of Electrical and Electronics Engineers](https://spectrum.ieee.org/skin-displays-will-give-wearables-their-independence)
  - wearable - [The International Society for Optics and Photonics](https://spie.org/news/wearable-photonics?SSO=1)
  
  - nanotattoo - [Yael Hanein Lab](https://nano.tau.ac.il/hanein/index.php/projects/tattoo-semg)
  - armphone - [Team Trade](https://blog.teamtrade.cz/crumpled-carbon-nanotube-forests-lead-to-wearable-tech/)

- __Contact page__
  - nanopart - [Bioleagues Worldwide's Twitter](https://twitter.com/bioleagues/status/975606779533869056)