import { Link, useParams } from "react-router";

export default function Test() {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <div>HELLO</div>
      <Link to="/">
        <button>Return</button>
      </Link>
    </>
  );
}
