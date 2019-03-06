jQuery(document).ready(function($){
    $('input[maxlength]').maxlength({
        alwaysShow: true,
        threshold: 10,
        //warningClass: "label label-success",
        warningClass: "text-light bg-success px-2",
        limitReachedClass: "text-light bg-danger px-2"
    });    
});