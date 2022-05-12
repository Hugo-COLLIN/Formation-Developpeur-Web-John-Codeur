<!DOCTYPE html>
<html>
<head>

</head>
<body>
    <?php
        $entier = 3;
        $flottant = 21.75;
        $bool = true;
        $chaine = "Slt";
        $chaine2 = 'Ok';
        $x = array("Lundi", "Mardi");
        $y = null;

        echo $entier . "<br>" . $chaine . '<br>'; # Concaténation avec le caractère . ou mettre nom var dans 1 même chaine
        var_dump($x); #détail du type de variable

        class Chat {
            function __construct()
            {
                $this->nom = "Minou";
            }
        }

        echo '<br> $chaine2 <br>'; #ds simple cote simple lecture des caracs
        $monChat = new Chat();
        var_dump($monChat);

        echo "<br> $y <br>"; #ds double cote transformation des nom de vars en valeurs des vars
        var_dump($y);
    ?>
</body>
</html>