<!DOCTYPE html>
<html>
<head>

</head>
<body>
    <?php
        define("MON_URL", "https://hugocollin.com"); #Déf d'une constante, utilisable dans tous les scopes
        const MON_URL2 = "https://hugocollin.com"; #Pareil

        echo "Le site " . MON_URL . ' est génial !' . '<br>';

        function onSenFicheDesScopes () {
            echo "Le site " . MON_URL2 . ' est génial !';
        }

        onSenFicheDesScopes ();



    ?>
</body>
</html>