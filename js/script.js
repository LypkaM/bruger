$(document).ready(function () {
	$('.header__bruger').click(function (event) {
		$('.header__bruger,.header__menu').toggleClass('active');
		$('.body').toggleClass('lock');
	});
});