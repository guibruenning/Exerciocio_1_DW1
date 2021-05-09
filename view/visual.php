<div>
    <button id="buttonClick" nome="buttonClick" class="buttonClick btn btn-primary">Rolar Dados</button>
</div>

<div class="divDice">
    <div class="dice hide"></div>
</div>

<script>
    $(".buttonClick").click(()=>{
        if($(".dice.hide").length != 0 ){
            $(".dice.hide").removeClass("hide")
        }
        var ran = randomFunction()
        switchImage()
        $(".dice").css("background-image", 'url(./img/icons/dice_'+randomFunction()+'.png)')
    })
</script>