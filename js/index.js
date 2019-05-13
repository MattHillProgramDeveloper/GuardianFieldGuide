let apiKey = "295d9b8a41bf489a9987d980ee8260a4"
let client_id = "26962"

// let xhr = new XMLHttpRequest();
// xhr.open("GET", "https://www.bungie.net/platform/Destiny2/Manifest/InventoryItem/1274330687/", true)
// xhr.setRequestHeader("X-API-Key", apiKey)

// xhr.onreadystatechange = function(){
//  if(this.readyState === 4 && this.status === 200){
//   let json = JSON.parse(this.responseText);
//   console.log(json.Response.data.inventoryItem.itemName); //Gjallarhorn
//  }
// }

// xhr.send();

//this is used for User Authentication
//https://www.bungie.net/en/OAuth/Authorize?client_id=26962&response_type=code

//this is what I want to try and run once I authenticate properly
// xhr = new XMLHttpRequest();
// xhr.open("GET", "https://www.bungie.net/platform/Destiny2/Manifest", true);
// xhr.setRequestHeader("X-API-Key", apiKey);

// xhr.onreadystatechange = function(){
//  if(this.readyState === 4 && this.status === 200){
//   response = JSON.parse(this.responseText);
//   console.log(response.Response); //Gjallarhorn
//  }
// }

// xhr.send();

// 1 do the redirect
// 2 request tokens


//This right here checks to see if we are already logged in via Bnet.
let authCode = ""
let urlPieces = window.location.href.split('?')
if (urlPieces.length > 1) //then we have extra paramaters and should have an authcode
{
    let urlParams = urlPieces[1].split('&')
    urlParams.forEach(function(param)
    {
        console.log(param)
        let paramCheck = param.split('=')
        if (paramCheck[0] == "code")
        {
            console.log("Found Code: ", paramCheck[1])
            authCode = paramCheck[1]
        }
    })
}

// let xhr4tkn = new XMLHttpRequest();
// xhr4tkn.open("post", "https://www.bungie.net/Platform/App/OAuth/Token/?client_id="+client_id+"&grant_type=authorization_code&code="+authCode, true)
// xhr4tkn.setRequestHeader("X-API-Key", apiKey)
// xhr4tkn.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")

// xhr4tkn.onreadystatechange = function(){
//  if(this.readyState === 4 && this.status === 200){
//   let json = JSON.parse(this.responseText);
//   console.log(json.Response);
//  }else{
//      console.log(e)
//  }
// }

// xhr4tkn.send();

let bnetUrl = "https://www.bungie.net/Platform/App/OAuth/Token/"

let options =()=>{
    return{
        method: "POST",
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Origin': 'https://matthillprogramdeveloper.github.io'
        },
        body:{
            'grant_type': 'authorization_code',
            'client_id': client_id,
            'code':authCode
        }
    }
}

fetch(bnetUrl,options()).then(response=>{
    console.log(response)
})