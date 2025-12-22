import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PrevNextPage = () => {
  const { page, setPage, totalPages } = useContext(StoreContext);

  return (
    <div className="w-full flex flex-col items-center gap-4 mt-12">
      <p className="text-sm text-gray-600">
        Page <span className="font-semibold">{page}</span> of{" "}
        <span className="font-semibold">{totalPages}</span>
      </p>

      <div className="flex items-center gap-4">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className={`flex items-center gap-2 px-5 py-2 rounded-xl border text-sm font-medium transition
            ${
              page === 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white hover:bg-gray-100 text-gray-700 border-gray-300"
            }`}
        >
          <ChevronLeft size={18} />
          Previous
        </button>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
          className={`flex items-center gap-2 px-5 py-2 rounded-xl border text-sm font-medium transition
            ${
              page === totalPages
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white hover:bg-gray-100 text-gray-700 border-gray-300"
            }`}
        >
          Next
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default PrevNextPage;
