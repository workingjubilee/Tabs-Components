
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    // this.element;
    this.element = element;
    console.log(this.element);
    // Get the custom data attribute on the Link
    // this.data;
    this.data = this.element.dataset.tab
    console.log(this.data);
    // Using the custom data attribute get the associated Item element
    // this.itemElement;
    this.itemElement = document.querySelector(`.tabs .tabs-item[data-tab="${this.data}"]`);
    console.log(this.itemElement);
    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;
    this.tabItem = new TabLink(this.tabItem);
    // Add a click event listener on this instance, calling the select method on click

    this.element.addEventListener('click',)

    tabClick() 
      this.itemElement.toggleContent();
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs .tabs-links');

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    Array.from(links).forEach(link => {
      link.remove('.tabs .tabs-links .tabs-link-selected');
    });

    // Add a class named "tabs-link-selected" to this link
    this.element = document.querySelector('.tabs .tabs-links .tabs-link-selected');
    
    // Call the select method on the item associated with this link
    this.select(this/element);
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    // this.element;
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    // const items;
    const items = document.querySelectorAll('.tabs-item')
    // Remove the class "tabs-item-selected" from each element
    items.remove('.tabs-item-selected');
    // Add a class named "tabs-item-selected" to this element
    //this.element;
    this.element = document.querySelector('tabs-item-selected')
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

links = document.querySelectorAll('.tabs .tabs-link');
console.log(links);

links.forEach(link =>  new TabLink(link));

