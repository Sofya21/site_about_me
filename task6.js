functiondoSend(){
var v=document.user.e.value.indexOf("@",1)
if(document.user.f.value==""){
alert('Вы должны заполнить поле ФИО')
document.user.f.focus()
}
if(document.user.f.value==""){
alert('Вы должны заполнить поле адресса')
document.user.a.focus()
}
if(document.user.f.value==""){
alert('Вы должны заполнить поле e-mail')
document.user.e.focus()
}
if(v==-1){
alert('Адресс e-mail указан неверно')
document.user.e.select()
document.user.e.focus()
}
else
document.user.submit()
}