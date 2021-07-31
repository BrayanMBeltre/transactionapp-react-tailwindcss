export default function Header({ title }) {
  return (
    <header
      className={
        title === "Transactions"
          ? "block fixed inset-x-0 top-0 z-10 bg-white shadow"
          : "bg-white shadow"
      }
    >
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900 flex justify-between items-center">
          {title}
        </h1>
      </div>
    </header>
  );
}
