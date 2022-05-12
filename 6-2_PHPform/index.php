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
            $fnameErr = "J'aimerais connaître ton nom, c'est pour les statistiques";
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
            $isSuccess = true;

            $emailText = "Firstname : $fname\nLastname : $lname\nEmail: $email\nPhone : $phone\nMessage :\n$msg";
            $headers = "From: $fname $lname <$email>\r\nReply-To: $email";
            mail($emailTo, "Message du formulaire de contact", $emailText, $headers);

            $fname = $lname = $email = $phone = $msg = "";
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

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contactez-moi !</title>

    <!-- PERSO -->
    <link href="css/style.css" rel="stylesheet" type="text/css">

    <!-- BOOTSTRAP -->
    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <script src="js/bootstrap.bundle.min.js"></script>

</head>
<body>
    <main>
        <section class="container">
            <hr>
            <header>
                <h2>Contactez-moi</h2>
            </header>
            <article class="row">
                <div class="col-lg-10 col-lg-offset-1">
                    <form id="contact-form" method="post" action="<?php echo $_SERVER['PHP_SELF'];?>" role="form">
                        <div class="row">
                            <section class="col-md-6">
                                <label for="firstName">Prénom <span class="needed">*</span></label>
                                <input id="firstName" type="text" name="firstname" class="form-control" placeholder="Votre prénom" value="<?php echo $fname; ?>">
                                <p class="comments"><?php echo $fnameErr ?></p>
                            </section>

                            <section class="col-md-6">
                                <label for="lastName">Nom <span class="needed">*</span></label>
                                <input id="lastName" type="text" name="lastname" class="form-control" placeholder="Votre nom" value="<?php echo $lname; ?>">
                                <p class="comments"><?php echo $lnameErr ?></p>
                            </section>

                            <section class="col-md-6">
                                <label for="email">Email <span class="needed">*</span></label>
                                <input id="email" type="email" name="email" class="form-control" placeholder="Votre email" value="<?php echo $email; ?>">
                                <p class="comments"><?php echo $emailErr ?></p>
                            </section>

                            <section class="col-md-6">
                                <label for="tel">Téléphone</label>
                                <input id="tel" type="tel" name="telephone" class="form-control" placeholder="Votre numéro de téléphone" value="<?php echo $phone; ?>">
                                <p class="comments"><?php echo $phoneErr ?></p>
                            </section>

                            <section class="col-md-12">
                                <label for="msg">Message <span class="needed">*</span></label>
                                <textarea id="msg" type="text" name="message" class="form-control" placeholder="Votre message" rows="4"><?php echo $msg; ?></textarea>
                                <p class="comments"><?php echo $msgErr ?></p>
                            </section>

                            <section class="col-md-12">
                                <p class="needed">* Pas le choix : il faut remplir ces informations !</p> <!--Pas le choix : remplis ces informations si tu veux survivre-->
                            </section>

                            <section class="col-md-12">
                                <input type="submit" class="btnSubmit" value="Envoyer">
                            </section>
                        </div>

                        <p class="thanks" style="display:<?php if ($isSuccess) echo 'block'; else echo 'none' ?>">Votre message a été envoyé. Merci de m'avoir contacté !</p>
                    </form>
                </div>
            </article>


        </section>
    </main>
</body>
</html>