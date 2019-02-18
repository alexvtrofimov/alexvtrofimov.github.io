$(document).ready(function(){
    order = JSON.parse(localStorage.getItem("localOrder"));

    //$("p").html(order[0].products[0].name);
    var tb = document.querySelector('.table');

    for (var i=0; i<order.length; i++) {

        for (var j=0; j<order[i].products.length; j++){
            var tr = document.createElement('tr');

            var td = document.createElement('td');
            $(td).html(order[i].number);
            tr.appendChild(td);

            var td = document.createElement('td');
            $(td).html(order[i].sex);
            tr.appendChild(td);

            var td = document.createElement('td');
            $(td).html(order[i].products[j].name);
            tr.appendChild(td);

            var td = document.createElement('td');
            $(td).html(order[i].products[j].sport);
            tr.appendChild(td);

            var td = document.createElement('td');
            $(td).html(order[i].products[j].height);
            tr.appendChild(td);

            var td = document.createElement('td');
            $(td).html(order[i].products[j].body);
            tr.appendChild(td);

            var td = document.createElement('td');
            $(td).html(order[i].products[j].cheast);
            tr.appendChild(td);

            var td = document.createElement('td');
            $(td).html(order[i].products[j].waist);
            tr.appendChild(td);

            var td = document.createElement('td');
            $(td).html(order[i].products[j].hips);
            tr.appendChild(td);

            var td = document.createElement('td');
            $(td).html(order[i].products[j].neck);
            tr.appendChild(td);

            var td = document.createElement('td');
            $(td).html(order[i].products[j].shoulderWidth);
            tr.appendChild(td);

            var td = document.createElement('td');
            $(td).html(order[i].products[j].shoulderGirth);
            tr.appendChild(td);

            var td = document.createElement('td');
            $(td).html(order[i].products[j].comment);
            tr.appendChild(td);


            tb.appendChild(tr);
        }

    }

});

$(".print").click(function () {
    print();
});