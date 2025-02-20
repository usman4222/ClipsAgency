import React from "react";

export const Heading = ({ title, description }) => {
    return (
        <section className="bg-[#080617] px-4 pt-10">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="mb-6 text-4xl font-bold tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.25)] md:text-5xl lg:text-6xl">
                    {title}
                </h2>
                <p className="mx-auto mb-12 max-w-xl text-base text-white md:text-lg lg:text-xl">
                    {description}
                </p>
            </div>
        </section>
    );
};