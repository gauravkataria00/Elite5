
const cardsData = [
    { name: "GAVI", imageUrl: "https://i.ibb.co/yJk2vVn/1510f7e5-11ae-4eb9-8c01-b361ed4fd1a1.jpg" ,c1:"CODER, FOUNDING MEMBER " },
    { name: "ROBIN", imageUrl: "https://i.ibb.co/kVhTqPpb/IMG-20250515-101417-1.jpg",c1:"WEBSITE DESIGNER, FOUNDING MEMBER" },
    { name: "HIMANSHU", imageUrl: "https://i.ibb.co/4Zf8zCRG/Whats-App-Image-2025-05-15-at-10-16-38-AM.jpg" ,c1:"CODER, FOUNDING MEMBER" },
    { name: "NITISH KUMAR", imageUrl: "https://i.ibb.co/d026Jr86/a8b036ad-f5cb-4585-8caf-eaacbff7b1ef.jpg",c1:"CODER, FOUNDING MEMBER " },
    { name: "RAMANPREET", imageUrl: "https://i.ibb.co/yF9M6rr5/Whats-App-Image-2025-05-15-at-11-16-17-AM.jpg",c1:"DATA COLLECTOR, FOUNDING MEMBER" },
  ];
  
  
  const cardContainer = document.getElementById("cardContainer");
  
  
  function createCard({ name, imageUrl, c1, }) {
   
    const cardDiv = document.createElement("div");
    cardDiv.className = "relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-zinc-800 text-gray-50 p-5";
  
    cardDiv.innerHTML = `
      <div>
        <img src="${imageUrl}" alt="${name}" class="group-hover:scale-110 w-full h-60 card-image duration-500">
        <div class="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12">
          <div class="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"></div>
          <span class="text-xl font-bold">${name}</span>
          <p class="group-hover:opacity-100 w-56 duration-500 opacity-0">
            ${c1}
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