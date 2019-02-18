
function Product(name, height, body, cheast, waist, hips, neck, shoulderWidth, shoulderGirth, comment, sport) {
    this.name = name;
    this.height = height;
    this.body = body;
    this.cheast = cheast;
    this.waist = waist;
    this.hips = hips;
    this.neck = neck;
    this.shoulderWidth = shoulderWidth;
    this.shoulderGirth = shoulderGirth;
    this.comment = comment;
    this.sport = sport;

    this.compare = function (prod) {
        if ((this.name==prod.name) &&
            (this.height==prod.height) &&
            (this.body==prod.body) &&
            (this.cheast==prod.cheast) &&
            (this.waist==prod.waist) &&
            (this.hips==prod.hips) &&
            (this.neck==prod.neck) &&
            (this.shoulderWidth==prod.shoulderWidth) &&
            (this.shoulderGirth==prod.shoulderGirth) &&
            (this.comment==prod.comment)&&
            (this.sport==prod.sport))
            return true;
        else
            return false;
    }
}

function Human(number, sex){
    this.number = "Человек №"+number;
    this.sex = sex;
    this.products = new Array();
    this.addProduct = function (product) {
        this.products.push(product);
    }
}


//показать мерки Купальника
function showSwimsuit(){
    $("[name=height]").show().addClass("checkin");
    $("[name=body]").show().addClass("checkin");
    $("[name=cheast]").show().addClass("checkin");
    $("[name=waist]").show().addClass("checkin");
    $("[name=hips]").hide().removeClass("checkin");
    $("[name=neсk]").hide().removeClass("checkin");
    $("[name=shoulderWidth]").hide().removeClass("checkin");
    $("[name=shoulderGirth]").hide().removeClass("checkin");
    selectProd = "купальник";
}

//показать мерки Комбинизон
function showOveralls(){
    $("[name=height]").show().addClass("checkin");
    $("[name=body]").show().addClass("checkin");
    $("[name=cheast]").show().addClass("checkin");
    $("[name=waist]").show().addClass("checkin");
    $("[name=hips]").show().addClass("checkin");
    $("[name=neсk]").show().addClass("checkin");
    $("[name=shoulderWidth]").show().addClass("checkin");
    $("[name=shoulderGirth]").show().addClass("checkin");
    selectProd = "комбинезон";
}

//показать мерки Другое
function showOther(){
    $("[name=height]").show().addClass("checkin");
    $("[name=body]").show().addClass("checkin");
    $("[name=cheast]").show().addClass("checkin");
    $("[name=waist]").show().addClass("checkin");
    $("[name=hips]").show().addClass("checkin");
    $("[name=neсk]").show().addClass("checkin");
    $("[name=shoulderWidth]").show().addClass("checkin");
    $("[name=shoulderGirth]").show().addClass("checkin");
    selectProd = "другое";
}

//показать мерки Платье
function showDress(){
    $("[name=height]").show().addClass("checkin");
    $("[name=body]").show().addClass("checkin");
    $("[name=cheast]").show().addClass("checkin");
    $("[name=waist]").show().addClass("checkin");
    $("[name=hips]").hide().removeClass("checkin");
    $("[name=neсk]").hide().removeClass("checkin");
    $("[name=shoulderWidth]").hide().removeClass("checkin");
    $("[name=shoulderGirth]").hide().removeClass("checkin");
    selectProd = "платье";
}

//показать мерки Леггинсы
function showLeggings(){
    $("[name=height]").show().addClass("checkin");
    $("[name=body]").hide().removeClass("checkin");
    $("[name=cheast]").hide().removeClass("checkin");
    $("[name=cheast]").val('').removeClass("checkin");
    $("[name=waist]").show().addClass("checkin");
    $("[name=hips]").show().addClass("checkin");
    $("[name=neсk]").hide().removeClass("checkin");
    $("[name=shoulderWidth]").hide().removeClass("checkin");
    $("[name=shoulderGirth]").hide().removeClass("checkin");
    selectProd = "леггинсы";
}

//показать мерки Рубашка
function showShirt(){
    $("[name=height]").show().addClass("checkin");
    $("[name=body]").show().addClass("checkin");
    $("[name=cheast]").show().addClass("checkin");
    $("[name=waist]").show().addClass("checkin");
    $("[name=hips]").hide().removeClass("checkin");
    $("[name=neсk]").show().addClass("checkin");
    $("[name=shoulderWidth]").show().addClass("checkin");
    $("[name=shoulderGirth]").show().addClass("checkin");
    selectProd = "рубашка";
}

//показать мерки Штаны
function showPants(){
    $("[name=height]").show().addClass("checkin");
    $("[name=body]").hide().removeClass("checkin");
    $("[name=cheast]").hide().removeClass("checkin");
    $("[name=waist]").show().addClass("checkin");
    $("[name=hips]").show().addClass("checkin");
    $("[name=neсk]").hide().removeClass("checkin");
    $("[name=shoulderWidth]").hide().removeClass("checkin");
    $("[name=shoulderGirth]").hide().removeClass("checkin");
    selectProd = "штаны";
}

function checkInput(){
    $('.checkin').each(function(){
        if($(this).val() != ''){
            $(this).removeClass('empty');
        } else {
            $(this).addClass('empty');
        }
    });
    sizeEmpty = $(".empty").length;
}


//предустановленные настроики
$(document).ready(function(){
    selectProd = '';
    numberHuman = 1;
    numberProduct = 0;
    order = new Array();
    newHuman = true;


    $(".sportlist").val("rg");
    tsport = "Художественная гимнастика";
    $(".form-numberhumans").hide();
    $(".form-chooseproduct-rgProduct").show();
    $(".form-chooseproduct-sgProduct").hide();
    $(".form-chooseproduct-fsProduct").hide();
    $(".nextHuman").hide();
    $(".order").prop('disabled', true);
    showSwimsuit();
});

