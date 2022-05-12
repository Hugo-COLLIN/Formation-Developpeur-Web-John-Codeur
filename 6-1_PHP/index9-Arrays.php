<!DOCTYPE html>
<html>
<head>

</head>
<body>
    <?php
        #array simple : index-valeur
        $joursTravail = array("Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi");

        var_dump($joursTravail);
        echo '<br>' . count($joursTravail) . '<br>';

        #Parcours avec for
        for ($i = 0 ; $i < count($joursTravail) ; $i ++)
            echo "$joursTravail[$i] <br>";

        #Parcours avec foreach
        foreach($joursTravail as $value)
            echo "$value !<br>";


        #array associatif : clé-valeur
        $personnes = array("Pierre" => 40, "Mario" => "cinquante", 10110011 => 60.5); # Achercher: ajout de 0 devant la dernière clé

        #Parcours avec foreach
        foreach($personnes as $key => $value)
        {
            echo "$key a $value ans !<br>";
        }


    ?>
</body>
</html>