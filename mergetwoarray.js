


const a = [
  {name: 'ADWAIT ASHOK JOSHI', id: 351358022, averageScore: 66, fullNameScore: 83},
  
  {name: 'ADWAIT AVINASH JOSHI', id: 78059013, averageScore: 66, fullNameScore: 83}
  ]
  
  const b = [
    {
        "officer": {
            "id": 351358022,
            "uid": "08408529",
            "name": "ADWAIT ASHOK JOSHI",
            "jurisdiction_code": "in",
            "position": null,
            "retrieved_at": "2022-11-18T11:16:20+00:00",
            "start_date": "2019-04-01",
            "end_date": null,
            "occupation": null,
            "current_status": null,
            "inactive": null,
            "address": null,
            "nationality": null,
            "date_of_birth": null,
            "company": {
                "name": "DATASEERS TECHNOLOGIES PRIVATE LIMITED",
                "jurisdiction_code": "in",
                "company_number": "U72901MH2019FTC323491"
            }
        }
    },
    {
        "officer": {
            "id": 78059013,
            "uid": "01494876",
            "name": "ADWAIT AVINASH JOSHI",
            "jurisdiction_code": "in",
            "position": "whole-time director",
            "retrieved_at": "2023-01-31T03:36:31+00:00",
            "start_date": "2007-04-01",
            "end_date": null,
            "occupation": null,
            "current_status": null,
            "inactive": null,
            "address": "4,SAMADHAN, LOKMANYA TILAK ROAD,MULUND(EAST),, MUMBAI, 400081, Maharashtra, INDIA",
            "nationality": null,
            "date_of_birth": null,
            "company": {
                "name": "JOSHI OIL AND GAS PRIVATE LIMITED",
                "jurisdiction_code": "in",
                "company_number": "U23200MH1998PTC115630"
            }
        }
    }]
    
    
    const combinedArray = a.map(objA => {
      const objB = b.find(objB => objB.officer.id === objA.id);
      if (objB) {
        return { ...objA, ...objB.officer };
      } else {
        return objA;
      }
    });
    
    console.log(combinedArray);