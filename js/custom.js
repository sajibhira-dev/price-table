
  document.addEventListener("DOMContentLoaded", function () {
    // একাধিক প্রাইস সেকশন খুঁজে বের করি
    const priceSections = document.querySelectorAll('.price_section');

    priceSections.forEach(section => {
      const seeAllButtons = section.querySelectorAll('.see-all');
      const seeLessButtons = section.querySelectorAll('.see-less');
      const allColumns = section.querySelectorAll('.card');
      const monthlyButton = section.querySelector('#monthlyButton');
      const yearlyButton = section.querySelector('#yearlyButton');
      const allMonthlyCells = section.querySelectorAll('.monthly');
      const allYearlyCells = section.querySelectorAll('.yearly');

      // See All
      seeAllButtons.forEach(button => {
        button.addEventListener('click', () => {
          allColumns.forEach(col => col.classList.add('highlight'));
          seeAllButtons.forEach(btn => btn.style.display = 'none');
          seeLessButtons.forEach(btn => btn.style.display = 'inline-flex');
        });
      });

      // See Less
      seeLessButtons.forEach(button => {
        button.addEventListener('click', () => {
          allColumns.forEach(col => col.classList.remove('highlight'));
          seeLessButtons.forEach(btn => btn.style.display = 'none');
          seeAllButtons.forEach(btn => btn.style.display = 'inline-flex');
        });
      });

      // Toggle View Function
      function toggleView(view) {
        if (view === 'monthly') {
          monthlyButton.classList.add('active');
          yearlyButton.classList.remove('active');
          allMonthlyCells.forEach(cell => cell.classList.remove('hidden'));
          allYearlyCells.forEach(cell => cell.classList.add('hidden'));
        } else {
          yearlyButton.classList.add('active');
          monthlyButton.classList.remove('active');
          allYearlyCells.forEach(cell => cell.classList.remove('hidden'));
          allMonthlyCells.forEach(cell => cell.classList.add('hidden'));
        }
      }

      // Initial load
      toggleView('yearly');

      // Add click handlers for toggle buttons
      if (monthlyButton && yearlyButton) {
        monthlyButton.addEventListener('click', () => toggleView('monthly'));
        yearlyButton.addEventListener('click', () => toggleView('yearly'));
      }
    });
  });

