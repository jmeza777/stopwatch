<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="./stopwatch.css">
    <title>Stopwatch</title>
</head>
<body>
    <div class="container">
        <div id="timer">
            00:00:00
        </div>

        <div class="buttons">
            <button id="startStopBtn">
                <i class="material-icons" id="play">play_arrow</i>
            </button>

            <button id="resetBtn">
                <i class="material-icons" id="reset">replay</i>
                </button>
        </div>
        </div>
</body>
<script src="./stopwatch.js"></script>
</html>