//изменине вида спорта
$(".sportlist").change(function () {
    switch ($(this).val()) {
        case "rg":
            $(".form-chooseproduct-rgProduct").show();
            $(".form-chooseproduct-sgProduct").hide();
            $(".form-chooseproduct-fsProduct").hide();
            tsport = "Художественная гимнастика";
            showSwimsuit();
            break;
        case "sg":
            $(".form-chooseproduct-sgProduct").show();
            $(".form-chooseproduct-rgProduct").hide();
            $(".form-chooseproduct-fsProduct").hide();
            tsport = "Спортивная гимнастика";
            showSwimsuit();
            break;
        case "fs":
            $(".form-chooseproduct-fsProduct").show();
            $(".form-chooseproduct-sgProduct").hide();
            $(".form-chooseproduct-rgProduct").hide();
            tsport = "Фигурное катание";
            showDress();
            break;
    }
});

//измениние вида заказа (индивидуальный или групповой)
$(".typeorder").change(function () {
    if ($(this).val()=="ind"){
        $(".form-numberhumans").hide();
        $(".nextHuman").hide();
        $("[name=numberhumans]").removeClass("checkin");
    }else {
        $(".form-numberhumans").show();
        $(".nextHuman").show();
        $("[name=numberhumans]").addClass("checkin");
        $(".nextHuman").prop('disabled', true);
    }
});

//выбор изделия Художественная гимнастика
$(".form-rg").change(function () {
    switch ($(this).val()) {
        case "rgSwimsuit":
            showSwimsuit();
            break;
        case "rgOveralls":
            showOveralls();
            break;
        case "rgOther":
            showOther();
            break;
    }
});

//выбор изделия Спортивная гимнастика
$(".form-sg").change(function () {
    switch ($(this).val()) {
        case "sgSwimsuit":
            showSwimsuit();
            break;
        case "sgLeggings":
            showLeggings();
            break;
        case "sgOther":
            showOther();
            break;
    }
});

//выбор изделия Фигурное катание
$(".form-fs").change(function () {
    switch ($(this).val()) {
        case "fsDress":
            showDress();
            break;
        case "fsOveralls":
            showOveralls();
            break;
        case "fsShirt":
            showShirt();
            break;
        case "fsPants":
            showPants();
            break;
        case "fsOther":
            showOther();
            break;
    }
});

$(".check-inp").click(function () {
    $(this).removeClass("empty");
});

//добавить следующие изделие
$(".nextProduct").click(function () {
    if (newHuman == true) {
        order.push(new Human(numberHuman,$(".sex:checked").val()));
        newHuman = false;
    }

    checkInput();
    if (sizeEmpty == 0) {
        var tempProduct = new Product(
            selectProd,
            ($("[name=height]").hasClass("checkin"))?$("[name=height]").val():'',
            ($("[name=body]").hasClass("checkin"))?$("[name=body]").val():'',
            ($("[name=cheast]").hasClass("checkin"))?$("[name=cheast]").val():'',
            ($("[name=waist]").hasClass("checkin"))?$("[name=waist]").val():'',
            ($("[name=hips]").hasClass("checkin"))?$("[name=hips]").val():'',
            ($("[name=neсk]").hasClass("checkin"))?$("[name=neсk]").val():'',
            ($("[name=shoulderWidth]").hasClass("checkin"))?$("[name=shoulderWidth]").val():'',
            ($("[name=shoulderGirth]").hasClass("checkin"))?$("[name=shoulderGirth]").val():'',
            $("[name=description]").val(),
            tsport
        );
        if (numberProduct == 0) {
            order[numberHuman-1].addProduct(tempProduct);
            numberProduct++;
            alert("изделие добавлено в заказ!");
            $(".order").prop('disabled', false);
        } else {
            if (!order[numberHuman-1].products[numberProduct-1].compare(tempProduct)){
                order[numberHuman-1].addProduct(tempProduct);
                numberProduct++;
                alert("изделие добавлено в заказ!");
                $(".order").prop('disabled', false);
            } else {
                alert("изделие НЕ добавлено! Измените Ваши мерки или описание!");
            }
        }
    } else {
        alert("Заполните все поля");
    }
});

////добавить следующего человека
$(".nextHuman").click(function () {
    numberHuman++;
    newHuman = true;

    if (numberHuman >= $("[name=numberhumans]").val()){
        $(".nextHuman").prop('disabled', true);
    } else {
        $(".nextHuman").prop('disabled', false);
    }
    numberProduct=0;
    $(".sportlist").val("rg");
    tsport = "Художественная гимнастика";
    $(".form-chooseproduct-rgProduct").show();
    $(".form-chooseproduct-sgProduct").hide();
    $(".form-chooseproduct-fsProduct").hide();
    showSwimsuit();
    $("[name=height]").val('');
    $("[name=body]").val('');
    $("[name=cheast]").val('');
    $("[name=waist]").val('');
    $("[name=hips]").val('');
    $("[name=neсk]").val('');
    $("[name=shoulderWidth]").val('');
    $("[name=shoulderGirth]").val('');
    alert("Выберети изделие и заполните мерки на нового человека");
});

$("[name=numberhumans]").change(function () {
    if (numberHuman >= $("[name=numberhumans]").val()){
        $(".nextHuman").prop('disabled', true);
    } else {
        $(".nextHuman").prop('disabled', false);
    }
});

$(".order").click(function () {
    localStorage.clear();
    var serialOrder = JSON.stringify(order); //сериализуем Order для передачи в локал хранилище
    localStorage.setItem("localOrder", serialOrder); //запишем его в хранилище по ключу "localOrder"
    window.open('order.html','_parent');
});


