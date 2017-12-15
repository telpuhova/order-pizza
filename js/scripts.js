function Pizza(size, toppings) {
  this.toppings = toppings;
  this.size = size;
  this.cost = 10;
}

// Pizza.prototype.methodName = function () {
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

    var newPizza = new Pizza(size, toppings)

    var cost = 5;
    $("#result-size").text(newPizza.size);
    $("#result-toppings").text(newPizza.toppings);
    $("#result-cost").text("$" + cost);
  });
});
