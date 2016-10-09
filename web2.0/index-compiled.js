'use strict';

$(function () {
    var box = $('#box');
    var colNum = 5;
    var eleLength = $('#box').find('li').length;
    var boxWidth = box.width();
    box.find('li').width(boxWidth / colNum - 7);
    $('#active-block').width(boxWidth / colNum * 2 - 6);
    $('#active-block').height(223 * 2);

    box.find('li').each(function (index, item) {
        $(item).mouseenter(function (e) {
            $('#active-block').hide();
            console.log('show');
            clearTimeout(window.timer);
            window.timer = null;
            var posLeft = index % colNum == colNum - 1 ? index % colNum - 1 : index % colNum;
            var posTop = eleLength - index <= colNum ? Math.floor(index / colNum) - 1 : Math.floor(index / colNum);
            window.timer = setTimeout(function () {
                //console.log(posLeft, posTop, boxWidth / colNum * posLeft, $(item).height() * posTop);
                $('#active-block').css('left', boxWidth / colNum * posLeft).css('top', 3 * (posTop + 1) + 223 * posTop);
                $('#active-block').show();
            }, 500);
        });
    });
});

//# sourceMappingURL=index-compiled.js.map