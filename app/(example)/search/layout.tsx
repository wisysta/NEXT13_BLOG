import React from "react";
import Search from "./Search";

type Props = {
    children: React.ReactNode;
};

function SearchLayout({ children }: Props) {
    return (
        <div className="flex divide-x-2 p-5">
            <div>
                <h1>Search</h1>
            </div>
            <div className="flex-1 pl-5">
                <Search />
                <div className="w-full">{children}</div>
            </div>
        </div>
    );
}

export default SearchLayout;
