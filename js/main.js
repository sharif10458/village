

// 

// Menu Toggle Functionality
const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

// Toggle menu on button click
menuBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdownMenu.classList.toggle('hidden');
});

// Close menu when clicking outside
document.addEventListener('click', function(e) {
    if (!dropdownMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        dropdownMenu.classList.add('hidden');
    }
});

// Close menu when clicking on a menu item
const menuLinks = dropdownMenu.querySelectorAll('a');
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        dropdownMenu.classList.add('hidden');
    });
});

// Prevent menu from closing when clicking inside it
dropdownMenu.addEventListener('click', function(e) {
    e.stopPropagation();
});


// Typing Animation
const content = [
    
     {
        heading: "Brief Description of Bengal",
        text: ` Natural Beauty : Across the fields of rural Bengal spreads a lush green sea of paddy. Along the riverbanks stand bamboo groves, and from afar echoes the melody of birds. This serene harmony is nature’s priceless gift.
Culture and Heritage : The folk culture of Bengal stretches back thousands of years. From Baul and Marfati songs to Jari, from harvest festivals like Nabanna to rural fairs — all weave together a unique cultural legacy.
Agriculture and Lifestyle : Agriculture is the lifeblood of Bengal’s villages. Through the farmers’ tireless efforts, the fields fill with golden paddy, green jute, and blooming mustard — turning the countryside into a slice of paradise.
Rivers and Water Bodies : Countless rivers, canals, and wetlands make Bengal a land of water. These waterways not only shape the landscape but also sustain the livelihood of the rural people.
Seasonal Diversity : The six seasons of Bengal gift the land with ever-changing beauty — the blazing summer, the refreshing monsoon, the blue skies of autumn, the misty winter — each paints the countryside with its own charm. `
    },
    
    {
        heading: ` Bengali calendar months are divided into six seasons, each pair of months reflecting a distinct mood of nature and rural life.
🌞Summer = (Boishakh-Joishtho) `,
        text: ` Boishakh (April–May): The season of heat and storms. Farmers prepare their lands, mangoes ripen, and the first Nor’wester winds bring both fear and relief.
Joishtho (May–June): The hottest month of the year. Date-palm fruits ripen, ponds dry up, and the air smells of dust and summer rain. `
    },
    {
        heading: ` 🌧️ Rainy Season = (Ashar-Srabon)`,
        text: ` Asharh (June–July): The monsoon begins. Torrential rains flood the paddy fields, and frogs croak in chorus.
Shrabon (July–August): Rivers overflow, greenery returns, and the air is filled with the sound of falling rain — life feels reborn. `
    },
    {
        heading: `🌾 Autumn = (Bhadro-Ashwin)`,
        text: `Bhadra (August–September): The rains begin to retreat. White kash flowers bloom by the rivers, and farmers start dreaming of harvest.
Ashwin (September–October): The sky turns deep blue, clouds drift lazily, and the Durga Puja brings joy to every village.`
    },
    {
        heading: "🍃Late Autumn = (Kartik-Ogrohayon) ",
        text: `Kartik (October–November): Dew sparkles on the fields, and the air turns crisp. Farmers harvest golden paddy.
Agrahayan (November–December): The Nabanna festival celebrates the new rice; homes are filled with fragrance and laughter.`
    },
   
    {
        heading: `❄️Winter = (Poush-Magh)`,
        text:`Poush (December–January): Misty mornings, warm fires, and the famous Poush Mela. Fields of mustard bloom in golden yellow.
Magh (January–February): The cold deepens, but fairs, pithas, and rural gatherings keep hearts warm.`
    }
,

 {
        heading: `🌼Spring = (Falgun-Chaitra)`,
        text: `Falgun (February–March): Nature awakens. Trees burst into blossoms, and the festival of Holi paints the villages in color.
Chaitra (March–April): The last month of the year. Gentle breezes blow, and the land prepares once more for summer’s arrival.`
    }
    
];

// Add CSS for line breaks
const style = document.createElement('style');
style.textContent = '#para1, #para2, #para3, #para4, #para5, #para6 { white-space: pre-line; }';
document.head.appendChild(style);

function typeWriter(element, text, speed, callback) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, 15);
        } else if (callback) {
            callback();
        }
    }
    type();
}

function startTypingAnimation() {
    let delay = 0;
    
    content.forEach((item, index) => {
        setTimeout(() => {
            const headingElement = document.getElementById(`heading${index + 1}`);
            const paraElement = document.getElementById(`para${index + 1}`);
            
            typeWriter(headingElement, item.heading, 50, () => {
                typeWriter(paraElement, item.text, 20);
            });
        }, delay);
        
        delay += (item.heading.length * 50) + (item.text.length * 20) + 500;
    });
}

// Start animation when page loads
if (document.getElementById('heading1')) {
    window.addEventListener('load', startTypingAnimation);
}


