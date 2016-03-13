$(function() {
	$('.prayerRequest').on('click', '.prayerRequest--capsule', function() {
		console.log($(this).attr('data'));
		$('.prayerRequest').toggleClass('hide');
		$('.prayerDetails').toggleClass('hide');
	});

	$('.prayerDetails').on('click','.detailButton',function() {
		$('.prayerRequest').toggleClass('hide');
		$('.prayerDetails').toggleClass('hide');		
	});
});

