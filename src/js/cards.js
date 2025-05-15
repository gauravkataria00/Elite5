// Array of objects containing names and image URLs
const cardsData = [
  { name: "GAVI", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" },
  { name: "ARJU SHARMA", imageUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9" },
  { name: "PREET", imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde" },
  { name: "ROBIN", imageUrl: "https://images.unsplash.com/photo-1522556189639-b1509e4e9f66" },
  { name: "PRINCE", imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
  { name: "HIMANSHU", imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e" },
  { name: "UJJWAL", imageUrl: "https://images.unsplash.com/photo-1506794778202-3d6847d90b33" },
  { name: "ARYAN SHARMA", imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7" },
  { name: "LAKSHAY", imageUrl: "https://images.unsplash.com/photo-1522529590739-869f7e4b7c9f" },
  { name: "GITESH", imageUrl: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79" },
  { name: "MOHIT", imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2" },
  { name: "DEEPAK", imageUrl: "https://images.unsplash.com/photo-1511367461989-f85a21fda167" },
  { name: "PRYANSHU", imageUrl: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" },
  { name: "GURMAR", imageUrl: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef" },
  { name: "DHEERAJ", imageUrl: "https://images.unsplash.com/photo-1527980965255-d3b416303d12" },
  { name: "DEVANSH", imageUrl: "https://images.unsplash.com/photo-1504593811423-6dd665756598" },
  { name: "ARYAN KAMBOJ", imageUrl: "https://images.unsplash.com/photo-1518806118471-f28b20a1d79d" },
  { name: "ABHINAV", imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" },
  { name: "ABHISHEK CHOUDHARY", imageUrl: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39" },
  { name: "NITISH KUMAR", imageUrl: "https://images.unsplash.com/photo-1514626585111-9aa86183ac98" },
  { name: "JASHANPREET KAUR", imageUrl: "https://images.unsplash.com/photo-1492106087820-71f447c2b726" },
  { name: "PRIYANSHU SHARMA", imageUrl: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263" }
];

// Get the container where cards will be appended
const cardContainer = document.getElementById("cardContainer");

// Function to create a card for a given name and image
function createCard({ name, imageUrl }) {
  // Create the outer div
  const cardDiv = document.createElement("div");
  cardDiv.className = "relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-zinc-800 text-gray-50 p-5";

  // Inner structure with image
  cardDiv.innerHTML = `
    <div>
      <img src="${imageUrl}" alt="${name}" class="group-hover:scale-110 w-full h-60 card-image duration-500">
      <div class="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
        <div class="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
        <span class="text-xl font-bold">${name}</span>
        <p class="group-hover:opacity-100 w-56 duration-500 opacity-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  `;

  return cardDiv;
}

// Generate and append cards
cardsData.forEach(data => {
  const card = createCard(data);
  cardContainer.appendChild(card);
});