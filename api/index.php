<?php
$database_path = __DIR__ . '/../database/cards.json';

$json_data = file_get_contents($database_path);

$cards = json_decode($json_data, true);

$new_card = $_POST['card'] ?? null;
if ($new_card) {
  $cards[] = $new_card;
  $json_cards = json_encode($cards);
  file_put_contents($database_path, $json_cards);

  header('Content-Type: application/json');
  echo ucfirst($new_card);
} else {

  header('Content-Type: application/json');
  echo json_encode($cards);
}
