const API_BASE_URL = 'http://localhost:3001/api';

// ユーザー関連のAPI
export const userAPI = {
  // ユーザー登録
  register: async (userData: { user_id: string; email: string; password: string }) => {
    const response = await fetch(`${API_BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || '登録に失敗しました');
    }
    
    return response.json();
  },

  // ログイン
  login: async (credentials: { email: string; password: string }) => {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'ログインに失敗しました');
    }
    
    return response.json();
  },
};

// ピン関連のAPI
export const pinAPI = {
  // ピン一覧取得
  getAll: async () => {
    const response = await fetch(`${API_BASE_URL}/pins`);
    
    if (!response.ok) {
      throw new Error('ピンの取得に失敗しました');
    }
    
    return response.json();
  },

  // ピン追加
  create: async (pinData: { lat: number; lng: number; title: string; description?: string }) => {
    const response = await fetch(`${API_BASE_URL}/pins`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pinData),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'ピンの追加に失敗しました');
    }
    
    return response.json();
  },

  // ピン更新
  update: async (id: number, pinData: { lat: number; lng: number; title: string; ?: string }) => {
    const response = await fetch(`${API_BASE_URL}/pins/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pinData),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'ピンの更新に失敗しました');
    }
    
    return response.json();
  },

  // ピン削除
  delete: async (id: number) => {
    const response = await fetch(`${API_BASE_URL}/pins/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'ピンの削除に失敗しました');
    }
    
    return response.json();
  },
};