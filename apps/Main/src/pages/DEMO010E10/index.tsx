import React from "react";
import { useEffect } from "react";
import realgrid, { ValueType, LocalDataProvider, GridView } from "realgrid";

type Props = {};

function index({}: Props) {
  useEffect(() => {
    const container = document.getElementById("demogrid");
    const provider = new LocalDataProvider(false);
    const gridView = new GridView("demogrid");
    gridView.setDataSource(provider);
    provider.setFields([
      {
        fieldName: "KorName",
        dataType: ValueType.TEXT,
      },
      {
        fieldName: "Age",
        dataType: ValueType.NUMBER,
      },
    ]);
    gridView.setColumns([
      {
        name: "KorNameColumn",
        fieldName: "KorName",
        type: "data",
        width: "70",
        header: {
          text: "이름",
        },
      },
    ]);
  }, []);

  return <div id={"demogrid"}>index</div>;
}

export default index;
