
function submit() {
    var answer1 = document.getElementById('email').value
    answer = encodeURIComponent(answer1)

    var formId = '1FAIpQLSd5CulxFNK_zJ9p6pkLOoxTdwSTYHlQxaZBgdqLYVOOFDT24w'
    var queryString = 'formResponse?&entry.20928116=' + answer + '&submit=SUBMIT'

    var url = 'https://docs.google.com/forms/d/e/' + formId + '/' + queryString

    var opts = {
        method: "POST",
        mode: "no-cors", // apparently Google will only submit a form if "mode" is "no-cors"
        redirect: "follow",
        referrer: "no-referrer"
    }
    if (answer1.includes('@')) {
        submitted = 1
    } else {
        submitted = 2
    }
    start()

    return fetch(url, opts)
}

function focused() {
    submitted = 0
    start()
}


var submitted = 0

function text(words, color, size_v, left1_v, left2_v, top_v) {
    var left1 = x(left1_v)
    var left2 = x(left2_v)
    var top = y(top_v)
    var size = s(size_v)


	var e = document.createElement('div')
	//e.style.backgroundColor = 'gray'
	e.style.position = 'absolute'
    e.style.width = px(left2-left1)

	e.style.left = px(left1)
	e.style.top = px(top)
	e.style.fontFamily = 'Open Sans'
	e.style.fontSize = px(size)
    e.style.color = color
    e.innerHTML = words
    e.style.lineHeight = px(size)

    document.body.appendChild(e)
}

function link(words,color, size_v, left1_v, left2_v, top_v, link) {
    var left1 = x(left1_v)
    var left2 = x(left2_v)
    var top = y(top_v)
    var size = s(size_v)

    var e = document.createElement('a')
    e.href = link
    //e.style.backgroundColor = 'gray'
    e.style.position = 'absolute'
    e.style.width = px(left2 - left1)

    e.style.left = px(left1)
    e.style.top = px(top)
    e.style.fontFamily = 'Open Sans'
    e.style.fontSize = px(size)
    e.style.color = color
    e.innerHTML = words
    e.style.lineHeight = px(size)

    document.body.appendChild(e)
}

function box(color, left1_v, left2_v, top1_v, top2_v, fixed) {
    var top1 = y(top1_v)
    var top2 = y(top2_v)

    var left1 = x(left1_v)
    var left2 = x(left2_v)


    var e = document.createElement('div')
    e.style.backgroundColor = color

    if (fixed) {
        e.style.position = 'fixed'
        e.style.zIndex = 3;
    } else {
        e.style.position = 'absolute'
    }
    
    e.style.width = '100%'//px(left2-left1)
    e.style.height = px(top2-top1)

    e.style.top = px(top1)
    //e.style.left = px(left1)

    document.body.appendChild(e)
}

function img(src, left1_v, left2_v, top1_v, fixed) {
    var left1 = x(left1_v)
    var left2 = x(left2_v)
    var top1 = y(top1_v)

    var e = document.createElement('img')
    if (fixed) {
        e.style.position = 'fixed'
        e.style.zIndex = 3;
    } else {
        e.style.position = 'absolute'
    }
    e.style.width = px(left2 - left1)
    
    e.style.left = px(left1)
    e.style.top = px(top1)
    e.src = src

    document.body.appendChild(e)
}

function btn() {
    /*
    var form = document.createElement('form')
    form.action = 'https://formspree.io/xlepagvr'
    form.method = 'POST'

    var email = document.createElement('input')
    email.type = 'email'
    email.name = "_replyto"
    email.placeholder = 'email'

    var submit = document.createElement('input')
    submit.type = 'submit'
    submit.value = 'sign up for the beta!'
    */

    //var form = document.getElementsByTagName('form')[0]
    var email = document.getElementById('email')
    var submit = document.getElementById('submit')


    email.style.zIndex = 2
    submit.style.zIndex = 2

    submit.style.backgroundColor = gray4
    submit.style.border = 'none'
    submit.style.borderRadius = px(s(25))
    submit.style.width = px(s(300))
    submit.style.height = px(s(50))
    submit.style.color = 'white'
    submit.style.fontSize = px(s(20))
    submit.style.fontFamily = 'Open Sans'
    submit.style.cursor = 'pointer'
    
    submit.style.position = 'absolute'
    submit.style.top = px(y(0.61 * h))
    submit.style.left = px(x(w / 4))
    submit.style.zIndex = 2;
    submit.onmouseover = () => { submit.style.backgroundColor = blue }
    submit.onmouseout = () => { submit.style.backgroundColor = gray4 }

    email.style.width = px(s(300))
    email.style.height = px(s(35))
    email.style.fontSize = px(s(20))
    email.style.fontFamily = 'Open Sans'

    email.style.position = 'absolute'
    email.style.top = px(y(0.56 * h))
    email.style.left = px(x(w / 4))
    email.style.zIndex = 2;

    /*
    form.appendChild(email)
    form.appendChild(submit)
    document.body.appendChild(form)
    */
}

