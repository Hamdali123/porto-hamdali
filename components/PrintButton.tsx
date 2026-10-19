"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition shadow print:hidden"
    >
      ⬇ Print / Simpan PDF
    </button>
  );
}
