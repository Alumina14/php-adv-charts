$( document ).ready(function() {

function init(){

  moment.locale('it');
  getData();
  getData2();
};

init();

function mesi(){

  return moment.months();
};

var months = mesi();

// ajax

  function getData(){

    $.ajax({

      url: '../php/api.php',
      method: 'GET',
      success: function(data){
        console.log(data);

        console.log(data['fatturato']['type']);

        // primo chart

        var ctx = $('#myChart1');
        var chart = new Chart(ctx, {

          type: data['fatturato']['type'],

          data: {
            labels: months,
            datasets: [{
            label: "fatturato",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: data['fatturato']['data']
        }]
    },
    options: {}
});

      },

      error: function(err){
        alert('data non caricata');
        console.log(err);
      }
    });
  }

  function getData2(){

    $.ajax({

      url: '../php/api.php',
      method: 'GET',
      success: function(data){
        console.log(data);

        console.log(data['fatturato']['type']);

        // secondo chart

        var ctx2 = $('#myChart2');
        var chart2 = new Chart(ctx2, {

          type: data['fatturato_by_agent']['type'],

          data: {
            labels: data['fatturato_by_agent']['labels'],
            datasets: [{
            label: "fatturato_by_agent",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: data['fatturato_by_agent']['data']
          }]
        },
        options: {}
        });

      },

      error: function(err){
        alert('data non caricata');
        console.log(err);
      }
    });
  }


});
