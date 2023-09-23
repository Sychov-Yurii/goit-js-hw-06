const formLog = document.querySelector(".login-form");
formLog.addEventListener("submit", hendlerFormLog);

function hendlerFormLog (evt) {
    evt.preventDefault();

    const { email, password } = evt.currentTarget.elements;

    if (!email.value || !password.value) {
        return alert `Всі поля повинні бути заповнені`;        
    }

    const data = {
        email: email.value,
        password: password.value,
    }
    evt.currentTarget.reset();
    console.log(data);
}
