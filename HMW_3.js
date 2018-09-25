alert ("Hey It's the genius again")
//Point 1
const fu=function (number_1, number_2, number_3){

	return number_1 + number_2 + number_3;

};
  const a = fu(1,2,3);
  console.log(a);

//Point 2

const fua=function (){

	return 'Vazgenchik';
}
  const b = fua(56);
  console.log(b);

//Point 3
  
const fub=function (number_1,number_2){
	const c = number_2 * 4;

}
	const d = fub(3,5);
	console.log(d);

//Point 4

const fuc = function (smallest,medium,longest)
  {
    if 
      (smallest.length > medium.length && smallest.length > longest.length)
    {
		return smallest;
		}
	else 
      if 
        (smallest.length < medium.length && medium.length > longest.length)
      {
	return medium;
         }
	else
    {
      return longest;
    }
  };

const e = fuc("hay", "hayeren", "hayastan");
console.log(e); 

//Point 5

const fud = function (number_1, number_2)
	{
		if (number_1 === number_2) {
			return "0";
		}
		else if (number_1 > number_2) {
			return "1";
		}
		else if (number_1 < number_2) {
			return "-1";
		}
	}
const f = fud(12,30);
console.log(f);

//Point 6

const fue = function (number_1, number_2)
	{
		const z = number_1 * number_2;
		return z;
	}
const g = fue (10,4)
console.log(g);

//Point 7

const fuf = function (number_1, number_2)
	{
		const x = number_1 / number_2;
		return x;
	}
const h = fuf (12,4)
console.log(h);

//Point 8

const fug = function(base, height) 
	{
		const i = fue(base, height);
		const j = fuf(i, 2);
		return j;
	}	
const k = fug (4, 5);
console.log(k);

//Point 9

const numlenght = function(number)
{
const  boreni = number + "";
return boreni.length;
}
const n = numlenght(132938762784562);
console.log(n);

//Point 10

const lyukik = function (bar_1, bar_2, number)
{
	const hulak= bar_1 + bar_2;
	if (hulak.length > number) {
		return 1;
	} else
	{
		return -1;
	}
}
const hopar = lyukik("ads","gknd", 246562);
console.log(hopar);

//Point 11

const runstaff = function (base, height, shape)
	{
		if (shape === "rectangle")
		{
			const w = fue (base, height);
			return w;
		}
		else if (shape === "triangle")
		{
			const q = fug (base, height);
			return q;
		}
		else 
		{
			return -1;
		}

	}	
const o = runstaff(11,22,"triangle");
console.log (o);


  