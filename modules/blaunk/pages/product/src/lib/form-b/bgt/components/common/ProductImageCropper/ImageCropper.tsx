/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import Cropper, { Area } from "react-easy-crop";

interface ImageCropperProps {
  image: string;
  onCropDone: (croppedArea: Area | null) => void;
  onCropCancel: () => void;
}

const ImageCropper: React.FC<ImageCropperProps> = ({
  image,
  onCropDone,
  onCropCancel,
}) => {
  // Define state variables
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState<Area | null>(null);
  const [aspectRatio, setAspectRatio] = useState(5 / 3);

  // Callback when cropping is completed
  const onCropComplete = (_: Area, croppedAreaPixels: Area) => {
    // Store the cropped area in pixels
    setCroppedArea(croppedAreaPixels);
  };

  // Callback when the user changes the aspect ratio
  const onAspectRatioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAspectRatio(parseFloat(event.target.value));
  };

  return (
    <div className="cropper">
      <div className="cropping-container">
        {/* Image Cropper component */}
        <Cropper
          image={image}
          aspect={aspectRatio}
          crop={crop}
          zoom={zoom}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
          style={{
            containerStyle: {
              width: "60%",
              height: "50%",
              left: "20%",
              display: "flex",
              backgroundColor: "#fff",
            },
          }}
        />
      </div>

      <div className="action-btns">
        {/* Aspect ratio selection */}
        <div className="aspect-ratios" onChange={onAspectRatioChange}>
          {/* <label>
            <input type="radio" value={1 / 1} name="ratio" /> 1:1
          </label>
          <label>
            <input type="radio" value={5 / 4} name="ratio" /> 5:4
          </label>
          <label>
            <input type="radio" value={4 / 3} name="ratio" /> 4:3
          </label>
          <label>
            <input type="radio" value={3 / 1} name="ratio" /> 3:1
          </label>
          <label>
            <input type="radio" value={3 / 2} name="ratio" /> 3:2
          </label> */}
          <label>
            <input type="radio" value={5 / 3} name="ratio" /> 5:3
          </label>
          <label>
            <input type="radio" value={16 / 9} name="ratio" /> 16:9
          </label>
        </div>

        {/* Buttons for canceling or applying the crop */}
        <div className="btn-container">
          <button
            style={{
              background: "#ffffff ",
              color: "#1895b0",
              border: "2px solid #1895b0",
              borderRadius: "0.2rem",
              padding: "0.5rem 1.5rem",
            }}
            onClick={onCropCancel}
          >
            Cancel
          </button>

          <button
            style={{
              fontWeight: 500,
              color: "#ffffff",
              background: "#1895b0",
              padding: "0.5rem 1.5rem",
              borderRadius: "0.2rem",
              border: "2px solid #1895b0",
              cursor: "pointer",
              margin: "1rem 0.5rem",
            }}
            onClick={() => {
              onCropDone(croppedArea);
            }}
          >
            Crop & Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCropper;
