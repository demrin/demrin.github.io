/**
 * Created by demrin on 2016/11/11.
 * @author demrin
 */

/**
 * ajax 请求式
 */
(function () {
    function startAjax(url, type, requestData, succeed, failed) {
        if (type == 'get' || type == 'GET') {
            var temstrings = '&';
            for (var i in requestData) {
                if (request[i] == 'underfined' || typeof (requestData[i]) == 'underfined') {
                    temstrings = temstrings + i + '=&'
                } else {
                    temstrings = temstrings + i + '=' + requestData[i] + '&'
                }
            }
            if (url.indexOf('?')) {
                url = url + temstrings
            } else {
                url = url + '?' + temstrings
            }
        } else if (type == 'post' || type == 'POST') {
            var temstrings = new Array()
        }
    }

    /**
     * 警告提示样式
     */
    var alert;
    alert = function (msg) {

    }

    /**
     * 请求加载.....
     */
    function loading() {
        setTimeout(
            function () {
                $('#loading').hide()
            }, 5000
        )
    }

    /**
     * 页面倒计时
     */
    function countDown() {
        var t = 5;
    }

    /**
     * 检测用户是否为手机浏览器打开页面
     */
    (function () {
        // by demrin
        function checkBrowser() {
            // var ua = navigator;
            // var app = navigator.appVersion;
            // console.log(ua);
            // alert('252------' + app);
            // alert(ua.platform);
            // // alert(ua);
            // var Agents = new Array("android", "iphone", "symbianOS", "windows phone", "ipad", "ipod");
            // var flag = true;
            // for (var v = 0; v < Agents.length; v++) {
            //     if (ua.indexOf(Agents[v]) > 0) { flag = false; break; }
            // }
            // return flag;

            var browser = {
                versions: function () {
                    var u = navigator.userAgent, app = navigator.appVersion;
                    return {
                        trident: u.indexOf('Trident') > -1,                                     //IE内核  
                        presto: u.indexOf('Presto') > -1,                                       //opera内核  
                        webKit: u.indexOf('AppleWebKit') > -1,                                  //苹果、谷歌内核  
                        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,             //火狐内核  
                        mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端  
                        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),                        //ios终端  
                        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,          //android终端或者uc浏览器  
                        iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1,              //是否为iPhone或者QQHD浏览器  
                        iPad: u.indexOf('iPad') > -1,                                           //是否iPad  
                        webApp: u.indexOf('Safari') == -1                                       //是否web应该程序，没有头部与底部  
                    };
                }()
            }

            alert(" 是否为移动终端: " + browser.versions.mobile);
            alert(" ios终端: " + browser.versions.ios);
            alert(" android终端: " + browser.versions.android);
            alert(" 是否为iPhone: " + browser.versions.iPhone);
            alert(" 是否iPad: " + browser.versions.iPad);
            alert(navigator.userAgent);

        }
        // checkBrowser();

        function checkBrowser() {
            var sUserAgent = navigator.userAgent.toLowerCase();
            var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
            var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
            var bIsMidp = sUserAgent.match(/midp/i) == "midp";
            var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
            var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
            var bIsAndroid = sUserAgent.match(/android/i) == "android";
            var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
            var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
            //       alert("您的浏览设备为：");
            if (bIsAndroid) {
                alert("您的浏览设备为：安卓");
                location.href = 'https://www.yunping.com/mobile/'
            }
            if (bIsIphoneOs) {
                alert("您的浏览设备为：苹果")
            }
            if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
                alert("phone");
            } else {
                alert("您的浏览设备为：pc");
            }
        }

        checkBrowser();
        // by demrin
        

        function count(){
            var time = 60;
            var counter = document.getElementById("time");
            counter.innerHTML = time;
            var timer = setInterval(function(){
                time--;
                counter.innerHTML = time;
                if(time == 0){
                    clearInterval(timer);
                    location.href = 'priceDetail.html?valueId=' + valueId;
                    // errbox('暂无询价回复')
                }
            },1000);
        }

        function warn(e){
            $("body").append("<div id='msg'>"+
                                "<span>"+
                                "   <div id='wait'>30s</div>"+
                                // "   <h3>询价中请稍后<big class='dotting'></big></h3>"+
                                // "   <div id='time'>"+ e +
                                // "       <input type='text' id='time' value='60'>s "+
                                // "   </div>"+
                                "</span>"+
                            "</div>");
        }
    })
})()