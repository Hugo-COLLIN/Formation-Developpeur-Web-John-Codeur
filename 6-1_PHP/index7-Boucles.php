<!DOCTYPE html>
<html>
<head>

</head>
<body>
    <?php

        $x = 10;

        while ($x > 0) {
            #echo $x . '<br>';
            echo $x -- . '<br>';
        }

        $y = 100;
        do {
            echo '<br>' . ++ $y . '<br>';
        } while ($y < 0);


        for ($z = 0 ; $z <= 10 ; $z ++)
        {
            echo "Valeur de z : $z <br>";
        }

    ?>
</body>
</html>