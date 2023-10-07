<!DOCTYPE html>
<html>
<head>
    <title>Meine Webseite</title>
</head>
<body>
    <h1>Willkommen auf meiner Webseite</h1>
    
    <p id="demo">Hier wird eine Nachricht angezeigt.</p>
    
    <button onclick="changeMessage()">Klick mich!</button>

    <script>
        // JavaScript-Code
        function changeMessage() {
            var message = "Die Nachricht wurde geändert!";
            document.getElementById("demo").innerHTML = message;
        }
    </script>
</body>
</html>
