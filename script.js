const bands = [
    'The Plot in You', 
    'The Devil Wears Prada', 
    'Pierce the Veil', 
    'Norma Jean', 
    'The Bled', 
    'Say Anything', 
    'The Midway State', 
    'We Came as Romans', 
    'Counterparts', 
    'Oh, Sleeper', 
    'A Skylit Drive', 
    'Anywhere But Here', 
    'An Old Dog'
];

// Function to strip articles (A, An, The) from the band names
function strip(bandName) {
    return bandName.replace(/^(a |an |the )/i, '').trim();
}

// Sort bands by name, ignoring articles
const sortedBands = bands.sort((a, b) => strip(a).localeCompare(strip(b)));

// Display the sorted band names in the unordered list
const bandList = document.getElementById('band');
sortedBands.forEach(band => {
    const li = document.createElement('li');
    li.textContent = band;
    bandList.appendChild(li);
});