import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styles from './styles.module.scss';

export type ButtonType =
    DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > & {
        children: React.ReactNode;
        type: string;
    }

export function Button(props: ButtonType) {
    return (
        <button {...props} className={styles.button} />
    );
}