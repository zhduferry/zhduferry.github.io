(function() {
  var root = document.documentElement;

  /* ── 暗色模式 ── */
  var toggle = document.getElementById('dark-toggle');
  if (toggle) {
    var saved = localStorage.getItem('theme');
    var prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefers)) {
      root.setAttribute('data-theme', 'dark');
    }
    toggle.addEventListener('click', function() {
      var current = root.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }

  /* ── 毛玻璃透明度滑动条 ── */
  var slider = document.getElementById('glass-slider');
  if (slider) {
    // 读取保存的值或默认值
    var savedAlpha = localStorage.getItem('glass-alpha');
    if (savedAlpha !== null) {
      slider.value = savedAlpha;
      root.style.setProperty('--glass-alpha', savedAlpha);
    }

    slider.addEventListener('input', function() {
      var alpha = parseFloat(this.value);
      root.style.setProperty('--glass-alpha', alpha);
      localStorage.setItem('glass-alpha', alpha);
    });
  }
})();
