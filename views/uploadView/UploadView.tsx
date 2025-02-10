"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";
import styles from "./UploadView.module.scss";
import { InputField } from "@/shared";
import Image from "next/image";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export default function UploadView() {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [description, setDescription] = useState("");
	const [category, setCategory] = useState("");
	const [banner, setBanner] = useState<string | null>(null);
	const [message, setMessage] = useState<string | null>(null);

	const toolbarOptions = [
		["bold", "italic", "underline", "strike"],
		["blockquote", "code-block"],
		["image"],
		[{ header: 1 }, { header: 2 }],
		[{ size: ["small", false, "large", "huge"] }],
		[{ header: [1, 2, 3, 4, 5, 6, false] }],
		[{ color: [] }, { background: [] }],
		[{ align: [] }],
		["clean"]
	];

	const modules = {
		toolbar: toolbarOptions
	};

	// Convert image file to base64
	const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (!file) return;

		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			setBanner(reader.result as string);
		};
		reader.onerror = error => {
			console.error("Error converting image to base64:", error);
			setMessage("Error processing image. Please try another one.");
		};
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const res = await fetch("/api/upload", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ title, content, description, category, banner })
			});

			if (!res.ok) {
				const error = await res.json();
				throw new Error(error.error || "Failed to upload post.");
			}

			setMessage("Post uploaded successfully!");
			setTitle("");
			setContent("");
			setCategory("");
			setDescription("");
			setBanner(null);
		} catch (error) {
			console.error("Error uploading post:", error);
			setMessage("Error uploading post. Please try again.");
		}
	};

	return (
		<div className={styles.section}>
			<div className={styles.section_container}>
				<h1>Create a Blog Post</h1>
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="title">Title:</label>
						<InputField
							id="title"
							type="text"
							value={title}
							onChange={e => setTitle(e.target.value)}
							required
						/>
					</div>
					<div>
						<label htmlFor="description">Description:</label>
						<InputField
							id="description"
							placeholder="Description"
							type="text"
							value={description}
							onChange={e => setDescription(e.target.value)}
							required
						/>
					</div>
					<div>
						<label htmlFor="category">Category:</label>
						<InputField
							id="category"
							placeholder="Category"
							type="text"
							value={category}
							onChange={e => setCategory(e.target.value)}
							required
						/>
					</div>
					<div>
						<label htmlFor="banner">Banner Image:</label>
						<input
							id="banner"
							type="file"
							accept="image/png, image/jpeg, image/jpg, image/gif"
							onChange={handleImageUpload}
							required
						/>
					</div>
					{banner && (
						<div className={styles.imagePreview}>
							<Image src={banner} alt="Banner Preview" fill />
						</div>
					)}
					<div>
						<label htmlFor="content">Content:</label>
						<ReactQuill
							value={content}
							onChange={setContent}
							modules={modules}
							theme="snow"
							className={styles.textarea}
						/>
					</div>
					<button type="submit">Upload Post</button>
				</form>
				{message && <p>{message}</p>}
			</div>
		</div>
	);
}
