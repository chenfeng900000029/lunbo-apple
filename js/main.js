
var allButtons=$('#buttons>span')
	
for (let i=0;i<allButtons.length;i++) {
	$(allButtons[i]).on('click',function(x){
		var index=$(x.currentTarget).index()
		var m=index*-960
		$('#images').css({
		transform: 'translateX('+ m +'px)'
		})
		n=index
		$(allButtons).eq(n)
		.addClass('active')
	.siblings('.active').removeClass('active')
	})
}

var n=0
var size=allButtons.length
allButtons.eq(n%size).trigger('click')
	.addClass('active')
	.siblings('.active').removeClass('active')
timerId=setInterval(()=>{
	n+=1
	allButtons.eq(n%size).trigger('click')
	.addClass('active')
	.siblings('.active').removeClass('active')
},2000)

$('.slide-img-wrapper').on('mouseenter',function(){
	window.clearInterval(timerId)
})
$('.slide-img-wrapper').on('mouseleave',function(){
	timerId=setInterval(()=>{
	n+=1
	allButtons.eq(n%size).trigger('click')
},2000)
})

