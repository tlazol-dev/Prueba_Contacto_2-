var problema = [
[0,0,0,0,0,0,0,0],
[0,0,1,1,1,0,0,0],
[0,0,0,1,1,0,0,0],
[0,1,0,1,1,0,0,0],
[0,0,0,1,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0]
];

 let rows = [];
 let cols =[];

for(let i = 0; i < problema.length; i++){

  for(let j = 0; j < problema[i].length; j++){

        if(problema[i][j] === 1) {
           rows.push(i);
           cols.push(j);
           }

  }
}

      let rowMin = Math.min(...rows);
      let rowMax = Math.max(...rows);

      let colMin = Math.min(...cols);
      let colMax = Math.max(...cols);

      let finalArr = [];


    for(let i = rowMin; i <= rowMax; i++ ){
      let newArr = [];
      for(let j = colMin; j <= colMax; j++){
        newArr.push(problema[i][j])
    }
        finalArr.push(newArr);
  }

console.log(finalArr);
