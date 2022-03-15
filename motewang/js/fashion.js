// 初始化导航高亮方法
function active(dom) {
    $(dom).each(function (index, ele) {
      if ($(ele).hasClass("active")) {
        $(ele).addClass("active").siblings().removeClass("active");
        $(".navbar-left li").find("a").css("color", "#b7b7b7");
        $(ele).find("a").css("color", "#c3924d");
      }
    });
  }
  // 调用高亮方法
  active($(".navbar-left li"));
  
  // 切换导航状态
  $(".navbar-left li").click(function () {
    // console.log($(this))
    $(this).addClass("active").siblings().removeClass("active");
    // 调用高亮方法
    active($(".navbar-left li"));
  });
  
  // 监听屏幕滚动
  $(document).on("scroll", function () {
    // console.log($(this).scrollTop())
    // 如果滚动距离大于导航条的高度，改变导航条样式
    if ($(this).scrollTop() > $(".navbar").height()) {
      $(".navbar_model").css("backgroundColor", "white");
      $(".navbar-left li>a").css("color", "#2e2e2e");
      $(".navbar-left .active>a").css("color", "#c3924d");
      $(".navbar-nav").css("marginLeft", "-15px");
      $(".titleLogo").attr(
        "src",
        "https://ssl.chengdumote.com/wp-content/themes/sugarbox/images/logoii.png"
      );
      // 如果滚动距离小于导航条的高度，还原导航条样式
    } else if ($(this).scrollTop() <= $(".navbar").height()) {
      $(".navbar_model").css("backgroundColor", "#000");
      $(".navbar-left li>a").css("color", "#b7b7b7");
      $(".navbar-left .active>a").css("color", "#c3924d");
      $(".navbar-nav").css("marginLeft", "0px");
      $(".titleLogo").attr(
        "src",
        "https://ssl.chengdumote.com/wp-content/themes/sugarbox/images/logo.png"
      );
    }
  });
  // 鼠标移入和移出导航链接改变样式
  $(".navbar-nav li")
    .find("a")
    .hover(
      function () {
        $(this).css("color", "#c3924d");
      },
      function () {
        $(this).css("color", "#b7b7b7");
        active($(".navbar-left li"));
      }
    );
    function autoPlay(){
      　　    time = setInterval(function(){
                  $(".ti_clone").css("margin-left","-=5px");
      　　    },100);
        }
      autoPlay();
  