Tues 23:46
O bhai
Apni ki basay..??
Matro aslam
Tmi ki koro
Suite ashci tai sari pora manush gular pic e like dicchi....news feed vhora...
Tai naki...
Ghumay gela??
Aso??
Oye ghumao
06:4809:39
// Your jQuery goes here

var userData = {
    name: '',
    email: '',
    html: {likes:[],dislikes:[]},
    css: {likes:[],dislikes:[]},
    js: {likes:[],dislikes:[]},
    strength: {css: '', js: '', html: ''},
    currentQuestion: '#welcome'
};

console.log(localStorage.getItem('userData'));

if (localStorage.getItem('userData')){
    userData = JSON.parse(localStorage.getItem('userData'));
    
    $('#welcome').hide();
    $('userData'.currentQuestion).show();
    $('#name').val(userData.name);
    $('#email').val(userData.email);
}
else{
    localStorage.setItem('userData',JSON.stringify(userData));
}
$('#start').click(function(){
    console.log("start");
    $('#welcome').hide();
    $('#q1').show();
    
});

$('#name').change(function(event){
    //console.log(event);
    console.log($('#name').val());
});

$('#q1next').click(function(){
    if( $('#name').val() &&  $('#email').val()){
    userData.name = $('#name').val();
    userData.email = $('#email').val();
        
        localStorage.setItem('userData',JSON.stringify(userData));
         $('#q2').show();
         $('#q1').hide();
    }
    else {
        alert('Please enter name & email');
    }
});