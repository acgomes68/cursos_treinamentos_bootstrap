jQuery(document).ready(function($){
    $('.navbar-nav a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
                targetOffset = $(id).offset().top;

        $('html, body').animate({ 
            scrollTop: targetOffset - 100
        }, 500);
    });
    
    $('#frmContato').on('submit', function(e) {
        e.preventDefault();
        $('.alert-warning')
            .html('Enviando dados do formulário. Aguarde...')
            .removeClass('invisible');
        
        setTimeout(function() {
            $('.alert-warning')
                .removeClass('visible')
                .addClass('invisible')
                .html('Envio realizado!')
                .addClass('alert-success')
                .removeClass('alert-warning')
                .removeClass('invisible');
        }, 3000);
        
        $(this).each (function(){
            this.reset();
        });

        setTimeout(function() {
            $('.alert-success')
                .removeClass('visible')
                .addClass('invisible');
        }, 5000);
        
        return true;
    });
});