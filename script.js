var lastScrollTop = 0;
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
document.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){


        console.log("down: " + st)

        if (st==200 || st>200) {
          document.querySelector(".header").style.backgroundColor = "white";
          document.querySelector(".header").classList.add("shadow")
          document.querySelector(".header").classList.add("animate")
        }


   } else {

    console.log("up: " + st)

    if (st==200 || st<200) {
          document.querySelector(".header").style.backgroundColor = "transparent";
          document.querySelector(".header").classList.remove("shadow")
          document.querySelector(".header").classList.remove("animate")
        }

   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);







// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'

        });

        // window.scrollTo({
        //   top: -50
        // })
    });
});

var i = 1;

function toggleMenu() {
  i++
  if (i%2 == 0) {
    document.querySelector(".navbar-hidden").style.display = "flex"
  }
  else {
    document.querySelector(".navbar-hidden").style.display = "none"
  }
}

function closeMenu() {
    document.querySelector(".navbar-hidden").style.display = "none"
}