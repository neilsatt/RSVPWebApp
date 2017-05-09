// Select the form first, then the child
const form = document.getElementById('registrar'); 
const input = form.querySelector('input'); 
// Get reference to ul and add li items to it
const ul = document.getElementById('invitedList'); // get ul

// e holds event object
form.addEventListener('submit', (e) => {
    e.preventDefault(); // cancels browser's default submit behavior
    const text = input.value;
    input.value = ''; // clears form after submitting
    

    const li = document.createElement('li'); // create list item   
    li.textContent = text;
    
    // Label and Checkbox
    const label = document.createElement('label');
    label.textContent = 'Confirmed';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    li.appendChild(label);
    ul.appendChild(li); // append li item   
    
    
   
    
});

 // Add event listener to li items using event bubbling 
 // Event on one element, bubbles up to parent or other ancestors
 // AKA delegated handler

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