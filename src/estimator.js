const estimateCurrentlyInfected = (data) => {
  const cases = data;
  const impact = {};
  const severeImpact = {};
  const impactEstimate = 10;
  const severeImapctEstimate = 50;

  // impact
  impact.currentlyInfected = cases.reportedCases * impactEstimate;
  impact.infectionsByRequestedTime = impact.currentlyInfected * (2 ** impactEstimate);

  // severeImpact
  severeImpact.currentlyInfected = cases.reportedCases * severeImapctEstimate;
  // eslint-disable-next-line max-len
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * (2 ** severeImapctEstimate);

  return {
    data,
    impact,
    severeImpact
  };
};

const covid19ImpactEstimator = (data) => {
  const estimate = estimateCurrentlyInfected(data);
  return estimate;
};


export default covid19ImpactEstimator;
