const reviews = [
    {
        id: 01,
        name: 'susan smith',
        job: 'web developer',
        img: 'https://images.pexels.com/photos/620074/pexels-photo-620074.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        info: 'Ramanand Sagar’s granddaughter Sakshi Chopra is known for her bold pictures and outfits. The actor-singer never fails to raise hotness levels on social media with her stunning pictures. However, this time, the actor gets brutally tr'
    },
    {
        id: 02,
        name: 'shayla noz',
        job: 'web developer',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHoybwoyBd_JEwMN7MMQBNz5mzYIbbTFgGzQ&usqp=CAU',
        info: 'Ramanand Sagar’s granddaughter Sakshi Chopra is known for her bold pictures and outfits. The actor-singer never fails to raise hotness levels on social media with her stunning pictures. However, this time, the actor gets brutally tr'
    },
    {
        id: 03,
        name: 'dani dakue',
        job: 'web developer',
        img: 'https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60',
        info: 'Ramanand Sagar’s granddaughter Sakshi Chopra is known for her bold pictures and outfits. The actor-singer never fails to raise hotness levels on social media with her stunning pictures. However, this time, the actor gets brutally tr'
    },
    {
        id: 04,
        name: 'daniel dadi',
        job: 'web developer',
        img: 'https://images.pexels.com/photos/3271065/pexels-photo-3271065.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        info: 'Ramanand Sagar’s granddaughter Sakshi Chopra is known for her bold pictures and outfits. The actor-singer never fails to raise hotness levels on social media with her stunning pictures. However, this time, the actor gets brutally tr'
    },
    {
        id: 05,
        name: 'roman smith',
        job: 'web developer',
        img: 'https://images.pexels.com/photos/2535941/pexels-photo-2535941.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        info: 'Ramanand Sagars granddaughter Sakshi Chopra is known for her bold pictures and outfits. The actor-singer never fails to raise hotness levels on social media with her stunning pictures. However, this time, the actor gets brutally tr'
    }
]

const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')
const image = document.getElementById('person-image')
const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')
const randomBtn = document.getElementById('random')

let currentItem = 0
window.addEventListener('DOMContentLoaded', function(){
    showPerson()
})

function showPerson(){
    const item = reviews[currentItem]
    image.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.info
}

nextBtn.addEventListener('click', function(){
    currentItem++
    if(currentItem > reviews.length - 1){
        currentItem = 0
    }
    showPerson()
})
prevBtn.addEventListener('click', function(){
    currentItem--
    if(currentItem < 0){
        currentItem = reviews.length - 1
    }
    showPerson()
})

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length)
    console.log(currentItem)
    showPerson(currentItem)
})