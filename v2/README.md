<details>
  <summary>V1</summary>

# V1

This project is a prototype for my final web-design assignment. The goal was to play with hierarchy and contrast in order to create a usable website. I decided to make a redesign of the moodle student environment.

## Demo

[View prototype](https://hackshackshacks.github.io/web-design/v1/prod/)

![Demo](https://github.com/hackshackshacks/web-design/blob/master/readme_images/demo.png?raw=true)

## Design

Before I started I created a content inventorisation of the website. After that I created user scenarios beased on the two users I am designing this website for.

### Marijn

Marijn has a physical condition that makes it hard for him to precisely control his muscles. Despite this condition he’s the chief technical architect at a large tech company. When he uses the computer he likes to think first and type later. He also prefers not to use his mouse or trackpad whenever possible.

#### Test

![Marijn](https://github.com/hackshackshacks/web-design/blob/master/readme_images/marijn.png?raw=true)

### Vienna

Vienna is a CMD student that is attending the Web Development Minor. She wants interfaces to be usable but look pretty at the same time. When she uses the website she wants the most important information to be easy to reach, not in 8 clicks like the current website.

### Scenarios

#### Scenario 1

##### Goal

The user wants to know how well he is doing in the minor Web Development. He is wondering he’s completely finished with past courses, or if he still has some work to do.

##### Method

The user navigates to the student website and immediately sees how he’s doing. A progressbar indicates what courses he has finished and which ones still require some attention.

![Progress](https://github.com/hackshackshacks/web-design/blob/master/readme_images/progress.png?raw=true)

#### Scenario 2

##### Goal

The user doesn’t know what is expected of him. He wants to figure out what he has to do and when he has to finish it.

##### Method

The user navigates to the student website and opens the course page. This page contains information about the course and the expectations.

![Detail](https://github.com/hackshackshacks/web-design/blob/master/readme_images/team.png?raw=true)

#### Scenario 3

##### Goal

The user is looking for extra resources to learn more about a certain subject. He recalls an article that his teacher mentioned in his last lecture.

##### Method (unresolved)

The user opens the student website and navigates to the sources page and filters the result to match the subject.

#### Scenario 4

##### Goal

The user wants to contact one of his teachers. He’s looking for an email address.

##### Method

He navigates to the ‘Team’ section where he is greeted by the faces of his teachers and corresponding contact information.

![Team](https://github.com/hackshackshacks/web-design/blob/master/readme_images/team.png?raw=true)

#### Scenario 5

##### Goal

The user is looking for inspiration for his current project. He’s wondering what students made last year.

##### Method (unresolved)

On the course page he navigates to the ‘Inspiration’ section.

### Design principles

#### Hierarchy

I tried to bloat the elements and maintain hierarchy at the same time.
![Hierarchy](https://github.com/hackshackshacks/web-design/blob/master/readme_images/hierarchy.png?raw=true)

#### Contrast

With colors I tried to create huge contrast that makes differentiating elements super easy. Focus and hover states are hard to miss and it's super clear where you are on the page, even if you don't use a mouse.

![Contrast](https://github.com/hackshackshacks/web-design/blob/master/readme_images/contrast.png?raw=true)

#### Conserve attention

Obvious focus states were super important to me throughout this project. To me it got to the point where it looks pretty bizar, but you can't say it isn't obvious where you are on the page.

![Focus](https://github.com/hackshackshacks/web-design/blob/master/readme_images/focus.png?raw=true)

</details>
<details>
  <summary>V2</summary>

# V2

After getting feedback on V1 I decided to redesign the whole thing. V1 wasn't much more usable than the current [moodle](https://moodle.cmd.hva.nl) website. The structure was very similar to such an extent that I decided that I need to make something new.

## Demo

[View prototype](https://hackshackshacks.github.io/web-design/v2/show)

![home](https://github.com/hackshackshacks/web-design/blob/master/v2/readme_images/home.png?raw=true)

## Lessons

After building V1 I learned the following lessons:

* Marijn doesn't actually use the tab keys as much as he uses the mouse.
* The moodle structure is flawed and requires to be divided in smaller parts.
* I need to think about what's important more. What are the focal points on my website?
* I need to focus more on the users I am designing for and what they need from a design perspective, not just usability.
* The website lacks a strong flow.

## New User - Suus

For some new insights I contacted my classmate Suus. She provided me with her goals when browsing the website and told me about what's important for her in a good design. She also provided feedback on the design once I started

I created new user scenarios to match her values.

## Old User Scenarios

### Scenario 1

#### Goal

The user wants to know how well he is doing in the minor Web Development. He is wondering he’s completely finished with past courses, or if he still has some work to do.

#### Method

The user can see what the status of each course is. The three state 'done' 'doing' and 'coming' describe what the users status is.

![scenario1](https://github.com/hackshackshacks/web-design/blob/master/v2/readme_images/scen1.png?raw=true)

### Scenario 2

#### Goal

The user doesn’t know what is expected of him. He wants to figure out what he has to do and when he has to finish it.

#### Method

The user navigates to the student website and opens the course page. This page contains information about the course and the expectations.

![scenario2](https://github.com/hackshackshacks/web-design/blob/master/v2/readme_images/scen2.png?raw=true)

### Scenario 3

#### Goal

The user is looking for extra resources to learn more about a certain subject. He recalls an article that his teacher mentioned in his last lecture.

#### Method

The course page provides space for the teachers to link to external articles for each subject. Possibly for each week.

![scenario3](https://github.com/hackshackshacks/web-design/blob/master/v2/readme_images/scen3.png?raw=true)

### Scenario 4

#### Goal

The user wants to contact one of his teachers. He’s looking for an email address.

#### Method (unresolved)

When hovering a teachers name under a course, a tooltip appears with contact information.

### Scenario 5

#### Goal

The user is looking for inspiration for his current project. He’s wondering what students made last year.

#### Method (unresolved)

On the course page he navigates to the ‘Inspiration’ section.

## New User Scenarios

### Scenario 6

#### Goal

The user wants to subscribe to a timeslot when those are available.

#### Method

Using a pop up modal the user can subscribe to timeslots

![scenario6](https://github.com/hackshackshacks/web-design/blob/master/v2/readme_images/scen6.png?raw=true)

### Scenario 7

#### Goal

The user wants to make a todolist on site. This way everything is in the same place.

#### Method

Using the planning page the user can create a custom todolist.

![scenario7](https://github.com/hackshackshacks/web-design/blob/master/v2/readme_images/scen7.png?raw=true)

## Card sorting

I used cardsorting to think about the elements I needed to work into my design.

![cardsort](https://github.com/hackshackshacks/web-design/blob/master/v2/readme_images/cardsort.jpg?raw=true)

## Principles

### Hierarchy

I created a strong visual hierarchy using colors and font sizes.
![hierarchy](https://github.com/hackshackshacks/web-design/blob/master/v2/readme_images/hierarchy.png?raw=true)

### Contrast

I used contrasting colors to make everything easy to read. I also use these contrast to highlight what is important on the page.
![contrast](https://github.com/hackshackshacks/web-design/blob/master/v2/readme_images/contrast.png?raw=true)

### Smart organization reduces cognitive load

I divided subjects in weeks to reduce the amount of information the user has to process.
![organization](https://github.com/hackshackshacks/web-design/blob/master/v2/readme_images/organization.png?raw=true)

### Appearance follows behaviour || Consistency matters

When designing interactive elements such as links and buttons I tried to be consistent in their appearance. This way it is more intuitive what interaction follows a click on a link or button.

## The design

### Homepage

The homepage shows a menu with all the courses and their statuses. In the detail view you can browse through the course per week.
![home](https://github.com/hackshackshacks/web-design/blob/master/v2/readme_images/home.png?raw=true)

### Weeks

For each week the user can see what is expected of him/her. The week is divided in days with expandable assigments.
![week1](https://github.com/hackshackshacks/web-design/blob/master/v2/readme_images/week1.png?raw=true)

### Timeslots

The user can subscribe to timeslots for each teacher. The user can see which other students are in the same slot. Slots become disabled when they are full. See scenarios for an image of the presubscribe state. After subscribing it looks like this.

![subscribed](https://github.com/hackshackshacks/web-design/blob/master/v2/readme_images/subscribed.png?raw=true)

### Weekly nerd

The weekly nerd is similar to the home page but contains weekly nerd presentations instead of courses.

![nerd](https://github.com/hackshackshacks/web-design/blob/master/v2/readme_images/nerd.png?raw=true)

### Planning

The planning page holds all the appointments by the user and an editable todolist. The todolist can be filled with a 'todo' button on the course pages.
![planning](https://github.com/hackshackshacks/web-design/blob/master/v2/readme_images/planning.png?raw=true)
![addTodo](https://github.com/hackshackshacks/web-design/blob/master/v2/readme_images/addTodo.png?raw=true)

</details>
