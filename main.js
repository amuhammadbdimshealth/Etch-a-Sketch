const parentContainer = document.querySelector('.grid-container');

const gridNumber = 16 * 16;

const addChildDivs = () => {
   for (let index = 1; index <= gridNumber; index++) {
    const newDiv = document.createElement('div');
    newDiv.className = 'grid-cell';
    newDiv.textContent = index;    
    
    parentContainer.appendChild(newDiv);
   }
}

addChildDivs();