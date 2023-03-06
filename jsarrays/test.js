const dummyData = require('./data.json');

// console.log(dummyData.length);
const response = [
  {
    name: "Adwait Ashok Joshi",
    id: 657583372,
    averageScore: -50,
    fullNameScore: 100,
    uid: null,
    jurisdiction_code: "us_ga",
    position: "cfo",
    retrieved_at: "2023-01-25T00:00:00+00:00",
    start_date: null,
    end_date: null,
    occupation: null,
    current_status: null,
    inactive: true,
    address:
      "5400 Laurel Springs Parkway, Building 100, Suite 105, Suwanee, GA, 30024",
    nationality: null,
    date_of_birth: null,
    company: {
      name: "ADAPSYS INCORPORATED",
      jurisdiction_code: "us_ga",
      company_number: "08062463",
    },
  },
  {
    name: "Adwait Ashok Joshi",
    id: 657583372,
    averageScore: 0,
    fullNameScore: 50,
    uid: null,
    jurisdiction_code: "us_ga",
    position: "cfo",
    retrieved_at: "2023-01-25T00:00:00+00:00",
    start_date: null,
    end_date: null,
    occupation: null,
    current_status: null,
    inactive: true,
    address:
      "5400 Laurel Springs Parkway, Building 100, Suite 105, Suwanee, GA, 30024",
    nationality: null,
    date_of_birth: null,
    company: {
      name: "ADAPSYS INCORPORATED",
      jurisdiction_code: "us_ga",
      company_number: "08062463",
    },
  },

  {
    name: "Adwait Joshi",
    id: 642000627,
    averageScore: 100,
    fullNameScore: 100,
    uid: "8733648",
    jurisdiction_code: "us_ga",
    position: "agent",
    retrieved_at: "2022-12-07T00:00:00+00:00",
    start_date: null,
    end_date: null,
    occupation: null,
    current_status: null,
    inactive: null,
    address: "Duluth, GA, 30005, United States",
    nationality: null,
    date_of_birth: null,
    company: {
      name: "DataSeers Incorporated",
      jurisdiction_code: "us_ga",
      company_number: "17026752",
    },
  },


  {
    name: "Adwait Joshi",
    id: 659713854,
    averageScore: 50,
    fullNameScore: 100,
    uid: null,
    jurisdiction_code: "us_ga",
    position: "cfo",
    retrieved_at: "2022-12-07T00:00:00+00:00",
    start_date: null,
    end_date: null,
    occupation: null,
    current_status: null,
    inactive: null,
    address: "3015 Windward Plaza, Ste 450, Duluth, GA, 30005",
    nationality: null,
    date_of_birth: null,
    company: {
      name: "DataSeers Incorporated",
      jurisdiction_code: "us_ga",
      company_number: "17026752",
    },
  },
]



function combineCompanyAndRemoveDuplicate(officersArray) {
  let arr = officersArray
  const getUniqueCompanies = (arr) => {
    const uniqueCompanies = arr.reduce((acc, current) => {
      if (!acc[current.company.name]) {
        acc[current.company.name] = current;
      }
      return acc;
    }, {});

    const uniqueData = Object.values(uniqueCompanies);

    return uniqueData;

  }

  // const UniqueCompaniesArray = getUniqueCompanies(officersArray)
  // console.log(UniqueCompaniesArray.length)

  const getAvergeScoreOfDuplicatedCompanies = (arr) => {
    console.log(arr)
    const companyFullNameScores = {};
    const companyAverageScores = {};

    // Step 1: add `fullNameScore` values to an array in an object using company name as key
    arr.forEach(obj => {
      const companyName = obj.company.name;

      if (!companyFullNameScores[companyName]) {
        companyFullNameScores[companyName] = [];
      }
      companyFullNameScores[companyName].push(obj.fullNameScore);

    });

    // Step 2: calculate average `fullNameScore` for each company
    const companyAverages = Object.entries(companyFullNameScores).map(([companyName, scores]) => ({

      company: { name: companyName, },
      fullNameScore: scores.reduce((total, score) => total + score, 0) / scores.length,

    }));
    
    
    console.log(companyAverages)

    // arr.forEach(obj => {
    //   const companyName = obj.company;
    //   if (!companyAverageScores[companyName]) {
    //     companyAverageScores[companyName] = [];
    //   }
    //   companyAverageScores[companyName].push(obj.averageScore);

    // });

    // const companyAverages5 = Object.entries(companyAverageScores).map(([companyName, scores]) => ({

    //   company: { name: companyName },
    //   averageScore: scores.reduce((total, score) => total + score, 0) / scores.length,

    // }));



    // const combinedArray = companyAverages5.map(objA => {
    //   const objB = companyAverages.find(objB => objB.company.name === objA.company.name);
    //   if (objB) {
    //     return { ...objA, ...objB };
    //   } else {
    //     return objA;
    //   }
    // });
    
    // return combinedArray;
  }
  const avergeScoreOfCompaniesArray = getAvergeScoreOfDuplicatedCompanies(arr) 
  
}

combineCompanyAndRemoveDuplicate(response)