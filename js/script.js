(function() {
  var toggle = document.getElementById('dark-toggle');
  if (!toggle) return;

  // 初始化：优先 localStorage，其次系统偏好
  var saved = localStorage.getItem('theme');
  var prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (saved === 'dark' || (!saved && prefers)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  // 点击切换
  toggle.addEventListener('click', function() {
    var current = document.documentElement.getAttribute('data-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();
