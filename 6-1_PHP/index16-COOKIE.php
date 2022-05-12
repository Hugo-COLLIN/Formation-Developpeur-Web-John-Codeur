<?php
    setcookie("username", "hc2lor", time() + 3600)
    #       nomCookie, contenuCookie,date actuelle + temps en secondes
?>
<!DOCTYPE html>
<html>
<head></head>
<body>
        <?php
            if (isset($_COOKIE["username"]))
                echo "Content de te revoir " . $_COOKIE['username'];
            else
                echo 'Utilisateur anonyme';
            
            echo '<br>';
            var_dump($_COOKIE["username"]);
        ?>

</body>
</html>