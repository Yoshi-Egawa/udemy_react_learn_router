import { useParams, useLocation } from "react-router-dom"; // version 5.0だと動かない

export const UrlParameter = () => {
  const param = useParams();
  console.log(param);

  const { id } = useParams();

  const location = useLocation();
  console.log(location);

  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);
  return (
    <>
      <div>
        <h1>UrlParameterです</h1>
        <p>パラメーターは {id} です。</p>
        <p>クエリパラメーターは {query.get("name")} です</p>
      </div>
    </>
  );
};
