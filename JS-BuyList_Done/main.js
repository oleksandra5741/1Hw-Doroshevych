$(function(){

    var $list = $(".bl-list");
    var ONE_ROW_TEMPLATE = $(".one-row-template").html();

    var $list_right_left = $(".bl-left");
    var $list_right_bought = $(".bl-final");
    var ONE_LEFT_ITEM_TEMPLATE = $(".final-template").html();
    var ONE_BOUGHT_ITEM_TEMPLATE = $(".left-template").html();

    var $input = $(".addForm");

    function addItem(title) {
        var $node = $(ONE_ROW_TEMPLATE);
        var $nodeLeft = $(ONE_LEFT_ITEM_TEMPLATE);
        var $nodeFinal = $(ONE_BOUGHT_ITEM_TEMPLATE);

        var quantity = 1;

        var $quantity_label = $node.find(".bl-label");
        $quantity_label.text(quantity);

        var $quantity_label_right = $nodeLeft.find(".bl-number");
        $quantity_label_right.text(quantity);

        var $quantity_label_bought = $nodeFinal.find(".bl-number");
        $quantity_label_bought.text(quantity);

        $node.find(".bl-product").text(title);
        $nodeLeft.find(".bl-text").text(title);
        $nodeFinal.find(".bl-text").text(title);

        $nodeFinal.hide();
        $node.find(".bl-name").hide();

        $node.find(".unbought").css("display","none");

        $node.find(".bl-product").click(function() {
            $node.find(".bl-product").hide();
            $node.find(".bl-name").show();
            $node.find(".bl-name").val(title);
            $node.find(".bl-name").focus();
        });

        $node.find(".bl-name").focusout(function() {
            title = $node.find(".bl-name").val();
            $node.find(".bl-name").hide();
            $node.find(".bl-product").show();

            if (title.trim()){
                $node.find(".bl-product").text(title);
                $nodeLeft.find(".bl-text").text(title);
                $nodeFinal.find(".bl-text").text(title);
            }
        });

        $node.find(".bl-name").keydown(function(e) {
            if (e.which === 13) {
                title = $node.find(".bl-name").val();
                $node.find(".bl-name").hide();
                $node.find(".bl-product").show();

                if (title.trim()){
                    $node.find(".bl-product").text(title);
                    $nodeLeft.find(".bl-text").text(title);
                    $nodeFinal.find(".bl-text").text(title);
                }
            }
        })

        $node.find(".bl-minus").click(function() {
            $node.find(".bl-label").fadeOut("normal", function(){
                if (quantity > 1) {
                    quantity--;
                    $quantity_label.text(quantity);
                    $quantity_label_right.text(quantity);
                    $quantity_label_bought.text(quantity);

                    if (quantity === 1){
                        $node.find(".bl-minus").css("opacity","0.5");
                        $node.find(".bl-minus").prop("disabled", true);
                    }
                }
            });
            $node.find(".bl-label").fadeIn();
        });

        $node.find(".bl-plus").click(function() {
            $node.find(".bl-label").fadeOut("normal", function() {
                quantity++;
                $quantity_label.text(quantity);
                $quantity_label_right.text(quantity);
                $quantity_label_bought.text(quantity);
                if (quantity > 1) {
                    $node.find(".bl-minus").css("opacity", "1");
                    $node.find(".bl-minus").prop("disabled", false);
                }
            });
            $node.find(".bl-label").fadeIn();
        });

        $node.find(".bought").click(function(){
            $node.fadeOut("normal", function() {
                $node.find(".bought").css("display","none");
                $node.find(".unbought").css("display","inline");
                $node.find(".bl-delete").css("display","none");
                $node.find(".bl-plus").css("visibility","hidden");
                $node.find(".bl-minus").css("visibility","hidden");
                $node.find(".bl-product").css("textDecoration","line-through");
            });

            $nodeFinal.show();
            $nodeLeft.hide();

            $node.fadeIn("normal");
        });

        $node.find(".unbought").click(function(){
            $node.fadeOut("normal", function() {
                $node.find(".bought").css("display","inline");
                $node.find(".unbought").css("display","none");
                $node.find(".bl-delete").css("display","inline");
                $node.find(".bl-plus").css("visibility","visible");
                $node.find(".bl-minus").css("visibility","visible");
                $node.find(".bl-product").css("textDecoration","none");
            });

            $nodeFinal.hide();
            $nodeLeft.show();

            $node.fadeIn("normal");
        });

        $node.find(".bl-delete").click(function(){
            $node.slideUp("normal", function () {
                $node.remove();
                $nodeLeft.remove();
            });
        });

        $node.find(".bl-minus").css("opacity","0.5");
        $node.find(".bl-minus").prop("disabled", true);

        $list.append($node);
        $list_right_left.append($nodeLeft);
        $list_right_bought.append($nodeFinal);
    }

    $(".add").click(function() {
        var name = $input.val();

        if (name.trim()) {
            addItem(name);
            $input.val("");
            $input.focus();
        }
    });

    $input.keydown(function(e) {
        if (e.which === 13) {
            var name = $input.val();

            if (name.trim()) {
                addItem(name);
                $input.val("");
                $input.focus();
            }
        }
    });

    addItem("Помідори");
    addItem("Печиво");
    addItem("Сир");
});
