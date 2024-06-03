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