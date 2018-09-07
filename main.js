
function validation()
{
    var passed = true;

    if(!CheckName())
    {
        passed = false;
    }
    if(!CheckEmail())
    {
        passed = false;
    }

    return passed;
}


function CheckName()
{
    var doc = document.getElementById("name");
    var text = document.getElementById("name").value;

    var regex = /^[a-zA-Z]+$/;

    if(text == "")
    {
        console.log("No name was entered");
        doc.placeholder = "No name was entered";
        doc.style.backgroundColor = "red";
        return false;
    }

    if(!(text.match(regex)))
    {
        doc.placeholder = "invalid name input";
        doc.style.backgroundColor = "red";
        console.log("Invalid input");
        return false;
    }
    return true;
}

function CheckEmail()
{
    var text = document.getElementById("email").value;

    var regex = /^(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/;

    if(text == "")
    {
        console.log("No email was entered");
        return false;
    }

    if(!(text.match(regex)))
    {
        console.log("Invalid input for email");
        return false;
    }
    return true;
}