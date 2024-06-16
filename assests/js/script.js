'use script'

const navOpen=document.querySelector('.nav-open');
const navClose=document.querySelector('.nav-close');
const nav=document.querySelector('.right-nav');

const navFunc=function(rightValue,opacity){
    nav.style.right=rightValue;
    nav.style.opacity=opacity;
}
navOpen.addEventListener('click',function(){
    navFunc('0','1')
})
navClose.addEventListener('click',function(){
    navFunc('-900px','0')
})
