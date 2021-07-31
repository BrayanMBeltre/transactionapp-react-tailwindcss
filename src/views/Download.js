import { Builder } from "xml2js";
import Button from "../components/Button";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Spin from "../components/Spin";
import { useFetch } from "../hooks/useFetch";

export default function Download() {
  const builder = new Builder();
  const { status, data, error } = useFetch(
    "http://localhost:3000/api/transactions"
  );

  status === "error" && console.log(error);

  const downloadJSON = (fileName) => {
    const json = JSON.stringify(data, undefined, 2);
    const blob = new Blob([json], { type: "application/json" });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadXML = (fileName) => {
    let element = [];
    data.forEach((e) => {
      element.push(e);
    });

    const xml = builder.buildObject({ root: { element } });
    const blob = new Blob([xml], { type: "text/xml" });
    const href = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName + ".xml";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Nav />
      <Header title="Download" />
      <main className="max-w-7xl h-96 mx-4 my-6 lg:px-8 pt-28">
        {status === "fetching" ? (
          <Spin />
        ) : (
          <div>
            <Button onClick={() => downloadJSON("transactions")}>
              Download as JSON
            </Button>
            <Button onClick={() => downloadXML("transactions")}>
              Download as XML
            </Button>
          </div>
        )}
      </main>
    </>
  );
}
