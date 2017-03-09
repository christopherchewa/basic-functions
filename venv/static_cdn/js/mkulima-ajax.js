
$(document).ready(function(){
	
	
	$('.taps').click(function(){
	    var productid;
	    productid = $(this).attr("data-productid");

	    

	    $.ajax({
	    	url: '/products/tap_product/',
	    	data: {'product_id': productid},
	    	success: function(data){
	             
	               

	           }          
	               
	   
			
			 });
	    });

});

$(document).ready(function(){

	$('.trashes').click(function(){
	    var productid;
	    productid = $(this).attr("data-productid");
	    $.get('/products/trash_product/', {product_id: productid}, function(data){
	               $('#trash_count').html(data);
	               $('#trashes').hide();
	    });
	});

});