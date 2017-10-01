/*jslint browser: true*/
/*global $, jQuery, alert*/

var LIST;
var LIST_BOUGHT;
var LIST_LEFT;
var ITEM_TEMPLATE;
var ITEM2_TEMPLATE;
var id;
function addItem(title) {
    "use strict";
    var node = $(ITEM_TEMPLATE);
    var node2 = $(ITEM2_TEMPLATE);
    node2.attr("id",id);
    node.attr("id",id);
    LIST.append(node);
    LIST_LEFT.append(node2);
    $("#"+id+".title").text(title);
    $("#"+id+".item2").text(title);
    $("#"+id+".title").click(function(){
        if($(this).css("text-decoration")!="line-through"){
            var old = $("#"+this.id+".title").text();
            if(old){
                console.log(old);
                $("#"+this.id+".title").html("<input id='" + this.id +"' class='newTitle' type='text' size ='10' value ='"+old+"'></input>");
            }
            $("input.newTitle" ).focus();
            $("input.newTitle" ).blur( function() {
                var name =  $("input.newTitle" ).val();
                if(name){
                    $("#"+this.id+".title").html(name);
                    $("#"+this.id+".item2").text(name);
                }
            });
        }
    });




    $("#"+id+".remove").click(function () {
        node.remove();
        node2.remove();
    });

    $("#"+id+".addBtn").click(function () {
        var cap = parseInt($("#"+this.id+".cap").text())+1;
        $("#"+this.id+".cap").text(cap);
        $("#"+this.id+".cap2").text(cap);
        $("#"+this.id+".remBtn").css("background-color","red");
    });

    $("#"+id+".remBtn").click(function () {
        var cap = parseInt($("#"+this.id+".cap").text())-1;
        if(cap==1){$(this).css("background-color","gray");}
        if(cap>0){
            $("#"+this.id+".cap").text(cap);
            $("#"+this.id+".cap2").text(cap);
        }

    });

    $("#"+id+".bought").click(function () {

        if($("#"+this.id+".title").css("text-decoration")=="line-through"){
            $(this).text("Kуплено");
            $("#"+this.id+".title").css("text-decoration", "none");
            $("#"+this.id+".remBtn").show();
            $("#"+this.id+".addBtn").show();
            $("#"+this.id+".remove").show();

            $("#"+this.id+".item2").css("text-decoration", "none");

            var buff = $("#"+this.id+".item2").clone();
            $("#"+this.id+".item2").remove();
            LIST_LEFT.append(buff);
            var buff = $("#"+this.id+".cap2").clone();
            $("#"+this.id+".cap2").remove();
            LIST_LEFT.append(buff);
            var buff = $("#"+this.id+".inline").clone();
            $("#"+this.id+".inline").remove();
            LIST_LEFT.append(buff);
        }
        else {
            $("#"+this.id+".title").css("text-decoration", "line-through");
            $("#"+this.id+".remBtn").hide();
            $("#"+this.id+".addBtn").hide();
            $("#"+this.id+".remove").hide();
            $(this).text("Не куплено");
            $("#"+this.id+".item2").css("text-decoration", "line-through");
            var buff = $("#"+this.id+".item2").clone();
            $("#"+this.id+".item2").remove();
            LIST_BOUGHT.append(buff);
            var buff = $("#"+this.id+".cap2").clone();
            $("#"+this.id+".cap2").remove();
            LIST_BOUGHT.append(buff);
            var buff = $("#"+this.id+".inline").clone();
            $("#"+this.id+".inline").remove();
            LIST_BOUGHT.append(buff);

        }
    });

    id++;
}

function addSomeAction () {
    $('button.add').click(function () {
        if($('.getTitle').val()){
            addItem($('.getTitle').val());
        }
    });


}

function init() {
    "use strict";
    LIST = $('.goods');
    LIST_BOUGHT = $(".b");
    LIST_LEFT = $(".l");
    ITEM_TEMPLATE = $('div.hidden').html();
    ITEM2_TEMPLATE = $('div.item2.hidden').html();
    id = 1;
    $('div.hidden').hide();
    $('.item2.hidden').hide();
    addItem("Помідори");
    addItem("Печиво");
    addItem("Сир");
    addSomeAction ();
}
