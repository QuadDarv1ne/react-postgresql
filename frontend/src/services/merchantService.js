import api from '../utils/api';

const getMerchants = () => api.get('/api/merchants');
const createMerchant = (merchant) => api.post('/api/merchants', merchant);
const deleteMerchant = (id) => api.delete(`/api/merchants/${id}`);

export { getMerchants, createMerchant, deleteMerchant };
