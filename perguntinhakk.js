<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Convite para Larissa</title>
    <style>
        body {
            background-color: black;
            font-family: Arial, sans-serif;
            color: white;
            text-align: center;
        }

        h2 {
            font-size: 24px;
        }

        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        .btn-container {
            display: flex;
            gap: 20px;
            margin-top: 20px;
        }

        .btn {
            background-color: white;
            color: blue;
            border: 2px solid white;
            border-radius: 10px;
            padding: 10px 20px;
            cursor: pointer;
        }

        .btn-no {
            position: absolute;
            left: 0;
            top: 0;
            display: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Deixa a Larissa vir aqui em casa?</h2>
        <div class="btn-container">
            <button class="btn" id="btn-sim">Sim</button>
            <button class="btn btn-no" id="btn-nao">Não</button>
        </div>
    </div>

    <script>
        const btnNao = document.getElementById('btn-nao');

        btnNao.addEventListener('mouseover', () => {
            const randomX = Math.random() * (window.innerWidth - btnNao.clientWidth);
            const randomY = Math.random() * (window.innerHeight - btnNao.clientHeight);
            btnNao.style.left = randomX + 'px';
            btnNao.style.top = randomY + 'px';
        });
    </script>
</body>
</html>