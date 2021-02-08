var cell=[];
// var userInput=3;
// let x=Math.round(userInput/2)-1;
// let y = 0;
var empty=0;
// let holdX=x;
// let holdY=y;
let holduserInput = "";
var table = document.getElementById('tables');


function getNumber(){
	let userInput=document.getElementById("number").value;
	let x=Math.round(userInput/2)-1;
	let y = 0;
	if (holduserInput!=userInput){
		if (userInput%2===1){
			let i=userInput;
			let j=userInput;
			tableWithEmptyCell(x,y,userInput);
			for (let i = 0 ; i < userInput ; i++){
				var row = tables.insertRow(i);
				for (let j = 0 ; j < userInput ; j++){
					let box=row.insertCell(j);
					box.innerHTML=cell[i][j];
				}
			}
		}else{
			alert("You Input an Even Number");
		}
	}
	else{
		
		alert("Input New Even Number or Empty Input")
	}holduserInput = userInput;
}


function tableWithEmptyCell(x,y,userInput){
	// table
	let count=1;
	let holdX=x;
	let holdY=y;
	for (let i = 0 ; i < userInput ; i++){
		cell[i]=[]
		for (let j = 0 ; j < userInput ; j++){
			cell[i][j]=empty;	
		}
	}
	// logic
	do{
		if (cell[y][x]===empty){
		cell[y][x]=count;
		}
		else if(cell[y][x] !=empty){
			holdY+=1;
			if (holdY>userInput-1){
				holdY=0;
			}
			y=holdY;
			x=holdX;
			cell[y][x]=count;
		}
		holdX=x;
		holdY=y;
		x-=1;
		y-=1;
		
		if (x<0){
			x=userInput-1;
		}if (y<0){
			y=userInput-1;
		}
		count++;
	 }while(count<userInput*userInput+1);;
}



function clearNumber(){
	userInput=document.getElementById("number").value;
	for (let i = 0 ; i < userInput ; i++){
			table.deleteRow(0);
	}
}
