function Pizza() {
  this.toppings = [];
  this.size = size;
}

// Pizza.prototype.addToppings = function() {
//
// };

$(document).ready(function() {

  $("#add-topping").click(function() {
    alert("1");
    $(".new-toppings").append('<div class="new-topping">' + '<div class="form-group">' + '<label for="topping">Topping</label>' + '<div class="drop-down">' + '<select class="form-control" id="topping">' + '<option>cheese</option>' + '<option>pepperoni</option>' + '<option>artichoke</option>' + '<option>anchovy</option>' + '</select>' + '</div>' + '</div>' + '</div>');
  });

  $("#formPizza").submit(function(event) {
    event.preventDefault();
    var size = $("#size").val();

    var toppings = [];
    $(".new-topping").each(function() {

      toppings.push($(this).find("select#topping").val());
    })



    $("#result-size").text(size);
    $("#result-toppings").text(toppings);
  });
});
