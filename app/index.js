
let btnAcortar=document.getElementById("btnAcortar")
let inputURL=document.getElementById("inputURL")
let span1=document.getElementById("span1")
let span2=document.getElementById("span2")

btnAcortar.addEventListener("click",()=>{
    fetch(window.location.pathname+'link', {
        method: "POST",
        body: JSON.stringify({"link":inputURL.value}),
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
    })
    .then((data)=>data.json())
    .then((data)=>{
        if(!data.err){
            span1.classList.remove("darken-4","red-text")
            span1.innerHTML="Link copiado al portapapeles:"
            span2.innerHTML=data.link
            inputURL.value=''
            var seleccion = document.createRange();
            seleccion.selectNodeContents(span2);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(seleccion);
            var res = document.execCommand('copy');
            window.getSelection().removeRange(seleccion);
        }else{
            span1.classList.add("darken-4","red-text")
            span1.innerHTML=data.message
            span2.innerHTML=""
        }
    })
})

