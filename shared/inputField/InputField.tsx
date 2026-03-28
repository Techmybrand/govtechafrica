"use client";

import React, { InputHTMLAttributes } from "react";
import styles from "./InputField.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	name?: string;
	isPassword?: boolean;
	className?: string;
	error?: string;
	// eslint-disable-next-line
	ref?: any;
}

const InputField = ({ name, className, error, ref, ...options }: Props) => {
	return (
		<div className={`${styles.input} ${className}`}>
			<div className={styles.input_wrapper}>
				<input ref={ref}
					className={styles.input_field}
					name={name}
					autoComplete="off"
					{...options}
				/>
			</div>
			{!!error && (
				<label className={styles.input_label} style={{ color: "#FC0000" }}>
					{error}
				</label>
			)}
		</div>
	);
};

export default InputField;
