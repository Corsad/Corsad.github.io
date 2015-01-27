
$(document).ready(function(){
    $('.lastPost, .midPost').click( function(){     

        $(this).append('<div class="post">' + {{content}} + '</div>');
		    });
		    
		$(document).on('click', '.lastPost, .midPost', function() {
		    $(this).remove('.post');
		});

    });
});

$(document).ready(main);