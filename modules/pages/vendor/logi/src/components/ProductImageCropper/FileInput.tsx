import React, { useRef } from "react";

interface FileInputProps {
  onImageSelected: (imageData: string | ArrayBuffer | null) => void;
}

const FileInput: React.FC<FileInputProps> = ({ onImageSelected }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = () => {
        onImageSelected(reader.result);
      };
    }
  };

  const onChooseImg = () => {
    inputRef.current?.click();
  };

  return (
    <div>
      {/* Hidden file input element */}
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleOnChange}
        style={{ display: "none" }}
      />

      {/* Button to trigger the file input dialog */}
      {/* <button className="btn" onClick={onChooseImg}>
        Choose Image
      </button> */}
      <div onClick={onChooseImg}>
        <div className="box">
          <div className="image-text">Image</div>
          <div className="update-img-text">Click to update (max 200 kb)</div>
        </div>
      </div>
    </div>
  );
};

export default FileInput;
