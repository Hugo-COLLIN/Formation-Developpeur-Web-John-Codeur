<?php
    $fname = $lname = $email = $phone = $msg = "";
    $fnameErr = $lnameErr = $emailErr = $phoneErr = $msgErr = "";
    $isSuccess = false;
    $emailTo = "h.collin1@outlook.fr";

    if ($_SERVER["REQUEST_METHOD"] == "POST")
    {
        $fname = verifyInput($_POST["firstname"]);
        $lname = verifyInput($_POST["lastname"]);
        $email = verifyInput($_POST["email"]);
        $phone = verifyInput($_POST["telephone"]);
        $msg = verifyInput($_POST["message"]);

        if (empty($fname))
            $fnameErr = "J'aimerais connaître ton prénom, c'est pour les statistiques :)";
        if (empty($lname))
            $lnameErr = "Allez, donne-moi ton petit nom...";
        if (empty($msg))
            $msgErr = "Hey ! Au moins un petit bonjour pour la route !";

        if (empty($email))
            $emailErr = "Tu veux être recontacté, pas vrai ;)";
        else if (!isEmail($email))
            $emailErr = "Tu n'essaierais pas de m'arnaquer là ?";

        if (!isPhone($phone))
            $phoneErr = "Un numéro de téléphone pas très valide que nous avons là...";

        if (($fnameErr || $lnameErr || $emailErr || $phoneErr || $msgErr) == "") //$fnameErr== "" and $lnameErr== "" and $emailErr== "" and $phoneErr== "" and $msgErr== ""
        {
            $isSuccess = true;

            $emailText = "Firstname : $fname\nLastname : $lname\nEmail: $email\nPhone : $phone\nMessage :\n$msg";
            $headers = "From: $fname $lname <$email>\r\nReply-To: $email";
            mail($emailTo, "Message du formulaire de contact", $emailText, $headers);

            $fname = $lname = $email = $phone = $msg = "";
        }
    }

    function isPhone ($number)
    {
        return preg_match("/^\d*$/", $number);
    }

    function isEmail ($mail)
    {
        return filter_var($mail, FILTER_VALIDATE_EMAIL);
    }

    function verifyInput ($var)
    {
        $var = trim($var);
        $var = stripslashes($var);
        return htmlspecialchars($var);
    }
?>