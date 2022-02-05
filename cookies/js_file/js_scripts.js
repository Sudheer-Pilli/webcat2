function setcookie()
{
    document.cookie="username = Sudheer";
    
}

function getCookie()
{
    if(document.cookie.length!=0)
    {
        alert(document.cookie)
    }
    else
    {
        alert("no cookies")
    }
}