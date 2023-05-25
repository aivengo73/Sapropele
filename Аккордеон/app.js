//считываем все боксы массив из боксов
const boxes = Array.from(document.querySelectorAll('.box'));

// проходим по массиву и навешиваем слушателя событий на каждый из боксов и при клике вызываем функцию boxHandler
boxes.forEach((box) => {
  box.addEventListener("click", boxHandler) 
});

// В boxHandler передаём событие event
function boxHandler(e) {
  
  e.preventDefault(); // стандартное поведение нашего бокса

  let currentBox = e.target.closest(".box"); //  эта переменная будет содержать информацию по какому боксу был 'click'. В e.target вернёт место события, closest(".box") вернёт ближайшее имя родителя

  let currentContent = e.target.nextElementSibling; // вернёт нам текущий контент

  currentBox.classList.toggle("active");
   // если уже есть класс 'active' его уберёт, если нет добавит. 

  if (currentBox.classList.contains("active")) {            // условие чтобы box раскрывался scrollHeight плавно
    currentContent.style.maxHeight = currentContent.scrollHeight + "px";
  } else { currentContent.style.maxHeight = 0;              // закрывался

  }
}