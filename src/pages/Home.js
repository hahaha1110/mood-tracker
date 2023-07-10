import { useSearchParams } from "react-router-dom";
import Button from "../component/Buttons";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("sort"));
  return (
    <div>
      <div>Home 페이지 입니다.</div>
      <div>
        <Button
          text={"기본버튼"}
          onClick={() => {
            alert("기본");
          }}
        />
        <Button
          text={"기본버튼2"}
          type={"default"}
          onClick={() => {
            alert("기본2");
          }}
        />
        <Button
          text={"긍정"}
          type={"positive"}
          onClick={() => {
            alert("positive");
          }}
        />
        <Button
          text={"부정"}
          type={"negative"}
          onClick={() => {
            alert("negative");
          }}
        />
      </div>
    </div>
  );
};
export default Home;
