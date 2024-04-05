interface IError {
  repeatRequest: () => void;
}

const ErrorComponent = ({ repeatRequest }: IError) => {
  return (
    <section className="market">
      <div className="error">
        <p>Something went wrong!</p>
        <button className="button" onClick={repeatRequest}>
          Retry request
        </button>
      </div>
    </section>
  );
};

export default ErrorComponent;
