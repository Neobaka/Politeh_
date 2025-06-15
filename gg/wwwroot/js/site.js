// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.



$(document).ready(function () {
	$("#optionsRadios1").change(function () {
		$('.hide').fadeIn().show();
	});

	$("#optionsRadios2").change(function () {
		$('.hide').fadeOut(300);
	});
})


// Массив для хранения активных фильтров
let activeFilters = [];

function filterSelection(filter) {
    const allBtns = document.querySelectorAll(".filter-btn");
    const showAllBtn = document.querySelector(".show-all-btn");

    if (filter === 'all') {
        // Сбрасываем все фильтры
        activeFilters = [];
        // Убираем активный класс со всех кнопок фильтров
        allBtns.forEach(btn => btn.classList.remove('active'));
        // Добавляем активный класс к кнопке "Показать все"
        showAllBtn.classList.add('active');
    } else {
        // Работаем с конкретным фильтром
        const btn = document.querySelector(`.filter-btn[data-filter="${filter}"]`);
        const index = activeFilters.indexOf(filter);

        if (index > -1) {
            // Фильтр уже активен - убираем его
            activeFilters.splice(index, 1);
            btn.classList.remove('active');
        } else {
            // Фильтр неактивен - добавляем его
            activeFilters.push(filter);
            btn.classList.add('active');
        }

        // Убираем активный класс с кнопки "Показать все"
        showAllBtn.classList.remove('active');
    }

    showFilteredDivs();
}

function showFilteredDivs() {
    const universityCards = document.querySelectorAll(".university-card");

    universityCards.forEach(card => {
        const cardFilters = card.getAttribute('data-filters').split(' ');

        if (activeFilters.length === 0) {
            // Если нет активных фильтров, показываем все карточки
            card.style.display = "flex";
        } else {
            // Проверяем, содержит ли карточка ВСЕ активные фильтры
            const matches = activeFilters.every(filter => cardFilters.includes(filter));

            if (matches) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        }
    });
}

// Initial call to show all divs
showFilteredDivs();




// Переключение между вкладками
function switchTab(tab) {
    // Убираем активные классы
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));

    // Добавляем активные классы
    event.target.classList.add('active');
    document.getElementById(tab + 'Form').classList.add('active');

    // Очищаем сообщения
    hideMessages();
}

// Обработка форм
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;

    if (!email || !password) {
        showError('Пожалуйста, заполните все поля');
        return;
    }

    showLoading(true);

    // Имитация запроса к серверу
    setTimeout(() => {
        showLoading(false);

        // Простая проверка для демонстрации
        if (email === 'test@example.com' && password === '123456') {
            showSuccess('Успешный вход! Перенаправляем в личный кабинет...');
            setTimeout(() => {
                // Здесь должен быть переход в личный кабинет
                console.log('Переход в личный кабинет');
            }, 2000);
        } else {
            showError('Неверный email или пароль');
        }
    }, 1500);
});

document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const inputs = this.querySelectorAll('input[required]');
    const name = inputs[0].value;
    const email = inputs[1].value;
    const password = inputs[2].value;
    const confirmPassword = inputs[3].value;
    const agree = this.querySelector('#agreeTerms').checked;

    if (!name || !email || !password || !confirmPassword) {
        showError('Пожалуйста, заполните все поля');
        return;
    }

    if (password !== confirmPassword) {
        showError('Пароли не совпадают');
        return;
    }

    if (!agree) {
        showError('Необходимо согласиться с условиями использования');
        return;
    }

    showLoading(true);

    // Имитация регистрации
    setTimeout(() => {
        showLoading(false);
        showSuccess('Аккаунт успешно создан! Проверьте email для активации.');
    }, 2000);
});

// Социальная авторизация
function socialLogin(provider) {
    showLoading(true);

    setTimeout(() => {
        showLoading(false);
        showSuccess(`Авторизация через ${provider === 'google' ? 'Google' : 'VK'} успешна!`);
        setTimeout(() => {
            console.log(`Вход через ${provider}`);
        }, 2000);
    }, 1500);
}

// Восстановление пароля
function showForgotPassword() {
    const email = prompt('Введите ваш email для восстановления пароля:');
    if (email) {
        showSuccess('Инструкции по восстановлению пароля отправлены на ваш email');
    }
}

// Функции для сообщений
function showSuccess(message) {
    hideMessages();
    const successEl = document.getElementById('successMessage');
    successEl.textContent = message;
    successEl.style.display = 'block';
}

function showError(message) {
    hideMessages();
    const errorEl = document.getElementById('errorMessage');
    errorEl.textContent = message;
    errorEl.style.display = 'block';
}

function hideMessages() {
    document.getElementById('successMessage').style.display = 'none';
    document.getElementById('errorMessage').style.display = 'none';
}

function showLoading(show) {
    const container = document.querySelector('.auth-right');
    if (show) {
        container.classList.add('loading');
    } else {
        container.classList.remove('loading');
    }
}

// Анимация появления формы
window.addEventListener('load', function () {
    const container = document.querySelector('.auth-container');
    container.style.opacity = '0';
    container.style.transform = 'translateY(30px)';

    setTimeout(() => {
        container.style.transition = 'all 0.8s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 100);
});

// Валидация в реальном времени
document.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('blur', function () {
        if (this.hasAttribute('required') && !this.value.trim()) {
            this.style.borderColor = '#f44336';
        } else if (this.type === 'email' && this.value && !isValidEmail(this.value)) {
            this.style.borderColor = '#f44336';
        } else {
            this.style.borderColor = 'rgba(102, 126, 234, 0.1)';
        }
    });

    input.addEventListener('input', function () {
        this.style.borderColor = 'rgba(102, 126, 234, 0.1)';
    });
});

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}



// Обработка лайков
document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', function () {
        const likesCount = this.querySelector('.likes-count');
        const heartIcon = this.querySelector('i');

        if (heartIcon.classList.contains('far')) {
            heartIcon.classList.remove('far');
            heartIcon.classList.add('fas');
            likesCount.textContent = parseInt(likesCount.textContent) + 1;
            this.classList.add('liked');
        } else {
            heartIcon.classList.remove('fas');
            heartIcon.classList.add('far');
            likesCount.textContent = parseInt(likesCount.textContent) - 1;
            this.classList.remove('liked');
        }
    });
});

// Обработка закладок
document.querySelectorAll('.bookmark-button').forEach(button => {
    button.addEventListener('click', function () {
        const bookmarkIcon = this.querySelector('i');

        if (bookmarkIcon.classList.contains('far')) {
            bookmarkIcon.classList.remove('far');
            bookmarkIcon.classList.add('fas');
        } else {
            bookmarkIcon.classList.remove('fas');
            bookmarkIcon.classList.add('far');
        }
    });
});


const feedbackBtn = document.getElementById('feedbackBtn');
const modal = document.getElementById('feedbackModal');
const closeModal = document.getElementById('closeModal');
const feedbackForm = document.getElementById('feedbackForm');

// Открытие модального окна
feedbackBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Закрытие модального окна при клике на крестик
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Обработка отправки формы
feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Здесь можно добавить логику отправки формы
    const formData = new FormData(feedbackForm);
    console.log('Отправка формы:', Object.fromEntries(formData));

    // Очистка формы и закрытие модального окна
    feedbackForm.reset();
    modal.style.display = 'none';

    // Можно добавить уведомление об успешной отправке
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
});