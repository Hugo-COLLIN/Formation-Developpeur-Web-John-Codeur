<!DOCTYPE html>
<html>
<head>

</head>
<body>
    <?php

        $x = 4;
        $y = 7;

        echo $x . ' et ' . $y . '<br><br>';

        echo $x + $y . '<br>';
        echo $x - $y . '<br>';
        echo $x * $y . '<br>';
        echo $x / $y . '<br>';

        echo $x % $y . '<br>'; #reste de la division euclidienne
        echo $x ** $y . '<br>'; # x^y

        $x += 2;
        $y -= 4;
        echo '<br>' . $x . ' et ' . $y . '<br>';
        $x /= 2;
        $y *= 4;
        echo $x . ' et ' . $y . '<br>';

        $y %= 2;
        echo $y . '<br>';

        $x ++;
        $y --;
        echo $x . ' et ' . $y . '<br><br>';


        # Comparaisons
        $a = 50;
        $b = "50";

        var_dump($a == $b); #Compare les 2 vals après conversion en nombre
        var_dump($a != $b);
        echo '<br>';
        var_dump($a === $b); # Compare le type des variables avant leur valeur
        var_dump($a !== $b); # Compare le type des variables avant leur valeur
        echo '<br>';
        var_dump($a > $b);
        var_dump($a >= $b);
        echo '<br>';
        var_dump($a < $b);
        var_dump($a <= $b);
        echo '<br>';

        #Valeur conditionnelle
        $age = 5;
        $boisson = ($age > 18)? "biere" : "eau";
        echo $boisson . '<br>';

        $orange = "orge";
        $maCouleur = $blue ?? $orange ?? $pink ?? "vert";

        echo $maCouleur . '<br><br>';
        //var_dump($blue);

        #spaceship
        $c = 20;
        $d = 50;
        $e = 20;
        echo '<br>' . $c <=> $d . '<br>';
        echo $d <=> $c . '<br>';
        echo $c <=> $e . '<br><br>';

        #Ordre des opérations
        $m = 0;
        echo '<br><br>' . $m++ . '<br>'; #Affiche d'abord la valeur de x puis l'incrémente de 1
        echo $m . '<br>';

        $n = 0;
        echo '<br>' . ++$n . '<br>'; #Incrémente de 1 la valeur de x puis l'affiche
        echo $n . '<br>';

        #Opérateurs logiques
        echo var_dump($c < 100 and $d < 100) .  var_dump($c > 100 and $d < 100) . var_dump($c < 100 and $d > 100) . var_dump($c > 100 and $d > 100) . '<br>';
        echo var_dump($c < 100 && $d < 100) .  var_dump($c > 100 && $d < 100) . var_dump($c < 100 && $d > 100) . var_dump($c > 100 && $d > 100) . '<br>';

        echo var_dump($c < 100 or $d < 100) .  var_dump($c > 100 or $d < 100) . var_dump($c < 100 or $d > 100) . var_dump($c > 100 or $d > 100) . '<br>';
        echo var_dump($c < 100 || $d < 100) .  var_dump($c > 100 || $d < 100) . var_dump($c < 100 || $d > 100) . var_dump($c > 100 || $d > 100) . '<br>';

        $x = true;
        echo var_dump(!$x) . '<br>';
        echo var_dump($c < 100 xor $d < 100) .  var_dump($c > 100 xor $d < 100) . var_dump($c < 100 xor $d > 100) . var_dump($c > 100 xor $d > 100) . '<br>';

        $s = " points !";
        echo $b . $s;

        $b .= $s; # Concaténation de b et s dans b
        echo $b;
    ?>
</body>
</html>