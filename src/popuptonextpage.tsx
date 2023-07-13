// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// const PopupBox: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const history = useHistory();

//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleButtonClick = (page: string) => {
//     history.push(page);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       {/* Button to trigger the popup */}
//       <button
//         className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
//         onClick={togglePopup}
//       >
//         Open Popup
//       </button>

//       {/* Popup box */}
//       {isOpen && (
//         <div className="fixed inset-0 z-10 overflow-y-auto">
//           <div className="flex items-center justify-center min-h-screen">
//             <div className="p-6 bg-white rounded shadow-lg">
//               <div className="mb-4">
//                 <h2 className="text-lg font-bold">Popup Box</h2>
//                 <p>Content of the popup box goes here...</p>
//               </div>
//               <div className="flex justify-end">
//                 <button
//                   className="px-4 py-2 mr-2 font-bold text-white bg-red-500 rounded hover:bg-red-600"
//                   onClick={() => handleButtonClick('/page1')}
//                 >
//                   Button 1
//                 </button>
//                 <button
//                   className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-600"
//                   onClick={() => handleButtonClick('/page2')}
//                 >
//                   Button 2
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PopupBox;

import React, { useState } from 'react';

const PopupBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Button to trigger the popup */}
      <button
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
        onClick={togglePopup}
      >
        Open Popup
      </button>

      {/* Popup box */}
      {isOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="p-6 bg-white rounded shadow-lg">
              <div className="mb-4">
                <h2 className="text-lg font-bold">Popup Box</h2>
                <p>Content of the popup box goes here...</p>
              </div>
              <div className="flex justify-end">
                <a
                  href="https://filecoin.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 mr-2 font-bold text-white bg-red-500 rounded hover:bg-red-600"
                >
                  Button 1
                </a>
                <a
                  href="https://example.com/page2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-600"
                >
                  Button 2
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupBox;
