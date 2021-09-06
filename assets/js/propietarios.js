$(document).ready(function(){

	const opt = $('#opt').val()

	if (opt === 'people'){
		$('#empresa').hide()
	} else $('#persona').show();

	$('#opt').on('change', function () {
			$('#empresa').toggle()
			$('#persona').toggle()
	})

});