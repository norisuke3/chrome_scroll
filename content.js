window.onload = function() {
  const body = document.getElementsByTagName("body")[0];
  const amount = 300;

  const no_chatter = function(f) {
    let active = false;
    return (e) => {
      if (!active) {
        active = true;
        f(e);
        setTimeout(() => {
          active = false;
        }, 150);
      }
    };
  };

  const down = function(e, multiplier = 1) {
    e.preventDefault();
    e.stopPropagation();
    scrollBy({top: amount * multiplier, behavior: "smooth"});
  };

  const up = function(e, multiplier = 1) {
    e.preventDefault();
    e.stopPropagation();
    scrollBy({top: -amount * multiplier, behavior: "smooth"});
  };

  const handleKeyDown = function(e) {
    if (e.key === 'v' && (e.ctrlKey || e.metaKey)) {
      if (e.ctrlKey) {
        down(e, 2);
      } else if (e.metaKey) {
        up(e, 2);
      }
    } else if (e.ctrlKey && (e.keyCode === 78 || e.keyCode === 80)) {
      e.preventDefault();
      e.stopPropagation();
      if (e.keyCode === 78) {
        down(e);
      } else {
        up(e);
      }
    }
  };

  body.addEventListener("keydown", no_chatter(handleKeyDown), true);
};
