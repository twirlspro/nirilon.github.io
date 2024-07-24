// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    let balanceElement = document.getElementById('balance');
    let balance = 843400;

    function updateBalance() {
        balance += 23; // Увеличиваем баланс на 100 каждую секунду
        balanceElement.innerText = '$ ' + balance.toLocaleString(); // Обновляем текст элемента
    }

    setInterval(updateBalance, 1000); // Обновляем баланс каждую секунду

    // Получаем имя пользователя из URL
    const urlParams = new URLSearchParams(window.location.search);
    const userName = urlParams.get('user_name');
    
    if (userName) {
        const profileName = document.getElementById('profile-name');
        profileName.innerText = userName;
    }
});
