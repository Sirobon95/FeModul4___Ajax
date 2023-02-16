function login() {
    let input1 = $("#username").val()
    let input2 = $("#password").val()
    if (input1 == "" || input2 == "") {
        document.getElementById("checkinputlogin").innerHTML = "Vui lòng nhập đầy đủ thông tin"
    } else {


        let account = {
            "username": document.getElementById("username").value,
            "password": $("#password").val()
        }

        $.ajax({
            type: "Post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: "http://localhost:8080/login",
            data: JSON.stringify(account),
            //xử lý khi thành công
            success: function (data) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data));
                alert("thành công")
                location.href = "Login.html"
            },
            error: function (err) {

            }
        })
    }
}
function signin() {
    let input1 = $("#fullName").val()
    let input2 = $("#username").val()
    let input3 = $("#password").val()
    let input4 = $("#phone").val()
    let input5 = $("#rePass").val()
    if (input1 == "" || input2 == "" || input3 == "" || input4 == "" || input5 == "") {
        // document.getElementById("checkInput").innerHTML = "Vui lòng nhập đầy đủ thông tin"
    } else {
        if (input5 != input3) {
            document.getElementById("messageUsername").innerHTML = ""
            document.getElementById("checkPass").innerHTML = "Mật khẩu không trùng khớp"
            document.getElementById("password").value = ""
            document.getElementById("rePass").value = ""

        } else {
            document.getElementById("checkPass").innerHTML = ""

            let account = {
                "fullname": document.getElementById("fullName").value,
                "username": $("#username").val(),
                "password": $("#password").val(),
                "phonenumber": $("#phone").val(),
            }

            $.ajax({
                type: "Post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                url: "http://localhost:8080/register",
                data: JSON.stringify(account),
                //xử lý khi thành công
                success: function (data) {
                    location.href = "login.html"
                },
                error: function (err) {
                    document.getElementById("messageUsername").innerHTML = "Tài khoản đã tồn tại"

                }
            })
        }
    }
}




