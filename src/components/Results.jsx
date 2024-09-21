import {calculateInvestmentResults} from '../util/investment.js'

function Results({input}) {
  const resultsData = calculateInvestmentResults(input);

  console.log(resultsData)
  return (
    <div>
      Results
      {console.log(input)}
    </div>
  )
}

export default Results