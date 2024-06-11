<?php
header('Content-Type: application/json');

$news_data = [
    'esports' => '<p>Notícia de E-sports...</p>',
    'descontos' => '<p>Notícia de Descontos...</p>',
    'trailers' => '<p>Notícia de Trailers...</p>'
];

echo json_encode($news_data);
?>
