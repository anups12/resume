console.log('working');
var theme = localStorage.getItem('theme')
if(theme==null){
    changeTheme('light')
}
else{
    changeTheme(theme)
}


let themedots=document.getElementsByClassName('theme-dot')


for (var i=0; i<themedots.length; i++){
    themedots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('clicked', mode);
        changeTheme(mode)
    })
}
function changeTheme(mode){
    if(mode=='light'){
        document.getElementById("page-theme").href='style.css'
    }
    if(mode=='dark'){
        document.getElementById("page-theme").href='dark.css'
    }
    if(mode=='skyblue'){
        document.getElementById("page-theme").href='blue.css'
    }
    if(mode=='seagreen'){
        document.getElementById("page-theme").href='green.css'
    }
    localStorage.setItem('theme', mode)
}