// ===== FORMAT HELPERS =====

/**
 * Format number to Vietnamese currency format
 * @param {number|string} amount - The amount to format
 * @returns {string} Formatted currency string (e.g., "450.000 đ")
 */
export const formatCurrency = (amount) => {
    if (amount === null || amount === undefined || isNaN(amount)) {
        return '0 đ';
    }
    return Number(amount).toLocaleString('vi-VN') + ' đ';
};

/**
 * Format date from YYYY-MM-DD to DD-MM-YYYY format
 * @param {string} dateStr - Date string in YYYY-MM-DD format
 * @returns {string} Formatted date string (e.g., "02-10-2025")
 */
export const formatDate = (dateStr) => {
    if (!dateStr) {
        return '';
    }
    try {
        const [year, month, day] = dateStr.split('-');
        if (!year || !month || !day) {
            return dateStr;
        }
        return `${day}-${month}-${year}`;
    } catch (error) {
        console.error('Error formatting date:', error);
        return dateStr;
    }
};

/**
 * Format date to display in readable format (e.g., "02 Oct 2025")
 * @param {string} dateStr - Date string in YYYY-MM-DD format
 * @returns {string} Formatted readable date
 */
export const formatDateReadable = (dateStr) => {
    if (!dateStr) {
        return '';
    }
    try {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    } catch (error) {
        console.error('Error formatting date:', error);
        return dateStr;
    }
};