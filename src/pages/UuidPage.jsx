import React from "react";
import MainContent from "../components/MainContent";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { toast } from "react-toastify";

const UuidPage = () => {
    const [num, setNum] = useState(1);
    const [uuid, setUuid] = useState("");
    const [split, setSplit] = useState();

    const handleCreateUuid = () => {
        if (num > 500) {
            toast.warning("Tối đa là 500!");
            return false;
        }

        let newUuids = "";
        for (let i = 0; i < num; i++) {
            const newUuid = uuidv4();
            if (split === "true") {
                newUuids += newUuid.replaceAll("-", "") + "\n";
            } else {
                newUuids += newUuid + "\n";
            }
        }

        setUuid(newUuids);
    };

    return (
        <MainContent title={"Tạo Uuid"}>
            <div className="p-4">
                <div className="flex mb-3">
                    <input
                        type="number"
                        value={num}
                        min="1"
                        className="border rounded-l-lg px-3 py-2 bg-white shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block focus:ring-1"
                        placeholder="Tối đa 500"
                        onChange={(e) => setNum(parseInt(e.target.value))}
                    />
                    <button
                        className="bg-blue-500 text-white rounded-r-lg px-3"
                        onClick={handleCreateUuid}
                    >
                        Tạo
                    </button>
                </div>
                <div className="flex gap-4 mb-3">
                    <div className="flex gap-2">
                        <input
                            id="split"
                            type="radio"
                            name="split"
                            value={false}
                            defaultChecked
                            onChange={(e) => setSplit(e.target.value)}
                        />
                        <label htmlFor="split">Giữ dấu "-"</label>
                    </div>
                    <div className="flex gap-2">
                        <input
                            id="non-split"
                            type="radio"
                            name="split"
                            value={true}
                            onChange={(e) => setSplit(e.target.value)}
                        />
                        <label htmlFor="non-split">Xóa dấu "-"</label>
                    </div>
                </div>

                <textarea
                    cols="45"
                    rows="10"
                    value={uuid}
                    className="border rounded p-3"
                    readOnly
                ></textarea>
            </div>
        </MainContent>
    );
};

export default UuidPage;
