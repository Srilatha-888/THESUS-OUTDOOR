
  const dropBtn = document.getElementById('dropBtn');
  const dropMenu = document.getElementById('dropMenu');

  dropBtn.addEventListener('click', function () {
    dropMenu.style.display = dropMenu.style.display === 'block' ? 'none' : 'block';
  });

  // Close dropdown when clicking outside
  window.addEventListener('click', function (e) {
    if (!dropBtn.contains(e.target) && !dropMenu.contains(e.target)) {
      dropMenu.style.display = 'none';
    }
  });
