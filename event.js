$(function () {
  var t = document.getElementById("tableid");
  $("#dijkstra").click(function () {
    // alert($(this).text());
    algorithm = $(this).text();
    $("#visualize").html("Visualise " + algorithm);
    // alert(algorithm);
  });
  $("#bfs").click(function () {
    // alert($(this).text());
    algorithm = $(this).text();
    $("#visualize").html("Visualise " + algorithm);
  });
  $("#dfs").click(function () {
    // alert($(this).text());
    algorithm = $(this).text();
    $("#visualize").html("Visualise " + algorithm);
  });
  $("#clearpath").click(function () {
    visualised = false;
    console.log("in clearpath");
    for (var row = 0; row < 20; row++) {
      for (var col = 0; col < 60; col++) {
        cell = new node(row, col);
        element = getCell(cell);
        element.classList.remove("visited");
        element.classList.remove("path");
      }
    }
  });
  $("#clearboard").click(function () {
    visualised = false;
    for (var row = 0; row < 20; row++) {
      for (var col = 0; col < 60; col++) {
        cell = new node(row, col);
        element = getCell(cell);
        element.classList.remove("visited");
        element.classList.remove("path");
        element.classList.remove("blocked");
      }
    }
  });
  // $('td').on({
  //   mouseenter: function(){
  //     $(this).css("background-color", "lightgray");
  //   },
  //   mouseleave: function(){
  //     $(this).css("background-color", "lightblue");
  //   },
  //   click: function(){
  //     $(this).css("background-color", "yellow");
  //   }
  // });
  $("#visualize").click(function () {
    console.log("Visualizing ", start, end);
    if (algorithm == null) {
      alert('Please select an algorithm');
      return;
      // algo(relstart, relend);
    }
    $("#clearpath").trigger("click");
    visualised = true;
    if (algorithm == "dijkstra") {
      console.log("Visualise " + algorithm);
    }
    else if (algorithm == "bfs") {
      callbfs();
    }
    else if (algorithm == "dfs") {
      console.log("Visualise " + algorithm);
    }
    else {
      alert("Unknown " + algorithm);
    }
  });
});