import React, { useEffect, useRef, useState } from 'react';
import { saveAs } from 'file-saver';
import html2canvas from 'html2canvas';
import coin from '../assets/coin.png';
import { HiArrowDown } from 'react-icons/hi';

const SpinImage = () => {
    const [inputValues, setInputValues] = useState(['', '', '', '', '']);
    const [items, setItems] = useState([]);
    const itemRefs = useRef([]);

    const handleChange = (e, index) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = e.target.value;
        setInputValues(newInputValues);
    };

    const handleButtonClick = () => {
        const nonEmptyValues = inputValues.filter((value) => value !== '');
        const newItems = nonEmptyValues.map((value, index) => ({
            id: index,
            text: value,
        }));
        setItems(newItems);
    };

    const handleDownloadClick = () => {
        itemRefs.current.forEach((itemRef, index) => {
            html2canvas(itemRef, {
                backgroundColor: null,
            }).then((canvas) => {
                canvas.toBlob((blob) => {
                    saveAs(blob, `image_${index}.png`);
                });
            });
        });
    };

    return (
        <>
            <div className="flex h-[70vh] border">
                <div className="w-1/4 h-full border-r">
                    <div className="h-16 border-b flex items-center justify-end">
                        <button
                            type="button"
                            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
                            onClick={handleButtonClick}
                        >
                            Tạo ảnh
                        </button>
                    </div>
                    <div className="flex flex-col gap-3 h-full p-4">
                        {inputValues.map((value, index) => (
                            <input
                                key={index}
                                type="number"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                value={value}
                                placeholder="Nhập số xu"
                                onChange={(e) => handleChange(e, index)}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex-1">
                    <div className="h-16 border-b flex items-center justify-end">
                        <button
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2"
                            onClick={handleDownloadClick}
                        >
                            <HiArrowDown className="w-3.5 h-3.5 mr-2" />
                            Tải về
                        </button>
                    </div>
                    <div className="h-full image-container p-4 flex gap-4">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="w-[200px] h-[200px] flex flex-col items-center justify-between"
                                ref={(ref) => (itemRefs.current[item.id] = ref)}
                            >
                                <span className="text-5xl font-bold text-[#f3f3f3] font-Impact">
                                    {item.text}
                                </span>
                                <img src={coin} className="max-h-32" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SpinImage;
