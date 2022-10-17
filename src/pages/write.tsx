import { NextPage } from "next";

import MyEditor from "../components/Editor/MyEditor";

const Write: NextPage = (props) => {
  console.log(props);
  return (
    <>
      <MyEditor />
    </>
  );
};

export default Write;
