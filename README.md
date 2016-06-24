== README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# Organizing your styles using tachyon

Because there are many classes applied to elements when using tachyon, it can be helpful to have a convention in place for dealing with what order to add classes to an element.

I've come up with the following list:

* semantic 
* display 
* positioning
* floats
* dimensions 
* margins
* border 
* padding 
* text alignment 
* text color/size
* behavior

Semantic classes are classes that describe what a thing actually is (button, link, navbar, etc.)

Display classes are the ones that control the display property of the element:
db  - display block
dn  - display none 
dib - display inline block
dt  - display table
dtc - display table cell

Positioning classes controller the position property of the element: 
static      - position static 
relative    - position relative 
absolute    - position absolute
fixed       - position fixed

Dimension classes set the height and width of the element:






