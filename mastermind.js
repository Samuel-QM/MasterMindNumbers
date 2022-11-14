var clicks = 0;
window.addEventListener('load', () => {
const username = sessionStorage.getItem('username');
    document.getElementById('username').innerHTML = username;
    var var1 = Math.floor(Math.random() * 10);
    document.getElementById("var1").innerHTML = var1;
    var var2 = Math.floor(Math.random() * 10);
    document.getElementById('var2').innerHTML = var2;
    var var3 = Math.floor(Math.random() * 10);
    document.getElementById('var3').innerHTML = var3;
    var var4 = Math.floor(Math.random() * 10);
    document.getElementById('var4').innerHTML = var4;
    this.var1 = var1;
    this.var2 = var2;
    this.var3 = var3;
    this.var4 = var4;
	
	const wins = sessionStorage.getItem("wins");
	document.getElementById('wins').innerHTML = wins;
	const loses = sessionStorage.getItem("loses");
	document.getElementById('loses').innerHTML = loses;
	
    this.wins=wins;
    this.loses=loses;

})
function reset(){
		wins=0;
		loses=0;
		this.wins=wins;
		this.loses=loses;
		document.getElementById("wins").innerHTML = wins;
		document.getElementById("loses").innerHTML = loses;
}
function resetrandom(){
    var1 = Math.floor(Math.random() * 10);
    document.getElementById("var1").innerHTML = var1;
    var2 = Math.floor(Math.random() * 10);
    document.getElementById('var2').innerHTML = var2;
    var3 = Math.floor(Math.random() * 10);
    document.getElementById('var3').innerHTML = var3;
    var4 = Math.floor(Math.random() * 10);
    document.getElementById('var4').innerHTML = var4;
    this.var1 = var1;
    this.var2 = var2;
    this.var3 = var3;
    this.var4 = var4;
}

function onClick() {
    let restart = false;
    if (clicks<10){
        clicks += 1;
    }
    else{
        alert("Incorrecte");
        restart=true;
        contador();
        clicks=0;
        window.location.reload();
    }
    this.clicks=clicks;
    document.getElementById("clicks").innerHTML = clicks;
    this.restart=restart;
    
}


function guess(){
    var num = document.getElementById("num").value;
    this.num=num;
    var correcte= 0;
    var esta= 0;
    var esta1 = false;
    var esta2 = false;
    var esta3 = false;
    var esta4 = false;
    var victoria = false;
        //Booleans var4
        if(num%10==this.var4){
            correcte++;
            esta4=!esta4;

        }
        else{
            if(num%10==this.var3 && esta3==false){
                esta++;
                esta3=!esta3;
            }
            if(num%10==this.var2 && esta2==false){
                esta++;
                esta2=!esta2;
            }
            if(num%10==this.var1 && esta1==false){
                esta++;
                esta1=!esta1;
            }
        }
        num= num.slice(0, -1);
        //Booleans var3
        if(num%10==this.var3){
            correcte++;
            esta3=!esta3;
        }else{
            if(num%10==this.var4 && esta4==false){
                esta++;
                esta4=!esta4;
            }
            if(num%10==this.var2 && esta2==false){
                esta++;
                esta2=!esta2;
            }
            if(num%10==this.var1 && esta1==false){
                esta++;
                esta1=!esta1;
            }
        }   
        num= num.slice(0, -1);
        //Booleans var2
        if(num%10==var2){
            correcte++;
            esta2=!esta2;
        }else{
            if(num%10==this.var4 && esta4==false){
                esta++;
                esta4=!esta4;
            }
            if(num%10==this.var3 && esta3==false){
                esta++;
                esta3=!esta3;
            }
            if(num%10==this.var1 && esta1==false){
                esta++;
                esta2=!esta2;
            }
        } 
        num= num.slice(0, -1);
        //Booleans var1
        if(num%10==this.var1){
            correcte++;
            esta1=!esta1;
        }
        else{
            if(num%10==this.var4 && esta4==false){
                esta++;
                esta4=!esta4;
            }
            if(num%10==this.var3 && esta3==false){
                esta++;
                esta3=!esta3;
            }
            if(num%10==this.var1 && esta2==false){
                esta++;
                esta2=!esta2;
            }
        }
         
    if(correcte==4){
        alert("Ganador")
        victoria=true;
		this.victoria=victoria;
		contador();
		window.location.reload();
    }
    this.correcte=correcte;
    this.esta=esta;
    this.victoria=victoria;
}

function addComment(){
    var dynamic=document.getElementById('dynamic-table'),
        newRow=dynamic.insertRow(),
        cell1=newRow.insertCell(0),
        cell2=newRow.insertCell(1),
        cell3=newRow.insertCell(2),
        cell4=newRow.insertCell(3),
        cell5=newRow.insertCell(4),
        cell6=newRow.insertCell(5),
        num=document.getElementById("num").value;
        cell4.innerHTML =  num%10;
        num4=num%10;
        num= num.slice(0, -1);
        cell3.innerHTML =  num%10;
        num3=num%10;
        num= num.slice(0, -1);
        cell2.innerHTML =  num%10;
        num2=num%10;
        num= num.slice(0, -1);
        cell1.innerHTML =  num%10;
        num3=num%10;
        cell5.innerHTML =  this.correcte;
        cell6.innerHTML =  this.esta;  
}

function contador() {
	    document.getElementById("wins").innerHTML = wins;
		document.getElementById("loses").innerHTML = loses;
    if (this.victoria==true){
		wins++;
		sessionStorage.setItem("wins", wins);
		sessionStorage.setItem("loses", loses);

    }
    else {
		loses++;
		sessionStorage.setItem("wins", wins);
		sessionStorage.setItem("loses",loses);
    }

}