var w_chat_angel = {
    sendVideo: function (card_video) {
        var replyVideoStr = '<div class="msg_chat fl">' +
            '<div class="msg_head_img">' +
            '<img src=' + card_video.userImg + ' alt=""/>' +
            '</div>' +
            '<div class="msg_text">' +
            '<div class="user_name">' + card_video.userName + '</div>' +
            '<div class="video_image">' +
            '<img src="angel_kaifu/video_Img.png" alt=""/>' +
            '</div>' +
            '</div>' +
            '</div>';
        this.msgAnimate(replyVideoStr);
    },
    textMessage: function (message_obj, is_self) {
        var floatStr = is_self ? 'fr' : 'fl';
        replyStr = '<div class="msg_chat ' + floatStr + '">';
        replyStr += '<div class="msg_head_img">' +
            '<img src=' + message_obj.headImg + ' alt=""/>' +
            '</div>' +
            '<div class="msg_text">' +
            '<div class="user_name">' + message_obj.name + '</div>' +
            '<div class="user_text">' + message_obj.textInfo + '</div>' +
            '</div>' +
            '</div>'
        this.msgAnimate(replyStr, !is_self, is_self);
    },
    promptMessage: function (message_obj, ring_flag) {
        var promptStr = '<div class="msg_prompt"><div class="prompt_text">' + message_obj.prompt_text + '</div></div>'
        this.msgAnimate(promptStr, ring_flag);
    },
    msgAnimate: function (str, ring_flag, is_self) {
        if (ring_flag != false) {
            document.getElementById('weChat_prompt_ring').pause();
            document.getElementById('weChat_prompt_ring').play();
        }
        $(".wei_chat_angel_page1 .main").append(str);
        var last_ele = $(".main>div:last-child");
        var last_ele_pos = last_ele.offset().top + last_ele.height();
        var parent_height = $(".main").height();
        if (parseFloat(parent_height) + 300 >= last_ele_pos || is_self) {
            var currentHeight = $(".main")[0].scrollHeight;
            $(".main").animate({scrollTop: currentHeight}, 100);
        }
    },
    currenTime: function () {
        var date = new Date();
        var date_hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        var date_minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        var dateObj = {
            prompt_flag: true,
            prompt_text: date_hour + ":" + date_minute
        }
        return dateObj;
    }
};
$(function () {
    $("title").text("天使晚宴嘉宾2群（9）");
    var currentUser = {
        headImg: "adimg_sicong.jpg",
        name: "我",
    };
    //预先设定好的消息内容
    var text_message = [{
        prompt_flag: true,
        prompt_text: "提示：当前群来哦人数较多，以显示群成员昵称，你可在聊天信息中将其关闭"
    }, {
        prompt_flag: true,
        prompt_text: "邀请你加入群聊，群聊参与人员还有：开复、聪、M、陈O、小平、薇、jack马、奶茶妹妹"
    }, {
        headImg: "angel_kaifu/headimg_sicong.jpg",
        name: "思聪",
        textInfo: "新进群这人是谁？能进此群，必有大发展啊！"
    }, {
        headImg: "angel_kaifu/headimg_M.jpg",
        name: "M",
        textInfo: "此少年天庭饱满，地阁方圆，眉里藏珠，拉进来给大家看看。"
    }, {
        headImg: "angel_kaifu/headimg_cheno.jpg",
        name: "陈O",
        textInfo: "什么鬼？不是天使晚宴交流群么？"
    }, {
        headImg: "angel_kaifu/headimg_xiaoping.jpg",
        name: "小平",
        textInfo: "最近怎么样？盐多少钱一斤了？"
    }, {
        prompt_flag: true,
        prompt_text: "（陈O已退出群聊）"
    }, {
        headImg: "angel_kaifu/headimg_kaifu.jpg",
        name: "开复",
        textInfo: "@小平，听说你上一期天使晚宴投了几个不错的项目，此等好事不叫我，伐开心！😭"
    }, {
        headImg: "angel_kaifu/headimg_M.jpg",
        name: "M",
        textInfo: "一期一期来大家别着急！3.19开复专场走起"
    }, {
        headImg: "angel_kaifu/headimg_wei.jpg",
        name: "薇",
        textInfo: "天使晚宴的红酒我包了，现场能放易拉宝么？"
    }, {
        prompt_flag: true,
        prompt_text: "（薇已被M移出群聊）"
    }, {
        headImg: "angel_kaifu/headimg_mayun.jpg",
        name: "Jack马",
        textInfo: "天使晚宴我能排在哪一期？"
    }, {
        prompt_flag: true,
        prompt_text: "（Jack马已被M移出群聊）"
    }, {
        headImg: "angel_kaifu/headimg_sicong.jpg",
        name: "思聪",
        textInfo: "我呢？"
    }, {
        prompt_flag: true,
        prompt_text: "（思聪已被M移出群聊）"
    }, {
        headImg: "angel_kaifu/headimg_naichamei.jpg",
        name: "奶茶妹妹",
        textInfo: "最近投的UBER还不错！我让当家的来跟大家聊，我先回家安心养胎了！"
    }, {
        prompt_flag: true,
        prompt_text: "（奶茶妹妹邀请东东加入了聊）"
    }, {
        prompt_flag: true,
        prompt_text: "（东东与群里其他人都不是微信朋友关系，请注意隐私安全）"
    }, {
        prompt_flag: true,
        prompt_text: "（奶茶妹妹已退出群聊）"
    }, {
        prompt_flag: true,
        prompt_text: "（东东已被M移出群聊）"
    }, {
        headImg: "angel_kaifu/headimg_kaifu.jpg",
        name: "开复",
        textInfo: "@M 来的都是客，都是来捧场的，嗯嗯！"
    }, {
        headImg: "angel_kaifu/headimg_kaifu.jpg",
        name: "开复",
        textInfo: "@all  3月19日，我和@M做东，等你们来哦！"
    }];
    var card_video = {//link card
        userImg: "angel_kaifu/headimg_kaifu.jpg",
        userName: "开复"
    };


    $(".main").delegate('.video_image', 'click', function (event) {
        $(".video_bg,#myVideo").show();
        document.getElementsByTagName('video')[0].play();
    });
    $("#myVideo").on("ended", function () {
        closeVideo();
    })
    $(".video_bg").on("click", function () {
        closeVideo();
    })
    function closeVideo() {
        document.getElementsByTagName('video')[0].pause();
        $(".video_bg,#myVideo").fadeOut();
        $(".wei_chat_angel_page1").fadeOut();
        $(".wei_chat_angel_page2").fadeIn();
        // $(".wei_chat_angel_page2").animate({"left":"0"});
    }

    if (window.location.pathname == '/mobile/activities/h5/angel_kaifu') {
        $("body").css("background", "rgb(4, 2, 1)");
    }

    //加入提示
    var current_time = w_chat_angel.currenTime();
    w_chat_angel.promptMessage(current_time, false);
    w_chat_angel.promptMessage(text_message[0], false);
    w_chat_angel.promptMessage(text_message[1], false);


    //在这里调用发送消息的方法
    function intervalEvent() {
        if (count < text_message.length) {
            if (!text_message[window.count].prompt_flag) {
                w_chat_angel.textMessage(text_message[window.count++]);
            }
            else {
                w_chat_angel.promptMessage(text_message[window.count++], false);
            }
            //随机生成时间 1290-
            var time_number = Math.floor(Math.random() * 2200 + 1290);
            window.timer = setTimeout(intervalEvent, time_number);
        }
        else {
            clearTimeout(window.timer);
            window.timer = null;
            //这里调用方法发送视频 link card;
            w_chat_angel.sendVideo(card_video);
        }
    }

    //按照一定的时间间隔 自动发出消息
    window.count = 2;
    window.timer = setTimeout(intervalEvent, 1500);

    //用户发送消息
    $("#sendMsg").click(function () {
        currentUser.textInfo = $("#replyTextBox").text();
        if (!!currentUser.textInfo) {
            $("#replyTextBox").val("");
            w_chat_angel.textMessage(currentUser, true);
            window.count = text_message.length; //结束自动发送消息方法
            $("#replyTextBox").text("");
            $("#replyTextBox").focus();
        }
    })
    // 活动页btn
    // $("a").click(function(event) {
    //     return false;
    // });
    $(".enter-btn").on("touchstart", function () {
        imgSrc = $(this).find("img").attr('src');
        var imgFile = imgSrc.split("/")[4];
        var newSrc = imgFile.split(".")[0] + "_touch";
        $(this).find("img").attr('src', "/images/h5/angel_kaifu/" + newSrc + ".png");
    })
    $(".enter-btn").on("touchend", function () {
        $(this).find("img").attr('src', imgSrc);
    })
    $(".share").on("touchend", function () {
        $(".share_wrapper").show();
    })
    $(".share_wrapper").on("touchend", function () {
        $(".share_wrapper").hide();
    })
});