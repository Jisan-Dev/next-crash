'use client';

export default function Button() {
  return (
    <button onClick={() => console.log('Okay Clicked')} className="bg-indigo-600 hover:bg-indigo-700 transition-all px-3 py-2 text-sm rounded-md">
      Click Here
    </button>
  );
}
