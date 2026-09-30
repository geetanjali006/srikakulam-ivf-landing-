// Google Sheets Integration Utility
// Enter your published Google Apps Script Web App URL below or set VITE_GOOGLE_SCRIPT_URL in .env file

export const GOOGLE_SCRIPT_URL = (import.meta as any).env?.VITE_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbwBHVBula5IBsiHBPcwuU6BfSqcsgAVcWfPV5PnRyQ9ioXbEOn_xSXsTWL_y8RnLUxNmA/exec';

export interface FormSubmissionData {
  name: string;
  phone: string;
  slot: string;
  date: string;
  age?: string;
  formSource?: string;
}

/**
 * Sends form submission data to Google Sheets via Google Apps Script Web App URL
 */
export async function sendToGoogleSheet(data: FormSubmissionData): Promise<boolean> {
  const scriptUrl = GOOGLE_SCRIPT_URL;

  if (!scriptUrl) {
    console.log('Google Script URL is not configured yet. Form submission data:', data);
    return false;
  }

  try {
    const payload = {
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      name: data.name,
      phone: data.phone,
      age: data.age || 'N/A',
      date: data.date,
      slot: data.slot,
      formSource: data.formSource || 'General Consultation Registration'
    };

    // Send payload using no-cors mode to bypass CORS restriction in browser for Apps Script
    await fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    return true;
  } catch (error) {
    console.error('Error submitting form data to Google Sheets:', error);
    return false;
  }
}
