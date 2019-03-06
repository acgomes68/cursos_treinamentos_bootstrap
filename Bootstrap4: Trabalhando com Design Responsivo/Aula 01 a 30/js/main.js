jQuery(document).ready(function($){
    // Equivalente ao load de nossa página
    
    //$('#exampleModal').modal({backdrop: false, keyboard: false, show: false});
    //$("#exampleModal").modal("show");

    $('#exampleModal').modal({backdrop: false, keyboard: false});
    
    setTimeout(function() {
        $('#exampleModal').modal('hide');    
    }, 2000);
    
    $('.ttp').tooltip({
        animation: false,
        delay: {show: 500, hide: 100},
        title: 'Título Padrão',
        trigger: 'click'
    });
    
    $('.ppv').popover({
        title: 'Título Popover',
        trigger: 'hover focus'
    });
    
    $('.btnjs').button();
    
    $('#troca-estado').click(function() {
        var btn = $(this);
        btn.button('toggle').text('Carregando...');
        
        setTimeout(function(){
            btn.text('Carregar algo').button('toggle');
        }, 3000);
    });
    
});
