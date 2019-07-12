 //var d = "<div class='maple'>🍁<div>";
 var d = "<img class='maple' src='img/fengye.png' />"
    setInterval(function () {
        var f = $(document).width();
        var e = Math.random() * f - 300; // 枫叶的定位left值
        var o = 0.5 + Math.random(); // 枫叶的透明度
        var fon = 18 + Math.random() * 10; // 枫叶大小
        var l = e - 100 + 500 * Math.random(); // 枫叶的横向位移
        var k = 8000 + 5000 * Math.random();
        var deg = Math.random() * 360; // 枫叶的方向
        var degChange = Math.random() * 360; // 枫叶的方向
        $(d).clone().appendTo(".body").css({
            left: e + "px",
            opacity: o,
            transform: "rotate(" + deg + "deg)",
            "width": fon,
        }).animate({
            top: "550px",
            left: l + "px",
            opacity: 0.1,
//           transform: "rotate(" + degChange + "deg)",
        }, k, "linear", function () {
            $(this).remove()
        })
    }, 1500)
