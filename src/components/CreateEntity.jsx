import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { toast } from "react-toastify";

const CreateEntity = () => {
    const [copy, setCopy] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [codeString, setCodeString] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleConvert = (event) => {
        event.preventDefault();
        if (inputValue === "") {
            toast.warning("Thuộc tính không được để trống!");
            setCodeString("");
            return false;
        }
        const arr = inputValue.split(",").map((item) => item.trim());

        // variable
        const variable = renderVariable(arr);
        // exchangeArray
        const exchangeArray = renderExchangeArray(arr);
        // getter & setter
        const getterAndSetter = renderGetterAndSetter(arr);

        const result =
            variable + "\n\n" + exchangeArray + "\n" + getterAndSetter;

        setCodeString(result);
    };

    const renderVariable = (variables) => {
        let result = "";
        variables.forEach((variable) => {
            if (result === "") {
                result = `protected $${variable};`;
            } else {
                result = result.concat("\n", `protected $${variable};`);
            }
        });
        return result;
    };

    const renderExchangeArray = (variables) => {
        let exchangeArray = "public function exchangeArray($data){\n";
        let getArrayCopy =
            "public function getArrayCopy(){\n    return get_object_vars($this);\n}\n";

        const valLength = variables.length;
        variables.forEach((item, i) => {
            if (valLength > i + 1) {
                exchangeArray += `    $this->${item} = (isset($data['${item}']) && $data['${item}'] != '') ? $data['${item}'] : null;\n`;
            } else {
                exchangeArray += `    $this->${item} = (isset($data['${item}']) && $data['${item}'] != '') ? $data['${item}'] : null;\n}\n`;
            }
        });

        return exchangeArray + "\n" + getArrayCopy;
    };

    const renderGetterAndSetter = (variables) => {
        let group = "";

        variables.forEach((variable) => {
            let str = convertToCamelCase(variable);
            let get = `public function get${str}()\n{\n    return $this->${variable};\n}\n`;
            let set = `public function set${str}($${variable})\n{\n    $this->${variable} = $${variable};\n}\n`;
            group += get + set + "\n";
        });

        return group;
    };

    const convertToCamelCase = (str) =>
        str.charAt(0).toUpperCase() +
        str
            .slice(1)
            .replace(/([-_][a-z])/g, (group) =>
                group.toUpperCase().replace("-", "").replace("_", "")
            );

    const handleClick = () => {
        navigator.clipboard.writeText(codeString);
        setCopy(true);
        setTimeout(() => {
            setCopy(false);
        }, 3000);
    };

    return (
        <div className="flex justify-center">
            <div className="w-2/3 border rounded p-4 ">
                <label className="block">
                    <span className="block font-medium text-slate-700">
                        Thuộc tính
                    </span>
                    <div className="flex mt-1">
                        <input
                            type="text"
                            className="w-full border rounded-l-lg px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block focus:ring-1"
                            placeholder="Ví dú: name, address, email"
                            onChange={handleInputChange}
                        />
                        <button
                            className="bg-blue-500 text-white rounded-r-lg px-3"
                            onClick={handleConvert}
                        >
                            Submit
                        </button>
                    </div>
                </label>

                <div className="mt-6">
                    <div className="bg-[#3a404d] rounded">
                        <div className="flex justify-between items-center px-4 text-white text-xs">
                            <p className="text-sm">Example code</p>
                            {copy ? (
                                <button
                                    className="py-1 inline-flex items-center gap-1"
                                    onClick={handleConvert}
                                >
                                    <span className="text-base mt-1">
                                        <ion-icon name="checkmark-sharp"></ion-icon>
                                    </span>
                                    Copied!
                                </button>
                            ) : (
                                <button
                                    className="py-1 inline-flex items-center gap-1"
                                    onClick={handleClick}
                                >
                                    <span className="text-base mt-1">
                                        <ion-icon name="clipboard-outline"></ion-icon>
                                    </span>
                                    Copy code
                                </button>
                            )}
                        </div>
                        <SyntaxHighlighter
                            language="php"
                            style={atomOneDark}
                            customStyle={{ padding: "25px" }}
                            className="rounded-b"
                        >
                            {codeString}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateEntity;
