// sb3.js
// The verse1(), verse2(), chorus1() and chorus2() are provided to you. You can change the function names and add additional ones as needed. Be sure to follow the starter code that has been supplied.



function verse1() {
    let output = '<p>I have a mansion but forget the price\<br>\
    Ain\'t never been there, they tell me it\'s nice\<br>\
    I live in hotels, tear out the walls\<br>\
    I have accountants, pay for it all</p>'
    return output
}

function verse2() {
    let output = '<p>They say I\'m crazy but I have a have a good time\<br>\
    I\'m just looking for clues at the scene of the crime\<br>\
    Life\'s been good to me so far\</p>'
    return output
}

function chorus1() {
    let output = '<p>My Maseratti does one-eighty-five\<br>\
    I lost my license, now I don\'t drive\<br>\
    I have a limo, ride in the back\<br>\
    I lock the doors in case I\'m attacked</p>'
    return output
}

function chorus2() {
    let output = '<p>I\'m making records, my fans they can\'t wait\<br>\
    They write me letters, tell me I\'m great\<br>\
    So I got me an office, gold records on the wall\<br>\
    Just leave a message, maybe I\'ll call</p>'
    return output
}


function verse3() {
    let output = '<p>Lucky I\'m sane after all I\'ve been through\<br>\
    (Everybody say I\'m cool, he\'s cool)\<br>\
    I can\'t complain but sometimes I still do\<br>\
    Life\'s been good to me so far</p>'
    return output
}

function verse4() {
    let output = '<p>I go to parties sometimes until four\<br>\
    It\'s hard to leave when you can\'t find the door\<br>\
    It\'s tough to handle this fortune and fame\<br>\
    Everybody\'s so different, I haven\'t changed</p>'
    return output
}

function verse5() {
    let output = '<p>They say I\'m lazy but it takes all my time\<br>\
    (Everybody say oh yeah, oh yeah)\<br>\
    I keep on goin\' guess I\'ll never know why\<br>\
    Life\'s been good to me so far</p>'
    return output
}






















function main() {
    let finalOutput = verse1() + verse2() + chorus1() + chorus2() + verse3() + verse4() + verse5()
    document.getElementById('lyrics').innerHTML = finalOutput
}

window.onload = function () {
    main()
}