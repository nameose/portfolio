//header
$(function () {
  var $header = $(".page-header");
  var $headerOST = $header.offset().top;
  $(window).scroll(function () {
    var $currentSCT = $(this).scrollTop();
    if ($currentSCT > $headerOST) {
      $header.addClass("sticky");
    } else {
      $header.removeClass("sticky");
    }
  });
});

//gnb
let win = $(window),
  sections = $("section"),
  gnb = $(".gnb li");
const gnbOff = () => {
  gnb.each(() => {
    this.removeClass("on");
  });
};
win.scroll(function () {
  let sct = win.scrollTop();
  sections.each(function (i) {
    if (sct >= sections.eq(i).offset().top - 700) {
      $(".gnb li").eq(i).addClass("on").siblings().removeClass("on");
      sections.eq(i).addClass("on").siblings().removeClass("on");
    }
  });
});

//chart
$(function () {
  const animation = $(".animation");
  const chartBox = $(".animation .chart");
  const progressOst = $(".animation").offset().top - 600;
  $(window).scroll(function () {
    if ($(window).scrollTop() >= progressOst) {
      if (!animation.hasClass("act")) {
        progressAni();
        animation.addClass("act");
      }
    }
  });
  function progressAni() {
    chartBox.each(function () {
      let $this = $(this);
      let title = $this.find("h3");
      let targetNum = title.attr("data-num");
      let circle = $this.find("circle");
      $({ rate: 0 }).animate(
        { rate: targetNum },
        {
          duration: 3000,
          progress: function () {
            let now = this.rate;
            let amount = 630 - (630 * now) / 100;
            title.text(Math.floor(now) + "%");
            circle.css({ strokeDashoffset: amount });
          },
        }
      );
    });
  }
});

//down-btn
const gtd = document.querySelector("#go-to-down");
gtd.addEventListener("click", function (e) {
  e.preventDefault();
  document
    .querySelector(gtd.getAttribute("href"))
    .scrollIntoView({ behavior: "smooth" });
});

//top-btn
const btt = document.querySelector("#back-to-top");
let scrollAmount;
window.addEventListener("scroll", function () {
  scrollAmount = this.scrollY;
  if (scrollAmount > scrollAmount / 4) {
    btt.classList.add("visible");
  } else {
    btt.classList.remove("visible");
  }
});
btt.addEventListener("click", function (e) {
  e.preventDefault();
  document
    .querySelector(btt.getAttribute("href"))
    .scrollIntoView({ behavior: "smooth" });
});
