<?php
include_once('includes/albums.php');
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Music Database</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.scss" type="text/css">
    <script type="text/javascript" src="js/script.js"></script>
</head>

<body>
    <div id="header">
        <a href="index.php">
            <p><span class="back-link">Back</span></p>
        </a>
        <h3>Tiare's Top Albums</h3>
    </div>
    <div class="container">
        <div class="row gy-5">
            <?php
            foreach ($albumArray as $album) {
                extract($album);
            ?>
                <div class="col">
                    <div class="card text-center" style="width: 18rem;">
                        <img src="<?php echo $albumImagePath ?>" class="card-img-bottom">

                        <div class="card-body">
                            <h5 class="card-title"><?php echo $albumName; ?></h5>
                            <p><?php echo $artist; ?></p>
                            <a href="<?php echo $spotifyLink; ?>" class="btn btn-primary">Go to Spotify</a>
                        </div>
                    </div>
                </div>

            <?php  } ?>

        </div>
    </div>

    <?php
    echo '<table border="1">';
    echo '<tr><th>Album</th><th>Artist</th><th>link</th></tr>';
    foreach ($albumArray as $albums) {
        echo '<tr>';
        foreach ($albums as $key) {
            echo '<td>' . $key . '</td>';
        }
        echo '</tr>';
    }
    echo '</table>';
    ?>
</body>

</html>