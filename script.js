// Tab
$('.tab-link').click(function () {

    var tabID = $(this).attr('data-tab');

    $(this).addClass('active').siblings().removeClass('active');

    $('#tab-' + tabID).addClass('active').siblings().removeClass('active');
});
// toast
(function ($) {

    $.fn.toast = function (options) {

        var settings = $.extend({
            type: 'normal',
            message: null
        }, options);

        var item = $('<div class="notification ' + settings.type + '"><span>' + settings.message + '</span></div>');
        this.append($(item));
        $(item).animate({ "right": "12px" }, "fast");
        setInterval(function () {
            $(item).animate({ "right": "-400px" }, function () {
                $(item).remove();
            });
        }, 3000);
    }

    $(document).on('click', '.notification', function () {
        $(this).fadeOut(400, function () {
            $(this).remove();
        });
    });

}(jQuery));

// $("#toast").toast({
//     message: 'This is a toast message'
// });

// $("#toast").toast({
//     type: 'success',
//     message: 'Success message'
// });

// $("#toast").toast({
//     type: 'error',
//     message: 'Error message'
// });
// Url Link
$("#input-box input").keyup(function (e) {
    var str = "";
    var str2 = "";
    $("input#blink").each(function (index) {
        str = str + $(this).val()
    });
    $("input#anchorText").each(function (index) {
        str2 = str2 + $(this).val()
    });
    //console.log(str);
    $("#cNum").val('<a href="' + str + '"><b>' + str2 + '</b></a>');
    $("#cNum1").val('[url=' + str + '][b]' + str2 + '[/b][/url]');
    $("#cNum2").val('**[' + str2 + '](' + str + ')**');
    // $("#cNum3").val('<a href="' + str + '" rel="dofollow"><b>' + str2 + '</b></a>');
    $("#digi").html('<a href="' + str + '"><b>' + str2 + '</b></a>');
    $('#btnReset').click(function () {
        $("#digi").html('Kết quả sẽ hiển thị tại đây!!!');
    });
});
// copy text
document.querySelector("#copy-cNum").onclick = function () {
    // Select the content
    document.querySelector("#cNum").select();
    // Copy to the clipboard
    document.execCommand('copy');
    // toast
    $("#toast").toast({
        type: 'success',
        message: 'Copy thành công HTML Code'
    });
};
document.querySelector("#copy-cNum1").onclick = function () {
    // Select the content
    document.querySelector("#cNum1").select();
    // Copy to the clipboard
    document.execCommand('copy');
    // toast
    $("#toast").toast({
        type: 'success',
        message: 'Copy thành công BB Code'
    });
};
document.querySelector("#copy-cNum2").onclick = function () {
    // Select the content
    document.querySelector("#cNum2").select();
    // Copy to the clipboard
    document.execCommand('copy');
    // toast
    $("#toast").toast({
        type: 'success',
        message: 'Copy thành công Formatting Syntax'
    });
};
// document.querySelector("#copy-cNum3").onclick = function () {
//     // Select the content
//     document.querySelector("#cNum3").select();
//     // Copy to the clipboard
//     document.execCommand('copy');
//     // toast
//     $("#toast").toast({
//         type: 'success',
//         message: 'Copy thành công Link Dofollow HTML. Vui lòng xem tab <b>Thông tin</b> để biết thêm thông tin và cách dùng.'
//     });
// };

// Url Img
$("#input-boximg input").keyup(function (e) {
    var str = "";
    var str2 = "";
    $("input#ilink").each(function (index) {
        str = str + $(this).val()
    });
    $("input#ialt").each(function (index) {
        str2 = str2 + $(this).val()
    });
    //console.log(str);
    $("#cImg").val('<img src="' + str + '" alt="' + str2 + '">');
    $("#cImg1").val('[img]' + str + '[/img]');
    $("#cImg2").val('![' + str2 + '](' + str + ')');
    $("#digiimg").html('<img src="' + str + '" alt="' + str2 + '" width="400px">');
    $('#btnResetimg').click(function () {
        $("#digiimg").html('Kết quả sẽ hiển thị tại đây!!!');
    });
});
// copy text
document.querySelector("#copy-cImg").onclick = function () {
    // Select the content
    document.querySelector("#cImg").select();
    // Copy to the clipboard
    document.execCommand('copy');
    // toast
    $("#toast").toast({
        type: 'success',
        message: 'Copy thành công HTML Code'
    });
};
document.querySelector("#copy-cImg1").onclick = function () {
    // Select the content
    document.querySelector("#cImg1").select();
    // Copy to the clipboard
    document.execCommand('copy');
    // toast
    $("#toast").toast({
        type: 'success',
        message: 'Copy thành công BB Code'
    });
};
document.querySelector("#copy-cImg2").onclick = function () {
    // Select the content
    document.querySelector("#cImg2").select();
    // Copy to the clipboard
    document.execCommand('copy');
    // toast
    $("#toast").toast({
        type: 'success',
        message: 'Copy thành công Formatting Syntax'
    });
};
// toast reset
document.querySelector("#btnReset").onclick = function () {
    // toast
    $("#toast").toast({
        message: 'Reset thành công!'
    });
};
// Copy All
document.querySelector("#copy-All").onclick = function () {
    // Select the content
    document.querySelector("#copyAll").select();
    // Copy to the clipboard
    document.execCommand('copy');
    // toast
    $("#toast").toast({
        type: 'success',
        message: 'Copy thành công HTML Code'
    });
};