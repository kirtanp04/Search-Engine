function myfun(){
    
    var input = document.getElementById("text").value;
    if(input !== ""){
    const url = "http://www.google.com/search?q=";
    var url1 = url +input;
    var win = window.open(url1, '_blank')
    win.focus;
    }
    else{
        alert("search something")
    }
    

}