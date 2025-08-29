import React from "react";

const Avatar = ({
    firstName = '',
    lastName  = '',
    avatarUrl = '',
    size = 40,
   className = ''
}) => {
   //  console.log(avatarUrl)
   const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
   const commonStyles = `flex items-center justify-center rounded-full overflow-hidden ${className} cursor-pointer shadow-md text-3xl rounded-full  w-20 h-20 "  `;
   return avatarUrl ? (
    <img src={avatarUrl} alt={`${firstName} ${lastName}`} className={commonStyles} style={{fontFamily:'Times New Roman, Serif',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}
      onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = ''; }} />

   ) : (
    <div   className={`${commonStyles} font-extrabold text-white bg-[#DEDAFB]`}
     style={{fontFamily:'Times New Roman, Serif',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>
       {initials}
    </div>
   )
}

export default Avatar