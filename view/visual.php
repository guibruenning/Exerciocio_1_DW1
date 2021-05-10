<div class="container conteudo">
    <div>
        <button id="buttonClick" nome="buttonClick" class=" buttonClick btn btn-primary">Rolar Dados</button>
    </div>
    <div class="row">
        <div class="divDice col">
            <label>Dado 1 Jogador</label>
            <div class="dice um hide"></div>

        </div>
        <div class="divDice col">
            <label>Dado 2 Jogador</label>
            <div class="dice dois hide"></div>
        </div>
        <div class="divDice col">
            <label>Dado 1 Computador</label>
            <div class="dice tres hide"></div>
        </div>
        <div class="divDice col">
            <label>Dado 2 Computador</label>
            <div class="dice quatro hide"></div>
        </div>
    </div>
    <div class="container containerWinner">
        <label>O vencedor é </label>

        <div class="winner fs-1 bg-primary bg-gradient"></div>

        <label>com o Jogador tirando<b class="resultPlayer"></b> e o Computador tirando <b class="resultComputer"></b>
    </div>
</div>
<script>

    $(".buttonClick").click(()=>{
        setRan(randomFunction(), randomFunction(), randomFunction(), randomFunction())

        dices(".um")

        setTimeout(dices, 2000, ".dois")
        
        setTimeout(dices, 4000, ".tres")
        
        setTimeout(dices, 6000, ".quatro")

        setTimeout(function(){$('.winner').text(winner())},8000)
    })
</script>