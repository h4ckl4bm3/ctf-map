let active = false;
let current_region = '';

$( document ).ready(function() {
// обработчик для клика на регион
  $(".region")
  .mouseenter(function(e) {
    if(!active)
    {
      $("#tooltip").show();

      document.getElementById("t_region").innerHTML = regions["region"+paths[$(this).attr("id")]].name;
      document.getElementById("t_teams").innerHTML = regions["region"+paths[$(this).attr("id")]].team_list;
      document.getElementById("t_cups").innerHTML = regions["region"+paths[$(this).attr("id")]].cup_list;
      // $("#t_region").text(regions["region"+paths[$(this).attr("id")]].name);
      // $("#t_teams").text(regions["region"+paths[$(this).attr("id")]].team_list);
      // $("#t_cups").text(regions["region"+paths[$(this).attr("id")]].cips_list);
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
    current_region = "region" + paths[$(this).attr("id")];
    load_teams(current_region)
    document.getElementById("i_region").innerHTML = regions["region"+paths[$(this).attr("id")]].name
    $("#infoblock").show();
  })


  $("#close").click(function(e) {
    active = false;
    $("#infoblock").hide();
  })

  // $("#infoblock").click(function(e) {
  //   if(active) {
  //     active = false;
  //     $("#infoblock").hide();
  //   }
  // })


  // обработка кликов на блоки меню
  $("#i_teams").click(function(e) {
    load_teams(current_region)
  })

  $("#i_cups").click(function(e) {
    load_cups(current_region)
  })

  // $("path").on("click", function () {
  //   if($(this).attr("id") != "russia")
  //   {
  //     var k = $(this).attr("id")
  //     console.log(regions[k]);
  //   }
  // });

})


function load_teams(current) {
  let block = document.getElementById("infobody");
  block.innerHTML = "";

  if(regions[current]["teams"].length == 0) {
    block.innerHTML = "<h4 style='margin: 10px;'>В этом регионе нет команд :( Хотите создать свою? Напишите нам на <a href='mailto:admin@hackforces.com'>почту</a>!</h4>"
    return;
  }

  regions[current]["teams"].forEach(function(item, i) {
    let post_container = document.createElement('div')
    post_container.className = 'post-container col-12'
    post_container.innerHTML =
    '<div class="col-12">' +
      '<div class="row">' +
        '<div class="col-4 post-title">' + item.name + '</div>' +
        '<div class="col-3 post-title-dates"> c ' + item.created + ' по ' + item.disband + ' гг.</div>' +
        '<div class="col-1"></div>' +
        '<div class="col-4 post-title-site"><a href="' + item.site + '"> ' + item.site + '</a></div>' +
      '</div>' +
      '<div class="row post-content">' +
        '<div class="xol-xs-12 col-md-3 col-lg-2">' +
            '<img class="img-responsive" src="' + item.ctftime_logo + '" />' +
        '</div>' +
        '<div class="col-xs-12 col-md-9 col-lg-10">' + item.desc + '</div>' +
      '</div>' +
    '</div>';
    block.appendChild(post_container)
  });

}

function load_cups(current) {
  let block = document.getElementById("infobody");
  block.innerHTML = "";

  if(regions[current]["cups"].length == 0) {
    block.innerHTML = "<h4 style='margin: 10px;'>В этом регионе ещё не проводились турниры. Хотите стать организатором? Напишите нам на <a href='mailto:admin@hackforces.com'>почту</a>!</h4>"
    return;
  }

  regions[current]["cups"].forEach(function(item, i) {
    let post_container = document.createElement('div')
    post_container.className = 'post-container col-12'
    post_container.innerHTML =
    '<div class="col-12">' +
      '<div class="row">' +
        '<div class="col-3 post-title">' + item.name + '</div>' +
        '<div class="col-2 post-title-dates"> ' + item.created + ' г</div>' +
        '<div class="col-3"></div>' +
        '<div class="col-3 post-title-site"><a href="' + item.site + '"> ' + item.site + '</a></div>' +
      '</div>' +
      '<div class="row post-content">' +
        '<div class="xol-xs-12 col-md-3 col-lg-2">' +
            '<img class="img-rounded" src="' + item.logo + '" />' +
        '</div>' +
        '<div class="col-xs-12 col-md-9 col-lg-10">' + item.info + '</div>' +
      '</div>' +
    '</div>';
    block.appendChild(post_container)
  });
}
