export const LIMITS = {
  name: 80,
  email: 254,
  messageMin: 20,
  messageMax: 2000
};

const EMAIL_PATTERN = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/;

/** Strips markup and control characters so stored input is plain text. */
export function sanitizeText(value) {
  if (typeof value !== 'string') return '';
  return value
    .replace(/<[^>]*>/g, '')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .trim();
}

export function validateInquiry(values) {
  const errors = {};
  const name = sanitizeText(values.name || '');
  const email = (values.email || '').trim();
  const message = sanitizeText(values.message || '');

  if (!name) {
    errors.name = 'Please enter your full name.';
  } else if (name.length < 2) {
    errors.name = 'Name looks too short.';
  } else if (name.length > LIMITS.name) {
    errors.name = `Keep it under ${LIMITS.name} characters.`;
  }

  if (!email) {
    errors.email = 'Please enter your email address.';
  } else if (email.length > LIMITS.email || !EMAIL_PATTERN.test(email)) {
    errors.email = 'Enter a valid email, like name@domain.com.';
  }

  if (!values.subject) {
    errors.subject = 'Choose what this is about.';
  }

  if (!message) {
    errors.message = 'Please write a short message.';
  } else if (message.length < LIMITS.messageMin) {
    errors.message = `A little more detail helps — at least ${LIMITS.messageMin} characters.`;
  } else if (message.length > LIMITS.messageMax) {
    errors.message = `Keep it under ${LIMITS.messageMax} characters.`;
  }

  return errors;
}
