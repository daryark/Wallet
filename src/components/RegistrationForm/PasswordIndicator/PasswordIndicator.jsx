import validator from 'validator';

const PasswordIndicator = ({ password }) => {
  const result = validator.isStrongPassword(password, {
    minLength: 6,
    maxLength: 16,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    returnScore: true,
    pointsPerUnique: 5,
    pointsPerRepeat: 3,
    pointsForContainingLower: 4,
    pointsForContainingUpper: 4,
    pointsForContainingNumber: 4,
    pointsForContainingSymbol: 4,
  });

  const handleIndicator = () => {
    if (result >= 0 && result < 25) {
      return {
        color: '#ff6596',
        width: 25,
      };
    } else if (result >= 25 && result < 50) {
      return {
        color: '#fed057',
        width: 50,
      };
    } else if (result >= 50 && result < 75) {
      return {
        color: '#24cca7',
        width: 75,
      };
    } else if (result >= 75) {
      return {
        color: '#00ad84',
        width: 100,
      };
    } else {
      return '';
    }
  };

  const indicator = handleIndicator();

  const changeIndicatorColor = () => ({
    width: `${indicator.width}%`,
    background: indicator.color,
    height: '4px',
  });

  return (
    <div>
      {password.length > 0 && (
        <div className="progress" style={{ height: '4px' }}>
          <div className="progress-bar" style={changeIndicatorColor()}></div>
        </div>
      )}
    </div>
  );
};

export default PasswordIndicator;
