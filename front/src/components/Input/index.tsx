import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import styles from './styles.module.scss';

export type InputType = "text" | "email" | "password" | "number";
export type IInput = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    type?: InputType;
}

export function Input({ type, ...props }: IInput) {
    return (
        <input
            type={type}
            {...props}
            className={styles.input}
        />
    );
}