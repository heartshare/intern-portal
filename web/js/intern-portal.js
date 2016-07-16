/**
 * Created by nkmathew on 23/06/2016.
 */

// Spinjs options for a big spinner
var BIG_SPINNER = {
    lines: 13,
    length: 33,
    width: 14,
    radius: 42,
    scale: 0.5,
    color: '#000',
};

// Display a success message
function alertSuccess(message) {
    $('.alert-box .msg').html(message);
    $('.alert-box').addClass('alert-success');
    $('.alert-box').show();
    $("#alert-box").fadeTo(3000, 500).slideUp(500, function () {
        $("#alert-box").hide();
    });
}

$(document).ready(function () {

    // Initialize bootstrap tooltip plugin
    $('[data-toggle="tooltip"]').tooltip();

    // Save the id of the last clicked tab in a cookie
    $('.tab-main > a[data-toggle="tab"]').click(function (e) {
        Cookies.set('last_tab', $(e.target).attr('href'));
    });

    // Opens the last tab before the page reload
    var lastTab = Cookies.get('last_tab');
    if (lastTab) {
        $('a[href=' + lastTab + ']').click();
    }
});
