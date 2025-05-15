// Array of objects containing names and image URLs
const cardsData = [
  { name: "GAVI", imageUrl: "https://i.ibb.co/yJk2vVn/1510f7e5-11ae-4eb9-8c01-b361ed4fd1a1.jpg" ,c1:"Skills: HTML, CSS, Basic JAVA " },
  { name: "ARJU SHARMA", imageUrl: "" },
  { name: "PREET", imageUrl: "" },
  { name: "ROBIN", imageUrl: "" },
  { name: "PRINCE", imageUrl: "" },
  { name: "HIMANSHU", imageUrl: "" },
  { name: "UJJWAL", imageUrl: "" },
  { name: "ARYAN SHARMA", imageUrl: "" },
  { name: "LAKSHAY", imageUrl: "" },
  { name: "GITESH", imageUrl: "" },
  { name: "MOHIT", imageUrl: " " },
  { name: "DEEPAK", imageUrl: "" },
  { name: "PRYANSHU", imageUrl: "" },
  { name: "GURMAR", imageUrl: "" },
  { name: "DHEERAJ", imageUrl: "" },
  { name: "DEVANSH", imageUrl: "" },
  { name: "ARYAN KAMBOJ", imageUrl: "" },
  { name: "ABHINAV", imageUrl: "" },
  { name: "ABHISHEK CHOUDHARY", imageUrl: "" },
  { name: "NITISH KUMAR", imageUrl: "" },
  { name: "JASHANPREET KAUR", imageUrl: "" },
  { name: "Anmol Kamboj", imageUrl: "https://i.ibb.co/qMVcKsjt/284434d8-953e-4525-b187-d786fdfec592.jpg",c1:"Skills: HTML, CSS, JAVA, C++"  },
  { name: "PRIYANSHU ", imageUrl: "https://i.ibb.co/23t61Dv8/d22440c2-d463-4b74-9d44-7662ab892411.jpg" ,c1:"Skills: HTML, CSS, JAVA " },
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