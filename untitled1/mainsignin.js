const fullNameEle = document.getElementById('fullName');
const usernameEle = document.getElementById('username');
const passwordEle = document.getElementById('password');
const repassEle = document.getElementById('rePass');
const phoneEle = document.getElementById('phone');

const btnRegister = document.getElementById('btn btn-primary float-right btn-login d-block w-100');
const inputEles = document.querySelectorAll('.input form-control-lgin');

btnRegister.addEventListener('click', function () {
    Array.from(inputEles).map((ele) =>
        ele.classList.remove('success', 'error')
    );
    let isValid = checkValidate();

    if (isValid) {
        alert('Đăng ký thành công');
    }
});
function checkValidate() {
    let fullNameValue = fullNameEle.value;
    let usernameValue = usernameEle.value;
    let passwordValue = passwordEle.value;
    let repassValue = repassEle.value;
    let phoneValue = phoneEle.value;
    let isCheck = true;
    // tên đăng ký
    if (fullNameValue == '') {
        setError(fullNameEle, 'Tên không được để trống');
        isCheck = false;
    } else {
        setSuccess(fullNameEle);

    //  tên tài khoản
    }
    if (usernameValue == '') {
        setError(usernameEle, 'Tên không được để trống');
        isCheck = false;
    } else {
        setSuccess(usernameEle);
    }
    //chẹck mật khẩu
    if(passwordValue == ""){
        setError(passwordEle,'Nhập mật khẩu it nhất 6 kí tự gồm 1 số và 1 chữ')
        isCheck = false;
    }else if (!ispassword(passwordValue)){
        setError(passwordEle,'Không đúng định dạng mật khẩu')
        isCheck = false;
    }else {
        setSuccess(passwordEle);
    }

    if(repassValue==''){
        setError(repassEle,'Nhập lại mật khẩu')
    }else if (repassValue != passwordValue){
        setError(repassEle,'Sai mật khẩu ! Vui lòng nhập đúng mật khẩu như trên')
    }else {
        setSuccess(repassEle);
    }

    if (phoneValue == '') {
        setError(phoneEle, 'Số điện thoại không được để trống');
        isCheck = false;
    } else if (!isPhone(phoneValue)) {
        setError(phoneEle, 'Số điện thoại không đúng định dạng');
        isCheck = false;
    } else {
        setSuccess(phoneEle);
    }
    return isCheck;

    function setSuccess(ele) {
        ele.parentNode.classList.add('success');
    }

    function setError(ele, message) {
        let parentEle = ele.parentNode;
        parentEle.classList.add('error');
        parentEle.querySelector('small').innerText = message;
    }
    function ispassword(password){
        return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);

    }
    function isPhone(number) {
        return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
    }

}
//______________________________________________________________________________________________________________