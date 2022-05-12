<!DOCTYPE html>
<html>
<head>

</head>
<body>
    <?php
        $x = "La chaine de test pas du tout flatteur comme nom...";

        echo strlen($x) . '<br>';
        echo str_word_count($x) . '<br>';
        echo strrev($x) . '<br>';

        echo strpos($x, "test")  . '<br>';
        var_dump(strpos($x, "test"));
        echo  '<br>' . strpos($x, "bille") . '<br>';
        var_dump(strpos($x, "bille"));

        $v1 = "du tout";
        $v2 = "très";

        echo '<br>' . str_replace($v1, $v2, $x) . '<br>';

    ?>
</body>
</html>