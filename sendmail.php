<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "samikshalakhani871@gmail.com";  
    $subject = "New Admission Form Submission - RK Institute";

    $message = "Name: " . $_POST['name'] . "\n";
    $message .= "Email: " . $_POST['email'] . "\n";
    $message .= "Phone: " . $_POST['phone'] . "\n";
    $message .= "Address: " . $_POST['address'] . "\n";
    $message .= "Message: " . $_POST['message'] . "\n";

    $headers = "From: noreply@yourdomain.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "✅ Thank you! Your form has been submitted.";
    } else {
        echo "❌ Sorry, something went wrong.";
    }
}
?>
