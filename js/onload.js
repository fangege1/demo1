let header = getCls('header')[0],
    onload = getCls('onload')[0],
    headdl = getCls('head-dl')[0],
    headzc = getCls('head-zc')[0],
    onload1 = getCls('onload1')[0],
    zcoff = getCls('zc-off')[0],
    myName = getCls('myName')[0],
    myPassword = getCls('myPassword')[0],
    zc = getCls('zc')[0],
    dl = getCls('dl')[0],
    zctext = getCls('zc-text')[0];

headdl.onclick = function (e) {
    e.preventDefault();
    onload1.style.display = "block"
}
zcoff.onclick = function (e) {
    e.preventDefault();
    onload1.style.display = "none"
}

let setCookie1 = (key, value, time) => {
    let a = new Date();
    a.setDate(a.getDate() + time)
    document.cookie = key + "=" + value + ";expires=" + a
}
let getCookie1 = (key) => {
    let str = document.cookie
    console.log(str)
    let reg = /[a-zA-Z0-9\u4e00-\u9fa5]+/g
    let arr = str.match(reg)
    console.log(arr)
    if (key == arr[0]) {
        return arr[1]
    } else if (key == arr[2]) {
        return arr[3]
    }
}
zc.onclick = function () {
    console.log(myName.value,myPassword.value )
        setCookie1('myName', myName.value, 5)
        setCookie1('myPassword', myPassword.value, 5)
        zctext.innerHTML = '恭喜您注册成功'

}
dl.onclick = function () {
    if (getCookie1('myName') == myName.value) {
        if (getCookie1('myPassword') == myPassword.value) {
            zctext.innerHTML = '登陆成功啦'
            setTimeout(function () {
                // window.location.href = "http://127.0.0.1:5500/%E8%8A%B1%E7%93%A3/index.html";
                window.location.href = "huaban.html";

            }, 1000)

        } else {
            alert('密码错误')
        }
    } else {
        alert('用户不存在')
    }
}