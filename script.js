const catImage = document.getElementById('catImage');
const getRandomCatBtn = document.getElementById('getRandomCat');

const getRandomCatImage = async () => {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();
        return data[0].url;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

const displayRandomCatImage = async () => {
    const imageUrl = await getRandomCatImage();
    if (imageUrl) {
        catImage.src = imageUrl;
    } else {
        catImage.src = 'placeholder.jpg'; // Display a placeholder image in case of an error
    }
};

getRandomCatBtn.addEventListener('click', displayRandomCatImage);

// Display a random cat image on page load
displayRandomCatImage();
