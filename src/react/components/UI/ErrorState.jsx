import { createRipple } from "../../utils/ripple";

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
          type="button"
          className="btn-primary-outline ripple"
          onClick={onReset}
          onPointerDown={createRipple}
        >
          Restart
        </button>

        <button
          type="button"
          className="btn-primary ripple"
          onClick={onRetry}
          onPointerDown={createRipple}
        >
          Retry
        </button>
      </div>
    </div>
  );
}

export default ErrorState;
