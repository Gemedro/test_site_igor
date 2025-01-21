// Обратная связь начало
document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.querySelector("#phone");

  phoneInput.addEventListener("input", function () {
    let value = phoneInput.value.replace(/\D/g, ""); // Удаляем все нечисловые символы

    // Начало с +7
    if (!value.startsWith("7")) {
      value = "7" + value;
    }

    // Ограничиваем длину до 11 символов (формат +7(XXX)XXX-XX-XX)
    value = value.substring(0, 11);

    // Форматируем
    let formattedValue = "+7";
    if (value.length > 1) {
      formattedValue += "(" + value.substring(1, 4);
    }
    if (value.length >= 4) {
      formattedValue += ")" + value.substring(4, 7);
    }
    if (value.length >= 7) {
      formattedValue += "-" + value.substring(7, 9);
    }
    if (value.length >= 9) {
      formattedValue += "-" + value.substring(9, 11);
    }

    // Обновляем значение
    phoneInput.value = formattedValue;
  });

  phoneInput.addEventListener("keydown", function (event) {
    if (event.key === "Backspace") {
      const cursorPos = phoneInput.selectionStart;
      if (cursorPos > 0) {
        const rawValue = phoneInput.value.replace(/\D/g, ""); // Текущее "чистое" значение
        let newValue = rawValue.substring(0, rawValue.length - 1); // Удаляем последнюю цифру
        phoneInput.value = formatPhone(newValue);
        phoneInput.setSelectionRange(cursorPos - 1, cursorPos - 1); // Ставим курсор
        event.preventDefault(); // Предотвращаем стандартное поведение
      }
    }
  });

  function formatPhone(value) {
    let formattedValue = "+7";
    if (value.length > 1) {
      formattedValue += "(" + value.substring(1, 4);
    }
    if (value.length >= 4) {
      formattedValue += ")" + value.substring(4, 7);
    }
    if (value.length >= 7) {
      formattedValue += "-" + value.substring(7, 9);
    }
    if (value.length >= 9) {
      formattedValue += "-" + value.substring(9, 11);
    }
    return formattedValue;
  }

  phoneInput.addEventListener("focus", function () {
    if (phoneInput.value === "") {
      phoneInput.value = "+7(";
    }
  });

  phoneInput.addEventListener("blur", function () {
    if (phoneInput.value === "+7(") {
      phoneInput.value = "";
    }
  });
});
// Обратная связь конец

