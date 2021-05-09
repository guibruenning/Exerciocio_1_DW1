<div>
    <button id="buttonClick" nome="buttonClick" class="buttonClick btn btn-primary">Rolar Dados</button>
</div>

<div class="divDice">
    <img class="dice hide" />
</div>

<script>
    $(".buttonClick").click(()=>{
        if($(".dice").attt("class"))
        var ran = randomFunction()
        $(".dice").attr("src", 'img/icons/dice_'+randomFunction()+'.png')
    })
</script>