var users = [
  {
    profilePic:
      "https://images.unsplash.com/photo-1604093442026-2423d6b5dca6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHBvcnRyYWl0JTIwZmVtYWxlfGVufDB8fDB8fHww",
    displayPic:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBvcnRyYWl0JTIwZmVtYWxlfGVufDB8fDB8fHww",
    pendingMessage: 4,
    location: "Delhi,India",
    name: "Harshita",
    age: 21,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "writing",
      },
    ],
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus porro dolore enim fuga recusandae?",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBvcnRyYWl0JTIwZmVtYWxlfGVufDB8fDB8fHww",
    displayPic:
      "https://images.unsplash.com/photo-1601582067612-7a347874f27d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHBvcnRyYWl0JTIwZmVtYWxlfGVufDB8fDB8fHww",
    pendingMessage: 11,
    location: "Bhopal,India",
    name: "Shivangi",
    age: 25,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "writing",
      },
    ],
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus porro dolore enim fuga recusandae?",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1592621385645-e41659e8aabe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHBvcnRyYWl0JTIwZmVtYWxlfGVufDB8fDB8fHww",
    displayPic:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHBvcnRyYWl0JTIwZmVtYWxlfGVufDB8fDB8fHww",
    pendingMessage: 15,
    location: "Bangluru,India",
    name: "Nishi",
    age: 12,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "writing",
      },
    ],
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus porro dolore enim fuga recusandae?",
    isFriend: null,
  },
  {
    profilePic:
      "https://images.unsplash.com/photo-1511242962912-ba18dcf39f30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fHBvcnRyYWl0JTIwZmVtYWxlfGVufDB8fDB8fHww",
    displayPic:
      "https://images.unsplash.com/photo-1581841064838-a470c740e8ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU4fHxwb3J0cmFpdCUyMGZlbWFsZXxlbnwwfHwwfHx8MA%3D%3D",
    pendingMessage: 7,
    location: "Haryana,India",
    name: "Anaya",
    age: 20,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "music",
      },
      {
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "writing",
      },
    ],
    bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus porro dolore enim fuga recusandae?",
    isFriend: null,
  },
];

let curr = 0;
let isAnimating = false;

function setData(index) {

  select(".prflimg img").src = users[index].profilePic;
  select(".badge h5").textContent = users[index].pendingMessage;
  select(".location h3").textContent = users[index].location;
  select(".name h1:nth-child(1)").textContent = users[index].name;
  select(".name h1:nth-child(2)").textContent = users[index].age;

  var clutter = "";
  users[index].interests.forEach(function (interest) {
    clutter += `  <div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full  gap-3 text-white">
${interest.icon}
<h3 class="text-sm tracking-tight">${interest.interest}</h3>
</div>`;
  });
  select(".tags").innerHTML = clutter;
  select(".bio p").textContent = users[index].bio;
}

function select(elem) {
  return document.querySelector(elem);
}

(function setInitial() {
  
  select(".maincard img").src = users[curr].displayPic;
  select(".incomingcard img").src = users[curr + 1]?.displayPic;

  setData(curr);

  curr = 2;
})();

function imageChange() {
  if (!isAnimating) {
    isAnimating = true;
    let tl = gsap.timeline({
      onComplete: function () {
        isAnimating = false;
        let main = select(".maincard");
        let incoming = select(".incomingcard");
        incoming.classList.remove("z-[2]");
        incoming.classList.add("z-[3]");
        incoming.classList.remove("incoming");

        main.classList.remove("z-[3]");
        main.classList.add("z-[2]");

        gsap.set(main, {
          scale: 1,
          opacity: 1,
        });
       
        if (curr === users.length) curr=0;
        select(".maincard img").src = users[curr].displayPic;
        curr++;
       
        main.classList.remove("maincard");
        incoming.classList.add("maincard");
        main.classList.add("incomingcard");
      },
    });

    tl.to(
      ".maincard ",
      {
        scale: 1.1,
        opacity: 0,
        ease: Circ,
        duration: 0.9,
      },
      "a"
    );
    tl.from(
      ".incomingcard ",
      {
        scale: 0.9,
        opacity: 0,
        ease: Circ,
        duration: 1.1,
      },
      "a"
    );
  }
}

let deny = select(".deny");
let accept = select(".accept");
deny.addEventListener("click", function () {
  imageChange();
  
  setData(curr - 1);

  gsap.from(".details .element", {
    y: "100%",
    stagger: 0.06,
    ease: Power4.easeInOut,
    duration: 1.2,
  });
});
accept.addEventListener("click", function () {
  imageChange();
  setData(curr - 1);

  gsap.from(".details .element", {
    y: "100%",
    stagger: 0.06,
    ease: Power4.easeInOut,
    duration: 1.2,
  });
});

(function containerCreator() {
  document.querySelectorAll(".element").forEach(function (element) {
    let div = document.createElement("div");
    div.classList.add(`${element.classList[1]}container`, "overflow-hidden");
    div.appendChild(element);
    select(".details").appendChild(div);
  });
})();
