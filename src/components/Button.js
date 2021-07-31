export default function Button({ onClick, className, children }) {
  return (
    <button
      onClick={onClick}
      className={`${className} w-full h-16 blo flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10 mb-8`}
    >
      {children}
    </button>
  );
}
