<?php
/*
    $labelsInfos = array("fname", "lname", "email", "phone", "msg");

    $infos = array();
    foreach ($labelsInfos as $label)
    {
        $infos[] = $label => "";
        echo $infos;
    }
*/

    $sent = array("fname" => "", "lname" => "", "email" => "", "phone" => "", "msg" => "",
        "fnameErr" => "", "lnameErr" => "", "emailErr" => "", "phoneErr" => "", "msgErr" => "",
        "isSuccess" => false);

    $emailTo = "h.collin1@outlook.fr";

    if ($_SERVER["REQUEST_METHOD"] == "POST")
    {
        $sent["fname"] = verifyInput($_POST["firstname"]);
        $sent["lname"] = verifyInput($_POST["lastname"]);
        $sent["email"] = verifyInput($_POST["email"]);
        $sent["phone"] = verifyInput($_POST["telephone"]);
        $sent["msg"] = verifyInput($_POST["message"]);

        if (empty($sent["fname"]))
            $sent["fnameErr"] = "J'aimerais connaître ton prénom, c'est pour les statistiques :)";
        if (empty($sent["lname"]))
            $sent["lnameErr"] = "Allez, donne-moi ton petit nom...";
        if (empty($sent["msg"]))
            $sent["msgErr"] = "Hey ! Au moins un petit bonjour pour la route !";

        if (empty($sent["email"]))
            $sent["emailErr"] = "Tu veux être recontacté, pas vrai ;)";
        else if (!isEmail($sent["email"]))
            $sent["emailErr"] = "Tu n'essaierais pas de m'arnaquer là ?";

        if (!isPhone($sent["phone"]))
            $sent["phoneErr"] = "Un numéro de téléphone pas très valide que nous avons là...";

        if (($sent["fnameErr"] || $sent["lnameErr"] || $sent["emailErr"] || $sent["phoneErr"] || $sent["msgErr"]) == "") //$fnameErr== "" and $lnameErr== "" and $emailErr== "" and $phoneErr== "" and $msgErr== ""
        {
            $sent["isSuccess"] = true;

            $emailText = "Firstname : {$sent["fname"]}\nLastname : {$sent["lname"]}\nEmail: {$sent["email"]}\nPhone : {$sent["phone"]}\nMessage :\n{$sent["msg"]}";
            $headers = "From: {$sent["fname"]} {$sent["lname"]} <{$sent["email"]}>\r\nReply-To: {$sent["email"]}";
            mail($emailTo, "Message du formulaire de contact", $emailText, $headers);

            //for ($i = 0 ; $i < 5 ; $i ++) $sent[$i] = "";
        }

        echo json_encode($sent);
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