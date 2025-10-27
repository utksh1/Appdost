<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit();
}

try {
  $data = json_decode(file_get_contents('php://input'), true);
  $name = trim($data['name'] ?? '');
  $email = trim($data['email'] ?? '');
  $phone = trim($data['phone'] ?? '');
  $message = trim($data['message'] ?? '');

  if (!$name || !$email || !$message) {
    echo json_encode([
      'success' => false,
      'message' => 'Name, email, and message are required.'
    ]);
    exit();
  }

  // TODO: Send email or store in DB. For now, just return success.
  echo json_encode([
    'success' => true,
    'message' => 'Thank you for contacting us, ' . htmlspecialchars($name) . '!'
  ]);
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode([
    'success' => false,
    'message' => 'Server error. Please try again later.'
  ]);
}
