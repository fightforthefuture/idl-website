document.addEventListener("DOMContentLoaded", function() {
  var body = document.querySelector('body');
  body.classList.add('modal-open');
  var html = "<div class='modal-wrapper js-close'>"+
      "<div class='modal'>"+
        "<div class='modal-scroll'>"+
          "<img src='/images/fftf-logo-dark.svg' alt='Fight for the Future logo'>"+
          "<p class='push-top'>"+
            "We are not adding new members to this page at this time. If you "+
            "would like to support the work of Fight for the Future, please email "+
            "us at "+
            "<a href='mailto:team@fightforthefuture.org'>team@fightforthefuture.org</a> "+
            "to discuss."+
          "</p>"+
          "<p>"+
            "Our major supporters are "+
            "<a href='https://www.fightforthefuture.org/supporters/'>listed here</a>. "+
            "If you would like to be listed, please "+
            "<a href='https://donate.fightforthefuture.org/'>make a donation here</a> "+
            "or email us at "+
            "<a href='mailto:donor@fightforthefuture.org'>donor@fightforthefuture.org</a>."+
          "</p>"+
        "</div>"+
        "<button class='close js-close'>&times;</button>"+
      "</div>"+
    "</div>";
  var injector = document.createElement('div');
  injector.innerHTML = html;
  body.appendChild(injector);

  document.addEventListener('click', function(ev) {
    if (event.target.classList.contains('js-close')) {
      ev.preventDefault();
      var modal = document.querySelectorAll('.modal-wrapper');
      modal[0].style.display = 'none';
      body.classList.remove('modal-open');
    }
  }, false);
});
