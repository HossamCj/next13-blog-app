import Image from "next/image";

import { Fragment } from "react";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
    return (
        <Fragment>
            <main className="px-6 mx-auto">
                <p className="mt-12 mb-12 text-3xl text-center text-white">
                    Hello and Welcome 👋&nbsp;
                    <span className="whitespace-nowrap">
                        I'm <span className="font-bold">Hossam Cj</span>
                    </span>
                </p>
            </main>
        </Fragment>
    );
}
