/**
 * Laravel Backend REST API Client
 * Configurable with VITE_API_URL or defaults to localhost Laravel server
 */
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api';

/**
 * Send contact inquiry to Laravel API
 * @param {Object} data - { name, email, subject, message }
 */
export async function sendInquiryToLaravel(data) {
  const response = await fetch(`${API_BASE_URL}/inquiries`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Failed to submit inquiry to Laravel API');
  }

  return response.json();
}

/**
 * Optional: Fetch projects from Laravel API
 */
export async function fetchProjectsFromLaravel() {
  const response = await fetch(`${API_BASE_URL}/projects`, {
    headers: {
      'Accept': 'application/json'
    }
  });
  if (!response.ok) throw new Error('Failed to fetch projects');
  return response.json();
}
