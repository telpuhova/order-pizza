function Pizza(size, toppings) {
  this.toppings = toppings;
  this.size = size;
  this.cost = 8;
}

Pizza.prototype.getCost = function() {
  if (this.size === "Large") {
    this.cost += 4;
  } else if (this.size === "Medium") {
    this.cost += 2;
  } else {}

  for (var i=0; i < this.toppings.length; i++) {
    if (this.toppings[i] === "cheese") {
      this.cost += 1;
    } else {
      this.cost += 2;
    }
  }
};

Pizza.prototype.getStrToppings = function () {
  return this.toppings.join(", ");
};

$(document).ready(function() {

  $("#add-topping").click(function() {
    $(".new-toppings").append('<div class="new-topping toremove">' + '<div class="form-group">' + '<label for="topping">Topping</label>' + '<div class="drop-down">' + '<select class="form-control" id="topping">' + '<option>cheese</option>' + '<option>pepperoni</option>' + '<option>artichoke</option>' + '<option>anchovy</option>' + '</select>' + '</div>' + '</div>' + '</div>');
  });

  $("#formPizza").submit(function(event) {
    event.preventDefault();
    var size = $("#size").val();
    var toppings = [];
    $(".new-topping").each(function() {
      toppings.push($(this).find("select#topping").val());
    })

    var newPizza = new Pizza(size, toppings)
    newPizza.getCost();
    $("#result-size").text(newPizza.size);
    $("#result-toppings").text(newPizza.getStrToppings());
    $("#result-cost").text("$" + newPizza.cost);

    $(".result").show();
    $(".toremove").remove();
    resetFields();
  });
});
