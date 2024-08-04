let check = document.querySelector("shippingInfo");
check.addEventListener("click", function() {
    if (check.checked == true) {
        document.querySelector("#shippingName").value = document.querySelector("#billingName").value;
        document.querySelector("#shippingTel").value = document.querySelector("#billingTel").value;
        document.querySelector("#shippingAddr").value = document.querySelector("#billingAddr").value;
    }else{
        document.querySelector("#shippingName").value ="";
        document.querySelector("#shippingTel").value ="";
        document.querySelector("#shippingAddr").value ="";
    }
})

//회원가입창
function getInput() {
    const x = document.forms["form1"];
    let text = "";
    for (let i = 0; i < x.length; i++)
        text += x.elements[i].value + '<br>';
    document.getElementById("show").innerHTML = text;
}

function myFunction() {
    let id = document.getElementById("id").value;
    let pw = document.getElementById("pass").value;

    if(pw.length < 1) {
        document.getElementById('show').innerHTML = "비밀번호를 입력해주세요!"
    } else if (pw.length < 8 ) {
        document.getElementById('show').innerHTML = "비밀번호를 8자리 이상 입력하세요"
    } else {
        document.getElementById('show').innerHTML = "입력 완료"
    }
    ["id", "pass"].forEach(field => document.getElementById(field).value="")
}