jQuery(document).ready(function ($) {

    $("#burger").click(function (e){
        e.preventDefault();
        $("#container-menu nav").toggleClass("open");
    });

});