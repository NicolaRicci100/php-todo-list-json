<?php

$tasks = [
  "Black Lotus",
  "Mox Emerald",
  "Mox Jet",
  "Mox Pearl",
  "Mox Ruby",
  "Mox Sapphire",
  "Ancestral Recall",
  "Timetwister",
  "Time Walk"
];

header('Content-Type: application/json');

echo json_encode($tasks);
