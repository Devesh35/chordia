import { useState } from 'react';
import FileInput from './FileInput';
import ImageCropper from './ImageCropper';
import './ProductImageCropper.css';

type ImgCroppedArea = {
  x: number;
  y: number;
  width: number;
  height: number;
};

function ProductImageCropper() {
  const [image, setImage] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<'choose-img' | 'crop-img' | 'img-cropped'>('choose-img');
  const [imgAfterCrop, setImgAfterCrop] = useState<string>('');

  const onImageSelected = (selectedImg: string | ArrayBuffer | null) => {
    if (typeof selectedImg === 'string') {
      setImage(selectedImg);
      setCurrentPage('crop-img');
    } else {
      console.error('Selected image is not a valid string.');
    }
  };

  const onCropDone = (imgCroppedArea: ImgCroppedArea | null) => {
    if (imgCroppedArea === null) {
      console.error('Cropped area is null.');
      return;
    }

    const canvasEle = document.createElement('canvas');
    canvasEle.width = imgCroppedArea.width;
    canvasEle.height = imgCroppedArea.height;

    const context = canvasEle.getContext('2d');

    if (!context) return;

    const imageObj1 = new Image();
    imageObj1.src = image;
    imageObj1.onload = function () {
      context.drawImage(
        imageObj1,
        imgCroppedArea.x,
        imgCroppedArea.y,
        imgCroppedArea.width,
        imgCroppedArea.height,
        0,
        0,
        imgCroppedArea.width,
        imgCroppedArea.height,
      );

      const dataURL = canvasEle.toDataURL('image/jpeg');
      setImgAfterCrop(dataURL);
      setCurrentPage('img-cropped');
    };
  };

  const onCropCancel = () => {
    setCurrentPage('choose-img');
    setImage('');
  };

  let content;
  if (currentPage === 'choose-img') {
    content = <FileInput onImageSelected={onImageSelected} />;
  } else if (currentPage === 'crop-img') {
    content = <ImageCropper image={image} onCropDone={onCropDone} onCropCancel={onCropCancel} />;
  } else {
    content = (
      <div>
        <div>
          <img src={imgAfterCrop} alt="img-after-crop" className="cropped-img" />
        </div>
        <div className="btn-container">
          <button
            onClick={() => setCurrentPage('crop-img')}
            style={{
              background: '#ffffff ',
              color: '#1895b0',
              border: '2px solid #1895b0',
              borderRadius: '0.2rem',
              padding: '0.5rem 1.5rem',
            }}
          >
            Crop
          </button>

          <button
            onClick={() => {
              setCurrentPage('choose-img');
              setImage('');
            }}
            style={{
              fontWeight: 500,
              color: '#ffffff',
              background: '#1895b0',
              padding: '0.5rem 1.5rem',
              borderRadius: '0.2rem',
              border: '2px solid #1895b0',
              cursor: 'pointer',
              margin: '1rem 0.5rem',
            }}
          >
            New Image
          </button>
        </div>
      </div>
    );
  }

  return <div className="image-crop-uploader">{content}</div>;
}

export default ProductImageCropper;
