//?
Question=[[0,1,1,0],
          [1,0,0,1],
          [0,0,0,1],
          [0,0,1,0],
          [0,0,0,0],
          [0,0,1,0],
          [0,0,0,0]];
//,
Comma=[[0],
       [0],
       [0],
       [0],
       [0],
       [1],
       [1]];

Bang=[[1],
      [1],
      [1],
      [1],
      [0],
      [1],
      [0]];

Space=[[0,0,0,0],
       [0,0,0,0],
       [0,0,0,0],
       [0,0,0,0],
       [0,0,0,0],
       [0,0,0,0],
       [0,0,0,0]];

punctuation={pQ:{name:'?',value:Question},
             pC:{name:',',value:Comma},
             bB:{name:'!',value:Bang},
             bS:{name:' ',value:Space}};
