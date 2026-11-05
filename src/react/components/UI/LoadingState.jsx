
function LoadingState({ text }) {
  return (
    <div className="loading-state" role="status">
      <span className="loading-state__spinner" aria-hidden="true"></span>
      <p className="loading-state__text">{text}</p>
    </div>
  );
}

export default LoadingState;
