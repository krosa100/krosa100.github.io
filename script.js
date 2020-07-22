
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
    var form = document.getElementsByTagName('form')[0];
    form.style.zIndex = 2

    var email = form.children[0]
    var submit = form.children[1]

    submit.style.backgroundColor = gray4
    submit.style.border = 'none'
    submit.style.borderRadius = px(s(25))
    submit.style.width = px(s(300))
    submit.style.height = px(s(50))
    submit.style.color = 'white'
    submit.style.fontSize = px(s(20))
    submit.style.fontFamily = 'Open Sans'
    
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

var tw = window.innerWidth
var th = window.innerHeight

var minwidth = 1100
var fac = 1
if (tw < minwidth) {
    fac = tw / minwidth

    //document.body.style.transform = 'scale(' + tw/minwidth + ')';
    //document.body.style.transformOrigin = tw / 2 + " 0";
}

var mx = 1 / 4 * w;
var my = 1 / 4 * h;

var w = 1920
var h = 1080

console.log(tw)
console.log(x(w))

var gray1 = '#E6E6E6'
var gray2 = '#e1e1e1'
var gray3 = '#dcdcdc'
var gray4 = '#C1C1C1'

var darkgray = '#353535'
var blue = '#53A8A8'
var blue2 = '#448989'
var red = '#B65353'
var black = 'black'
var big = 50
var norm = 30

btn()
//background
document.body.style.backgroundColor = gray1
document.body.style.margin = px(0)

var t1 = "Objective's browser extension lets you choose what you see online."
var t2 = 'You tell Objective the sort of content you want to see.'
var t3 = 'Objective uses ML to label items, then filters and resorts them accordingly.'

box(gray1, 0, w, 0, h, false)
box(gray2, 0, w, h, 1.75 * h, false)
box(gray3, 0, w, 1.75 * h, 2.5 * h, false)
box(darkgray, 0, w, 2.5 * h, 3.5 * h, false)

text(t1, black, big, 1/4 * w, 1/2 * w, 1/3 * h)
img('p1.svg', 1 / 2 * w, 3 / 4 * w, 1 / 4 * h)

img('tablet.svg', 0.25 * w, 0.42 * w, 1.175 * h)
text(t2, black, norm, 0.45 * w, 0.75 * w, 1.325 * h)

img('up.svg', 0.3 * w, 0.7 * w, 2.025 * h)
text(t3, black, norm, 0.25 * w, 0.75 * w, 1.925 * h)

img('goodbye.svg', 0.45 * w, 0.55 * w, 3.0 * h)

box(gray1, 0,w ,0, 0.067 * h, true)
box(gray3, 0,w,0.067 * h, 0.068 * h, true)
img('logo.svg', 1 / 4 * w, 0.345 * w, 5, true)

document.body.style.height = '100%'

