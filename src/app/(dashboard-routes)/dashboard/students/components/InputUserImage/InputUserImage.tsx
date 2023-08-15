import { ChangeEvent, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IFormData } from '../CreateStudentModal';

interface IInputUserImageProps {
  register: UseFormRegister<IFormData>;
}

const DEFAULT_PHOTO_URL = 'https://i.imgur.com/VoKGrwB.png';

export const InputUserImage = ({ register }: IInputUserImageProps) => {
  const [hasImage, setHasImage] = useState<any | null>(DEFAULT_PHOTO_URL);

  const handleImageChange = (ev: ChangeEvent<HTMLInputElement>) => {
    if (!ev.target.files) return;
    const file = ev.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        if (!ev.target) return;
        setHasImage(ev.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-56">
      <div>
        <label htmlFor="imageInput">
          <div
            className="w-32 h-32 rounded-full bg-cover bg-center hover:cursor-pointer hover:opacity-90"
            style={{ backgroundImage: `url(${hasImage})` }}
          ></div>
        </label>
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>
    </div>
  );
};
