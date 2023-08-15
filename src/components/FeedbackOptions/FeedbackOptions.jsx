import { nanoid } from 'nanoid';

const buttonStyle = {
  marginRight: '10px',
  border: 0,
  lineHeight: 2,
  padding: '10px',
  fontSize: '1rem',
  textAlign: 'center',
  color: '#fff',
  textShadow: '1px 1px 1px #000',
  borderRadius: '10px',
  backgroundColor: 'rgba(0, 0, 255)',
  backgroundImage:
    'linear-gradient(to top left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0))',
  boxShadow: 'inset 2px 2px 3px rgba(255, 255,0, 0.2)',
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          style={buttonStyle}
          key={nanoid()}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
