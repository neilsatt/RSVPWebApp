// Select the form first, then the child
const form = document.getElementById('registrar'); 
const input = form.querySelector('input'); 

const mainDiv = document.querySelector('.main');
// Get reference to ul and add li items to it
const ul = document.getElementById('invitedList'); // get ul

// Filter out guests section
const div = document.createElement('div');
const filterLabel = document.createElement('label');
const filterCheckBox = document.createElement('input');



// hide people who haven't responded
filterLabel.textContent = "Hide those who haven't responded";
filterCheckBox.type = 'checkbox';
div.appendChild(filterLabel);
div.appendChild(filterCheckBox);
mainDiv.insertBefore(div, ul);



function createLI(text) {
    const li = document.createElement('li'); // create list item   
    // create an editable span
    const span = document.createElement('span');
    span.textContent = text;
    li.appendChild(span);
    
    // Label and Checkbox
    const label = document.createElement('label');
    label.textContent = 'Confirmed';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    li.appendChild(label);
    
    // Add an edit button to each li
    const editButton = document.createElement('button');
    editButton.textContent = 'edit';
    li.appendChild(editButton);
    
    // Add a remove button to each li, that will delete the name 
    const removeButton = document.createElement('button');
    removeButton.textContent = 'remove';
    li.appendChild(removeButton);
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
        const button = e.target;
        const li = e.target.parentNode;
        const ul = li.parentNode;
        if (button.textContent === 'remove') {          
              ul.removeChild(li);
            }  else if (button.textContent === 'edit') {
                // create a new edit field and remove the span
                const span = li.firstElementChild;
                const input = document.createElement('input');
                input.type = 'text';
                input.value = span.textContent;
                li.insertBefore(input, span);
                li.removeChild(span);
                // change edit button to a save button
                button.textContent = 'save';
            } 
            // now reverse the process if it's a save button
           else if (button.textContent === 'save') {
                // create a new span
                const input = li.firstElementChild;
                const span = document.createElement('span');
                span.textContent = input.value;
                li.insertBefore(span, input);
                li.removeChild(input);
                // change save button to a edit button
                button.textContent = 'edit';
            }
         
    }
});







