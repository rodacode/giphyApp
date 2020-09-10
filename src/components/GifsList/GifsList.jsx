import React, { useState } from "react";
import mockResponse from "../../mocks/mockResponse.json";

const GifsList = () => {
  const [items, setItems] = useState(mockResponse);
  return (
    <div className="gifsList__container" data-testid="gifsList__container">
      {items.data.map((item) => (
        <div key={item.id} data-testid="gif__item">
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default GifsList;
