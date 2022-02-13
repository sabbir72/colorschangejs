onload=()=>{
    main();
}

function main(){
    const root =document.getElementById("root")
    const btn =document.getElementById("btn")

 btn.addEventListener('click', function(){
     const color=RGB()
     root.style.backgroundColor=color;
 })
}

function RGB(){
    const red =Math.floor(Math.random()*255);
    const green =Math.floor(Math.random()*255);
    const white =Math.floor(Math.random()*255);

    return `rgb(${red}, ${green}, ${white})`
}