import { useState } from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js'
import "draft-js/dist/Draft.css"

import './AddDiaries.css'

function AddDiaries({ diaries, setDiaries, setShowAddDiaries })
{
    const [date, setDate] = useState('')
    const [title, setTitle] = useState([])
    const [content, setContent] = useState(EditorState.createEmpty())
    const [imagePreview, setImagePreview] = useState(null)
    
    const handleDate = (e) => {
        setDate(e.target.value)
    }

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleBold = () => {
        const newState = RichUtils.toggleInlineStyle(content, "BOLD")
        setContent(newState)
    }

    const handleItalic = () => {
        const newState = RichUtils.toggleInlineStyle(content, "ITALIC")
        setContent(newState)
    }

    const handleUnderline = () => {
        const newState = RichUtils.toggleInlineStyle(content, "UNDERLINE")
        setContent(newState)
    }

    const handleSubmit = () => {
        if (date && title) {
            setDiaries((prev) => [
                ...prev,
                {
                    date,
                    title,
                    content: content.getCurrentContent().getPlainText(),
                    imagePreview, 
                },
            ]);
            setDate("");
            setTitle("");
            setContent(EditorState.createEmpty());
            setImagePreview(null);
            setShowAddDiaries(false);
        } else {
            alert("Please enter both date and title!");
        }
    };
    

    const handleClickImage = async (e) => {
        const file = e.target.files[0];
        if (file) {
            if (imagePreview) {
                URL.revokeObjectURL(imagePreview);
            }
    
            const formData = new FormData();
            formData.append("file", file);
            try {
                const response = await fetch("http://localhost:5000/upload", {
                    method: "POST",
                    body: formData,
                });
    
                if (response.ok) {
                    const result = await response.json();
                    setImagePreview(result.filePath); // Lưu URL từ server
                } else {
                    alert("Failed to upload image");
                }
            } catch (error) {
                console.error("Error uploading file: ", error);
            }
        }
    };

    const handleContentChange = (editorState) => {
        setContent(editorState)
    }

    return (
        <>
            <div className='diaries-right-navbar-icon'>
                <i class="diaries-icon-item fa-solid fa-italic"
                    onClick={handleItalic}
                ></i>
                <i class="diaries-icon-item fa-solid fa-underline"
                    onClick={handleUnderline}
                ></i>
                <i class="diaries-icon-item fa-solid fa-bold"
                    onClick={handleBold}
                ></i>
                <i class="diaries-icon-item fa-regular fa-image"
                    onClick={() => document.querySelector("#image-input").click()}
                ></i>
            </div>

            <div className="add-diaries">
                <input placeholder='Enter date...'
                    onChange={handleDate}
                    value={date}
                    id="add-diaries-date"
                />

                <input placeholder='Enter title...'
                    onChange={handleTitle}
                    value={title}
                    id="add-diaries-title"
                />
                   
                <input 
                    id='image-input'
                    type='file'
                    onChange={handleClickImage}
                    style={{display: "none"}}
                />

                {imagePreview && (
                    <div >
                        <img className='image-preview' src={imagePreview} alt='image-preview'></img>
                    </div>
                )}

                <div className="editor-container" >
                    <Editor
                        editorState={content}
                        onChange={handleContentChange}
                        placeholder="Enter content..."
                    />
                </div>

                <button
                    onClick={handleSubmit}
                    className="add-diaries-button"
                >
                    Add diary
                </button>

            </div>
        </>
    )
}

export default AddDiaries