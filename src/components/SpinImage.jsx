import React, { useEffect } from "react";
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";
import coin from "../assets/coin.png";
import { HiArrowDown } from "react-icons/hi";

const SpinImage = () => {
    useEffect(() => {
        const textOverlay = document.getElementById("text-overlay");
        const downloadButton = document.getElementById("download-button");

        const text = "10000";

        textOverlay.innerHTML = text;

        downloadButton.addEventListener("click", function () {
            html2canvas(document.getElementById("image-container"), {
                backgroundColor: null,
            }).then(function (canvas) {
                canvas.toBlob(function (blob) {
                    saveAs(blob, "image.png");
                });
            });
        });
    }, []);

    return (
        <>
            <div className="flex h-[70vh] border">
                <div className="w-1/4 h-full border-r">
                    <div className="h-16 border-b flex items-center justify-end">
                        <button
                            type="button"
                            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                            Tạo ảnh
                        </button>
                    </div>
                    <div className="flex flex-col gap-3 h-full p-4">
                        <input
                            type="text"
                            id="first_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="John"
                        />
                        <input
                            type="text"
                            id="first_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="John"
                        />
                        <input
                            type="text"
                            id="first_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="John"
                        />
                        <input
                            type="text"
                            id="first_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="John"
                        />
                        <input
                            type="text"
                            id="first_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="John"
                        />
                        <input
                            type="text"
                            id="first_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="John"
                        />
                    </div>
                </div>
                <div className="flex-1">
                    <div className="h-16 border-b flex items-center justify-end">
                        <button
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            <HiArrowDown className="w-3.5 h-3.5 mr-2" />
                            Tải về
                        </button>
                    </div>
                    <div className="h-full">
                        <div
                            id="image-container"
                            className="inline-block bg-transparent"
                        >
                            <div
                                id="text-overlay"
                                className="text-[60px] font-bold text-center text-[#f3f3f3] pb-[10px] font-Impact"
                            ></div>
                            <img
                                id="coin-image"
                                src={coin}
                                alt="Coin Image"
                                className="w-[200px] h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <button id="download-button">Download Image</button>
        </>
    );
};

export default SpinImage;
