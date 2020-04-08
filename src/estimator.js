/* eslint-disable max-len */
const estimateCurrentlyInfected = (data) => {
  const cases = data;
  const impact = {};
  const severeImpact = {};
  const impactEstimate = 10;
  const severeImpactEstimate = 50;
  const bed = (35 / 100) * cases.totalHospitalBeds;
  const bedSpacePercentDeduction = Math.trunc(bed);


  impact.currentlyInfected = cases.reportedCases * impactEstimate;
  severeImpact.currentlyInfected = cases.reportedCases * severeImpactEstimate;
  if (cases.periodType === 'days') {
    const value = Math.trunc(cases.timeToElapse / 3);

    // impact
    impact.infectionsByRequestedTime = impact.currentlyInfected * (2 ** value);
    impact.severeCasesByRequestedTime = Math.trunc((15 / 100) * impact.infectionsByRequestedTime);
    impact.hospitalBedsByRequestedTime = bedSpacePercentDeduction - impact.severeCasesByRequestedTime;

    // severeImpact
    severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * (2 ** value);
    severeImpact.severeCasesByRequestedTime = Math.trunc((15 / 100) * severeImpact.infectionsByRequestedTime);
    severeImpact.hospitalBedsByRequestedTime = bedSpacePercentDeduction - severeImpact.severeCasesByRequestedTime;
  }

  if (cases.periodType === 'weeks') {
    let value = cases.timeToElapse * 7;
    value = Math.trunc(value / 3);
    // impact
    impact.infectionsByRequestedTime = impact.currentlyInfected * (2 ** value);
    impact.severeCasesByRequestedTime = Math.trunc((15 / 100) * impact.infectionsByRequestedTime);
    impact.hospitalBedsByRequestedTime = bedSpacePercentDeduction - impact.severeCasesByRequestedTime;

    // severeImpact
    severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * (2 ** value);
    severeImpact.severeCasesByRequestedTime = Math.trunc((15 / 100) * severeImpact.infectionsByRequestedTime);
    severeImpact.hospitalBedsByRequestedTime = bedSpacePercentDeduction - severeImpact.severeCasesByRequestedTime;
  }

  if (cases.periodType === 'months') {
    let value = cases.timeToElapse * 30;
    value = Math.trunc(value / 3);
    // impact
    impact.infectionsByRequestedTime = impact.currentlyInfected * (2 ** value);
    impact.severeCasesByRequestedTime = Math.trunc((15 / 100) * impact.infectionsByRequestedTime);
    impact.hospitalBedsByRequestedTime = bedSpacePercentDeduction - impact.severeCasesByRequestedTime;

    // severeImpact
    severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * (2 ** value);
    severeImpact.severeCasesByRequestedTime = Math.trunc((15 / 100) * severeImpact.infectionsByRequestedTime);
    severeImpact.hospitalBedsByRequestedTime = bedSpacePercentDeduction - severeImpact.severeCasesByRequestedTime;
  }


  return {
    data,
    impact,
    severeImpact
  };
};

const covid19ImpactEstimator = (data) => estimateCurrentlyInfected(data);


export default covid19ImpactEstimator;
