import React from "react";
import ReactWithoutMemo from "@/pages/ReactWithoutMemo/index";

interface Props {}
export const WithoutMemoPage: React.FC<Props> = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <ReactWithoutMemo />
        </div>
    );
};
export default WithoutMemoPage;
