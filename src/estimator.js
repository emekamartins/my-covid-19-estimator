/* eslint-disable max-len */
const estimateCurrentlyInfected = (data) => {
  const cases = data;
  const impact = {};
  const severeImpact = {};
  const impactEstimate = 10;
  const severeImpactEstimate = 50;
  const bedSpacePercentDeduction = (35 / 100) * cases.totalHospitalBeds;


  impact.currentlyInfected = cases.reportedCases * impactEstimate;
  severeImpact.currentlyInfected = cases.reportedCases * severeImpactEstimate;
  if (cases.periodType === 'days') {
    const rawValue = cases.timeToElapse / 3;
    const value = Math.trunc(cases.timeToElapse / 3);

    // impact
    const rawImpactInfectionsByRequestedTime = impact.currentlyInfected * (2 ** rawValue);
    impact.infectionsByRequestedTime = impact.currentlyInfected * (2 ** value);
    impact.severeCasesByRequestedTime = Math.trunc((15 / 100) * impact.infectionsByRequestedTime);
    impact.hospitalBedsByRequestedTime = +(bedSpacePercentDeduction - impact.severeCasesByRequestedTime).toFixed(2);
    impact.casesForICUByRequestedTime = Math.trunc((5 / 100) * impact.infectionsByRequestedTime);
    impact.casesForVentilatorsByRequestedTime = Math.trunc((2 / 100) * impact.infectionsByRequestedTime);
    impact.dollarsInFlight = (rawImpactInfectionsByRequestedTime * cases.region.avgDailyIncomePopulation) * cases.region.avgDailyIncomeInUSD * cases.timeToElapse;

    // severeImpact
    const rawSevereImpactInfectionsByRequestedTime = severeImpact.currentlyInfected * (2 ** rawValue);
    severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * (2 ** value);
    severeImpact.severeCasesByRequestedTime = Math.trunc((15 / 100) * severeImpact.infectionsByRequestedTime);
    severeImpact.hospitalBedsByRequestedTime = +(bedSpacePercentDeduction - severeImpact.severeCasesByRequestedTime).toFixed(2);
    severeImpact.casesForICUByRequestedTime = Math.trunc((5 / 100) * severeImpact.infectionsByRequestedTime);
    severeImpact.casesForVentilatorsByRequestedTime = Math.trunc((2 / 100) * severeImpact.infectionsByRequestedTime);
    severeImpact.dollarsInFlight = (rawSevereImpactInfectionsByRequestedTime * cases.region.avgDailyIncomePopulation) * cases.region.avgDailyIncomeInUSD * cases.timeToElapse;
  }

  if (cases.periodType === 'weeks') {
    const totalTimeElapse = cases.timeToElapse * 7;
    const rawValue = totalTimeElapse / 3;
    const value = Math.trunc(totalTimeElapse / 3);

    // impact
    const rawImpactInfectionsByRequestedTime = impact.currentlyInfected * (2 ** rawValue);
    impact.infectionsByRequestedTime = impact.currentlyInfected * (2 ** value);
    impact.severeCasesByRequestedTime = Math.trunc((15 / 100) * impact.infectionsByRequestedTime);
    impact.hospitalBedsByRequestedTime = +(bedSpacePercentDeduction - impact.severeCasesByRequestedTime).toFixed(2);
    impact.casesForICUByRequestedTime = Math.trunc((5 / 100) * impact.infectionsByRequestedTime);
    impact.casesForVentilatorsByRequestedTime = Math.trunc((2 / 100) * impact.infectionsByRequestedTime);
    impact.dollarsInFlight = (rawImpactInfectionsByRequestedTime * cases.region.avgDailyIncomePopulation) * cases.region.avgDailyIncomeInUSD * cases.timeToElapse * 7;

    // severeImpact
    const rawSevereImpactInfectionsByRequestedTime = severeImpact.currentlyInfected * (2 ** rawValue);
    severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * (2 ** value);
    severeImpact.severeCasesByRequestedTime = Math.trunc((15 / 100) * severeImpact.infectionsByRequestedTime);
    severeImpact.hospitalBedsByRequestedTime = +(bedSpacePercentDeduction - severeImpact.severeCasesByRequestedTime).toFixed(2);
    severeImpact.casesForICUByRequestedTime = Math.trunc((5 / 100) * severeImpact.infectionsByRequestedTime);
    severeImpact.casesForVentilatorsByRequestedTime = Math.trunc((2 / 100) * severeImpact.infectionsByRequestedTime);
    severeImpact.dollarsInFlight = (rawSevereImpactInfectionsByRequestedTime * cases.region.avgDailyIncomePopulation) * cases.region.avgDailyIncomeInUSD * cases.timeToElapse * 7;
  }

  if (cases.periodType === 'months') {
    const totalTimeElapse = cases.timeToElapse * 30;
    const rawValue = totalTimeElapse / 3;
    const value = Math.trunc(totalTimeElapse / 3);
    // impact
    const rawImpactInfectionsByRequestedTime = impact.currentlyInfected * (2 ** rawValue);
    impact.infectionsByRequestedTime = impact.currentlyInfected * (2 ** value);
    impact.severeCasesByRequestedTime = Math.trunc((15 / 100) * impact.infectionsByRequestedTime);
    impact.hospitalBedsByRequestedTime = +(bedSpacePercentDeduction - impact.severeCasesByRequestedTime).toFixed(2);
    impact.casesForICUByRequestedTime = Math.trunc((5 / 100) * impact.infectionsByRequestedTime);
    impact.casesForVentilatorsByRequestedTime = Math.trunc((2 / 100) * impact.infectionsByRequestedTime);
    impact.dollarsInFlight = (rawImpactInfectionsByRequestedTime * cases.region.avgDailyIncomePopulation) * cases.region.avgDailyIncomeInUSD * cases.timeToElapse * 30;

    // severeImpact
    const rawSevereImpactInfectionsByRequestedTime = severeImpact.currentlyInfected * (2 ** rawValue);
    severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * (2 ** value);
    severeImpact.severeCasesByRequestedTime = Math.trunc((15 / 100) * severeImpact.infectionsByRequestedTime);
    severeImpact.hospitalBedsByRequestedTime = +(bedSpacePercentDeduction - severeImpact.severeCasesByRequestedTime).toFixed(2);
    severeImpact.casesForICUByRequestedTime = Math.trunc((5 / 100) * severeImpact.infectionsByRequestedTime);
    severeImpact.casesForVentilatorsByRequestedTime = Math.trunc((2 / 100) * severeImpact.infectionsByRequestedTime);
    severeImpact.dollarsInFlight = (rawSevereImpactInfectionsByRequestedTime * cases.region.avgDailyIncomePopulation) * cases.region.avgDailyIncomeInUSD * cases.timeToElapse * 30;
  }


  return {
    data,
    impact,
    severeImpact
  };
};

const covid19ImpactEstimator = (data) => estimateCurrentlyInfected(data);


export default covid19ImpactEstimator;
