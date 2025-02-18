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

  const down = function(e) {
    if (e.ctrlKey && e.keyCode == 78) {
      e.preventDefault();
      e.stopPropagation();
      scrollBy({top: amount, behavior: "smooth"});
    }
  };

  const up = function(e) {
    if (e.ctrlKey && e.keyCode == 80) {
      e.preventDefault();
      e.stopPropagation();
      scrollBy({top: -amount, behavior: "smooth"});
    }
  };

  const handleKeyDown = function(e) {
    if (e.ctrlKey && (e.keyCode == 78 || e.keyCode == 80)) {
      e.preventDefault();
      e.stopPropagation();
      if (e.keyCode == 78) {
        down(e);
      } else {
        up(e);
      }
    }
  };

  // イベントリスナーを追加
  body.addEventListener("keydown", no_chatter(handleKeyDown), true);
};
