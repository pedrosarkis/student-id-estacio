import React from 'react';

const ProfileMenuItem = ({ icon, text }) => {
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col justify-between h-40">
      <div className="self-start">
        {icon}
      </div>
      <span className="text-black text-sm self-start">{text}</span>
    </div>
  );
};

export default ProfileMenuItem;