function px(n) {
    return n + 'px'
}

function s(ps) {
    return ps * fac
}

function x(px) {
    var zw = (px + (tw - w) / 2)
    return tw/2 - fac * (tw/2 - zw)
    //return px
}

function y(py) {
    return py * fac
}

var w = 1920
var h = 1080

var gray1 = '#E6E6E6'
var gray2 = '#e1e1e1'
var gray3 = '#dcdcdc'
var gray4 = '#C1C1C1'

var darkgray = '#353535'
var blue = '#53A8A8'
var blue2 = '#448989'
var red = '#B65353'
var black = 'black'
var white = 'white'
var big = 50
var norm = 30
var small = 15

var t1 = "Objective's browser extension lets you choose what you see online."
var t2 = 'You tell Objective what sort of content you want to see.'
var t3 = 'Objective uses ML to label search results and social media items, then filters and resorts them accordingly.'
var t4 = 'email us!'

var tw = null
var th = null
var fac = null

function purge() {
    var a = document.body.children;
    for (var i = 0; i < a.length; i++) {
        if (a[i].id != 'email' && a[i].id != 'submit') {
            document.body.removeChild(a[i])
            i--;
        }
    }
}

function start() {
    purge()

    tw = window.innerWidth
    th = window.innerHeight

    var minwidth = 1100
    fac = 1
    if (tw < minwidth) {
        fac = tw / minwidth

        //document.body.style.transform = 'scale(' + tw/minwidth + ')';
        //document.body.style.transformOrigin = tw / 2 + " 0";
    }

    //background
    document.body.style.backgroundColor = gray1
    document.body.style.margin = px(0)


    box(gray1, 0, w, 0, h, false)
    box(gray2, 0, w, h, 1.75 * h, false)
    box(gray3, 0, w, 1.75 * h, 2.5 * h, false)
    box(darkgray, 0, w, 2.5 * h, 3.0 * h, false)

    text(t1, black, big, 1 / 4 * w, 1 / 2 * w, 1 / 3 * h)
    img('p1.svg', 1 / 2 * w, 3 / 4 * w, 1 / 4 * h)
    if (submitted == 1) {
        text("you're in!", blue, 20, 1 / 4 * w, 1 / 2 * w, 2 / 3 * h)
    }
    if (submitted == 2) {
        text("is that a valid email?", blue, 20, 1 / 4 * w, 1 / 2 * w, 2 / 3 * h)
    }


    img('tablet.svg', 0.25 * w, 0.42 * w, 1.175 * h)
    text(t2, black, norm, 0.45 * w, 0.75 * w, 1.325 * h)

    img('up.svg', 0.3 * w, 0.7 * w, 2.025 * h)
    text(t3, black, norm, 0.25 * w, 0.75 * w, 1.925 * h)

    var fx = 0.35
    img('goodbye.svg', 0.40 * w, 0.60 * w, (3.0-fx) * h)

    box(gray1, 0, w, 0, 0.067 * h, true)
    box(gray3, 0, w, 0.067 * h, 0.068 * h, true)
    
    img('logo.svg', 1 / 4 * w, 0.345 * w, 5, true)
    
    text('our email is', black, norm, 0.45 * w, 0.75 * w, (3.01-fx) * h)
    link('getobjective@gmail.com', blue, norm, 0.41 * w, 0.45 * w, (3.04-fx) * h, 'mailto:getobjective@gmail.com?subject=Tell me more!!!')
    text('Copyright 2020 Objective, Inc. All rights reserved.', gray1, small, 0.41 * w, 0.75 * w, (3.32 - fx) * h)


    document.body.style.height = '100%'

    btn()
}
start()

window.addEventListener('resize', function (event) {
    start()
});
