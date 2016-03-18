var list = document.getElementById("list");
var page = document.getElementById("page");
var page_list = document.getElementById("page_list");
var search = document.getElementById("search");

var total = 0;
var total_page = 0;
var page_number = 10;
var cur_page = 1;
utils.ajax("data.json", function (data) {
    total = data.length;
    total_page = Math.ceil(total / page_number);
    bind_page();
    bind_data(cur_page, page_number, data);
    page.onclick = function (e) {
        e = e || window.event;
        var target = e.target || e.srcElement;
        if (target.tagName.toLowerCase() == "li") {
            cur_page = Number(target.innerHTML);
        } else if (target.id == "first") {
            cur_page = 1;
        } else if (target.id == "last") {
            cur_page = total_page;
        } else if (target.id == "prev") {
            cur_page = cur_page > 1 ? cur_page - 1 : cur_page;
        } else if (target.id == "next") {
            cur_page = cur_page < page_number ? cur_page + 1 : cur_page;
        } else if (target.id == "search") {
            return;
        }
        bind_data(cur_page, page_number, data);
        changeBg();
    }

    search.onkeyup = function (e) {
        e || window.event;
        if (e.keyCode == 13) {
            var value = Number(this.value);
            if (!isNaN(value) && value > 0 && value <= total_page) {
                cur_page = value;
                bind_data(cur_page, page_number, data);
                changeBg();
            }
        }
    }

});

function bind_page() {
    var frg = document.createDocumentFragment();
    for (var i = 0; i < total_page; i++) {
        var current_class = ((i + 1) == cur_page) ? "select" : "";
        var li = document.createElement("li");
        li.className = current_class;
        li.innerHTML = (i + 1);
        frg.appendChild(li);
    }
    page_list.appendChild(frg);
}

function bind_data(cur_page, page_number, data) {
    var start_index = (cur_page - 1) * page_number;
    var end_index = cur_page * page_number - 1;

    var str = "";
    for (var i = start_index; i <= end_index; i++) {
        str += "<li>";
        for (var key in data[i]) {
            str += "<span>" + (key == "sex" ? (data[i][key] == 1 ? "男" : "女") : data[i][key]) + "</span>";
        }
        str += "</li>";
    }
    list.innerHTML = str;
}

function changeBg() {
    console.log(cur_page);
    var page_li = page_list.getElementsByTagName("li");
    for (var i = 0; i < page_li.length; i++) {
        var select_class = cur_page == (i + 1) ? "select" : "";
        page_li[i].className = select_class;
    }
}

