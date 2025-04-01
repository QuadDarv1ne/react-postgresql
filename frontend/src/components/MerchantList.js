import React from 'react';

const MerchantList = ({ merchants }) => (
  <div>
    <h2>Список торговцев</h2>
    {merchants.length > 0 ? (
      <ul>
        {merchants.map(merchant => (
          <li key={merchant.id}>{merchant.name} - {merchant.email}</li>
        ))}
      </ul>
    ) : (
      <p>Нет доступных торговцев</p>
    )}
  </div>
);

export default MerchantList;
