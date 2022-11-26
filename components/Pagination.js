export default function Pagination({
  page,
  totalPages,
  onLeftClick,
  onRightClick,
}) {
  return (
    <div className="flex gap-3 text-slate-200 border-neutral-100 p-1 rounded text-xl w-60 justify-center items-center">
      <button
        onClick={onLeftClick}
        className="items-center rounded-md border border-gray-300 px-3 py-1 text-gray-300 hover:bg-gray-50 hover:text-gray-700"
      >
        ◀
      </button>
      <div className="flex-1 text-center">
        {page} of {totalPages}
      </div>
      <button
        onClick={onRightClick}
        className="items-center rounded-md border border-gray-300 px-3 py-1 text-gray-300 hover:bg-gray-50 hover:text-gray-700"
      >
        ▶
      </button>
    </div>
  );
}
