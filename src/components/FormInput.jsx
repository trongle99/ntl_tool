import { Popover } from "@headlessui/react";
import React, { useEffect, useRef, useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";

const FormInput = () => {
    const [formData, setFormData] = useState([{ key: "", value: "" }]);

    const addRow = () => {
        setFormData([...formData, { key: "", value: "" }]);
    };

    const removeRow = (index) => {
        const newFormData = [...formData];
        newFormData.splice(index, 1);
        setFormData(newFormData);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // console.log(JSON.stringify(formData, null, 2));
        // handle form submission logic here
    };

    const [selectedOption, setSelectedOption] = useState("");

    function handleOptionSelect(option) {
        setSelectedOption(option);
    }

    return (
        <div className="max-w-md">
            <form onSubmit={handleSubmit}>
                <button
                    type="button"
                    className="bg-blue-500 text-white px-4 py-2 rounded transition-colors hover:bg-blue-600"
                    onClick={addRow}
                >
                    Add Row
                </button>
                <div className="mt-4 flex flex-col">
                    <label>Name</label>
                    <input
                        className="border-gray-300 border rounded-l px-4 py-2"
                        type="text"
                        placeholder="Name"
                        // value={row.key}
                        // onChange={(event) => {
                        //     const newFormData = [...formData];
                        //     newFormData[index].key = event.target.value;
                        //     setFormData(newFormData);
                        // }}
                    />
                    <label>Type</label>
                    <input
                        className="border-gray-300 border rounded-l px-4 py-2"
                        type="text"
                        placeholder="Type"
                        // value={row.key}
                        // onChange={(event) => {
                        //     const newFormData = [...formData];
                        //     newFormData[index].key = event.target.value;
                        //     setFormData(newFormData);
                        // }}
                    />
                </div>
                <div>
                    <label>Option</label>
                    {formData.map((row, index) => (
                        <div key={index} className="mt-4 flex">
                            <input
                                className="border-gray-300 border rounded-l px-4 py-2"
                                type="text"
                                placeholder="Key"
                                value={row.key}
                                onChange={(event) => {
                                    const newFormData = [...formData];
                                    newFormData[index].key = event.target.value;
                                    setFormData(newFormData);
                                }}
                            />
                            <input
                                className="border-gray-300 border rounded-r px-4 py-2"
                                type="text"
                                placeholder="Value"
                                value={row.value}
                                onChange={(event) => {
                                    const newFormData = [...formData];
                                    newFormData[index].value =
                                        event.target.value;
                                    setFormData(newFormData);
                                }}
                            />
                            <button
                                type="button"
                                className="bg-red-500 text-white px-4 py-2 rounded-l transition-colors hover:bg-red-600"
                                onClick={() => removeRow(index)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex flex-col">
                    <label>Attribute</label>
                    <input
                        className="border-gray-300 border rounded-l px-4 py-2"
                        type="text"
                        placeholder="Attribute"
                        // value={row.key}
                        // onChange={(event) => {
                        //     const newFormData = [...formData];
                        //     newFormData[index].key = event.target.value;
                        //     setFormData(newFormData);
                        // }}
                    />

                    <Popover className="relative">
                        <Popover.Button className="flex gap-1 items-center">
                            <IoAddCircleOutline className="w-5 h-5" /> Solutions
                        </Popover.Button>

                        <Popover.Panel className="absolute z-10 ">
                            {({ close }) => (
                                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                    <div className="relative grid gap-6 bg-white p-2">
                                        <div className="flex flex-col">
                                            <button
                                                type="button"
                                                className={`text-left p-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900`}
                                                onClick={() => {
                                                    handleOptionSelect(
                                                        "key-value"
                                                    );
                                                    close();
                                                }}
                                            >
                                                Key - Value
                                            </button>
                                            <button
                                                type="button"
                                                className={`text-left p-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900`}
                                                onClick={() => {
                                                    handleOptionSelect(
                                                        "select-option"
                                                    );
                                                    close();
                                                }}
                                            >
                                                Select - Option
                                            </button>
                                            <button
                                                type="button"
                                                className={`text-left p-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900`}
                                                onClick={() => {
                                                    handleOptionSelect("other");
                                                    close();
                                                }}
                                            >
                                                Khác
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Popover.Panel>
                    </Popover>
                </div>
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded mt-4 transition-colors hover:bg-green-600"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FormInput;
