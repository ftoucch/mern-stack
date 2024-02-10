import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Error Page</h1>
      <h2>{error.status}</h2>
      <p>{error.data}</p>
      <Link to="/">Back Home</Link>
    </div>
  );
};
export default Error;
