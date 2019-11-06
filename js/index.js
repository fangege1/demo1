let box = document.getElementsByClassName('box')[0];
// boxList = box.getElementsByTagName('li');
let backTop = document.getElementsByClassName('backTop')[0];
let back = document.getElementsByClassName('back')[0];


//发送AJAX请求
let page = 0
let isRun = false
let imgData = null;
let queryHTML = () => {
    page++
    let xhr = new XMLHttpRequest();
    //打开请求地址
    xhr.open('GET', `json/data.json?page=${page}`, false)
    //监听请求状态
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            imgData = JSON.parse(xhr.responseText)
        }
    }
    xhr.send(null)
}
queryHTML()

    ~ function () {
        let bindHTML = () => {
            let $boxList = $('.box>li');
            for (let i = 0; i < imgData.length; i += 4) {
                $boxList.sort((a, b) => {
                    return $(a).outerHeight() - $(b).outerHeight();
                }).each((index, curLi) => {
                    let item = imgData[i + index]
                    if (!item) return;
                    let {
                        id,
                        pic,
                        title,
                        link
                    } = item;
                    $(`<a href="${link}">
                        <img src="${pic}" alt="">
                        <p>${title}</p>
                    </a>`).appendTo($(curLi));
                })
            }
            isRun = false
        }
        bindHTML()

        $(window).on('scroll', function () {
            let winH = $(window).outerHeight(),
                pageH = document.documentElement.scrollHeight || document.body.scrollHeight,
                scrollT = $(window).scrollTop();
            if (scrollT + 100 > pageH - winH) {
                if (isRun) {
                    return
                }
                isRun = true
                if (page == 5) {
                    alert("当前数据加载完毕")
                    return
                }
                queryHTML()
                bindHTML()
            }
        })
        window.onscroll = function () {
            let scrollT = document.documentElement.scrollTop || document.body.scrollTop
            if (scrollT > 800) {
                back.style.display = 'block'
            } else if (scrollT < 800) {
                back.style.display = 'none'
            }

            let timer = null;
            backTop.onclick = function () {
                timer = setInterval(function () {
                    let scrollTo = document.documentElement.scrollTop || document.body.scrollTop;
                    speed = scrollTo / 7
                    scrollTo -= speed
                    console.log(scrollTo)
                    if (scrollTo == 0) {
                        clearInterval(timer)
                    }
                    document.documentElement.scrollTop = scrollTo
                    document.body.scrollTop = scrollTo
                }, 17)
            }
        }




























        // ~ function () {

        //     let bindHTML = ({
        //         id,
        //         pic,
        //         title,
        //         link
        //     } = {}) => {
        //         return `<a href="${link}">
        //                         <img src="${pic}" alt="">
        //                          <p>${title}</p>
        //                      </a>`
        //     }

        //     let $boxList=$('.box>li');
        //     boxList = [].slice.call($boxList)

        //     for (let i = 0; i < imgData.length; i += 4) {
        //         let item1 = imgData[i],
        //             item2 = imgData[i + 1]
        //         item3 = imgData[i + 2]
        //         item4 = imgData[i+3]

        //         boxList.sort((a, b) => {
        //             return a.offsetHeight - b.offsetHeight
        //         }).forEach((item,index) => {
        //                 boxList[index].innerHTML+=bindHTML(eval('item'+(index+1)))
        //         });
        //     }
    }()