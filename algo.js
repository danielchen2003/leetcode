const data = [
  {fullNameScore: 20},
  { fullNameScore: 66 },
  { fullNameScore: 100 },
  { fullNameScore: 61 },
  { fullNameScore: 59 },
]

const verstices = []

for (const curentOfficerInfo of data) {
  if (curentOfficerInfo.fullNameScore <= 65) {
    continue
  }
  verstices.push(curentOfficerInfo)
  
}

// console.log(verstices)


function convertScore(score) {
  const maxScore = 100;
  const minScore = 60;
  const maxResult = 20;
  
  const normalizedScore = (score - minScore) / (maxScore - minScore);
  const result = normalizedScore * maxResult;
  
  return Math.round(result);
}