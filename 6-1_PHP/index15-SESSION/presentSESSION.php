<?php session_start() ?>
<!DOCTYPE html>
<html>
<head>

</head>
<body>
    <p>
        Bonjour, mon nom est <?php echo $_SESSION["nom"] ?>
    </p>
    <?php var_dump($_SESSION["nom"]);?>
</body>
</html>