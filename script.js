document.getElementById('theme-toggle').addEventListener('click', function() {
  const body = document.body;
body.classList.toggle('dark-theme');
   body.classList.toggle('light-theme');


    const themeToggleIcon = document.getElementById('theme-toggle');
    if (body.classList.contains('dark-theme')) {
    themeToggleIcon.classList.remove('fa-sun');
    themeToggleIcon.classList.add('fa-moon');
    } 
    else {
    themeToggleIcon.classList.add('fa-sun');
    themeToggleIcon.classList.remove('fa-moon');
    }
});


// Placeholder for adding event listeners to your buttons
document.getElementById('createNotes').addEventListener('click', function() {
    window.location.href = 'index1.html';
    // Placeholder for future speech recognition functionality
});

document.getElementById('generateEmail').addEventListener('click', function() {
    // Placeholder for future email generation functionality
    window.location.href = 'index2.html';
});
