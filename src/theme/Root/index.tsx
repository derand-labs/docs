import React from 'react';
import type { JSX, ReactNode } from 'react';
import NavBar from '@site/src/theme/NavBar';

export default function Root({ children }: { children: ReactNode }): JSX.Element {
    return (
        <>
            <NavBar />
            {children}
        </>
    );
}
