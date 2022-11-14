function play(){
    var username = document.getElementById("username").value;
    alert(username);
    location.href="mastermind.html";
    sessionStorage.setItem("username",username);
    return;
}

/*
window.addEventListener('load', () => {
    const wins = sessionStorage.getItem('wins');
    const loses = sessionStorage.getItem('loses');
    
    document.getElementById('wins').innerHTML = wins2;
    document.getElementById('loses').innerHTML = loses2;
    this.wins2=wins2;
    this.loses2=loses2;
})

function handleSubmit () {
    sessionStorage.setItem("wins", this.wins);
    sessionStorage.setItem("loses", this.loses);
    return;
}
*/
