let apiKey = "295d9b8a41bf489a9987d980ee8260a4"
let client_id = "26962"


//this is used for User Authentication
//https://www.bungie.net/en/OAuth/Authorize?client_id=26962&response_type=code


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


let bnetUrl = "https://www.bungie.net/Platform/App/OAuth/Token/"

let options = {
        method: "POST",
        headers:{
            'X-API-KEY':apiKey,
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Origin': 'https://matthillprogramdeveloper.github.io'
        },
        body:'grant_type=authorization_code&code='+authCode+'&client_id=26962'
    }

let answer 

fetch(bnetUrl,options).then(function(response){
    answer = response.json()
    console.log(answer)
    return answer
})