let active = false;
$( document ).ready(function() {

  $("path")
  .mouseenter(function(e) {
    if(!active)
    {
      $("#tooltip").show();
      $("#region").text(regions["region"+paths[$(this).attr("id")]].name);
    }
  })
  .mousemove(function(e) {
    if(!active)
      $("#tooltip").css({
          "top" : e.pageY,
          "left" : e.pageX + 15
      });
  })
  .mouseout(function(e) {
    $("#tooltip").hide();
  })
  .click(function(e) {
    active = true;
    $("#infoblock").show();
  })


  $("#close").click(function(e) {
    active = false;
    $("#infoblock").hide();
  })

  $("#infoblock").click(function(e) {
    if(active) {
      active = false;
      $("#infoblock").hide();
    }
  })
  // $("path").on("click", function () {
  //   if($(this).attr("id") != "russia")
  //   {
  //     var k = $(this).attr("id")
  //     console.log(regions[k]);
  //   }
  // });

})
