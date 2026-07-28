function OnClickButton() {

  var start = confirm('Вы уверены?');

  if (start) {
    
    var firstName = prompt('Введите ваше имя:');
    var lastName  = prompt('Введите вашу фамилию:');
    var address   = prompt('Введите ваш адрес:');
    var mood      = prompt('Какое у вас сейчас настроение?');

 
    var checkText = 
      'Проверьте правильность введенных данных:\n\n' +
      'Имя: ' + firstName + '\n' +
      'Фамилия: ' + lastName + '\n' +
      'Адрес: ' + address + '\n' +
      'Настроение: ' + mood + '\n\n' +
      'Все данные корректны?';


    var isCorrect = confirm(checkText);

    if (isCorrect) {
    
      console.log('--- Анкета пользователя ---');
      console.log('Имя:', firstName);
      console.log('Фамилия:', lastName);
      console.log('Адрес:', address);
      console.log('Настроение:', mood);
      
      alert('Данные успешно сохранены в консоли!');
    } else {
      alert('Заполнение отменено или содержит ошибки. Попробуйте снова.');
    }

  } else {
    alert('Вы нажали Отмена');
  }
}

const moodSelect = document.getElementById('mood-select');

    // Прослушивание изменения выбора в выпадающем списке
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