
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;

    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;

    // document.querySelector(`.content[data-tab='${link.dataset.tab}']`);
    //     this.tabContent =

    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);


    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);

    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => this.select())

  };

  select() {
    // Get all of the elements with the tabs-link class
    // console.log(this.element.dataset.tab) // returns the #, neat!
    tablinks.forEach(tablink => tablink.classList.remove('tabs-link-selected'));

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach();

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('tabs-link-selected');

    // Call the select method on the item associated with this link
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const tabbits = document.querySelectorAll('.tabs-item')

    // Remove the class "tabs-item-selected" from each element
    tabbits.forEach(tabbit => tabbit.classList.remove('tabs-item-selected'));

    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add('tabs-item-selected');
  }
}

/* START HERE:

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

const tablinks = document.querySelectorAll('.tabs-link')
tablinks.forEach(tablink => new TabLink(tablink));


//
//
// // Step 3: Create TabLink class definition and pass in the link reference to the DOM element
// class TabLink {
//   // constructor
//   constructor(link) {
//     // Step 4: Match the data-set values between our link and the content
//     // data attribute from link
//     this.tabContent = document.querySelector(`.content[data-tab='${link.dataset.tab}']`);
//
//     // Step 5: Create a new content object from our matched data-set content tab
//     this.tabContent = new Content(this.tabContent);
//     // arrow function using implicit (automatic) value of where itw as called.  We call this "lexical scope."
//
//     // Step 8: Add event Listener for our link and pass in the implicit binding of the 'this' keyword using an arrow function
//     link.addEventListener('click', () => this.linkClick() );
//   }
//   // methods
//   // Step 10: Have the tabContent toggle off and on based on our Content class's method
//   linkClick() {
//     this.tabContent.toggleContent();
//   }
// }
//
// // Step 6: Create Content class definition and pass in the tabContent reference to the DOM element
// class Content {
//   constructor(tabElement) {
//     //console.log(tabElement);
//     // Step 7: Properly set up the 'this' keyword for the Content class using our tabElement
//     this.tabElement = tabElement;
//   }
//   // methods
//   // Step 9: Create a method that can be called to toggle our tabElement off and on
//   toggleContent() {
//     this.tabElement.classList.toggle('change');
//   }
// }
// // Step 1: Get all the elements from the DOM into a NodeList
// const links = document.querySelectorAll('.link');
// // Step 2: Iterate over each element from our NodeList and create a new class called TabLink.
// links.forEach( link => new TabLink(link));
// // let links = document.getElementsByClassName('link');
// // links = Array.from(links).forEach( link => console.log(link));
//
//
// // Psuedo Example for data-*
// // DOM elements -> NodeList -> TabLink Class -> Finds the custom data-tab -> Uses the custom data-tab to identify the correct tabContent
