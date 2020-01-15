!function(){
    let code=`
/*准备一块画布*/
.preview{
    position:fixed;
    height:100vh;
    width:50vw;
    background:#E6CFF6;
    display:flex;
    justify-content:center;
    align-items:center;
}
/*开始画大熊猫的大头*/
.head{
    position:absolute;
    border:4px solid black;
    width:138px;
    height:104px;
    border-top-left-radius:70px 90px;
    border-top-right-radius:70px 90px;
    border-bottom-left-radius:50px 60px;
    border-bottom-right-radius:50px 60px;
    left:50%;
    margin-left:-69px;
    background:white;
    z-index:1;

}
/*接着画大熊猫的耳朵*/
.ear{
    position:absolute;
    width:50px;
    height:50px;
    background:black;
    border-radius:50%;
}
.ear.left{
    right:50%;
    margin-right:30px;

}
.ear.right{
    left:50%;
    margin-left:30px;
}
/*然后画大熊猫的鼻子*/
.nose{
    position:absolute;
    width:12px;
    height:6px;
    background:black;
    left:50%;
    margin-top:70px;
    border-radius:50%;
    margin-left:-6px;
}
/*接着画大熊猫的眼睛*/
.eye{
    position:absolute;
    height:40px;
    width:30px;
    background:black;
    margin-top:25px;
    border-radius:50%;
}
.eye.left{
    right:50%;
    transform:rotate(20deg);
    margin-right:17px;
}
.eye.right{
    left:50%;
    transform:rotate(-20deg);
    margin-left:17px;
}
/*然后画大熊猫的眼珠*/
.eye::before{
    position:absolute;
    content:'';
    width:10px;
    height:10px;
    background:white;
    border-radius:50%;
    top:10px;
    left:10px;

}
/*接着画大熊猫的肚子*/
.belly{
    position:absolute;
    width:98px;
    height:76px;
    border:4px solid black;
    margin-top:90px;
    left:50%;
    margin-left:-46px;
    border-radius:30%;
    z-index:2;
    background:white;
}
/*然后画大熊猫的手臂*/
.arm{
    position:absolute;
    width:28px;
    height:28px;
    background:black;
    margin-top:12px;
    border-radius:20%;

}
.arm.left{
    right:50%;
    margin-right:20px;
    transform:rotate(8deg);
}
.arm.right{
    left:50%;
    margin-left:20px;
    transform:rotate(-8deg);
}
/*接着画大熊猫的手手*/
.hand{
    position:absolute;
    width:28px;
    height:28px;
    background:black;
    border-radius:50%;
    margin-top:14px;
}
.hand.left{
    right:50%;
    margin-right:10px;
}
.hand.right{
    left:50%;
    margin-left:10px;
}
/*最后画大熊猫的脚脚*/
.foot{
    position:absolute;
    width:26px;
    height:36px;
    background:black;
    border-radius:40%;
    margin-top:60px;
}
.foot.left{
    right:50%;
    margin-right:10px;
}
.foot.right{
    left:50%;
    margin-left:10px;
}
`
var duration=50
function writeCode(prefix,code,fn){
    let container=document.querySelector('#code')
    let styleTag=document.querySelector('#styleTag')
    let n=0
    let id
    id=setTimeout(function run(){
        n+=1
        container.innerHTML=code.substring(0,n)
        styleTag.innerHTML=code.substring(0,n)
        container.scrollTop=container.scrollHeight
        if(n<code.length){
           id=setTimeout(run,duration)
        }else{
            fn&&fn.call()
        }
    },duration)
}
$('.actions').on('click','button',function(e){
    let $button=$(e.currentTarget)
    let speed=$button.attr('data-speed')
    $button.addClass('active')
        .siblings('.active').removeClass('active')
    switch(speed){
        case 'slow':
            duration=100
            break   
        case 'normal':
                duration=50
            break
        case 'fast':
                duration=10
                break     
            }
})
    writeCode('',code)
}.call()