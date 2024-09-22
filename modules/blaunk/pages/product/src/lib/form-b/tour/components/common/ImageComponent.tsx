import { ChangeEvent, useEffect, useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';

interface ImageCropUploaderProps {
  editable: 'save' | 'cancel' | 'edit' | 'default';
  setEditable: (editable: 'save' | 'cancel' | 'edit' | 'default') => void;
}

const ImageCropUploader: React.FC<ImageCropUploaderProps> = ({ editable, setEditable }) => {
  const [image, setImage] = useState<File | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState<number>(1.0);
  const editorRef = useRef<AvatarEditor | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const maxSizeInBytes = 200 * 1024;
      if (file.size > maxSizeInBytes) {
        alert('The selected image exceeds the maximum size of 200KB. Please choose a smaller file.');
        return;
      }

      setEditable('default');
      setImage(file);
      setCroppedImage(null);
      event.target.value = '';
    }
  };

  const handleZoomChange = (e: ChangeEvent<HTMLInputElement>) => {
    const zoomLevel = parseFloat(e.target.value);
    setZoom(zoomLevel);
  };

  const handleImageUpload = () => {
    if (editorRef.current) {
      setEditable('default');
      const canvas = editorRef.current.getImageScaledToCanvas();
      canvas.toBlob((blob: Blob | null) => {
        if (blob) {
          const imageUrl = URL.createObjectURL(blob);
          setCroppedImage(imageUrl);
          setImage(null);
          setZoom(1.0);
        }
      }, 'image/jpeg');
    }
  };

  const handleImageDelete = () => {
    setCroppedImage(null);
  };

  const handleDivClick = () => {
    fileInputRef.current?.click();
  };

  useEffect(() => {
    if (editable === 'cancel') {
      setCroppedImage(null);
      setImage(null);
      setZoom(1.0);
    }
  }, [editable]);

  return (
    <div className="image-crop-uploader">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        ref={fileInputRef}
        disabled={['save', 'edit'].includes(editable)}
        style={{ display: 'none' }}
      />

      {!image && !croppedImage && (
        <div onClick={handleDivClick}>
          <div className="box">
            <div className="image-text">Image</div>
            <div className="update-img-text">Click to update (max 200 kb)</div>
          </div>
        </div>
      )}

      {image && !croppedImage && (
        <div className="editor-container">
          <AvatarEditor
            ref={editorRef}
            image={image}
            width={150}
            height={150}
            border={50}
            color={[255, 255, 255, 0.6]}
            scale={zoom}
            rotate={0}
          />
          <input type="range" min="1" max="2" step="0.01" value={zoom} onChange={handleZoomChange} />
          <button onClick={handleImageUpload}>Upload</button>
        </div>
      )}

      {croppedImage && (
        <div>
          <img src={croppedImage} alt="Cropped Preview" />
          {!['save', 'edit'].includes(editable) && (
            <div className="delete-btn-pos">
              <button onClick={handleImageDelete} className="delete-btn">
                Delete
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageCropUploader;
