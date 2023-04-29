const scrollBtn = document.getElementById("scrollBtn");
const stickyMenu = document.getElementById("sticky_menu");
const commandersOpenBtn = document.getElementById("command_open_btn");
const commandersCloseBtn = document.getElementById("command_close_btn");
const commandersModal = document.getElementById("command_modal");

const chemicalHistoryBtn = document.getElementById("chemicalHistory");
const liberecHistoryBtn = document.getElementById("liberecHistory");
const barracsHistoryBtn = document.getElementById("barracsHistory");
const historyTextContent = document.getElementById("history_content");

// scroll to display scroll to top btn
const scrollContainer = () => {
    return document.documentElement || document.body;
  };
  
  document.addEventListener("scroll", () => {
    // setTimeout(() => {
    //   stickyMenu.classList.add("hidden");    keeps setting timeout 
    // }, "5000");
    // clearTimeout();
    
    if (scrollContainer().scrollTop > 900) {
      scrollBtn.classList.remove("hidden");
      stickyMenu.classList.remove("hidden")
    } else {
      scrollBtn.classList.add("hidden");
      stickyMenu.classList.add("hidden")
    }
  });

// modal open close
document.addEventListener('click', event => {
  const isClickInside = commandersModal.contains(event.target);
  const btnClick = commandersOpenBtn.contains(event.target);
    
  if (btnClick) {
    commandersModal.classList.remove("hidden"); 

  } else if (!isClickInside || event.target === commandersCloseBtn) {
    commandersModal.classList.add("hidden");
  }
});

// history page 

const historyTextObject = {
  "chemicalHistory":  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Et sapiente, atque fuga voluptates deserunt repellendus odio minus dicta perferendis, itaque quibusdam doloremque repudiandae non    similique iste magnam. Distincsoluta officia. Lorem ipsum doloramet Magni nemo reprehenderit magnam fugit eum cumque atque laudantium, dolor totam repudiandae ducimus, animi exercitationem quis facilis,voluptas rem. Soluta! Lorem ipsum dolor sit amet consectetur, adipisicing elit.consectetur adipisicing elit. Minima cum dolores cupidivoluptatem delectus eius ea odit minus, repudiandae sapiente explicabo. Sapiente provident maxime veritdistinctio fuga maiores unde.",

  "liberecHistory":   "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, recusandae sint fuga nihil temporibus quod vitae eum mollitia cum minus Magni nemo reprehenderit magnam fugit eum cumque atque laudantium, dolor totam repudiandae ducimus, animi exercitationem quis facilis,voluptas rem. Soluta! Lorem ipsum dolor sit amet consectetur, adipisicing elit.Magni nemo reprehenderit magnam fugit eum cumque atque laudantium, dolor totam repudiandae ducimus, animi exercitationem quis facilis,voluptas rem. Soluta! Lorem ipsum dolor sit amet consectetur, adipisicing elit.aliquid, adipisci vero exercitationem sapientequisquam repudiandae ab ducimusarchitecto.ero exercitationem sapientequisquam repudiandae ab ducimusarchitecto.ero exercitationem sapientequisquam repudiandae ab ducimusarchitecto.ero exercitationem sapientequisquam repudiandae ab ducimusarchitecto.",

  "barracsHistory":   "Magni nemo reprehenderit magnam fugit eum cumque atque laudantium, dolor totam repudiandae ducimus, animi exercitationem quis facilis,voluptas rem. Soluta! Lorem ipsum dolor sit amet consectetur, adipisicing elit.Magni nemo reprehenderit magnam fugit eum cumque atque laudantium, dolor totam repudiandae ducimus, animi exercitationem quis facilis,voluptas rem. Soluta! Lorem ipsum dolor sit amet consectetur, adipisicing elit.magni officia possimus temporibus ab et saepe commodi dolores nisimaiores blanditiis, sint laboriosam animi est consequatur nam.                       Loremipsum dolor, sit amet consectetur adipisicing elit. Suscipit, eveniet.Magni nemo reprehenderit magnam fugit eum cumque atque laudantium, dolor totam repudiandae ducimus, animi exercitationem quis facilis,voluptas rem. Soluta! Lorem ipsum dolor sit amet consectetur,            adipisicing elit. Ipsa obcaecati nesciunt, id eaque maxime rem involuptatem sit, quas aperiam similique numquam quaerat nemo quodratione, ea neque praesentium. Nobis?"
}

const galleryContainer = document.getElementById("gallery_container");
const galleryImageBox = document.getElementById("gallery_image_box");
const galleryImageSelected = document.getElementById("gallery_image_selected");
const btnPrev = document.getElementById("image_prev");
const btnNext = document.getElementById("image_next");

const galleryImages = [
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/id/238/200/300",
    "https://picsum.photos/id/239/200/300",
    "https://picsum.photos/id/240/200/300",
    "https://picsum.photos/id/241/200/300",
    "https://picsum.photos/id/242/200/300",
    "https://picsum.photos/id/243/200/300",
    "https://picsum.photos/id/244/200/300",
    "https://picsum.photos/id/257/200/300",
    "https://picsum.photos/id/256/200/300",
    "https://picsum.photos/id/247/200/300"
]

let imgs = galleryImages.map(function(url) {
  let img = new Image();
  img.src = url;
  img.onclick = function(e) {
    galleryImageSelected.src = url;

    if (e.target === img) {
      galleryImageBox.style.display = "flex"
    } 
  };
  galleryContainer.appendChild(img);
  return img
})

btnPrev.addEventListener('click', function() {
  let selectedImage = galleryImages.indexOf(galleryImageSelected.src);
  
  if (selectedImage == 0) {
    selectedImage = galleryImages.length
  }
    galleryImageSelected.src = galleryImages[selectedImage - 1]
});

btnNext.addEventListener('click', function() {
  let selectedImage = galleryImages.indexOf(galleryImageSelected.src);
  
  if (selectedImage == galleryImages.length-1) {
    selectedImage = -1
  }
    galleryImageSelected.src = galleryImages[selectedImage + 1]
  
})

// // handle click outside image to close image 
// document.addEventListener('click', event => {
//   const isClickInside = galleryImageBox.contains(event.target);
//   // const imgClick = imgs == event.target;
//    if (!isClickInside) {
//     galleryImageBox.style.display = "none";
//   }
// });




chemicalHistoryBtn.addEventListener('click', function() {
  historyTextContent.textContent = historyTextObject.chemicalHistory
});

liberecHistoryBtn.addEventListener('click', function() {
  historyTextContent.textContent = historyTextObject.liberecHistory
});

barracsHistoryBtn.addEventListener('click', function() {
  historyTextContent.textContent = historyTextObject.barracsHistory
});