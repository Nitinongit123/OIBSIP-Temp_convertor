var cel=document.getElementById('cel')
var fah=document.getElementById('fah')
var kel=document.getElementById('kel')



cel.addEventListener('input',function(){
    let cTemp=this.ariaValueMax;
    let fTemp=2*cTemp;
    let kTemp=3*cTemp;
    fah.value=fTemp;
    kel.value=kTemp

})