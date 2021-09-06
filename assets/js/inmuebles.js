$(document).ready(function(){
	$('#filtrar').click((e)=>{
		e.preventDefault();
		const type = $('#type').val()
		const opt = $('#option').val()

		if (type != 'all' || opt != 'all')
		{		
			$('.product_item').hide()

	 		if (type != 'all' && opt != 'all')
			{
				var el = $('.product_item[tipo="'+type+'"]')
				for(let i = 0; i < el.length; i++)
				{
					if(el[i]['attributes']['cat'].value == opt)
					{
						el[i].style.display = 'block'
					}
				}
			}
			else if(opt != 'all') $('.product_item[cat="'+opt+'"]').show()
			else if(type != 'all') $('.product_item[tipo="'+type+'"]').show()
		}
		else $('.product_item').show();
	})	
})