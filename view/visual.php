<div class="container conteudo">
    <div>
        <button id="buttonClick" nome="buttonClick" class="buttonClick btn btn-primary">Rolar Dados</button>
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
        <label>O vencedor é</label>

        <div class="winner"></div>
    </div>
</div>
<script>
    $(".buttonClick").click(()=>{
        dices(".um")

        setTimeout(dices(".dois"), 10000)
        
        setTimeout(dices(".tres"), 10000)
        
        setTimeout(dices(".quatro"), 10000)

        setInterval(10000)
        $('.winner').text(winner())
    })
</script>