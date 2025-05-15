
const cardsData = [
  { name: "GAVI", imageUrl: "https://i.ibb.co/yJk2vVn/1510f7e5-11ae-4eb9-8c01-b361ed4fd1a1.jpg" ,c1:"Skills: HTML, CSS, Basic JAVASCRIPT " },
  { name: "ARJU SHARMA", imageUrl: "https://i.ibb.co/hRQdkBh7/Whats-App-Image-2025-05-15-at-11-49-46-AM.jpg" ,c1:"Skills: HTML, CSS, Basic JAVASCRIPT " },
  { name: "PREET", imageUrl: "https://i.ibb.co/yF9M6rr5/Whats-App-Image-2025-05-15-at-11-16-17-AM.jpg",c1:"Skills: HTML, CSS, Basic JAVASCRIPT " },
  { name: "ROBIN", imageUrl: "https://i.ibb.co/kVhTqPpb/IMG-20250515-101417-1.jpg",c1:"Skills: Basic HTML, Basic CSS, Basic JAVASCRIPT "  },
  { name: "PRINCE", imageUrl: "https://i.ibb.co/fJKpdJ3/Picsart-25-05-11-19-23-33-010.png" ,c1:"Skills: Basic HTML, Basic CSS, Basic JAVASCRIPT " },
  { name: "HIMANSHU", imageUrl: "https://i.ibb.co/4Zf8zCRG/Whats-App-Image-2025-05-15-at-10-16-38-AM.jpg" ,c1:"Skills: HTML, CSS, Basic JAVASCRIPT " },
  { name: "UJJWAL", imageUrl: "https://i.ibb.co/tTPgffq0/Whats-App-Image-2025-05-15-at-11-49-56-AM.jpg",c1:"Skills: Basic HTML, Basic CSS, Basic JAVASCRIPT" },
  { name: "ARYAN SHARMA", imageUrl: "https://i.ibb.co/6cBqS7M7/baf743b2-8716-4b70-b007-022a462d4df0.jpg" ,c1:"Skills: Basic HTML, Basic CSS, Basic JAVASCRIPT"},
  { name: "LAKSHAY", imageUrl: "https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/491840760_2804664326409090_5828346719209679543_n.jpg?ccb=11-4&oh=01_Q5Aa1gHAYSGRUo7qjRJf97xmWX_3pVjqPaSS0HAv1QUyAfBfmw&oe=68326EC3&_nc_sid=5e03e0&_nc_cat=109" ,c1:"Skills: HTML, CSS, Basic JAVASCRIPT " },
  { name: "GITESH", imageUrl: "https://i.ibb.co/6JfthSjX/Whats-App-Image-2025-05-15-at-11-46-21-AM.jpg" ,c1:"Skills: HTML, CSS, Basic JAVASCRIPT " },
  { name: "VINAYAK", imageUrl: "https://i.ibb.co/hRKkVnQR/62531351-a48e-42f6-ba8a-fb664574c996.jpg" ,c1:"Skills: HTML, CSS, JAVASCRIPT, " },
  { name: "MOHIT", imageUrl: "https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/466581470_1293199528708411_2642787717165294570_n.jpg?ccb=11-4&oh=01_Q5Aa1gHIYgR1ilS0d7jj76ZzDv2gOoj0BScTE5ArhFv0B5FWmA&oe=6832B358&_nc_sid=5e03e0&_nc_cat=101 " ,c1:"Skills: Basic HTML, Basic CSS, Basic JAVASCRIPT "  },
  { name: "DEEPAK", imageUrl: "https://i.ibb.co/qYhnQZcx/083f4164-fc68-4561-a929-47923452746c.jpg",c1:"Skills: HTML, CSS, JAVASCRIPT, C++ " },
  { name: "PRYANSHU", imageUrl: "https://media-del2-3.cdn.whatsapp.net/v/t61.24694-24/454835073_2232194357166369_7293637044831231506_n.jpg?ccb=11-4&oh=01_Q5Aa1gHC0fw5hAWhYDFJqjXW7uzQ3h2KbRfsP9vnDA8jbpwyww&oe=68328943&_nc_sid=5e03e0&_nc_cat=107",c1:"Skills: HTML, CSS, JAVASCRIPT, C++" },
  { name: "GURMAR", imageUrl: "https://i.ibb.co/svzNYHYy/9bbd2070-ddf0-4ebc-92ba-f695c16ea947.jpg",c1:"Skills: Basic HTML, Basic CSS, Basic JAVASCRIPT "},
  { name: "DHEERAJ", imageUrl: "https://media-del1-1.cdn.whatsapp.net/v/t61.24694-24/472567941_933513035577703_8608048202332602603_n.jpg?ccb=11-4&oh=01_Q5Aa1gFoiesl7co00XKMJOEXY63kMJEuhHbukusX_SbSMcXmeQ&oe=6832920A&_nc_sid=5e03e0&_nc_cat=102" ,c1:"Skills: Basic HTML, Basic CSS, Basic JAVASCRIPT " },
  { name: "DEVANSH", imageUrl: "https://i.ibb.co/jv5f9YRB/3ffbfc35-bc30-4ed4-8eb9-f923f8f1638a.jpg" ,c1:"Skills: HTML, CSS, JAVASCRIPT "},
  { name: "ABHINAV", imageUrl: "https://media-del2-3.cdn.whatsapp.net/v/t61.24694-24/473396305_608464468454984_2941129825952305378_n.jpg?ccb=11-4&oh=01_Q5Aa1gHjf85PGjQLuoVMmp1Z7oVmpC9w0AxbDWThKCPkeoDRoA&oe=68328E5B&_nc_sid=5e03e0&_nc_cat=103",c1:"Skills: Basic HTML, Basic CSS, Basic JAVASCRIPT " },
  { name: "ABHISHEK CHOUDHARY", imageUrl: "https://i.ibb.co/F4W5qqL6/5878c516-2f82-4933-b7fb-5c2fbaba8c18.jpg" ,c1:"Skills: HTML, CSS, JAVASCRIPT " },
  { name: "NITISH KUMAR", imageUrl: "https://i.ibb.co/d026Jr86/a8b036ad-f5cb-4585-8caf-eaacbff7b1ef.jpg",c1:"Skills: HTML, CSS, JAVASCRIPT " },
  { name: "JASHANPREET KAUR", imageUrl: "https://i.ibb.co/VYX0RhSL/5aeb0b81-9c9d-487f-a229-b3a5c7c6460c.jpg",c1:"Skills: Basic HTML, Basic CSS, Basic JAVASCRIPT " },
  { name: "Anmol Kamboj", imageUrl: "https://i.ibb.co/gMFfnNYJ/7d60fbb6-221c-4957-a134-81972ff8e5cd.jpg",c1:"Skills: HTML, CSS, JAVASCRIPT, C++"  },
  { name: "PRIYANSHU ", imageUrl: "https://i.ibb.co/23t61Dv8/d22440c2-d463-4b74-9d44-7662ab892411.jpg" ,c1:"Skills: HTML, CSS, JAVASCRIPT " },
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