interface IError {
  repeatRequest: () => void;
}

const ErrorComponent = ({ repeatRequest }: IError) => {
  return (
    <section className="market">
      <div className="error">
        <p>Произошла ошибка!</p>
        <button className="button" onClick={repeatRequest}>
          Повторить запрос
        </button>
      </div>
    </section>
  );
};

export default ErrorComponent;
