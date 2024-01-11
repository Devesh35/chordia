/* eslint-disable @typescript-eslint/no-explicit-any */
import map from '../assets/rc.af90f960.jpg';

export const ReturnCenter = () => {
  return (
    <div className="container my-2 mx-auto">
      <img
        src={(map as any).src}
        className="img-fluid"
        width="100%"
        alt="Return Center"
      />
    </div>
  );
};
