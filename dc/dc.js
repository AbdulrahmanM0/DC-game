let aud = document.getElementById('dc');
let aud2 = document.getElementById('dc2')
let myDc = document.getElementById('myDc');
let win = document.getElementsByClassName('win')[0];
let req = document.getElementById('req');
let msg = document.getElementById('msg');
let banar = document.getElementById('banar');
console.log(myDc)


myDc.onclick = () => {
    aud.play();
    aud2.play();
    win.innerHTML = `<h1  class=winMsg >  مبروك انت كسبت <br/>والبطة مبسوطة منك  </h1>`
    myDc.style.cssText = 'transform: rotate(30deg);';
    req.innerHTML = '';
    setTimeout(()=>{
        myDc.style.cssText = 'transform: rotate(0deg);';
        
    },400);
    setTimeout(()=>{
        win.innerHTML = '';
        req.innerHTML = 'المس البطة';
    },5000);
    msg.style.display = 'block';
}
msg.onclick = () => {
    msg.innerHTML = `                    <p>
    المكسب الحقيقي هو انك قدرت تقرأ الكود وتوصل لهنا<br/> 
    لكن!!!!!<br/>
    🙂لو شايف الموضوع تافه انت ممكن تدفن نفسك 
</p>`
}
non = () => {
    banar.style.display = 'none';
}
