(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()


// slider
 const track = document.getElementById('sliderTrack');
  const cards = document.querySelectorAll('.card-item');

  function getVisibleCards() {
    const w = window.innerWidth;
    if (w <= 576) return 1;
    if (w <= 992) return 2;
    return 4;
  }

  let index = 0;

  setInterval(() => {
    const visible = getVisibleCards();
    index++;
    if (index > cards.length - visible) {
      index = 0;
    }
    track.style.transform = `translateX(-${index * (100 / visible)}%)`;
  }, 2000);

  window.addEventListener('resize', () => {
    track.style.transform = `translateX(-${index * (100 / getVisibleCards())}%)`;
  });

//   calender
 const calendarDays = document.getElementById("calendarDays");
  const monthYear = document.getElementById("monthYear");

  let currentDate = new Date();

  function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDate = new Date(year, month + 1, 0).getDate();
    const startDay = (firstDay.getDay() + 6) % 7; // Monday start

    calendarDays.innerHTML = "";
    monthYear.innerText = `${date.toLocaleString('default', { month: 'long' })} ${year}`;

    for (let i = 0; i < startDay; i++) {
      const empty = document.createElement("div");
      calendarDays.appendChild(empty);
    }

    for (let i = 1; i <= lastDate; i++) {
      const day = document.createElement("div");
      day.className = "day";
      day.innerText = i;
      day.onclick = () => {
        document.querySelectorAll('.day').forEach(d => d.classList.remove("active"));
        day.classList.add("active");
      };
      calendarDays.appendChild(day);
    }
  }

  function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
  }

  function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
  }

  renderCalendar(currentDate);


//   accordian
 function showMoreFaqs(btn) {
    document.getElementById("moreFaqs").classList.remove("d-none");
    btn.style.display = "none"; // Hide the button after showing
  }



//   scroll event 
  window.addEventListener("scroll", function () {
    const leftContent = document.getElementById("leftContent");
    const calendarBox = document.getElementById("calendarBox");

    const leftBottom = leftContent.offsetTop + leftContent.offsetHeight;
    const scrollPosition = window.scrollY + window.innerHeight;

    if (scrollPosition >= leftBottom) {
      // Left content scroll complete → make static
      calendarBox.classList.remove("sticky-style");
      calendarBox.classList.add("static-style");
    } else {
      // While scrolling → keep sticky
      calendarBox.classList.remove("static-style");
      calendarBox.classList.add("sticky-style");
    }
  });


// lodder
  window.addEventListener("load", () => {
      setTimeout(() => {
        document.getElementById("loader-wrapper").style.display = "none";
        document.getElementById("content").style.display = "block";
        document.body.style.overflow = "auto";
      }, 3000); // still 1 second loader
    });
