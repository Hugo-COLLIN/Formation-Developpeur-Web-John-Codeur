<?php
    session_start();
    $_SESSION['nom'] = "Hugo"; # ne se met à jour que si on retourne sur la page où est déclarée la varibable.
?>
<!DOCTYPE html>
<html>
<head></head>
<body>
        <a href="presentSESSION.php">Qui suis-je ?</a>

</body>
</html>