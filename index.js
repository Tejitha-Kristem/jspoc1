let counter = 0;
function Submit() {
    const userGuess = document.getElementById('num');
    if (userGuess.value != '') {

        let res;
        let computers = Math.floor(Math.random() * 100) + 1;
        console.log(userGuess.value, computers);
        ++counter;

        if (counter == 10) {
            res = "YOU HAVE ATTEMPTED 10 TIMES"

            document.getElementById('big').innerHTML = "Too Low! Replay Game!";
            document.getElementById('emoji').innerHTML = "&#128547&#128547&#128547";
            document.getElementById('guessbtn').disabled = true;


            setTimeout(() => {
                alert("YOU HAVE ATTEMPTED 10 TIMES\n Click OK to replay")
                location.reload();
            }, 3000)
        }
        else if (Number(userGuess.value) == computers) {
            res = "YOU WON !!!!!!"
            document.getElementById('guessbtn').disabled = true;
            document.getElementById('result').style.color = "green";
            document.getElementById('emoji').innerHTML = "&#128512&#128512&#128512";

            setTimeout(() => {
                alert(res + " in " + counter + " guesses \n Click OK to replay")
                location.reload();
            }, 3000)

        }
        else {
            res = "FAILED, GUESS AGAIN"
            document.getElementById('result').style.color = "red";

        }

        document.getElementById('result').innerHTML = res;
        document.getElementById('tried').innerHTML = counter;
        document.getElementById('rem').innerHTML = 10 - counter;
    }
    else {
        document.getElementById('result').innerHTML = "Please enter a value";
    }
}

