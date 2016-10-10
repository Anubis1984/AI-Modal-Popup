$(document).ready(function () {
    // AI Modal Popup

    $("a, button, div").click(function (e) {
        var getTargetID = $(this).data("target");
        var getDismiss = $(this).data("dismiss");

        if (getTargetID != undefined) {
            $(getTargetID).fadeIn(function () {
                $(getTargetID).removeClass();
                $(getTargetID).addClass('popup-holder-show');
            });
        }

        if (getDismiss != undefined) {
            $(getDismiss).fadeOut(function (event) {
                $(getDismiss).removeClass();
                $(getDismiss).addClass('popup-holder');
            });
        }


    });
});