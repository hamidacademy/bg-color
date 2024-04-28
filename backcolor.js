let doc = document.getElementsByTagName('body')

let ask = prompt('input a color to change the background color : ')


function color(){
    let ask = prompt('input a color to change the background color : ');

    if(ask == 'black'){
        alert('betternot be black!!');
        color();
    
    }else{
        doc[0].style.backgroundColor = ask
    }
}

if(ask == 'black'){
    alert('betternot be black!!');
    color();

}else{
    doc[0].style.backgroundColor = ask
}