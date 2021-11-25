function createPopup(errorText, reload = false){

    let popup = document.createElement("div");
    popup.setAttribute("id", "errorPopup");

    let headline = document.createElement("h3");
    headline.append(errorText);

    let button = document.createElement("button");
    button.setAttribute("id", "popupButton");
    if(reload){
        button.append("Try again");
        button.addEventListener("click", function(){
            location.reload();
        })
    }else{
        button.append("OK");
        button.addEventListener("click", function(){
            document.getElementById("errorPopup").remove();
        })
    }
   
    popup.append(headline);
    popup.append(button);
    maindiv.append(popup);
}