// part3


// Toggle text expansion
function toggleText(textId, btnId) {
    const textElement = document.getElementById(textId);
    const btnElement = document.getElementById(btnId);
    
    if (textElement.classList.contains('line-clamp-2')) {
        textElement.classList.remove('line-clamp-2');
        textElement.classList.add('expanded');
        btnElement.innerHTML = '<span class="text-lg">-</span> Ok ';
    } else {
        textElement.classList.add('line-clamp-2');
        textElement.classList.remove('expanded');
        btnElement.innerHTML = '<span class="text-lg">+</span> See More';
    }
}

// Initialize text truncation on page load
window.addEventListener('load', function() {
    document.querySelectorAll('[id^="text"]').forEach(element => {
        element.classList.add('line-clamp-2');
    });
});



// Image modal
document.querySelectorAll('.card-image').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
        document.getElementById('modalImage').src = this.src;
        document.getElementById('imageModal').classList.remove('hidden');
    });
});

function closeModal() {
    document.getElementById('imageModal').classList.add('hidden');
}

// gdsdhfdgfv




// Toggle Accordion Cards
function toggleCard(cardId, contentId) {
    const card = document.getElementById(cardId);
    const content = document.getElementById(contentId);
    const iconId = cardId.replace('card', 'icon');
    const icon = document.getElementById(iconId);
    
    if (content.classList.contains('hidden')) {
        // Open card
        content.classList.remove('hidden');
        card.classList.add('bg-gray-100');
        icon.textContent = '−';
    } else {
        // Close card
        content.classList.add('hidden');
        card.classList.remove('bg-gray-100');
        icon.textContent = '+';
    }
}


// hdkkds

// Photo Slider

// Photo Slider
let currentImageIndex = 0;
const images = ['photo/aa1.jpg', 'photo/aa2.jpg', 'photo/aa3.jpg' ,];
let autoSlideInterval;



function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateSlider();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateSlider();
}

function updateSlider() {
    const sliderImage = document.getElementById('sliderImage');
    const indicators = document.querySelectorAll('.indicator');
    
    if (sliderImage) {
        sliderImage.src = images[currentImageIndex];
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            if (index === currentImageIndex) {
                indicator.classList.remove('bg-white/50');
                indicator.classList.add('bg-white');
            } else {
                indicator.classList.remove('bg-white');
                indicator.classList.add('bg-white/50');
            }
        });
    }
}

// Auto slide every 2 seconds
function startAutoSlide() {
    autoSlideInterval = setInterval(nextImage, 2000);
}

// Initialize slider when page loads
if (document.getElementById('sliderImage')) {
    startAutoSlide();
}



// dsjfjjf






// kjffhjh


// Photo Slider with 10 images
let currentSlideIndex = 0;
const slideImages = [
    'photo/s1.jpg',
    'photo/s2.jpg', 
    'photo/s3.jpg',
    'photo/s4.jpg',
    'photo/s5.jpg',
    'photo/s6.jpg',
    'photo/s7.jpg',
    'photo/s8.jpg',
    'photo/s9.jpg',
    'photo/s10.jpg'
];
let autoSlideTimer;

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slideImages.length;
    updateSlide();
    resetAutoSlide();
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slideImages.length) % slideImages.length;
    updateSlide();
    resetAutoSlide();
}

function updateSlide() {
    const mainImage = document.getElementById('mainSliderImage');
    const indicators = document.querySelectorAll('.slide-indicator');
    const counter = document.getElementById('currentSlide');
    
    if (mainImage) {
        mainImage.src = slideImages[currentSlideIndex];
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            if (index === currentSlideIndex) {
                indicator.classList.remove('bg-gray-400');
                indicator.classList.add('bg-gray-800');
            } else {
                indicator.classList.remove('bg-gray-800');
                indicator.classList.add('bg-gray-400');
            }
        });
        
        // Update counter
        if (counter) {
            counter.textContent = currentSlideIndex + 1;
        }
    }
}

function startAutoSlide() {
    autoSlideTimer = setInterval(nextSlide, 3000);
}

function resetAutoSlide() {
    clearInterval(autoSlideTimer);
    startAutoSlide();
}

// Initialize slider when page loads
if (document.getElementById('mainSliderImage')) {
    startAutoSlide();
}

// ifjhj


function revealText() {
    const element = document.getElementById('typingText');
    if (element) {
        const fullText = element.textContent;
        element.textContent = '';
        element.classList.remove('hidden');
        
        let i = 0;
        function type() {
            if (i < fullText.length) {
                element.textContent += fullText.charAt(i);
                i++;
                setTimeout(type, 10); // 25ms per character (adjust for speed)
            }
        }
        type();
    }
}

if (document.getElementById('typingText')) {
    window.addEventListener('load', function() {
        setTimeout(revealText, 500);
    });
}