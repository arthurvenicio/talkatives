'use client';
import { useState } from 'react';
import { CreateStudentModal } from '../CreateStudentModal';

export const ButtonCreate = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <CreateStudentModal setShowModal={setShowModal} />}
      <button
        className="bg-primary text-white-secondary border border-solid border-primary px-4 rounded-sm hover:opacity-90"
        onClick={() => setShowModal(true)}
      >
        Cadastrar
      </button>
    </>
  );
};
