$(document).ready(function() {

  $("span:not(.operator").on("click", function() {
    $(this).text()
      $("#screen").append($(this).text());
    })
  $("span.operator").on("click", function() {
      if ( $(this).text()  === "x" )
        $("#screen").append("*");

      else if ( $(this).text()  === "+" ) {
        $("#screen").append("+");
  }
      else if ( $(this).text()  === "-" ) {
        $("#screen").append("-");
}
      else if ( $(this).text()  === "÷" ) {
        $("#screen").append("/");
}
      else if ( $(this).text()  === "C" ) {
        $("#screen").empty();
}
      else if ( $(this).text()  === "=" ) {
        $("#screen").text(eval($("#screen").text()))
}
      else {
        $("#screen").append("/");
      }
});
});
