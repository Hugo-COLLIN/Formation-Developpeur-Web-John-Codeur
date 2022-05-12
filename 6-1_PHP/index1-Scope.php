<!DOCTYPE html>
<html>
<head>

</head>
<body>
    <?php
        # Une var ds le scope global n'est pas visible dans 1 f° (scope local)
        # et 1 var locale n'est pas visible dans le global
        $v1 = 3;
        $v2 = 6;

        function mF () {
            echo $GLOBALS["v1"] + $GLOBALS['v2'];
        }

        function mF2 () {
            global $v1;
            echo $v1;
        }

        mF();
        mF2();

        #Var pas static perd sa valeur après la sortie de la fonction
        function varNStat () {
            $vNStat = 6;
            $vNStat++;
            echo $vNStat;
        }

        #Var static garde sa valeur après la sortie de la fonction
        function varStat () {
            static $vStat = 6;
            $vStat++;
            echo $vStat;
        }

        varNStat();
        varStat();
    ?>
</body>
</html>