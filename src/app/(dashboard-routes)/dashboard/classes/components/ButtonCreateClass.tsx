'use client';
import Link from 'next/link';
import { useState } from 'react';
import ClassCreateModal from './ClassCreateModal';

const ButtonCreateClass = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && <ClassCreateModal setShowModal={setShowModal} />}
      <button
        onClick={() => setShowModal(true)}
        className="bg-primary text-white-secondary border border-solid border-primary px-4 rounded-sm hover:opacity-90 flex items-center justify-center ml-auto"
      >
        Criar
      </button>
    </>
  );
};

export default ButtonCreateClass;
