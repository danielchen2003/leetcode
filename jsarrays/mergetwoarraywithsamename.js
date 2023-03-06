







// Step 3: filter out duplicates
const seenCompanies = [];
const uniqueCompanyAverages = arr.filter(({company}) => {
  if (seenCompanies.includes(company)) {
    return false;
  }
  seenCompanies.push(company);
  return true;
});


const combinedArray = seenCompanies.map(objA => {
  const objB = b.find(objB => objB.officer.id === objA.id);
  if (objB) {
    return { ...objA, ...objB.officer };
  } else {
    return objA;
  }
});

console.log(combinedArray);


// console.log(uniqueCompanyAverages);





// First, create an object that maps company names to arrays of fullNameScores
const scoresByCompany = {};
arr.forEach((obj) => {
  const companyName = obj.company.name;
  const score = obj.fullNameScore;
  if (scoresByCompany[companyName] === undefined) {
    scoresByCompany[companyName] = [score];
  } else {
    scoresByCompany[companyName].push(score);
  }
});

// Next, calculate the average fullNameScore for each company
const averagesByCompany = {};
Object.keys(scoresByCompany).forEach((companyName) => {
  const scores = scoresByCompany[companyName];
  const sum = scores.reduce((total, score) => total + score, 0);
  const average = sum / scores.length;
  averagesByCompany[companyName] = average;
});

// // Finally, create a new array of objects with the unique company names and their average scores
// const uniqueCompanies = Object.keys(averagesByCompany);
// const result = uniqueCompanies.map((companyName) => {
//   return {
//     company: { name: companyName },
//     averageFullNameScore: averagesByCompany[companyName],
//   };
// });

// console.log(averagesByCompany);





const uniqueCompanies = [...new Set(arr.map(item => item.company.name))];
const companyAverages2 = [];

for (const company of uniqueCompanies) {
  const employees = arr.filter(item => item.company.name === company);
  const scores = employees.map(item => item.fullNameScore);
  const averageScore = scores.reduce((acc, curr) => acc + curr, 0) / scores.length;

  companyAverages2.push({
    company: company,
    averageScore: averageScore,
    employees: employees
  });
}
// console.log("======================")
// console.log(companyAverages2);



const uniqueCompanies2 = [...new Set(arr.map(item => item.company.name))];

const result = uniqueCompanies2.map(companyName => {
  const filteredItems = arr.filter(item => item.company.name === companyName);

  const averageScore =
    filteredItems.reduce((sum, item) => sum + item.averageScore, 0) /
    filteredItems.length;

  const fullNameScore =
    filteredItems.reduce((sum, item) => sum + item.fullNameScore, 0) /
    filteredItems.length;

  return {
    company: {
      name: companyName,
      jurisdiction_code: filteredItems[0].company.jurisdiction_code,
      company_number: filteredItems[0].company.company_number,
    },
    data: filteredItems[0], // Adding a sample item from the filteredItems array for reference
    averageScore,
    fullNameScore,
  };
});

// console.log("======================")
// console.log(result);


const companies = {};

arr.forEach((person) => {
  const { company, name, id, averageScore, fullNameScore, jurisdiction_code } = person;
  const companyKey = `${company.name}_${company.jurisdiction_code}`;
  if (companies[companyKey]) {
    companies[companyKey].ids.add(id);
    companies[companyKey].averageScoreSum += averageScore;
    companies[companyKey].fullNameScoreSum += fullNameScore;
    companies[companyKey].count += 1;
  } else {
    companies[companyKey] = {
      name: company.name,
      jurisdiction_code: company.jurisdiction_code,
      ids: new Set([id]),
      averageScoreSum: averageScore,
      fullNameScoreSum: fullNameScore,
      count: 1,
    };
  }
});

// const result3 = Object.values(companies).map((company) => {
//   const averageScore = company.totalAverageScore / company.count;
//   const fullNameScore = company.totalFullNameScore / company.count;
//   return {
//     ...company,
//     averageScore,
//     fullNameScore,
//     items: undefined, // Remove items array from final result
//   };
// });
// console.log(result3)