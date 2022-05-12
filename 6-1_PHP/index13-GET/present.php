
<!DOCTYPE html>
<html>
<head>

</head>
<body>
    <h1>
        <?php
            echo "Bonjour, moi c'est " . $_GET['name'] . " et j'ai " . $_GET["age"] . " ans !!! <br>";
            var_dump($_GET);
        ?>
    </h1>
</body>
</html>