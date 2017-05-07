
$( document ).ready(function() {

  $("path")
  .mouseenter(function(e) {
      $("#tooltip").show();
  })
  .mousemove(function(e) {
      $("#tooltip").css({
          "top" : e.pageY,
          "left" : e.pageX + 15
      });
  })
  .mouseout(function(e) {
      $("#tooltip").hide();
  })


  // $("path").on("click", function () {
  //   if($(this).attr("id") != "russia")
  //   {
  //     var k = $(this).attr("id")
  //     console.log(regions[k]);
  //   }
  // });

})

let regions = {
  'region1': {
    'name': 'Республика Адыгея'
  },
  'region2': {
    'name': 'Республика Башкортостан'
  },
  'region3': {
    'name': 'Республика Бурятия'
  },
  'region4': {
    'name': 'Республика Алтай'
  },
  'region5': {
    'name': 'Республика Дагестан'
  },
  'region6': {
    'name': '6'
  },
  'region7': {
    'name': '7'
  },
  'region8': {
    'name': '8'
  },
  'region9': {
    'name': '9'
  },
  'region10': {
    'name': '10'
  },
  'region11': {
    'name': '11'
  },
  'region12': {
    'name': '12'
  },
  'region13': {
    'name': '13'
  },
  'region14': {
    'name': '14'
  },
  'region15': {
    'name': '15'
  },
  'region16': {
    'name': '16'
  },
  'region17': {
    'name': '17'
  },
  'region18': {
    'name': '18'
  },
  'region19': {
    'name': '19'
  },
  'region20': {
    'name': '20'
  },
  'region21': {
    'name': '21'
  },
  'region22': {
    'name': '22'
  },
  'region23': {
    'name': '23'
  },
  'region24': {
    'name': 'Красноярский край'
  },
  'region25': {
    'name': 'Приморский край'
  },
  'region26': {
    'name': '26'
  },
  'region27': {
    'name': '27'
  },
  'region28': {
    'name': '28'
  },
  'region29': {
    'name': '29'
  },
  'region30': {
    'name': '30'
  },
  'region31': {
    'name': '31'
  },
  'region32': {
    'name': '32'
  },
  'region33': {
    'name': '33'
  },
  'region34': {
    'name': '34'
  },
  'region35': {
    'name': '35'
  },
  'region36': {
    'name': '36'
  },
  'region37': {
    'name': '37'
  },
  'region38': {
    'name': '38'
  },
  'region39': {
    'name': 'Калининградская область'
  },
  'region40': {
    'name': '40'
  },
  'region41': {
    'name': '41'
  },
  'region42': {
    'name': '42'
  },
  'region43': {
    'name': '43'
  },
  'region44': {
    'name': '44'
  },
  'region45': {
    'name': '45'
  },
  'region46': {
    'name': '46'
  },
  'region47': {
    'name': '47'
  },
  'region48': {
    'name': '48'
  },
  'region49': {
    'name': '49'
  },
  'region50': {
    'name': '50'
  },
  'region51': {
    'name': '51'
  },
  'region52': {
    'name': '52'
  },
  'region53': {
    'name': '53'
  },
  'region54': {
    'name': 'Новосибирская область'
  },
  'region55': {
    'name': 'Омская область'
  },
  'region56': {
    'name': 'Оренбургская область'
  },
  'region57': {
    'name': '57'
  },
  'region58': {
    'name': '58'
  },
  'region59': {
    'name': '59'
  },
  'region60': {
    'name': '60'
  },
  'region61': {
    'name': '61'
  },
  'region62': {
    'name': '62'
  },
  'region63': {
    'name': '63'
  },
  'region64': {
    'name': '64'
  },
  'region65': {
    'name': '65'
  },
  'region66': {
    'name': '66'
  },
  'region67': {
    'name': '67'
  },
  'region68': {
    'name': '68'
  },
  'region69': {
    'name': '69'
  },
  'region70': {
    'name': 'Томская область'
  },
  'region71': {
    'name': '71'
  },
  'region72': {
    'name': '72'
  },
  'region73': {
    'name': '73'
  },
  'region74': {
    'name': '74'
  },
  'region75': {
    'name': '75'
  },
  'region76': {
    'name': '76'
  },
  'region77': {
    'name': 'Город Москва'
  },
  'region78': {
    'name': 'Город Санкт-Петербург'
  },
  'region79': {
    'name': '79'
  },
  'region80': {
    'name': '80'
  },
  'region81': {
    'name': '81'
  },
  'region82': {
    'name': 'КРЫМ'
  },
  'region83': {
    'name': '83'
  },
  'region84': {
    'name': '84'
  },
  'region85': {
    'name': '85'
  },
  'region86': {
    'name': '86'
  },
  'region87': {
    'name': '87'
  },
  'region88': {
    'name': '88'
  },
  'region89': {
    'name': '89'
  },
  'region90': {
    'name': '90'
  },
  'region91': {
    'name': '91'
  },
  'region92': {
    'name': 'Севастополь'
  },
  'region93': {
    'name': '93'
  },
  'region94': {
    'name': '94'
  },
  'region95': {
    'name': '95'
  },
  'region96': {
    'name': '96'
  },
  'region97': {
    'name': '97'
  },
  'region98': {
    'name': '98'
  },
  'region99': {
    'name': '99'
  }
}
