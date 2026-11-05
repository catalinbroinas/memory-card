
function ErrorState({ message, onRetry, onReset }) {
  return (
    <div className="error-state">
      <div className="error-state__message">
        <p className="alert-danger" role="alert">
          {message}
        </p>
      </div>

      <div className="error-state__actions">
        <button 
          className="btn-primary-outline"
          onClick={onReset}
        >
          Reset
        </button>

        <button 
          className="btn-primary"
          onClick={onRetry}
        >
          Retry
        </button>
      </div>
    </div>
  );
}

export default ErrorState;
