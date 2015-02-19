$(document).ready(function(){
    //add items with enter
    $('#textbox').keyup(function(event){
        if(event.keyCode == 13){
            event.preventDefault();
            var itemVal = $('#textbox').val();
        var itemText = '<li class="items active"><span>'+itemVal+'</span><div class="remove-item"><span>✗</span></div>'+'<div class="check"><span >✔</span></div></li>';
        $('.items-list').append(itemText);
        $('#textbox').val(' ');    
        }
    });
    //add items with click
    $('#submit-text').on('click', function(){
        var itemVal = $('#textbox').val();
        var itemText = '<li class="items active"><span>'+itemVal+'</span><div class="remove-item"><span>✗</span></div>'+'<div class="check"><span >✔</span></div></li>';
        $('.items-list').append(itemText);
        $('#textbox').val(' ');
    });
    
    //remove items with click
    $(document).on('click','.remove-item', function(){
        $(this).closest('li.items').fadeOut(400);
    });
    
    //mark items as done with click
    $(document).on('click','.check',function(){
        $(this).closest('li.items').removeClass('active');
        $(this).closest('li.items').addClass('done');
        
    });
                   
});