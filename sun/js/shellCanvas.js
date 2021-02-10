/* Javascript Shell */
// 'use strict';
let cl = console.log;
let ele = document.querySelector("canvas")
let context = ele.getContext("2d")


function crazyLines () {

    context.strokeStyle = "black"
    x = 0
    y = 0
    dx = Math.round(Math.random()*window.innerWidth)
    dy = Math.round(Math.random()*window.innerHeight)

    context.beginPath()
    context.moveTo(x,y)
    context.lineTo(dx,dy)
    context.stroke()

    requestAnimationFrame(crazyLines)
}

crazyLines()


