/**
 * Validates required environment variables for the application
 * @throws {Error} If required environment variables are missing
 */
export function validateEnv() {
  const requiredEnvVars = [
    'NEXT_PUBLIC_EMAILJS_SERVICE_ID',
    'NEXT_PUBLIC_EMAILJS_TEMPLATE_ID',
    'NEXT_PUBLIC_EMAILJS_PUBLIC_KEY',
  ];

  const missingVars = requiredEnvVars.filter(
    (varName) => !process.env[varName] || process.env[varName] === `your_${varName.toLowerCase().replace('next_public_emailjs_', '')}_here`
  );

  if (missingVars.length > 0) {
    const errorMessage = `
⚠️  Missing or invalid EmailJS environment variables:
${missingVars.map(v => `   - ${v}`).join('\n')}

Please follow these steps to set up EmailJS:

1. Create an account at https://www.emailjs.com/
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template with the following variables:
   - {{from_name}} - Sender's name
   - {{from_email}} - Sender's email
   - {{message}} - Message content
4. Copy your Service ID, Template ID, and Public Key
5. Create a .env.local file in the root directory
6. Add the following variables:
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

For more details, see the EmailJS Setup section in README.md
    `.trim();

    console.warn(errorMessage);
    return false;
  }

  return true;
}

/**
 * Gets EmailJS configuration from environment variables
 * @returns {Object} EmailJS configuration object
 */
export function getEmailJSConfig() {
  return {
    serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  };
}

/**
 * Checks if EmailJS is properly configured
 * @returns {boolean} True if EmailJS is configured
 */
export function isEmailJSConfigured() {
  const config = getEmailJSConfig();
  return !!(
    config.serviceId &&
    config.templateId &&
    config.publicKey &&
    config.serviceId !== 'your_service_id_here' &&
    config.templateId !== 'your_template_id_here' &&
    config.publicKey !== 'your_public_key_here'
  );
}
