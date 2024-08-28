import React from 'react';

export default function CategoriesDetails({ params }) {
  console.log(params);
  if (params.features.length == 3) return <div> {params.features[2]} </div>;
  if (params.features.length == 2) return <div> {params.features[1]} </div>;
  return (
    <div>
      <h1>CategoriesDetails</h1>
      {params.features.includes('variant1') ? <h1>details for variant 1</h1> : <h1>details for other variants</h1>}
    </div>
  );
}
