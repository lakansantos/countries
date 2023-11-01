"use client";

const ErrorPage = () => {
  return (
    <div>
      <h1>Somethinmg went wrong...</h1>
      <button onClick={() => window.location.reload()}>Refresh</button>
    </div>
  );
};

export default ErrorPage;
