<?php

header ('Content-Type: application/json');

require_once 'data.php';

// estraggo il primo array per il primo chart

$dati = [
  'fatturato' => $graphs['fatturato']
];

//  modifico la seconda parte dell'array per il secondo chart, prendo la chiave type e assegn il valore

$dato2 = [
  'type' => $graphs['fatturato_by_agent']['type']
];

// creo altre due chiavi da inserire dopo aver fatto un foreach e preso gli ultimi valori rimanenti

$labels = [];
$data = [];

foreach ($graphs['fatturato_by_agent']['data'] as $name => $value) {
  $labels[] = $name;
  $data[] = $value;
}

// assegno a dato2 le chiavi labels e data con i valori estrapolati nel foreach, infine uniscono l'array dato2 a dati

$dato2['labels'] = $labels;
$dato2['data'] = $data;
$dati['fatturato_by_agent'] = $dato2;

// var_dump($dati);

echo json_encode($dati);


 ?>
