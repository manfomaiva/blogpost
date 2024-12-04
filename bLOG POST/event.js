// Fetch event data from an API or database

// Function to fetch event data
async function fetchEventData() {
    try {
        const response = await fetch("https://api.example.com/events");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error fetching event data:", error);
    }
}

// Function to populate the event container with events
function populateEvents(events) {
    const eventContainer = document.getElementById("event-container");

    // Clear previous events
    eventContainer.innerHTML = "";

    events.forEach(event => {
        const { id, name, attendees, date, description } = event;

        // Create event card elements
        const eventCard = document.createElement("div");
        eventCard.classList.add("event");

        const eventTitle = document.createElement("h2");
        eventTitle.textContent = name;
        eventCard.appendChild(eventTitle);

        const attendeesContainer = document.createElement("div");
        attendeesContainer.classList.add("attendees");

        const attendeesCount = document.createElement("span");
        attendeesCount.textContent = attendees;
        attendeesContainer.appendChild(attendeesCount);

        const attendeesLabel = document.createElement("span");
        attendeesLabel.textContent = "attendees";
        attendeesContainer.appendChild(attendeesLabel);

        eventCard.appendChild(attendeesContainer);

        const eventDate = document.createElement("div");
        eventDate.classList.add("event-date");
        eventDate.textContent = "Date: " + date;
        eventCard.appendChild(eventDate);

        const eventDescription = document.createElement("p");
        eventDescription.textContent = description;
        eventCard.appendChild(eventDescription);

        const seeEventBtn = document.createElement("a");
        seeEventBtn.href = "event-details.html?id=" + id; // Link to event details page
        seeEventBtn.classList.add("event-button");
        seeEventBtn.textContent = "See Event";
        eventCard.appendChild(seeEventBtn);

        eventContainer.appendChild(eventCard);
    });
}

// Function to populate images
function populateImages(imageUrls, containerId) 
{
    const imageContainer = document.getElementById(containerId);

    // Clear previous images
    imageContainer.innerHTML = "";

    imageUrls.forEach(url => {
        const image = document.createElement("img");
        image.src = url;
        image.alt = "Event Image";
        imageContainer.appendChild(image);

// Populate events
        populateEvents(allEvents);

        // Define image URLs
        const allImages = [
            "image1.jpg",
            "image2.jpg",
            "image3.jpg",
            "image4.jpg"
        ];
        const rightImages = [
            "image5.jpg",
            "image6.jpg"
        ];

        // Populate images
        populateImages(allImages, "image-row");
        populateImages(rightImages, "right-images");
    } 
}
    // catch (error) {
    //     console.log("Error populating page data:", error);
    // }


// Load page data on page load
window.addEventListener("load", loadPageData);
