const body = document.querySelector('.body');

const preloder = document.querySelector('.pre-loder')

const navBar = document.querySelector('.nav');
const hamMenu = document.querySelector('.ham-menu');
const cancel = document.querySelector('.cancel');

const eduLabel = document.querySelector('.edu-label');
const skillLabel = document.querySelector('.skill-label');
const skillInfo = document.querySelector('.skill-info');
const eduInfo = document.querySelector('.edu-info');

const seeMore = document.querySelector('.see-more');
const project5 = document.querySelector('.project-5');
const project6 = document.querySelector('.project-6');
const project7 = document.querySelector('.project-7');
const project8 = document.querySelector('.project-8');

window.addEventListener('load', () => {
   preloder.classList.add('hidden')
})

// hamMenu section
hamMenu.addEventListener('click', () => {
   navBar.classList.remove("-right-[244px]")
   navBar.classList.add('right-0')

   body.classList.remove('h-screen')
   body.classList.add('overflow-hidden')
   body.classList.add('h-full')
})

navBar.addEventListener('click', (e) => {
   if (e.target.tagName === "I" || e.target.tagName === "A") {
      navBar.classList.remove('right-0')
      navBar.classList.add("-right-[244px]")

      body.classList.add('h-screen')
      body.classList.remove('h-full')
      body.classList.remove('overflow-hidden')
   }
})

// Edu Skill borders
skillLabel.addEventListener("click", () => {
   skillInfo.classList.remove("hidden")
   eduInfo.classList.add("hidden")

   skillLabel.classList.remove("border-transparent")
   skillLabel.classList.add("border-blue-500")

   eduLabel.classList.remove("border-blue-500")
   eduLabel.classList.add("border-transparent")
})

eduLabel.addEventListener("click", () => {
   eduInfo.classList.remove("hidden")
   skillInfo.classList.add("hidden")

   eduLabel.classList.remove("border-transparent")
   eduLabel.classList.add("border-blue-500")

   // skillLabel.classList.remove("border-transparent")
   skillLabel.classList.remove("border-blue-500")
   skillLabel.classList.add("border-transparent")
})

// projects less/more
seeMore.addEventListener('click', () => {
   seeMore.innerHTML = "See Less  . . . ";

   project6.classList.toggle("hidden")
   project7.classList.toggle("hidden")
   project5.classList.toggle("hidden")
   project8.classList.toggle("hidden")

   if (project8.classList.contains("hidden")) {
      seeMore.innerHTML = "See More  . . . ";
   }
})

// Form section

//Getting infi in google sheet
// const scriptURL = 'https://script.google.com/macros/s/AKfycbykNCSEKUzMehy-SoQXLCpdN_Nmi_YZl27zcgM3hY7WVvV6-HZt54aWutvpuXPjlOpVMA/exec'
// const form = document.forms['submit-to-google-sheet']
// const msg = document.querySelector('.succ-msg')

// form.addEventListener('submit', e => {
//    e.preventDefault()
//    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//       .then(response => {
//          form.reset()
//          msg.innerText = "Message sent successfully"
//          setTimeout(() => {
//             msg.innerHTML = ""
//          }, 3000)

//       })
//       .catch(error => console.error('Error!', error.message))
// })

// getting info in mail


