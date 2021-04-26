import PropTypes from 'prop-types';

export const getEnabledFeatures = ({
  sysDev,
  test,
  stage,
  production,
  development,
}) => ({
  sentry: !sysDev && production,
  reactotron: sysDev && (development || stage || production || test),
});

getEnabledFeatures.propTypes = {
  development: PropTypes.bool,
  production: PropTypes.bool,
  stage: PropTypes.bool,
  sysDev: PropTypes.bool,
  test: PropTypes.bool,
};
