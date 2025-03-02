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


let activeFilters = [];

function filterSelection(filter) {
    const allBtns = document.querySelectorAll("#myBtnContainer .btn");

    if (filter === 'all') {
        activeFilters = [];
        allBtns.forEach(btn => btn.classList.remove('active'));
        document.querySelector(".btn[data-filter='all']").classList.add('active');
    } else {
        const btn = document.querySelector(`.btn[data-filter="${filter}"]`);
        const index = activeFilters.indexOf(filter);

        if (index > -1) {
            activeFilters.splice(index, 1);
            btn.classList.remove('active');
        } else {
            activeFilters.push(filter);
            btn.classList.add('active');
        }

        document.querySelector(".btn[data-filter='all']").classList.remove('active');
    }

    showFilteredDivs();
}

function showFilteredDivs() {
    const divs = document.querySelectorAll(".filterDiv");

    divs.forEach(div => {
        const classList = Array.from(div.classList);
        const matches = activeFilters.every(filter => classList.includes(filter));

        if (matches || activeFilters.length === 0) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    });
}

// Initial call to show all divs
showFilteredDivs();




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