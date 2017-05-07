let active = false;
$( document ).ready(function() {

  $("path")
  .mouseenter(function(e) {
    if(!active)
      $("#tooltip").show();
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


let paths = {
  'path16': '16',
  'path18': '18',
  'path20': '20',
  'path22': '22',
  'path24': '24',
  'path26': '26',
  'path28': '28',
  'path30': '30',
  'path32': '32',
  'path34': '34',
  'path36': '36',
  'path38': '38',
  'path40': '40',
  'path42': '42',
  'path44': '44',
  'path46': '46',
  'path48': '48',
  'path50': '50',
  'path52': '52',
  'path54': '54',
  'path56': '56',
  'path58': '58',
  'path60': '60',
  'path62': '62',
  'path64': '64',
  'path66': '66',
  'path68': '68',
  'path70': '70',
  'path72': '72',
  'path74': '74',
  'path76': '76',
  'path78': '78',
  'path80': '80',
  'path82': '82',
  'path84': '84',
  'path86': '86',
  'path88': '88',
  'path90': '90',
  'path92': '92',
  'path94': '94',
  'path96': '96',
  'path98': '98',
  'path100': '100',
  'path102': '102',
  'path104': '104',
  'path106': '106',
  'path108': '108',
  'path110': '110',
  'path112': '112',
  'path114': '114',
  'path116': '116',
  'path118': '118',
  'path120': '120',
  'path122': '122',
  'path124': '124',
  'path126': '126',
  'path128': '128',
  'path130': '130',
  'path132': '132',
  'path134': '134',
  'path136': '136',
  'path138': '138',
  'path140': '140',
  'path142': '142',
  'path144': '144',
  'path146': '146',
  'path148': '148',
  'path150': '150',
  'path152': '152',
  'path154': '154',
  'path156': '156',
  'path158': '158',
  'path160': '160',
  'path162': '162',
  'path164': '164',
  'path166': '166',
  'path168': '168',
  'path170': '170',
  'path172': '172',
  'path174': '174',
  'path176': '176',
  'path178': '178',
  'path180': '180',
  'path182': '182',
  'path184': '184',
  'path186': '186',
  'path188': '188',
  'path190': '190',
  'path192': '192',
  'path194': '194',
  'path196': '196',
  'path198': '198',
  'path200': '200',
  'path202': '202',
  'path204': '204',
  'path206': '206',
  'path208': '208',
  'path210': '210',
  'path212': '212',
  'path214': '214',
  'path216': '216',
  'path218': '218',
  'path220': '220',
  'path222': '222',
  'path224': '224',
  'path226': '226',
  'path228': '228',
  'path230': '230',
  'path232': '232',
  'path234': '234',
  'path236': '236',
  'path238': '238',
  'path240': '240',
  'path242': '242',
  'path244': '244',
  'path246': '246',
  'path248': '248',
  'path250': '250',
  'path252': '252',
  'path254': '254',
  'path256': '256',
  'path258': '258',
  'path260': '260',
  'path262': '262',
  'path264': '264',
  'path266': '266',
  'path268': '268',
  'path270': '270',
  'path272': '272',
  'path274': '274',
  'path276': '276',
  'path278': '278',
  'path280': '280',
  'path282': '282',
  'path284': '284',
  'path286': '286',
  'path288': '288',
  'path290': '290',
  'path292': '292',
  'path294': '294',
  'path296': '296',
  'path298': '298',
  'path300': '300',
  'path302': '302',
  'path304': '304',
  'path306': '306',
  'path308': '308',
  'path310': '310',
  'path312': '312',
  'path314': '314',
  'path316': '316'
};

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
