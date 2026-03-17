import axios from "axios";

// Địa chỉ JSON Server
const BASE_URL = "http://localhost:3001";

/**
 * Đăng nhập: tìm user theo username và password trong db.json
 * json-server hỗ trợ lọc qua query params: /users?username=x&password=y
 * Trả về object user nếu tìm thấy, null nếu không
 */
export const loginAPI = async (username, password) => {
  const response = await axios.get(`${BASE_URL}/users`, {
    params: { username, password },
  });
  // response.data là mảng, lấy phần tử đầu tiên (hoặc null nếu rỗng)
  return response.data.length > 0 ? response.data[0] : null;
};