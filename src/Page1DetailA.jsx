import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const location = useLocation();
  console.log(location);

  // stateで渡して、無駄にAPIを叩かないようにする
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();
  const onClickBack = () => history.goBack();

  return (
    <>
      <div>
        <h1>Page1DetailAです</h1>
        <button onClick={onClickBack}>戻る</button>
      </div>
    </>
  );
};
