import { useDropzone } from "react-dropzone";
import XML from "fast-xml-parser";

import { ChevronDoubleDownIcon } from "@heroicons/react/outline";

const DropZone = ({ setTransactions }) => {
  const onDrop = (files) => {
    files.forEach((file) => {
      const reader = new FileReader();
      try {
        if (file.type === "application/json") {
          reader.onload = async (e) => {
            const fileContent = e.target.result;
            const parse = await JSON.parse(fileContent);
            setTransactions(parse);
          };
        } else {
          reader.onload = (e) => {
            const fileContent = e.target.result;
            const parse = XML.parse(fileContent);
            setTransactions(parse.root.element);
            console.log(parse.root.element);
          };
        }
      } catch (error) {
        console.log(error);
      }
      reader.readAsText(file);
    });
  };

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    fileRejections,
  } = useDropzone({
    onDrop,
    accept: ".json,.xml",
  });

  const files = (
    <div className=" py-6 sm:px-0 divide-y divide-gray-500 divide-opacity-25">
      {acceptedFiles.map((file) => (
        <div key={file.path} className="flex justify-between py-4">
          <div>
            <p className="font-bold">{file.path}</p>
          </div>
          <div className="text-right">
            <p className="">
              {file.size} <span className="text-sm">bytes</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  const box = (
    <div className="border-4 border-dashed border-gray-200 rounded-lg h-80 p-4 text-center grid grid-cols-1 justify-items-center mb-8 cursor-pointer">
      <div className="mt-16">
        <ChevronDoubleDownIcon className="h-24 w-24 text-gray-400" />
      </div>

      {fileRejections.length > 0 ? (
        <p className="text-red-600 text-2xl">This is not a valid File</p>
      ) : (
        <p className="text-gray-400 text-xl ">Drop JSON/XML Files Here</p>
      )}
    </div>
  );

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <div>{acceptedFiles <= 0 ? box : files}</div>
      <div className="rounded-md shadow"></div>
    </div>
  );
};

export default DropZone;
