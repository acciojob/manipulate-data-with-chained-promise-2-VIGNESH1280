//your JS code here. If required.
 async function vignesh(){
	 let arr=[1,2,3,4];
	 return arr;
 }
vignesh().then((arr)=>{
	let evens = arr.map((a)=>{
		return a%2==0
	})
	setTimeout(()=>{
		let el = document.getElementById('output');
		el.innerHTML=evens.join();
	}, 1000)
	return evens;
}).then((evens)=>{
	let mulEven = evens.map((value)=>{
		return value*2;
	})
	setTimeout(()=>{
		let el = document.getElementById('output');
		el.innerHTML=mulEven.join();
	}, 2000)
	
})