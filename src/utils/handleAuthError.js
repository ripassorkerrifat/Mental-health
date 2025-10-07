/**
 * Handles authentication errors by clearing invalid tokens and redirecting to login
 * @param {Response} response - Fetch response object
 * @param {Object} data - Response data object
 * @returns {boolean} - Returns true if auth error was detected and handled
 */
export const handleAuthError = (response, data) => {
    // Check if response indicates authentication failure
    const isAuthError = 
        !response.ok && (response.status === 401 || response.status === 403) ||
        data?.message === "jwt expired" ||
        data?.message === "jwt malformed" ||
        data?.message === "invalid token" ||
        data?.message === "Unauthorized" ||
        data?.error === "Unauthorized";

    if (isAuthError) {
        // Clear invalid token
        localStorage.removeItem("accessToken");
        
        // Store current location to redirect back after login
        const currentPath = window.location.pathname;
        if (currentPath !== "/login" && currentPath !== "/registration") {
            sessionStorage.setItem("redirectAfterLogin", currentPath);
        }
        
        // Redirect to login
        window.location.href = "/login";
        return true;
    }

    return false;
};

/**
 * Wrapper for fetch that automatically handles auth errors
 * @param {string} url - API endpoint URL
 * @param {Object} options - Fetch options
 * @returns {Promise} - Fetch promise
 */
export const authFetch = async (url, options = {}) => {
    try {
        const response = await fetch(url, options);
        const data = await response.json();

        // Check for auth errors and handle them
        if (handleAuthError(response, data)) {
            throw new Error("Authentication failed");
        }

        return {response, data};
    } catch (error) {
        console.error("API call failed:", error);
        throw error;
    }
};
