function calcul(){
    let res = document.getElementById("chiffre").value;
    res = res*2;
    console.log(res);
    alert(res);
    document.getElementById("resultat").setAttribute("value",res);
}
document.getElementById("boutonCalcul").addEventListener("click", calcul);