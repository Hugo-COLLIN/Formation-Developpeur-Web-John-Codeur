<?php declare(strict_types=1); ?>
<!DOCTYPE html>
<html>
<head>

</head>
<body>
        <?php
            $x = 5;

            function mF()
            {
                echo $GLOBALS['x'] . '<br>';
            }
            mF();

            var_dump($_SERVER);
            echo "<br><br>" . $_SERVER["SERVER_NAME"] . "<br><br>";

            var_dump($_REQUEST);
            var_dump($_GET);
            var_dump($_POST);
            var_dump($_COOKIE);
            var_dump($_SESSION);
        ?>

</body>
</html>