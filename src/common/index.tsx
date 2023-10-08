import React from "react";

interface Props {
    children: React.ReactNode;
    style?: React.CSSProperties;
}

export const Title = ({ children, style }: Props) => {
    return (
        <h1 className="text-3xl px-4 py-4 lg:text-5xl lg:py-8" style={style}>
            {children}
        </h1>
    );
};
