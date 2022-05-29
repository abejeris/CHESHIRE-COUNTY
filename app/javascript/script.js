"use strict"

// first table
var inputName = document.getElementById("input1")
var inputSurname = document.getElementById("input2")
var inputNumber = document.getElementById("input3")
var getStarted = document.getElementById("getstarted")

getStarted.addEventListener("click", function () {
    var textName = inputName.value
    var textSurname = inputSurname.value
    var textNumber = inputNumber.value
    if (isNaN(textName) == false || isNaN(textSurname) == false || !textName || !textSurname || !textNumber) return alert("Please enter all your details correctly")

    inputName.value = ""
    inputSurname.value = ""
    inputNumber.value = ""
})

// second table

var contactName = document.getElementById("contact1")
var contactSurname = document.getElementById("contact2")
var contactNumber = document.getElementById("contact3")
var sendIt = document.getElementById("sendit")

sendIt.addEventListener("click", function () {
    var myName = contactName.value
    var mySurname = contactSurname.value
    var myNumber = contactNumber.value
    if (isNaN(myName) == false || isNaN(mySurname) == false || !myName || !mySurname || !myNumber) return alert("Please enter all your details correctly")

    contactName.value = ""
    contactSurname.value = ""
    contactNumber.value = ""
})

// wrapper tabs

var cubes = document.getElementsByClassName("cube")

for (var x of cubes) {
    x.addEventListener("click", function () {

        var index = this.getAttribute("index")

        swiper1.slideTo(index)
    })
}

// navigation menu for mobile

var plus = document.getElementById("plus")
var sideNav = document.querySelector(".side-nav")

plus.addEventListener("click", function () {
    this.classList.toggle("rotateZ")
    sideNav.classList.toggle("translateX")
})

window.addEventListener("resize", function () {
    if (window.innerWidth > 680) {
        plus.classList.remove("rotateZ")
        sideNav.classList.remove("translateX")
    }
})

sideNav.addEventListener("click", function () {
    sideNav.classList.toggle("translateX")
    plus.classList.remove("rotateZ")
})