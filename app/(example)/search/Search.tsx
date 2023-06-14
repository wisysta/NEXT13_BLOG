"use client";

import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {};

function Search({}: Props) {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch("");
        router.push(`/search/${search}`);
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="ml-4">
                <input
                    className="mr-4 px-4 py-2"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Input your Search"
                />
                <button
                    type="submit"
                    className="rounded-lg bg-slate-400 px-4 py-2 text-white"
                >
                    Search
                </button>
            </form>
        </div>
    );
}

export default Search;
