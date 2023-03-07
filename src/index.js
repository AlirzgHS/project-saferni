import 'bootstrap'
import 'jquery/dist/jquery'
import '@popperjs/core'
import './sass/style.scss'
import '@fortawesome/fontawesome-free/js/all'



// $(function(){
//     let modalId = $('#image-gallery');
//     //gallery
//     loadGallery(true, 'a.thumbnail');

//     //This function disables buttons when needed
//     function disableButtons(counter_max, counter_current) {
//       $('#show-previous-image, #show-next-image')
//         .show();
//       if (counter_max === counter_current) {
//         $('#show-next-image')
//           .hide();
//       } else if (counter_current === 1) {
//         $('#show-previous-image')
//           .hide();
//       }
//     }

//     function loadGallery(setIDs, setClickAttr) {
//       let current_image,
//         selector,
//         counter = 0;

//       $('#show-next-image, #show-previous-image')
//         .on('click', function () {
//           if ($(this)
//             .attr('id') === 'show-previous-image') {
//             current_image--;
//           } else {
//             current_image++;
//           }

//           selector = $('[data-image-id="' + current_image + '"]');
//           updateGallery(selector);
//         });

//       function updateGallery(selector) {
//         let $sel = selector;
//         current_image = $sel.data('image-id');
//         $('#image-gallery-title')
//           .text($sel.data('title'));
//         $('#image-gallery-image')
//           .attr('src', $sel.data('image'));
//         disableButtons(counter, $sel.data('image-id'));
//       }

//       if (setIDs == true) {
//         $('[data-image-id]')
//           .each(function () {
//             counter++;
//             $(this)
//               .attr('data-image-id', counter);
//           });
//       }
//       $(setClickAttr)
//         .on('click', function () {
//           updateGallery($(this));
//         });
//     }
// });


$("#signup").click(function() {
    $("#first").fadeOut("fast", function() {
        $("#second").fadeIn("fast");
    });
});
    
$("#signin").click(function() {
    $("#second").fadeOut("fast", function() {
        $("#first").fadeIn("fast");
    });
});
    
    
      
$(function() {
    $("form[name='login']").validate({
        rules: {
        
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                
            }
        },
        messages: {
            email: "Please enter a valid email address",
            
            password: {
                required: "Please enter password",
                
            }
        
        },
        submitHandler: function(form) {
            form.submit();
        }
    });
});
             
    
    
$(function() {
    
    $("form[name='registration']").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 5
            }
        },
    
        messages: {
            firstname: "Please enter your firstname",
            lastname: "Please enter your lastname",
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            email: "Please enter a valid email address"
        },
    
        submitHandler: function(form) {
            form.submit();
        }
    });
});
    
document.getElementById("fullYear").innerHTML = new Date().getFullYear();



