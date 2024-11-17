import React from 'react';

interface ButtonProps {
    label: string;
    action: () => void;
}
declare const Button: ({ label, action }: ButtonProps) => React.JSX.Element;

export { Button };
