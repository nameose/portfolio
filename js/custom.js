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
          duration: 2500,
          progress: function () {
            let now = this.rate;
            let amount = 630 - (630 * now) / 100;
            title.text(Math.floor(now));
            circle.css({ strokeDashoffset: amount });
          },
        }
      );
    });
  }
});
