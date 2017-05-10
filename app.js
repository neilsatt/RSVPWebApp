// Select the form first, then the child
const form = document.getElementById('registrar'); 
const input = form.querySelector('input'); 
// Get reference to ul and add li items to it
const ul = document.getElementById('invitedList'); // get ul

function createLI(text) {
    const li = document.createElement('li'); // create list item   
    li.textContent = text;
    // Label and Checkbox
    const label = document.createElement('label');
    label.textContent = 'Confirmed';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    li.appendChild(label);
    // Add a remove button to each li, that will delete the name 
    const button = document.createElement('button');
    button.textContent = 'remove';
    li.appendChild(button);
    return li; // need to return the li item 
}


// e holds event object
form.addEventListener('submit', (e) => {
    e.preventDefault(); // cancels browser's default submit behavior
    const text = input.value;
    input.value = ''; // clears form after submitting    
    const li = createLI(text);
    ul.appendChild(li); // append li item   
});

 // Add event listener to li items using event bubbling 
 // Event on one element, bubbles up to parent or other ancestors
 // (Delegated handler)

ul.addEventListener('change', (e) => {
    const checkbox = event.target;
    const checked = checkbox.checked;
    const listItem = checkbox.parentNode.parentNode; // li is grandparent of checkbox, label is child of li item
    if (checked) {
      listItem.className = 'responded';        
    } else {
         listItem.className = ''; 
    }
});

// Delegated Handler again - use parent to remove element - bubble up
ul.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON') {
        const li = e.target.parentNode;
        const ul = li.parentNode;
        ul.removeChild(li);
    }
});

