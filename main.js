
const moodSelect = document.getElementById('mood-select');

    
    moodSelect.addEventListener('change', function() {
      const selectedMood = moodSelect.value;

      if (selectedMood === 'sad') {
        alert('just be happy bro');
      } else if (selectedMood === 'happy') {
        alert('keep smiling bro!');
      } else if (selectedMood === 'angry') {
        alert('calm down bro, take a deep breath');
      } else if (selectedMood === 'tired') {
        alert('get some rest bro!');
      } else if (selectedMood === 'kind') {
        alert('you are awesome bro!');
      }
    });