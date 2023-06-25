var events = {
  event1: {
    title: "Evrenin Hikayesi",
    boxes: [
      { title: "Keşiş ve Nietszche", description: ["Kim olduğu bilinmeyen bir keşiş kasabaya giriş yaptı. Keşiş göçebeydi bu yüzden bu tür konuları düşünecek vakit yoktu ta ki yeni bir ev satın alana kadar. Bu ev öyle perili bir yer değil, lüks bir yer değil ya da şato gibi kocaman bir yer değil. Sıradan kerpiçten bir ev, 4 odası 2 de tuvaleti mevcut. Keşiş sonunda bir eve taşındığı için gezip yeni yerlere taşınma derdi sona ermişti. Bu yüzden artan zamanını hobileriyle geçirdi. \n \n Yapılacak aktiviteler yavaş yavaş tükendiği esnada yaz ayının getirdiği sıcak insanı bunaltıyordu. Keşiş, elinde gazetesi ile gündeme baktığı esnada kapı çaldı. Kapıyı açtığında bir kutu olduğunu fark etti (Hayır Pandora'nın Kutusu değil). Kutu ahşaptan yapılmış, altın desenler verilmiş ve içinde küçük kurmalı bir mekanizma barındırıyordu. Kutuyu aldı ve sehpaya koydu. Kutunun üzerinde işaret parmağı ile bir kaç tur daire çizdi. Keşiş merakına yenik düşerek mekanizmayı açtı ardından yavaş yavaş kolu çevirdi ve bekledi... Kutunun kapağı aniden açılarak üstünde \"Sorgula\" yazan bir parşömen ve altında \"Nietzsche\" yazısı onu karşılamıştı. Keşiş elbette bu adamın bir filozof olduğunu anlamıştı fakat tam olarak neyi sorgulamalıydı?"] },
      { title: "Olay 1 Box 2 Başlık", description: ["Olay 1'in detayı 2"] },
      { title: "Olay 1 Box 3 Başlık", description: ["Olay 1'in detayı 3"] }
    ]
  },
  event2: {
    title: "Olay 2",
    boxes: [
      { title: "Olay 2 Box 1 Başlık", description: ["Olay 2'nin detayı 1"] },
      { title: "Olay 2 Box 2 Başlık", description: ["Olay 2'nin detayı 2"] }
    ]
  },
  event3: {
    title: "Olay 3",
    boxes: [
      { title: "Olay 3 Box 1 Başlık", description: ["Olay 3'ün detayı 1"] },
      { title: "Olay 3 Box 2 Başlık", description: ["Olay 3'ün detayı 2"] },
      { title: "Olay 3 Box 3 Başlık", description: ["Olay 3'ün detayı 3"] },
      { title: "Olay 3 Box 4 Başlık", description: ["Olay 3'ün detayı 4"] }
    ]
  }
};

function showTimeline(eventId) {
  var timeline = document.getElementById("timeline");
  timeline.innerHTML = "";

  var event = events[eventId];

  var eventGroup = document.createElement("div");
  eventGroup.classList.add("event-group");
  timeline.appendChild(eventGroup);

  for (var i = 0; i < event.boxes.length; i++) {
    var eventBox = document.createElement("div");
    eventBox.classList.add("event-box");

    
    var eventTitle = event.boxes[i].title;
    eventBox.innerHTML = "<h3>" + eventTitle + "</h3>";

    eventBox.addEventListener("click", createEventDetailsHandler(event, i));
    eventGroup.appendChild(eventBox);
  }
}

function createEventDetailsHandler(event, index) {
  return function () {
    showEventDetails(event.boxes[index]);
  };
}

function showEventDetails(box) {
  var eventDetailsOverlay = document.getElementById("event-details-overlay");
  var eventTitle = document.getElementById("event-title");
  var eventDescription = document.getElementById("event-description");

  eventTitle.textContent = box.title;

  var descriptionText = box.description[0];
  descriptionText = descriptionText.replace(/\n/g, "<br>"); 

  eventDescription.innerHTML = "<p>" + descriptionText + "</p>";

  
  eventDescription.style.overflow = "auto";
  eventDescription.style.maxHeight = "300px"; 
  eventDetailsOverlay.style.display = "flex";
  document.body.style.overflow = "hidden";

}

function closeDetails() {
  var eventDetailsOverlay = document.getElementById("event-details-overlay");
  eventDetailsOverlay.style.display = "none";
  document.body.style.overflow = "auto";

}

function redirectToServer() {
  window.location.href = "https://discord.gg/arcanarp";
}

var selectMenu = document.getElementById("event-menu");
var introBox = document.getElementById("intro-box");

selectMenu.addEventListener("change", function() {
  if (selectMenu.value !== "") {
    introBox.style.display = "none";
  } else {
    introBox.style.display = "block";
  }
});
