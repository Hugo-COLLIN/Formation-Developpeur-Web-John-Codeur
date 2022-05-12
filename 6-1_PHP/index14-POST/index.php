<?php declare(strict_types=1); ?>
<!DOCTYPE html>
<html>
<head>

</head>
<body>
        <h1>GET</h1>
        <form action="presentGET.php" method="get">
            Nom : <input type="text" name="nom"><br>
            Téléphone : <input type="tel" name="telephone"><br>
            <input type="submit">
        </form>

        <h1>POST</h1>
        <form action="presentPOST.php" method="post">
            Nom : <input type="text" name="nom"><br>
            Téléphone : <input type="tel" name="telephone"><br>
            <input type="submit">
        </form>

</body>
</html>