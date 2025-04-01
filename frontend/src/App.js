import React, { useEffect, useState } from 'react';
import MerchantList from './components/MerchantList';
import MerchantForm from './components/MerchantForm';
import { getMerchants, createMerchant } from './services/merchantService';

const App = () => {
  const [merchants, setMerchants] = useState([]);

  // Загрузка данных при монтировании компонента
  useEffect(() => {
    fetchMerchants();
  }, []);

  // Функция для загрузки торговцев из API
  const fetchMerchants = async () => {
    try {
      const result = await getMerchants();
      setMerchants(result.data);
    } catch (error) {
      console.error('Ошибка при загрузке торговцев:', error);
    }
  };

  // Функция для добавления нового торговца
  const handleAddMerchant = async (merchant) => {
    try {
      await createMerchant(merchant);
      fetchMerchants(); // Обновляем список после добавления
    } catch (error) {
      console.error('Ошибка при добавлении торговца:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Управление торговцами</h1>

      {/* Форма для добавления нового торговца */}
      <MerchantForm onAddMerchant={handleAddMerchant} />

      {/* Список текущих торговцев */}
      <MerchantList merchants={merchants} />
    </div>
  );
};

export default App;
