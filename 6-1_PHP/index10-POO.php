<?php declare(strict_types=1); ?>
<!DOCTYPE html>
<html>
<head>

</head>
<body>
    <?php
        class Etudiant {
            public bool $etudie = true;
            public string $nom;
            public int $age;
            public array $notes;

            public function __construct (string $nomP, int $ageP, array $notesP) {
                $this->nom = $nomP;
                $this->age = $ageP;
                $this->notes = $notesP;
            }

            public function presenteToi()
            {
                if ($this->etudie)
                {
                    echo "Je m'appelle $this->nom et j'ai $this->age ans ! <br>";

                    foreach($this->notes as $matiere => $n)
                        echo "* En $matiere, j'ai eu $n.<br>";
                }
            }

        }

        $notesHugo = array("Informatique" => 14, "Rédaction" => 18, "UX Design" => 16);
        $Hugo = new Etudiant("Hugo", 19, $notesHugo);
        $Hugo->presenteToi();

        echo '<br>';
        $notesLucie = array("Programmation" => 15, "Réseau" => 11);
        $Lucie = new Etudiant("Lucie", 19, $notesLucie);
        $Lucie->presenteToi();

        $Lucie->etudie = false;
        $Lucie->presenteToi(); #Ne rentre pas dans le if
    ?>
</body>
</html>