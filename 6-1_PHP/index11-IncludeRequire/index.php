<?php declare(strict_types=1); ?>
<!DOCTYPE html>
<html>
<head>

</head>
<body>

    <div class="menu">
        <?php
        include "menu.php";
        ?>
    </div>

    <h1>Accueil</h1>
    <p>
        <?php #On inclut un fichier et on utilise 1 de ses variables
            include "vars.php";
            echo $promotion;
            echo "<br>Du texte après<br>"
        ?>
    </p>

    <p>
        <?php #Avec include, m si le fichier n'existe pas, on exécute les instructions suivantes
            include "vars2.php";
            echo $promotion;
            echo "<br>Du texte après<br>"
        ?>
    </p>

    <p>
        <?php #Avec require, si le fichier n'existe pas, on n'exécute pas la suite
            require "vars2.php";
            echo $promotion;
            echo "<br>Du texte après<br>"
        ?>
    </p>


</body>
</html>