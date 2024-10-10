import Alert from 'react-bootstrap/Alert';

function Alerts({name}) {
  return (
    <>
      {[
        'success',
      ].map((variant) => (
        <Alert key={variant} variant={variant} >
          Welcome {name}
        </Alert>
      ))}
    </>
  );
}

export default Alerts;