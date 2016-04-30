var tool = {
    loaded_Num: 0,
    main: document.querySelector("#main"),
    load_img: function (img_ary, selector) {
        for (var i = 0; i < img_ary.length; i++) {
            var _this = this;
            var img = new Image();
            img.src = "img/" + img_ary[0];
            img.onload = function () {
                _this.loaded_Num++;
                process = _this.loaded_Num / (nlength = img_ary.length);
                window.timer = setInterval(function () {
                    var currentProcess = parseInt(selector.innerHTML) / 100;
                    if (currentProcess < process) {
                        selector.innerHTML = Math.ceil((currentProcess + 0.01) * 100) + "%";
                    }
                }, 10);

                if (nlength == _this.loaded_Num) {
                    selector.parentNode.style.opacity = 0;
                    selector.innerHTML = parseFloat(process * 100) + "%";
                    clearInterval(window.timer);
                    window.timer = null;
                    return;

                }
            }
        }
        window.timer = setTimeout(function () {
            _this.main.removeChild(selector.parentNode);
            _this.titlePage();
        }, 1500);
    },
    titlePage: function () {
        var title = document.querySelector("#title");
        title.className = "activity_" + title.id;

        var ps = document.querySelectorAll(".desc>p");
        {
            [].forEach.call(ps, function (item, index) {
                item.style.transition = "1s ease-in-out " + ((index + 1) * 0.7) + "s";
                item.style.webkitTransition = "1s ease-in-out " + ((index + 1) * 0.7) + "s";
            })
        }

        var finger = document.querySelectorAll(".desc>.finger");
        window.addEventListener("touchend", function () {
            title.style.transform = "translate(-10rem,0)";
            title.style.webkitTransform = "translate(-10rem,0)";
            title.style.transition = "1.2s";
            title.style.webkitTransition = "1.2s";
        }, false);

    }
};

var img_ary = ["fingerprint.jpg", "iPhone6.png"];

var load = document.querySelector("#loading>.load");
tool.load_img(img_ary, load);
//tool.titlePage();