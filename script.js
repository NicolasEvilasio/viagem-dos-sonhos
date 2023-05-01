document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('li[data-target]');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function() {
        var target = document.getElementById(this.getAttribute('data-target'));
        var targetTop = target.getBoundingClientRect().top;
        var headerHeight = 110;
        var scrollTo = targetTop - headerHeight;
  
        window.scrollTo({
          top: scrollTo,
          behavior: 'smooth'
        });
      });
    }
});
  