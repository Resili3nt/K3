function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === "" || email === "" || message === "") {
        alert("Пожалуйста, заполните все поля!");
        return false;
    }

    // Простейшая валидация email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Пожалуйста, введите корректный адрес электронной почты.");
        return false;
    }

    alert("Форма успешно отправлена!");
    return true;
}
