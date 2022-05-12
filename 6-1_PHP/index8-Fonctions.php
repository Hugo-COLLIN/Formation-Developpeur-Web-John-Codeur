<?php
    declare(strict_types=1); #Avec la valeur 1, ne permet pas les erreurs de types
    # (par ex mettre un str en argument d'une fonction faisant des opérations sur les nombres)
?>
<!DOCTYPE html>
<html>
<head>

</head>
<body>
    <?php

        function mF() #déclaration de la fonction
        {
            echo 'coucou <br>';
        }

        mF(); # appel de la fonction pour l'executer

        function msg ($message, $times)
        {
            for ($i = 1 ; $i <= $times ; $i ++)
            {
                echo "$message <br>";
            }
        }

        msg("Slt", 10);

        function addition ($x, $y)
        {
            return $x + $y;
        }

        $z = addition(2,5);
        echo $z . '<br>';

        function soustraction (int $x, int $y) : int
        {
            $a = $x - $y;
            var_dump($a);
            return $a;
        }

        $v = soustraction(2,5);
        echo $v . '<br>';

        $u = soustraction(2,5.5); #erreur de respect de type à cause du strict_type=1
        echo $u . '<br>';

        $w = soustraction("2",5); #erreur de respect de type à cause du strict_type=1
        echo $w . '<br>';

    ?>
</body>
</html>