function Calculate() {
    var yourName = playerName.value;
    var yourLoversName = lover.value;
    var randomNumber = Math.round(Math.random()*100)
    
       
    if (yourLoversName == "" || yourName == "") {
        disp.innerHTML = `
        <h1 class="display-6">Input Field(s) cannot be empty! ✖✖✖ </h1>
            `
    }else if (randomNumber >= 70) {
        disp.innerHTML = `
        <h1 class="display-6"> <b style="font-size:1em;"> ✔✔✔</b>
            <br>
                <p style="color:rgb(4, 254, 25);">You and ${yourLoversName} match</P> 
                <b style="font-size:1em;">${randomNumber}%</b>
                <p style="color:white;">You'll not want to lose ${yourLoversName}</P> 
            </h1>
        `
        lover.value = ""
        playerName.value = ""
    }else if (randomNumber <= 70 && randomNumber > 50) {
        disp.innerHTML = `
        <h1 class="display-6"> <b style="font-size:1em;"> ⚠⚠⚠</b>
            <br>
                <p style="color:yellow;">You and ${yourLoversName} match</P> 
                <b style="font-size:1em;">${randomNumber}%</b>
                <p style="color:white;">${yourName}!! Think Twice... No talk say I no warn you o.</P> 
            </h1>
        `
        lover.value = ""
            playerName.value = ""
    }else if (randomNumber <= 50 && randomNumber >30) {
            disp.innerHTML = `
            <h1 class="display-6"> <b style="font-size:1em;"> 😈😈😈</b>
                <br>
                    <p style="color:yellow;">You and ${yourLoversName} match</P> 
                    <b style="font-size:1em;">${randomNumber}%</b>
                    <p style="color:white;">Don't trust ${yourLoversName} E go shock you.</P> 
                </h1>
            `
            lover.value = ""
            playerName.value = ""
    }else if (randomNumber <= 30 && randomNumber >20) {
            disp.innerHTML = `
            <h1 class="display-6"> <b style="font-size:1em;"> 😆😆😆</b>
                <br>
                    <p style="color:red;">You and ${yourLoversName} match</P> 
                    <b style="font-size:1em;">${randomNumber}%</b>
                    <p style="color:white;">Warning Zone!!!. Run for your life you go chop breakfast</P> 
                </h1>
            `
            lover.value = ""
            playerName.value = ""
    }else if (randomNumber <= 20 && randomNumber >10) {
            disp.innerHTML = `
            <h1 class="display-6"> <b style="font-size:1em;">🚩🚩🚩</b>
                <br>
                    <p style="color:red;">You and ${yourLoversName} did not match match</P> 
                    <b style="font-size:1em;">${randomNumber}%</b>
                    <p style="color:white;">Danger Zone!!! 😁😁 You go soon chop breakfast.</p> 
                </h1>
            `
            lover.value = ""
            playerName.value = ""
            lessThanTwenty.play()
    }else if (randomNumber <= 10) {
            disp.innerHTML = `
            <h1 class="display-6"> <b style="font-size:1em;"> 😀😀😁</b>
                <br>
                    <p style="color:red;">You and ${yourLoversName} did not match at all</p> 
                    <b style="font-size:1em;">${randomNumber}%</b>
                    <p style="color:white;"> She just dey use you she no love for at all.</p> 
                </h1>
            `
            lover.value = ""
            playerName.value = ""
    }
}