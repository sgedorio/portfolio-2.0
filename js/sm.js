const ideationButton = document.getElementById('ideation-button');
const ideationTable = document.getElementById('ideation-table');

ideationTable.style.display = 'none';
ideationButton.addEventListener('click', toggle);

function toggle() {
    if (ideationTable.style.display === 'none') {
        ideationTable.style.display = 'block';
        ideationButton.innerHTML = 'Hide Table';
    } else if (ideationTable.style.display === 'block') {
        ideationTable.style.display = 'none';
        ideationButton.innerHTML = 'Click Here to View All 20 Solutions';
    }
}
