




console.log(combinedArray);



let a = [
  {
    name: 'Adwait Ashok Joshi',
    id: 657583372,
    averageScore: -50,
    fullNameScore: 100,
    uid: null,
    jurisdiction_code: 'us_ga',
    position: 'cfo',
    retrieved_at: '2023-01-25T00:00:00+00:00',
    start_date: null,
    end_date: null,
    occupation: null,
    current_status: null,
    inactive: true,
    address: '5400 Laurel Springs Parkway, Building 100, Suite 105, Suwanee, GA, 30024',
    nationality: null,
    date_of_birth: null,
    company: {
      name: 'ADAPSYS INCORPORATED',
      jurisdiction_code: 'us_ga',
      company_number: '08062463'
    }
  },
  {
    name: 'Adwait Joshi',
    id: 642000627,
    averageScore: 100,
    fullNameScore: 100,
    uid: '8733648',
    jurisdiction_code: 'us_ga',
    position: 'agent',
    retrieved_at: '2022-12-07T00:00:00+00:00',
    start_date: null,
    end_date: null,
    occupation: null,
    current_status: null,
    inactive: null,
    address: 'Duluth, GA, 30005, United States',
    nationality: null,
    date_of_birth: null,
    company: {
      name: 'DataSeers Incorporated',
      jurisdiction_code: 'us_ga',
      company_number: '17026752'
    }
  }
]
let b = [
  { company: { name: 'ADAPSYS INCORPORATED' }, averageScore: -25 ,fullNameScore:50},
  { company: { name: 'DataSeers Incorporated' }, averageScore: 75 ,fullNameScore:15}
]



// const combinedArray2 = a.map(objA => {
//   const objB = b.find(objB => objB.company.name === objA.company.name);
//   if (objB) {
//     return { ...objA, ...objB };
//   } else {
//     return objA;
//   }
// });

a = uniqueData
console.log(a)
console.log("============================")
b = combinedArray
console.log(b)

// const combinedArray3 = a.forEach((objA) => {
//   const objB = b.find((objB) => objB.company.name === objA.company.name);
//   if (objB) {
//     objA.fullNameScore = objB.fullNameScore;
//     objA.averageScore = objB.averageScore;
//   }
// });

// const c = [{name:111,score:25,address:1}, {name:222,score:50}]
// const d =  [{name:111,score:50,address:2}, {name:222,score:100,address:1}]
a.forEach((objA) => {
  const objB = b.find((objB) => objB.company.name === objA.company.name);
  if (objB) {
    objA.fullNameScore = objB.fullNameScore;
    objA.averageScore = objB.averageScore;
  }
});
console.log("======================")
console.log(a)

// console.log(combinedArray3);

