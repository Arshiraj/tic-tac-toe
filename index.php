<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>tic-tac-toe</title>
<link rel="stylesheet" href="tic.css"/>
</head>
<body>
    <div class ="msg-container hide" id="msg-container">
        <p id="msg">Winner</p>
        <button id="new-Btn">New Game</button>
    </div>
    <main>
    <h1><b>Tic-Tac-Toe Game </b></h1>
    <div class="container">
        <div class="game">
        
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
           </div>
        </div>
        <div class="balloons hide">
            <div class="balloon red">🎈</div>
            <div class="balloon blue">🎉</div>
            <div class="balloon green">😍</div>
            <div class="balloon yellow">🎊</div>
            <div class="balloon purple">🤩</div>
            <div class="balloon orange">🥳</div>
          </div>
          <form id="saveForm" action="save_winner.php" method="POST" style="display: none;">
            <input type="hidden" name="winner" id="winnerInput">
        </form>
        
          
          
        <button id="reset-Btn">RESET GAME</button>
    </main>
    <script src="tic.js"></script>
</body>
</html>