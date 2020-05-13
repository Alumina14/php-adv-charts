$( document ).ready(function() {

function init(){
  getData();
};

init();


function getData(){

  $.ajax({

    url: '../php/api.php',
    method: 'get',
    success: function(data){

      console.log(data);

      for (var key in data) {

        var outputData = data[key];
        console.log(outputData);

        // inizio chart

        var ctx = $('#myChart');
        var chart = new Chart(ctx, {

            type: 'line',

            data: {
                labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
                datasets: [{
                    label: 'Milestone 1',
                    backgroundColor: 'rgb(97, 225, 0)',
                    borderColor: 'rgb(116, 255, 9)',
                    data: data,
                }]
            },

            options: {}
        });

      };


    },

    error: function(err){

      console.log(err);
      alert("errore importazione data");

    }


    });

  };

});
