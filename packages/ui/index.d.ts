import React from 'react'

declare namespace JSX {
    interface ExtendedInput extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
        customName?: string;
    }

    interface IntrinsicElements {
        input: ExtendedInput;
    }
}