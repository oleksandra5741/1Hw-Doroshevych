$(function(){
    var ONE_ROW_TEMPLATE = $(".OneRow").html();
    var $LIST = $(".LIST");
    var $LISTrbought = $(".FINAL");
    var $LISTrleft = $(".LEFT");
    var ONE_BOUGHT_ITEM_TEMPLATE = $(".LETEM").html();
    var ONE_LEFT_ITEM_TEMPLATE = $(".FINTEM").html();
    var $ENTERING = $(".FORMforADD");
    function ADDPRODUCT(CAPTION) {
        var $NODE = $(ONE_ROW_TEMPLATE);
        var $NODEL = $(ONE_LEFT_ITEM_TEMPLATE);
        var $NODEFIN = $(ONE_BOUGHT_ITEM_TEMPLATE);
        var QUAN = 1;
        var $QUAN_LABE = $NODE.find(".LABEL");
        $QUAN_LABE.text(QUAN);
        var $QUAN_LABE_right = $NODEL.find(".NUMBER");
        $QUAN_LABE_right.text(QUAN);
        var $QUAN_label_bought = $NODEFIN.find(".NUMBER");
        $QUAN_label_bought.text(QUAN);
        $NODEL.find(".TEXT").text(CAPTION);
        $NODEFIN.find(".TEXT").text(CAPTION);
        $NODE.find(".PRODUCT").text(CAPTION);
        $NODEFIN.hide();
        $NODE.find(".NOTCHECKED").css("display","none");
        $NODE.find(".NAME").hide();
        $NODE.find(".PRODUCT").click(function() {
            $NODE.find(".PRODUCT").hide();
            $NODE.find(".NAME").show();
            $NODE.find(".NAME").val(CAPTION);
            $NODE.find(".NAME").focus();});
        $NODE.find(".NAME").focusout(function() {
            CAPTION = $NODE.find(".NAME").val();
            $NODE.find(".NAME").hide();
            $NODE.find(".PRODUCT").show();
            if (CAPTION.trim()){
                $NODE.find(".PRODUCT").text(CAPTION);
                $NODEL.find(".TEXT").text(CAPTION);
                $NODEFIN.find(".TEXT").text(CAPTION);
            }});
        $NODE.find(".MINUS").click(function() {
            $NODE.find(".LABEL").fadeOut("normal", function(){
                if (QUAN > 1) {
                    QUAN--;
                    $QUAN_LABE.text(QUAN);
                    $QUAN_LABE_right.text(QUAN);
                    $QUAN_label_bought.text(QUAN);
                    if (QUAN === 1){
                        $NODE.find(".MINUS").css("opacity","0.5");
                        $NODE.find(".MINUS").prop("disabled", true);
                    }}});
            $NODE.find(".NAME").keydown(function(e) {
                if (e.which === 13) {
                    CAPTION = $NODE.find(".NAME").val();
                    $NODE.find(".NAME").hide();
                    $NODE.find(".PRODUCT").show();
                    if (CAPTION.trim()){
                        $NODE.find(".PRODUCT").text(CAPTION);
                        $NODEL.find(".TEXT").text(CAPTION);
                        $NODEFIN.find(".TEXT").text(CAPTION);
                    }}})
            $NODE.find(".LABEL").fadeIn();});
        $NODE.find(".CHECKED").click(function(){
            $NODE.fadeOut("normal", function() {
                $NODE.find(".CHECKED").css("display","none");
                $NODE.find(".NOTCHECKED").css("display","inline");
                $NODE.find(".DELETE").css("display","none");
                $NODE.find(".PLUS").css("visibility","hidden");
                $NODE.find(".MINUS").css("visibility","hidden");
                $NODE.find(".PRODUCT").css("textDecoration","line-through");});
            $NODEFIN.show();
            $NODEL.hide();
            $NODE.fadeIn("normal");});
        $NODE.find(".NOTCHECKED").click(function(){
            $NODE.fadeOut("normal", function() {
                $NODE.find(".CHECKED").css("display","inline");
                $NODE.find(".NOTCHECKED").css("display","none");
                $NODE.find(".DELETE").css("display","inline");
                $NODE.find(".PLUS").css("visibility","visible");
                $NODE.find(".MINUS").css("visibility","visible");
                $NODE.find(".PRODUCT").css("textDecoration","none");});
            $NODEFIN.hide();
            $NODEL.show();
            $NODE.fadeIn("normal");});
        $NODE.find(".DELETE").click(function(){
            $NODE.slideUp("normal", function () {
                $NODE.remove();
                $NODEL.remove();
            });});
        $NODE.find(".PLUS").click(function() {
            $NODE.find(".LABEL").fadeOut("normal",function(){
                QUAN++;
                $QUAN_LABE.text(QUAN);
                $QUAN_LABE_right.text(QUAN);
                $QUAN_label_bought.text(QUAN);
                if (QUAN>1){
                    $NODE.find(".MINUS").css("opacity", "1");
                    $NODE.find(".MINUS").prop("disabled", false);
                }});
            $NODE.find(".LABEL").fadeIn();});
        $NODE.find(".MINUS").css("opacity","0.5");
        $NODE.find(".MINUS").prop("disabled", true);
        $LIST.append($NODE);
        $LISTrleft.append($NODEL);
        $LISTrbought.append($NODEFIN);}
    $(".ADDItem").click(function() {
        var name = $ENTERING .val();
        if (name.trim()){
            ADDPRODUCT(name);
            $ENTERING .val("");
            $ENTERING .focus();
        }});
    $ENTERING .keydown(function(e){
        if (e.which===13){
            var name = $ENTERING .val();
            if (name.trim()){
                ADDPRODUCT(name);
                $ENTERING .val("");
                $ENTERING .focus();
            }}});
    ADDPRODUCT("Печиво");
    ADDPRODUCT("Помідори");
    ADDPRODUCT("Сир");
});
