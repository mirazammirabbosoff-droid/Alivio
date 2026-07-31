
const moodSelect = document.getElementById('mood-select');

    
    moodSelect.addEventListener('change', function() {
      

      
    });

function ConsoleWr() {
  console.log()
}
function ConsoleWr(submit) {
  
  const selectedMood = moodSelect.value;

  if(selectedMood === 'sad') {
        alert('just be happ bro');
      } else if (selectedMood === 'happy') {
        alert('keep smiling bro!');
      } else if (selectedMood === 'angry') {
        alert('calm down bro, take a deep breath');
      } else if (selectedMood === 'tired') {
        alert('get some rest bro!');
      } else if (selectedMood === 'kind') {
        alert('you are awesome bro!');
      }
}  
