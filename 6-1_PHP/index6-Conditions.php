<!DOCTYPE html>
<html>
<head>

</head>
<body>
    <?php

        $motiv = 9;

        if ($motiv < 4) {
            echo "Remotive-toi !";
        }
        else if ($motiv < 7)
        {
            echo "Ça va !";
        }
        else
        {
            echo "Super !";
        }

        echo '<br>';

        $objectif = strtolower("Etre freelance");

        switch ($objectif)
        {
            case "etre freelance":
                echo "Freelance c'est génial !";
                break;
            case "travailler à la maison" :
                echo "Tu as raison, c'est confortable !";
                break;
            case "coder mon site web":
                echo "Bonne chance !";
                break;
            default:
                echo "Choisis un objectif";
                break;
        }

    ?>
</body>
</html>